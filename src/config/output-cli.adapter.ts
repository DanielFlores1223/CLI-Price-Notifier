interface OutputOptions {
    message: string;
}

export class OutputCliAdapter {
    static goodRespose(options: OutputOptions) {
        const { message } = options;
        console.log(message);
    }
}
