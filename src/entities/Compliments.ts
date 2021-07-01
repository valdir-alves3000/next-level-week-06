import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  JoinColumn,
  ManyToOne,
} from "typeorm";
import { v4 as uuid } from "uuid";

import { Tags } from "./Tags";
import { Users } from "./Users";

@Entity("compliments")
class Compliment {

  @PrimaryColumn()
  readonly id: string;

  @Column()
  user_sender: string;

  @JoinColumn({ name: "user_sender" })
  @ManyToOne(() => Users)
  userSender: Users;

  @Column()
  user_receiver: string;

  @JoinColumn({ name: "user_receiver" })
  @ManyToOne(() => Users)
  userReceiver: Users;

  @Column()
  tag_id: string;

  @JoinColumn({ name: "tag_id" })
  @ManyToOne(() => Tags)
  tag: Tags;

  @Column()
  message: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Compliment };