module.exports = {
  host: 'gatherpets.com.br',
  username: 'root',
  password: 'root',
  port: '3306',
  db: 'gather_pets_db',
  dialect: 'mysql',
  define: {
    timestamps: true,
  },
  pool: {
    max: 69,
    min: 0,
    aquire: 30000,
    idle: 10000,
  },
};
