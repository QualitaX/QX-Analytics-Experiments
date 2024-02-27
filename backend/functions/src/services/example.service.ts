import ExampleProvider from '@providers/example';

/**
 * Example service
 *
 * @class ExampleService
 */
class ExampleService {
    provider: ExampleProvider;

    constructor() {
        this.provider = new ExampleProvider();
    }

    /**
     * Write service logic here
     */
}

export default ExampleService;
