import { Test, TestingModule } from "@nestjs/testing";
import { ShirtsResolver } from "./shirts.resolver";
import { ShirtsService } from "./shirts.service";
import { AllowedSize } from "./entities/shirt.entity";

describe("ShirtsResolver", () => {
  let resolver: ShirtsResolver;

  const mockShirtsService: Partial<ShirtsService> = {
    async create(shirt) {
      const date = new Date("2020-11-10T16:15:41.030Z");
      return {
        id: "1",
        size: shirt.size,
        color: shirt.color,
        createdAt: date,
        updatedAt: date,
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

  it("should return the created shirt with the same Size", async () => {
    const result = await resolver.createShirt({
      size: AllowedSize.SMALL,
      color: "white",
    });
    expect(result.size).toBe(AllowedSize.SMALL);
  });

  it("should return the created shirt with the same Color", async () => {
    const result = await resolver.createShirt({
      size: AllowedSize.SMALL,
      color: "white",
    });
    expect(result.color).toBe("white");
  });
});
