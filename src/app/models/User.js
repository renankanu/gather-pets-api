import bcrypt from 'bcryptjs';
import { DataTypes } from 'sequelize';

import db from '../../database';

const User = db.define(
  'user',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
    freezeTableName: true,
    hooks: {
      beforeCreate: async (user) => {
        if (user.password) {
          user.password = await bcrypt.hash(user.password, 8);
        }
      },
    },
    defaultScope: {
      attributes: { exclude: ['password'] },
    },
  }
);

export default User;
