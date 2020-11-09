import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Shirt } from "./entities/shirt.entity";
import { CreateShirtInput } from "./dto/create-shirt.input";
import { UpdateShirtInput } from "./dto/update-shirt.input";

@Injectable()
export class ShirtsService {
  constructor(
    @InjectRepository(Shirt)
    private shirtsRepository: Repository<Shirt>,
  ) {}

  create(createProductInput: CreateShirtInput) {
    const shirt = this.shirtsRepository.create(createProductInput);
    return this.shirtsRepository.save(shirt);
  }

  findAll() {
    return this.shirtsRepository.find({ order: { updatedAt: "ASC" } });
  }

  findOne(id: string) {
    return this.shirtsRepository.findOneOrFail(id);
  }

  async update(updateShirtInput: UpdateShirtInput) {
    await this.shirtsRepository.save(updateShirtInput);
    return this.shirtsRepository.findOne(updateShirtInput.id);
  }

  async remove(id: string) {
    const shirt = await this.shirtsRepository.findOneOrFail(id);
    await this.shirtsRepository.delete(id);
    return shirt;
  }
}
