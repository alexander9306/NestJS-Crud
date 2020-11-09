import { InputType, Field, ID, PartialType } from "@nestjs/graphql";
import { CreateSpeakerInput } from "./create-speaker.input";

@InputType()
export class UpdateSpeakerInput extends PartialType(CreateSpeakerInput) {
  @Field(() => ID)
  id: string;
}
