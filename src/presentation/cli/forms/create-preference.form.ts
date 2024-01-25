import { InputCLIAdapter, regexEmail, OutputCliAdapter } from '../../../config';
import { ConfigAppRepository } from '../../../domain/repositories/config-app.repository';
import { SavePreferences } from '../../../domain/use-cases/preferences';
const { input, confirm } = InputCLIAdapter;
const { goodRespose } = OutputCliAdapter;

export class CreatePreferenceForm {
    constructor(private readonly configAppRepository: ConfigAppRepository) {}

    public async generateCli() {
        let email: string | null = null;
        let numberPhone: string | null = null;

        const userName = await input({
            message: "What's your name? ",
        });

        const notifyByEmail = await confirm({
            message: 'Do you want to recieve notifications by email? ',
        });

        if (notifyByEmail)
            email = await input({
                message: "What's your email? ",
                validate: (v) => regexEmail.test(v),
            });

        const notifyBySMS = await confirm({
            message: 'Do you want to recieve notifications by sms? ',
        });

        if (notifyBySMS)
            numberPhone = await input({
                message: "What's your phone number? ",
            });

        const localNotification = await confirm({
            message: 'Do you want recive local notifications? ',
        });

        const created = await new SavePreferences(
            this.configAppRepository
        ).execute({
            userName,
            email,
            numberPhone,
            localNotification,
        });

        if (!created)
            goodRespose({
                message: 'It can not create a preference, because there is one',
            });
    }
}
