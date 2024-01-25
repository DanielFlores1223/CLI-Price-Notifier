import { ProductAttributes } from '../../config/interfaces';

export class ProductEntity {
    public id?: number;
    public name: string;
    public commonPrice: number;

    constructor(attributes: ProductAttributes) {
        const { commonPrice, name, id } = attributes;

        this.id = id;
        this.commonPrice = commonPrice;
        this.name = name;
    }
}
