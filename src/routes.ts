import { Router } from 'express';
import { CreateUserController } from './controllers/CreateUserController';
import { CreateTagController } from './controllers/CreateTagController';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateComplimentController } from './controllers/CreateComplimentController';

import { ListUserReceiveComplimentsController } from './controllers/ListUserReceiveComplimentsController';
import { ListUserSendComplimentsController } from './controllers/ListUserSendComplimentsController';
import { ListTagsController } from './controllers/ListTagsController';
import { ListUsersController } from './controllers/ListUsersController';

import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ensureAuthenticate } from "./middlewares/ensureAuthenticate";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();

const listUserReceiveComplimentsServive = new ListUserReceiveComplimentsController();
const listUserSendComplimentsServive = new ListUserSendComplimentsController();
const listTagsController = new ListTagsController();
const listUsersController = new ListUsersController();

router.get(
  "/tags",
  ensureAuthenticate,
  listTagsController.handle);

router.post(
  "/tags",
  ensureAuthenticate,
  ensureAdmin,
  createTagController.handle
);

router.post(
  "/compliments",
  ensureAuthenticate,
  createComplimentController.handle
);

router.get(
  "/user/compliments/send",
  ensureAuthenticate,
  listUserSendComplimentsServive.handle
);

router.get(
  "/user/compliments/receive",
  ensureAuthenticate,
  listUserReceiveComplimentsServive.handle
);

router.post(
  "/users",
  ensureAuthenticate,
  createUserController.handle);

router.get(
  "/users",
  ensureAuthenticate,
  listUsersController.handle);

router.post("/login", authenticateUserController.handle);

export { router };