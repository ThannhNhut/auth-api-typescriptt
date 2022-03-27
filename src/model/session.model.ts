import { Document, model, Schema } from 'mongoose';
import { UserDocument } from './user.model';

export interface ISession {
    user: UserDocument["_id"];
    valid: boolean;
    userAgent: string;
}

export interface SessionDocument extends ISession, Document {
    createdAt: number;
    updatedAt: number;
}
const SessionSchema = new Schema<SessionDocument>({
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    userAgent: { type: String, required: true },
    valid: { type: Boolean, default: true },
    createdAt: { type: Number },
    updatedAt: { type: Number }
})

export const SessionModel = model<SessionDocument>("Session", SessionSchema);