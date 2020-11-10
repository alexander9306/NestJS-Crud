import { Test, TestingModule } from "@nestjs/testing";
import { ShirtsResolver } from "./shirts.resolver";
import { ShirtsService } from "./shirts.service";
import { AllowedSize } from "./entities/shirt.entity";

describe("ShirtsResolver", () => {
  let resolver: ShirtsResolver;

  const mockShirtsService = {
    async create() {
      return {
        id: "1",
        size: AllowedSize.SMALL,
        color: "red",
        createdAt: new Date(),
        updatedAt: new Date(),
      };
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ShirtsResolver,
        { provide: ShirtsService, useValue: mockShirtsService },
      ],
    }).compile();

    resolver = module.get<ShirtsResolver>(ShirtsResolver);
  });

  it("should be defined", () => {
    expect(resolver).toBeDefined();
  });
});
