import { CLIApp } from './presentation/cli-app';
import { SQLiteDB } from './data/sqlite';

(() => {
    main();
})();

async function main() {
    await SQLiteDB.connect();
    CLIApp.start();
}
