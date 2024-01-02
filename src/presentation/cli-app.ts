import { InputCLIAdapter, OutputCliAdapter } from '../config';

export class CLIApp {
    static async start() {
        OutputCliAdapter.goodRespose({ message: 'App has started correctly' });

        const answer = await InputCLIAdapter.input({
            message: 'Whats your name',
        });

        OutputCliAdapter.goodRespose({ message: answer });
    }
}
