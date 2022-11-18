import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  private products: Product[] = [
    { id: 1, name: 'Fan', slug: 'fan-1', tags: 'tag1' },
    { id: 2, name: 'Bulb', slug: 'bulb-1', tags: 'tag1' },
    { id: 3, name: 'Chair', slug: 'chair-1', tags: 'tag1' },]

  create(createProductDto: CreateProductDto) {
    return createProductDto;
  }

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    const product = this.products.find(product => product.id === id);
    if (!product) throw new NotFoundException()
    return product
  }
  
  update(id: number, updateProductDto: UpdateProductDto) {
    const product = this.products.find(product => product.id === id);
    // product = updateProductDto;
    return product;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
