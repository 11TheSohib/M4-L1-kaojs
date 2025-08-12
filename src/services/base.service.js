import db from '../db/index.js';

export class BaseService {
    constructor(collection) {
        this.collection = collection;
    }

    async create(body) {
        try {
            const columns = Object.keys(body).join(', ');
            const rows = Object.values(body);
            const values = rows.map((_, i) => `$${i + 1}`).join(', ');

            const query = `INSERT INTO ${this.collection} (${columns}) VALUES (${values}) RETURNING *`;

            const result = await db.query(query, rows);
            return result.rows[0];
        } catch (error) {
            console.error('Create error:', error);
            throw error;
        }
    }

    async findAll() {
        try {
            const result = await db.query(
                `SELECT * FROM ${this.collection} ORDER BY id ASC`
            );
            return result.rows;
        } catch (error) {
            console.error('FindAll error:', error);
            throw error;
        }
    }

    async findById(id) {
        try {
            const result = await db.query(
                `SELECT * FROM ${this.collection} WHERE id = $1`,
                [id]
            );
            return result.rows[0];
        } catch (error) {
            console.error('FindById error:', error);
            throw error;
        }
    }

    async findOne(key, value) {
        try {
            const result = await db.query(
                `SELECT * FROM ${this.collection} WHERE ${key} = $1`,
                [value]
            );
            return result.rows[0];
        } catch (error) {
            console.error('FindOne error:', error);
            throw error;
        }
    }

    async update(id, body) {
        try {
            let query = `UPDATE ${this.collection} SET `;
            const keys = Object.keys(body);
            const rows = Object.values(body);

            for (let i = 0; i < keys.length; i++) {
                if (i === keys.length - 1) {
                    query += `${keys[i]} = $${i + 1} `;
                } else {
                    query += `${keys[i]} = $${i + 1}, `;
                }
            }

            query += `WHERE id = $${keys.length + 1} RETURNING *`;

            const allParams = [...rows, id];

            const result = await db.query(query, allParams);
            return result.rows[0];
        } catch (error) {
            console.error('Update error:', error);
            throw error;
        }
    }

    async delete(id) {
        try {
            const result = await db.query(
                `DELETE FROM ${this.collection} WHERE id = $1 RETURNING *`,
                [id]
            );
            return result.rows[0];
        } catch (error) {
            console.error('Delete error:', error);
            throw error;
        }
    }
}
