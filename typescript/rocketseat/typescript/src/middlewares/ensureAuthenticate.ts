import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('Token missing', 401);
  }

  const [, token] = authHeader.split(' ');

  try {
    const { sub: user_id } = verify(token, "secret") as IPayload;

    const usersRepository = new UsersRepository();
    const user = await usersRepository.findById(user_id);

    return next();
  } catch {
    throw new AppError('Invalid token!', 401);
  }
}