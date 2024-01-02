import { input } from '@inquirer/prompts';

interface InputOptions {
    message: string;
}

export class InputCLIAdapter {
    static async input(options: InputOptions): Promise<string> {
        const { message } = options;
        const answer = await input({ message });
        return answer;
    }
}
