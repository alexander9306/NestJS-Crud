import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Speaker } from "./entities/speaker.entity";
import { CreateSpeakerInput } from "./dto/create-speaker.input";
import { UpdateSpeakerInput } from "./dto/update-speaker.input";

@Injectable()
export class SpeakersService {
  constructor(
    @InjectRepository(Speaker)
    private speakersRepository: Repository<Speaker>,
  ) {}

  create(createSpeakerInput: CreateSpeakerInput) {
    const speaker = this.speakersRepository.create(createSpeakerInput);
    return this.speakersRepository.save(speaker);
  }

  findAll() {
    return this.speakersRepository.find({ order: { updatedAt: "ASC" } });
  }

  findOne(id: string) {
    return this.speakersRepository.findOneOrFail(id);
  }

  async update(updateSpeakerInput: UpdateSpeakerInput) {
    await this.speakersRepository.save(updateSpeakerInput);
    return this.speakersRepository.findOne(updateSpeakerInput.id);
  }

  async remove(id: string) {
    const speaker = await this.speakersRepository.findOneOrFail(id);
    await this.speakersRepository.delete(id);
    return speaker;
  }
}
