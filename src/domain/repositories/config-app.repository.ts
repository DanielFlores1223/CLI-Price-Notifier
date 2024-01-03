import { PreferenceEntity } from '../entities';

export abstract class ConfigAppRepository {
    abstract saveConfigApp(preference: PreferenceEntity): Promise<void>;

    abstract getConfigApp(): Promise<PreferenceEntity | null>;
}
