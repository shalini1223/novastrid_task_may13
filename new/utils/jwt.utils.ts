import jwt from 'jsonwebtoken';

export const genereteToken = (payload: object) {
    return jwt.sign(payload, process.env.JWT_TOKEN as string, {
        expiresIn: '7d'
    })
};