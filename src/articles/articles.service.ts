import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Article } from './article.schema'
import { Model } from 'mongoose'

@Injectable()
export class ArticlesService {
  constructor(
    @InjectModel(Article.name) private articleModel: Model<Article>,
  ) {}

  async findAll(): Promise<Article[]> {
    return this.articleModel.find().exec()
  }
}
