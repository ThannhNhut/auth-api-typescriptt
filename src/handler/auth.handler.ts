import { Request, Response } from "express";
import { get } from 'lodash';
import { signAccessToken, signRefreshToken, findSessionById } from '../service/session.service';
import { findUserByEmail, findUserById } from '../service/user.service';
import { createSessionInput } from '../schema/session.schema'
import { verifyJwt } from '../util';


export async function createSessionHandler(req: Request<{}, {}, createSessionInput>, res: Response) {
    const { email, password } = req.body;
    const user = await findUserByEmail(email);

    if (!user) {
        return res.status(400).json({ message: "Invalid email or password" });
    }
    // if (!user.verified) {
    //     return res.status(400).json({ message: "Please verify your email" });
    // }

    const isValid = await user.comparePassword(password);
    if (!isValid) {
        return res.status(400).json({ message: "Invalid email or password" });
    }

    // sign a access token
    const accessToken = signAccessToken(user);

    // sign a refresh token
    const refreshToken = await signRefreshToken({ user: user._id, userAgent: req.get("user-agent") || "" });

    // send the tokens

    return res.send({
        accessToken,
        refreshToken,
    });

}

export async function refreshAccessTokenHandler(req: Request, res: Response) {
    const refreshToken = get(req, "headers.x-refresh");
    console.log(refreshToken)
    const decoded = verifyJwt<{ session: string }>(
        refreshToken,
        "refreshTokenPublicKey"
    );

    if (!decoded) {
        return res.status(401).send("Could not refresh access token");
    }

    const session = await findSessionById(decoded.session);

    if (!session || !session.valid) {
        return res.status(401).send("Could not refresh access token");
    }

    const user = await findUserById(String(session.user));

    if (!user) {
        return res.status(401).send("Could not refresh access token");
    }

    const accessToken = signAccessToken(user);

    return res.send({ accessToken });
}