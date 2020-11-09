import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CarsService } from "./cars.service";
import { CarsResolver } from "./cars.resolver";
import { Car } from "./entities/car.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Car])],
  providers: [CarsResolver, CarsService],
})
export class CarsModule {}
