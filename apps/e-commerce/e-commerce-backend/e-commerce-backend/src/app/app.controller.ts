import { Controller, Get, Param } from '@nestjs/common';

import { AppService } from './app.service';

@Controller("/product")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("productList")
  getData() {
    return this.appService.getData();
  }

  @Get(':id')
  getDataById(@Param('id') id: number) {
    return this.appService.getDataById(id);
  }
}
