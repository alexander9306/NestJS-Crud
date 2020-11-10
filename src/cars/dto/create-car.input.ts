import { InputType, Int, Field } from "@nestjs/graphql";

@InputType()
export class CreateCarInput {
  @Field()
  brand: string;

  @Field()
  model: string;

  @Field()
  color: string;

  @Field(() => Int)
  year: number;
}
