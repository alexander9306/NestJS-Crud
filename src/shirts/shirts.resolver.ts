import { Resolver, Query, Mutation, Args, ID } from "@nestjs/graphql";
import { ShirtsService } from "./shirts.service";
import { Shirt } from "./entities/shirt.entity";
import { CreateShirtInput } from "./dto/create-shirt.input";
import { UpdateShirtInput } from "./dto/update-shirt.input";

@Resolver(() => Shirt)
export class ShirtsResolver {
  constructor(private readonly shirtsService: ShirtsService) {}

  @Mutation(() => Shirt)
  createShirt(@Args("createShirtInput") createShirtInput: CreateShirtInput) {
    return this.shirtsService.create(createShirtInput);
  }

  @Query(() => [Shirt], { name: "shirts" })
  findAll() {
    return this.shirtsService.findAll();
  }

  @Query(() => Shirt, { name: "shirt" })
  findOne(@Args("id", { type: () => ID }) id: string) {
    return this.shirtsService.findOne(id);
  }

  @Mutation(() => Shirt)
  updateShirt(@Args("updateShirtInput") updateShirtInput: UpdateShirtInput) {
    return this.shirtsService.update(updateShirtInput);
  }

  @Mutation(() => Shirt)
  removeShirt(@Args("id", { type: () => ID }) id: string) {
    return this.shirtsService.remove(id);
  }
}
