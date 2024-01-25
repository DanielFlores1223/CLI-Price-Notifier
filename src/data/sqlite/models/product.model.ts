import { Optional } from 'sequelize';
import {
    Model,
    Table,
    Column,
    DataType,
    AllowNull,
} from 'sequelize-typescript';
import { ProductAttributes } from '../../../config/interfaces';

interface ProductCreationAttributes extends Optional<ProductAttributes, 'id'> {}

@Table
export class Product extends Model<
    ProductAttributes,
    ProductCreationAttributes
> {
    @AllowNull(false)
    @Column(DataType.STRING(255))
    name: string;

    @AllowNull(false)
    @Column(DataType.DOUBLE)
    commonPrice: number;
}
