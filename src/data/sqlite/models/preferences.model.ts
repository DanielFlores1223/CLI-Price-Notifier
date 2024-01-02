import {
    DataType,
    Model,
    Table,
    Column,
    Unique,
    IsEmail,
    Default,
    AllowNull,
} from 'sequelize-typescript';
import { PreferenceAttributes } from '../../../config/interfaces';
import { Optional } from 'sequelize';

interface PreferenceCreationAttributes
    extends Optional<PreferenceAttributes, 'id'> {}

@Table
export class Preference extends Model<
    PreferenceAttributes,
    PreferenceCreationAttributes
> {
    @Unique
    @Column(DataType.STRING(255))
    userName: string;

    @Unique
    @IsEmail
    @AllowNull
    @Column(DataType.STRING(255))
    email: string | null;

    // TODO: Add a validation for the string format
    @Unique
    @AllowNull
    @Column(DataType.STRING(255))
    numberPhone: string | null;

    @Default(false)
    @Column(DataType.BOOLEAN)
    localNotification: boolean;
}
