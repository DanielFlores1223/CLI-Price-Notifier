import { ProductEntity } from '../entities';

export abstract class ProductRepository {
    abstract create(product: ProductEntity): Promise<ProductEntity>;
}
