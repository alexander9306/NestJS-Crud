import { InputType, Field, ID, PartialType } from "@nestjs/graphql";
import { CreateCarInput } from "./create-car.input";

@InputType()
export class UpdateCarInput extends PartialType(CreateCarInput) {
  @Field(() => ID)
  id: string;
}
