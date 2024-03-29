import { EntityRepository, Repository} from 'typeorm';
import { Tags } from '../entities/Tags';

@EntityRepository(Tags)
class TagsRepository extends Repository<Tags>{}

export { TagsRepository };