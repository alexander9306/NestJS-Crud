import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Product } from "./entities/product.entity";
import { CreateProductInput } from "./dto/create-product.input";
import { UpdateProductInput } from "./dto/update-product.input";

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {}

  create(createProductInput: CreateProductInput) {
    const product = this.productsRepository.create(createProductInput);
    return this.productsRepository.save(product);
  }

  findAll() {
    return this.productsRepository.find({ order: { updatedAt: "ASC" } });
  }

  findOne(id: string) {
    return this.productsRepository.findOneOrFail(id);
  }

  async update(updateProductInput: UpdateProductInput) {
    await this.productsRepository.save(updateProductInput);
    return this.productsRepository.findOne(updateProductInput.id);
  }

  async remove(id: string) {
    const product = await this.productsRepository.findOneOrFail(id);
    await this.productsRepository.delete(id);
    return product;
  }
}
