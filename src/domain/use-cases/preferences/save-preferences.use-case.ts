import { PreferenceAttributes } from '../../../config/interfaces';
import { ConfigAppRepository } from '../../repositories/config-app.repository';

interface SavePreferencesUseCase {
    execute(preference: PreferenceAttributes): Promise<boolean>;
}

export class SavePreferences implements SavePreferencesUseCase {
    constructor(private configAppRepository: ConfigAppRepository) {}

    public async execute(preference: PreferenceAttributes): Promise<boolean> {
        const existePreference = await this.configAppRepository.getConfigApp();

        if (existePreference) return false;

        await this.configAppRepository.saveConfigApp(preference);
        return true;
    }
}
