import { InputType, Int, Field } from "@nestjs/graphql";

@InputType()
export class CreateSpeakerInput {
  @Field()
  brand: string;

  @Field()
  model: string;

  @Field(() => Int)
  power: number;
}
