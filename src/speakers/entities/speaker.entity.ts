import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { ObjectType, Field, ID, Int } from "@nestjs/graphql";

@ObjectType()
@Entity()
export class Speaker {
  @PrimaryGeneratedColumn("uuid")
  @Field(() => ID)
  id: string;

  @Column({
    length: 50,
  })
  @Field()
  brand: string;

  @Column({
    length: 80,
  })
  @Field()
  model: string;

  @Column("int")
  @Field(() => Int)
  power: number;

  @CreateDateColumn({ name: "created_at" })
  @Field(() => Date)
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  @Field(() => Date)
  updatedAt: Date;
}
