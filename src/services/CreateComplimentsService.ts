import { getCustomRepository } from 'typeorm';
import { ComplimentsRepositoty } from '../repositories/ComplimentsRepositories';
import { UsersRepository } from '../repositories/UsersRepository';
import { TagsRepository } from '../repositories/TagsRepository';

interface IComplimentRequest {
  user_sender: string;
  user_receiver: string;
  message: string;
  tag_id: string;
}

class CreateComplimentService {
  async execute({
    user_receiver,
    user_sender,
    message,
    tag_id
  }: IComplimentRequest) {
    const complimentsRepository = getCustomRepository(ComplimentsRepositoty);
    const usersRepository = getCustomRepository(UsersRepository);
    const tagsRepository = getCustomRepository(TagsRepository);

    if (user_sender === user_receiver) {
      throw new Error("Incorrect User Receiver!");
    }

    const tagExists = await tagsRepository.findOne(tag_id);

    if (!tagExists) {
      throw new Error("Tag does not exists!");
    }

    const userReceiverExists = await usersRepository.findOne(user_receiver);

    if (!userReceiverExists) {
      throw new Error("User Receiver does not exists!");
    }

    const compliment = complimentsRepository.create({
      tag_id,
      user_receiver,
      user_sender,
      message,
    });

    await complimentsRepository.save(compliment);

    return compliment;
  }
}

export { CreateComplimentService };