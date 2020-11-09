import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";
import { Car } from "./entities/car.entity";
import { CreateCarInput } from "./dto/create-car.input";
import { UpdateCarInput } from "./dto/update-car.input";

@Injectable()
export class CarsService {
  constructor(
    @InjectRepository(Car)
    private carsRepository: Repository<Car>,
  ) {}

  create(createCarInput: CreateCarInput) {
    const car = this.carsRepository.create(createCarInput);
    return this.carsRepository.save(car);
  }

  findAll() {
    return this.carsRepository.find({ order: { updatedAt: "ASC" } });
  }

  findOne(id: string) {
    return this.carsRepository.findOneOrFail(id);
  }

  async update(updateCarInput: UpdateCarInput) {
    await this.carsRepository.save(updateCarInput);
    return this.carsRepository.findOne(updateCarInput.id);
  }

  async remove(id: string) {
    const car = await this.carsRepository.findOneOrFail(id);
    await this.carsRepository.delete(id);
    return car;
  }
}
