import { omit } from 'lodash';
import { ISession, SessionDocument, SessionModel } from '../model/session.model';
import { signJwt } from '../util';
import { privateFields, IUser, UserDocument } from '../model/user.model'

export function createSession(input: Partial<ISession>): Promise<SessionDocument> {
    return SessionModel.create(input);
}

export async function findSessionById(id: string): Promise<SessionDocument | null> {
    return SessionModel.findById(id);
}


export async function signRefreshToken(input: Partial<ISession>) {
    const session = await createSession(input);
    const refreshToken = signJwt(
        {
            session: session._id,
        },
        "refreshTokenPrivateKey",
        {
            expiresIn: "1y",
        }
    );

    return refreshToken;
}

export function signAccessToken(user: UserDocument) {
    const payload = omit(user.toJSON(), privateFields);
    console.log(payload)
    const accessToken = signJwt({ ...payload }, "accessTokenPrivateKey", {
        expiresIn: "15m",
    });

    return accessToken;
}