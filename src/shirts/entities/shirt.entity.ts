import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { ObjectType, Field, ID, registerEnumType } from "@nestjs/graphql";

export enum AllowedSize {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
}

registerEnumType(AllowedSize, {
  name: "AllowedSize",
});

@ObjectType()
@Entity()
export class Shirt {
  @PrimaryGeneratedColumn("uuid")
  @Field(() => ID)
  id: string;

  @Column({
    length: 50,
  })
  @Field(() => AllowedSize)
  size: AllowedSize;

  @Column({
    length: 50,
  })
  @Field()
  color: string;

  @CreateDateColumn({ name: "created_at" })
  @Field(() => Date)
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  @Field(() => Date)
  updatedAt: Date;
}
