import { InputType, Field } from "@nestjs/graphql";
import { AllowedSize } from "../entities/shirt.entity";

@InputType()
export class CreateShirtInput {
  @Field(() => AllowedSize)
  size: AllowedSize;

  @Field()
  color: string;
}
