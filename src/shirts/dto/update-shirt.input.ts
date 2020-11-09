import { InputType, Field, ID, PartialType } from "@nestjs/graphql";
import { CreateShirtInput } from "./create-shirt.input";

@InputType()
export class UpdateShirtInput extends PartialType(CreateShirtInput) {
  @Field(() => ID)
  id: string;
}
