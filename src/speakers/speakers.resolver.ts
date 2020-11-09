import { Resolver, Query, Mutation, Args, ID } from "@nestjs/graphql";
import { SpeakersService } from "./speakers.service";
import { Speaker } from "./entities/speaker.entity";
import { CreateSpeakerInput } from "./dto/create-speaker.input";
import { UpdateSpeakerInput } from "./dto/update-speaker.input";

@Resolver(() => Speaker)
export class SpeakersResolver {
  constructor(private readonly speakersService: SpeakersService) {}

  @Mutation(() => Speaker)
  createSpeaker(
    @Args("createSpeakerInput") createSpeakerInput: CreateSpeakerInput,
  ) {
    return this.speakersService.create(createSpeakerInput);
  }

  @Query(() => [Speaker], { name: "speakers" })
  findAll() {
    return this.speakersService.findAll();
  }

  @Query(() => Speaker, { name: "speaker" })
  findOne(@Args("id", { type: () => ID }) id: string) {
    return this.speakersService.findOne(id);
  }

  @Mutation(() => Speaker)
  updateSpeaker(
    @Args("updateSpeakerInput") updateSpeakerInput: UpdateSpeakerInput,
  ) {
    return this.speakersService.update(updateSpeakerInput);
  }

  @Mutation(() => Speaker)
  removeSpeaker(@Args("id", { type: () => ID }) id: string) {
    return this.speakersService.remove(id);
  }
}
