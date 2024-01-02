import { Sequelize } from 'sequelize-typescript';
import path from 'path';

export class SQLiteDB {
    private static instance: SQLiteDB;

    private constructor(public readonly connection: Sequelize) {}

    public static getConnection(): Sequelize {
        if (!SQLiteDB.instance) {
            throw new Error('There is not sqlite connection');
        }

        return SQLiteDB.instance.connection;
    }

    public static async connect(): Promise<boolean> {
        const sequelize = new Sequelize({
            database: 'app_db',
            dialect: 'sqlite',
            username: 'root',
            password: '',
            storage: this.getPathDBFile(),
            models: [__dirname + '/models'],
            logging: false,
        });

        try {
            await sequelize.authenticate();
            await sequelize.sync();

            if (SQLiteDB.instance)
                throw new Error('It already exists a sqlite connection');

            SQLiteDB.instance = new SQLiteDB(sequelize);
            return true;
        } catch (error) {
            console.log(error);
            throw new Error('Database connection was wrong!');
        }
    }

    private static getPathDBFile(): string {
        return path.join(__dirname, '../../../app_db.sqlite');
    }
}
