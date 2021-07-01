import { getCustomRepository } from 'typeorm';
import { UsersRepository } from '../repositories/UsersRepository';
import { hash } from 'bcryptjs';

interface IUserRequest {
  password: string;
  name: string;
  email: string;
  admin?: boolean;
}

class CreateUsersService {
  async execute({ name, email, admin = false, password }: IUserRequest) {

    const usersRepository = getCustomRepository(UsersRepository);

    if (!email) {
      throw new Error("Email incorrect!");
    }

    if (!password) {
      throw new Error("Password incorrect!");
    }

    const userAlreadyExists = await usersRepository.findOne({ email });

    if (userAlreadyExists) {
      throw new Error("User already exists!");
    }

    const passwordHash = await hash(password, 8);

    const user = usersRepository.create({
      name,
      email,
      admin,
      password: passwordHash,
    });

    await usersRepository.save(user);

    return user;

  }
}

export { CreateUsersService };