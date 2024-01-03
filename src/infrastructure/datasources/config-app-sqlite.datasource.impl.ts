import { Preference } from '../../data/sqlite';
import { PreferenceEntity } from '../../domain';
import { ConfigAppDatasource } from '../../domain/datasources/config-app.datasource';
import { PreferenceMapper } from '../mappers';

export class ConfigAppDatasourceSQLiteImpl implements ConfigAppDatasource {
    public async saveConfigApp(preference: PreferenceEntity): Promise<void> {
        try {
            await Preference.create(preference);
        } catch (error) {
            console.log(error);
            throw new Error('Save config was wrong!');
        }
    }

    public async getConfigApp(): Promise<PreferenceEntity | null> {
        try {
            const preference = await Preference.findOne();

            if (!preference) return null;

            return PreferenceMapper.entityFromObject({
                ...preference.dataValues,
            });
        } catch (error) {
            console.log(error);
            throw new Error('Get config app was wrong');
        }
    }
}
