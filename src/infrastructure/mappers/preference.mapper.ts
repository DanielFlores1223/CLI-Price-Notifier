import { ObjectSign } from '../../config/types';
import { PreferenceEntity } from '../../domain';

export class PreferenceMapper {
    static entityFromObject(object: ObjectSign): PreferenceEntity {
        const { email, id, localNotification, numberPhone, userName } = object;

        if (typeof id !== 'number')
            throw new Error('id is invalid in preference mapper');

        if (typeof email !== 'string' && email !== null)
            throw new Error('email is invalid in preference mapper');

        if (typeof numberPhone !== 'string' && numberPhone !== null)
            throw new Error('numberPhone is invalid in preference mapper');

        if (typeof localNotification !== 'boolean')
            throw new Error(
                'localNotification is invalid in preference mapper'
            );

        if (typeof userName !== 'string')
            throw new Error('userName is invalid in preference mapper');

        return new PreferenceEntity({
            email,
            id,
            localNotification,
            numberPhone,
            userName,
        });
    }
}
