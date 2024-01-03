import { PreferenceEntity } from '../entities';

export abstract class ConfigAppDatasource {
    abstract saveConfigApp(preference: PreferenceEntity): Promise<void>;

    abstract getConfigApp(): Promise<PreferenceEntity | null>;
}
