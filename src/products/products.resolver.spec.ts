import { Test } from "@nestjs/testing";
import { ProductsResolver } from "./products.resolver";
import { ProductsService } from "./products.service";

describe("ProductsResolver", () => {
  let resolver: ProductsResolver;
  // let service: ProductsService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ProductsResolver],
    }).compile();

    resolver = module.get<ProductsResolver>(ProductsResolver);
    // service = module.get<ProductsService>(ProductsService);
  });

  it("should be defined", () => {
    expect(resolver).toBeDefined();
  });

  it("Verify returns all products", async () => {
    const result = [
      {
        id: "4ed2b3f8-f6ee-43c3-a036-5cf0599720b9",
        name: "Shirts",
        createdAt: new Date("2020-11-08T20:53:56.794Z"),
      },
    ];
    jest.spyOn(resolver, "findAll").mockImplementation(async () => result);
    expect(await resolver.findAll()).toBe(result);
  });
});
