import { getCustomRepository } from 'typeorm';
import { UsersRepository } from '../repositories/UsersRepository';
import { classToPlain } from 'class-transformer';

class ListUsersService {
  async excute(user_id: string) {
    const usersRepository = getCustomRepository(UsersRepository);

    const {admin}  = await usersRepository.findOne(user_id);

    const users = await usersRepository.find();

    if(admin) {
      return users;
    }

    return classToPlain(users);
  }
}

export { ListUsersService };