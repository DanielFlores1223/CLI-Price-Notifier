import { input, confirm } from '@inquirer/prompts';

interface InputOptions {
    message: string;
    validate?: (value: string) => string | boolean | Promise<string | boolean>;
}

export class InputCLIAdapter {
    static async input(options: InputOptions): Promise<string> {
        const { message, validate } = options;
        const answer = await input({ message, validate });
        return answer;
    }

    static async confirm(options: InputOptions): Promise<boolean> {
        const { message } = options;
        const answer = await confirm({ message });

        return answer;
    }
}
