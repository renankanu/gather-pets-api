module.exports = {
  HOST: '127.0.0.1',
  USER: 'postgres',
  PASSWORD: 'UwU',
  DB: 'somedb',
  dialect: 'postgres',
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
