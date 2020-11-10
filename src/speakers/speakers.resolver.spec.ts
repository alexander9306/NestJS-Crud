import { Test, TestingModule } from "@nestjs/testing";
import { SpeakersResolver } from "./speakers.resolver";
import { SpeakersService } from "./speakers.service";

describe("SpeakersResolver", () => {
  let resolver: SpeakersResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SpeakersResolver, { provide: SpeakersService, useValue: {} }],
    }).compile();

    resolver = module.get<SpeakersResolver>(SpeakersResolver);
  });

  it("should be defined", () => {
    expect(resolver).toBeDefined();
  });
});
