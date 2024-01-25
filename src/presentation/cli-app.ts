import { OutputCliAdapter } from '../config';
//import { ConfigAppDatasourceSQLiteImpl } from '../infrastructure/datasources/config-app-sqlite.datasource.impl';
//import { ConfigAppRepositoryImpl } from '../infrastructure/repositories/config-app.repository.impl';
import { /*CreatePreferenceForm,*/ CreateProductForm } from './cli/forms';

export class CLIApp {
    static async start() {
        OutputCliAdapter.goodRespose({ message: 'App has started correctly' });

        //const sqliteDataSource = new ConfigAppDatasourceSQLiteImpl();
        //const repository = new ConfigAppRepositoryImpl(sqliteDataSource);

        //await new CreatePreferenceForm(repository).generateCli();

        await new CreateProductForm().generateCli();
    }
}
