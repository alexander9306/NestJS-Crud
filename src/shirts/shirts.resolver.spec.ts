import { Test, TestingModule } from "@nestjs/testing";
import { ShirtsResolver } from "./shirts.resolver";
import { ShirtsService } from "./shirts.service";

describe("ShirtsResolver", () => {
  let resolver: ShirtsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShirtsResolver, ShirtsService],
    }).compile();

    resolver = module.get<ShirtsResolver>(ShirtsResolver);
  });

  it("should be defined", () => {
    expect(resolver).toBeDefined();
  });
});
