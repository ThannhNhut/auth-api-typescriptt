import { Document, model, Schema } from 'mongoose';
import { nanoid } from 'nanoid';
import bcryptjs from 'bcryptjs';
import config from '../config';

export interface IUser {
    email: string;
    password: string;
    name: string;
    verificationCode: string;
    passwordResetCode: string | null;
    verified: boolean;
}
export interface UserDocument extends Document, IUser {
    createdAt: number;
    updatedAt: number;
    comparePassword: (candidatePassword: string) => Promise<boolean>;
}
const UserSchema = new Schema<UserDocument>({
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    verificationCode: { type: String, default: () => nanoid() },
    passwordResetCode: { type: String, default: null },
    verified: { type: Boolean, default: false },
    createdAt: { type: Number },
    updatedAt: { type: Number },
}, {
    timestamps: true,
});

UserSchema.pre("save", function (next) {
    const user = this as UserDocument;
    if (!user.isModified("password")) return next();
    const salt = bcryptjs.genSaltSync(parseInt(config.saltWorkFactor));
    const hash = bcryptjs.hashSync(user.password, salt);
    user.password = hash;
    return next();
})
UserSchema.methods.comparePassword = function (candidatePassword: string) {
    const user = this as UserDocument;
    return bcryptjs.compare(candidatePassword, user.password).catch((e) => false);
}

export const privateFields = [
    "password",
    "__v",
    "verificationCode",
    "passwordResetCode",
    "verified",
];
export const UserModel = model<UserDocument>("User", UserSchema);