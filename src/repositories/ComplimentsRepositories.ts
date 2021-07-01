import { Repository, EntityRepository } from 'typeorm';
import { Compliment } from '../entities/Compliments';

@EntityRepository(Compliment)
class ComplimentsRepositoty extends Repository<Compliment>{}

export { ComplimentsRepositoty };