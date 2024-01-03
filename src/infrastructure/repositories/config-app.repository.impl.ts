import { PreferenceEntity } from '../../domain';
import { ConfigAppDatasource } from '../../domain/datasources/config-app.datasource';
import { ConfigAppRepository } from '../../domain/repositories/config-app.repository';

export class ConfigAppRepositoryImpl implements ConfigAppRepository {
    constructor(private readonly configAppDatasource: ConfigAppDatasource) {}

    async saveConfigApp(preference: PreferenceEntity): Promise<void> {
        this.configAppDatasource.saveConfigApp(preference);
    }

    async getConfigApp(): Promise<PreferenceEntity | null> {
        return this.configAppDatasource.getConfigApp();
    }
}
