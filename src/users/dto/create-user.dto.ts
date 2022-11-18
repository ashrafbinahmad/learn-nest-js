import { ApiProperty } from "@nestjs/swagger";
import { IsAlphanumeric, IsNotEmpty, IsNumber, MaxLength } from "class-validator";

export class CreateUserDto {
  @IsNotEmpty()
  @IsAlphanumeric()
  @MaxLength(10)
  @ApiProperty()
  name : string;

  @ApiProperty()
  @IsNumber()
  age: number;


}