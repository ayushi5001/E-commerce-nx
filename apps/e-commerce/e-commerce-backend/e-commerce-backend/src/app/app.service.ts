import { Injectable } from '@nestjs/common';
import { productList } from './productList';

@Injectable()
export class AppService {

  getData(): { data: object } {
    return { data: productList};
  }


  getDataById(id): { data: object } {
    const product = productList.find(x=>x['productId'] == id )
    return { data: product};
  }
}
