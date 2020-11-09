import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { ShirtsService } from "./shirts.service";
import { ShirtsResolver } from "./shirts.resolver";
import { Shirt } from "./entities/shirt.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Shirt])],
  providers: [ShirtsResolver, ShirtsService],
})
export class ShirtsModule {}
