import { ProductEntity } from '../entities';

export abstract class ProductDatasource {
    abstract create(product: ProductEntity): Promise<ProductEntity>;
}
