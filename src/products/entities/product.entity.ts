import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { ObjectType, Field, ID } from "@nestjs/graphql";
import { Car } from "../../cars/entities/car.entity";
import { Shirt } from "../../shirts/entities/shirt.entity";
import { Speaker } from "../../speakers/entities/speaker.entity";

@ObjectType()
@Entity()
export class Product {
  @PrimaryGeneratedColumn("uuid")
  @Field(() => ID)
  id: string;

  @Column({
    length: 50,
  })
  @Field()
  name: string;

  @CreateDateColumn({ name: "created_at" })
  @Field(() => Date)
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  @Field(() => Date)
  updatedAt: Date;
}
