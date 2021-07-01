import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

interface IPayload {
  sub: string;
}

export function ensureAuthenticate(
  request: Request,
  response: Response,
  next: NextFunction,
) {

  // Receber o token
  const authToken = request.headers.authorization;

  
  // Validar se o token está preenchido
  if (!authToken) {
    return response.status(401).end();
  }

  const [, token] = authToken.split(" ");
  
  // Validar se o token  é valido
  const { sub } = verify(
    token, 
    process.env.HASH
    ) as IPayload;

    request.user_id = sub;

  return next();


}