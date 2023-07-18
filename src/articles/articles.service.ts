import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Article } from './article.schema'
import { Model } from 'mongoose'
import { CreateArticleDto } from './dto/create-article.dto'

@Injectable()
export class ArticlesService {
  constructor(
    @InjectModel(Article.name) private articleModel: Model<Article>,
  ) {}

  async findAll(): Promise<Article[]> {
    return this.articleModel.find().exec()
  }

  async findOne(title: string): Promise<Article> {
    return this.articleModel.findOne({ title })
  }

  async create(createArticleDto: CreateArticleDto): Promise<Article> {
    return this.articleModel.create(createArticleDto)
  }
}
