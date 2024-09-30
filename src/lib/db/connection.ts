import Database from 'better-sqlite3';
import path from 'path';

export const db = new Database(path.join(process.cwd(), 'src/lib/db/database.db'), { verbose: console.log });