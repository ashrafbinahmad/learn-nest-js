import { ApiProperty } from "@nestjs/swagger"

export class CreateProductDto {
  @ApiProperty()
  name: string
  @ApiProperty()
  tags: string[]
  @ApiProperty()
  slug: string
}
