import { UserModel, IUser, UserDocument } from '../model/user.model';

export function createUser(input: Partial<IUser>): Promise<UserDocument> {
    return UserModel.create(input);
}
export function findUserById(id: string) {
    return UserModel.findById(id);
}
export function findUserByEmail(email: string) {
    return UserModel.findOne({ email });
}

