import { InputCLIAdapter, OutputCliAdapter } from '../../../config';
const { input } = InputCLIAdapter;
const { goodRespose } = OutputCliAdapter;

export class CreateProductForm {
    public async generateCli() {
        const name = await InputCLIAdapter.input({ message: 'Product name: ' });

        const commonPrice = await input({
            message: 'Common price: ',
            validate: (value) => !isNaN(+value),
        });

        goodRespose({ message: name + commonPrice });
    }
}
