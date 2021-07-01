import { Request, Response } from 'express';
import { ListUserReceiveComplimentsService } from '../services/ListUserReceiveComplimentsService';

class ListUserReceiveComplimentsController {
  async handle(request: Request, response: Response){
    const { user_id } = request;

    const listUserReceiveComplimentsServive = new ListUserReceiveComplimentsService();

    const compliments = await listUserReceiveComplimentsServive.execute(user_id);

    return response.json(compliments);
  }
}

export { ListUserReceiveComplimentsController };