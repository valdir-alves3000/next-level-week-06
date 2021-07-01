import { Request, Response } from 'express';
import { CreateTagsService } from '../services/CreateTagService';

class CreateTagController {


async handle(request: Request, response: Response) {
  const { name } = request.body;

  const createTagService = new CreateTagsService();

  const tag = await createTagService.execute(name);

  return response.json(tag);
}
}

export { CreateTagController };