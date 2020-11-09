import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { Speaker } from "./entities/speaker.entity";
import { SpeakersService } from "./speakers.service";
import { SpeakersResolver } from "./speakers.resolver";

@Module({
  imports: [TypeOrmModule.forFeature([Speaker])],
  providers: [SpeakersResolver, SpeakersService],
})
export class SpeakersModule {}
