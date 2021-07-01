import { getCustomRepository } from 'typeorm';
import { ComplimentsRepositoty } from '../repositories/ComplimentsRepositories'


class ListUserSendComplimentsService {
  async execute(user_id: string) {
    const complimentsRepository = getCustomRepository(ComplimentsRepositoty)

    const compliments = await complimentsRepository.find({
      where: {
        user_sender: user_id
      },
    });

    return compliments;
  }
}

export { ListUserSendComplimentsService };