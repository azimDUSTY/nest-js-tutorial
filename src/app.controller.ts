import { Controller, Patch, Req} from '@nestjs/common';
import { Request } from 'express';

@Controller({})
export class AppController {
  @Patch('/:userId')
  update(@Req() req: Request) {
    return req.body;
  }
}