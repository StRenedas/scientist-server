import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common'
import { Article } from './article.schema'
import { ArticlesService } from './articles.service'
import { CreateArticleDto } from './dto/create-article.dto'

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}
  @Get()
  async findAll(): Promise<Article[]> {
    try {
      return await this.articlesService.findAll()
    } catch (e) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'Failed to get articles, please try again.',
        },
        HttpStatus.FORBIDDEN,
        { cause: e },
      )
    }
  }
  @Get(':title')
  async findOne(@Param('title') title: string): Promise<Article> {
    return await this.articlesService.findOne(title)
  }
  @Post()
  async create(@Body() createArticleDto: CreateArticleDto) {
    await this.articlesService.create(createArticleDto)
    return {
      message: 'Статья успешно создана!',
    }
    //return await this.articlesService.create(createArticleDto)
  }
  @Put()
  update(): string {
    return 'This action returns updated article'
  }
  @Delete()
  delete(): string {
    return 'This action returns deleted article'
  }
}
