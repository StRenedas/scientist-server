import { Controller, Delete, Get, Patch, Post } from '@nestjs/common'
import { Article } from './article.schema'
import { ArticlesService } from './articles.service'

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}
  @Get()
  async findAll(): Promise<Article[]> {
    return this.articlesService.findAll()
  }
  @Get()
  findOne(): string {
    return 'This action returns one article'
  }
  @Post()
  createOne(): string {
    return 'This action returns created article'
  }
  @Patch()
  updateOne(): string {
    return 'This action returns updated article'
  }
  @Delete()
  deleteOne(): string {
    return 'This action returns deleted article'
  }
}
