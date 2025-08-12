import { Pool } from 'pg';

const db = new Pool({
    connectionString: 'postgres://postgres:Sohibjon0608@localhost:5432/koajs',
});

db.on('error', (err) => {
    console.log('Error on connecting to the database:', err);
    process.exit(1);
});

export default db;
