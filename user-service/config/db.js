const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || undefined,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : undefined,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  ssl: process.env.DB_SSL === 'true' ? { rejectUnauthorized: false } : false,
});

// optional basic error handling
pool.on('error', (err) => {
  console.error('Unexpected idle client error', err);
  // do not crash in production automatically; decide policy
});

// quick connection test (logs success or error)
async function testConnection() {
  const client = await pool.connect();
  try {
    const res = await client.query('SELECT NOW() as now');
    return res.rows[0].now;
  } finally {
    client.release();
  }
}

(async () => {
  try {
    const now = await testConnection();
    console.log('Postgres connected, now =', now);
  } catch (err) {
    console.error('Postgres connection error:', err.message);
  }
})();

// helper export
module.exports = {
  query: (text, params) => pool.query(text, params),
  pool,
  testConnection,
};