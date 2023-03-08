import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { CreateQuoteDto } from './dto/create-quote.dto';
import { UpdateQuoteDto } from './dto/update-quote.dto';
import { QuotesService } from './quotes.service';
import {
  QuoteEntity,
  QuoteWithAuthorAndCategoryEntity,
} from './entities/quote.entity';

@Controller('quotes')
export class QuotesController {
  constructor(private readonly quotesService: QuotesService) {}

  @Post()
  create(@Body() createQuoteDto: CreateQuoteDto): Promise<QuoteEntity> {
    return this.quotesService.create(createQuoteDto);
  }

  @Get()
  findAll(): Promise<QuoteEntity[]> {
    return this.quotesService.findAll();
  }

  @Get('random')
  findRandom(): Promise<QuoteEntity> {
    return this.quotesService.findRandom();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<QuoteWithAuthorAndCategoryEntity> {
    return this.quotesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateQuoteDto: UpdateQuoteDto,
  ): Promise<QuoteEntity> {
    return this.quotesService.update(+id, updateQuoteDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    await this.quotesService.remove(+id);
  }
}