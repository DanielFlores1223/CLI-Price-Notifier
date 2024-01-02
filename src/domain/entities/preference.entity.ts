import { PreferenceAttributes } from '../../config/interfaces';

export class PreferenceEntity {
    public id: number;
    public userName: string;
    public email: string | null;
    public numberPhone: string | null;
    public localNotification: boolean;

    constructor(attributes: PreferenceAttributes) {
        const { id, email, localNotification, numberPhone, userName } =
            attributes;

        this.id = id;
        this.userName = userName;
        this.email = email;
        this.localNotification = localNotification;
        this.numberPhone = numberPhone;
    }
}
