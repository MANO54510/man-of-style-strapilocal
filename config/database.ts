// path: ./config/database.js
export default ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      connectionString: env('DATABASE_URL'),
      // si tu veux forcer le SSL (Railway l'exige parfois) :
      ssl: env.bool('DATABASE_SSL', false) && { rejectUnauthorized: false },
    },
    debug: false,
  },
});
