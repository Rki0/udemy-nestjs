import { Controller, Get, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    return 'hello message';
  }

  @Post()
  createMessage() {}

  @Get('/:id')
  getMessage() {}
}
