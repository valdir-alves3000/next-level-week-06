import { Response, Request } from 'express';
import { ListTagsService } from '../services/ListTagsService';

class ListTagsController {
  async handle(request: Request, response: Response) {
    const listTagsService = new ListTagsService();

    const tags = await listTagsService.axecute();

    return response.json(tags);
  }
}

export { ListTagsController };