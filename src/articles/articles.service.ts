import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
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
    return this.articleModel.findOne({ title }, { _id: 0, __v: 0 })
  }

  async create(createArticleDto: CreateArticleDto): Promise<Article> {
    const isExist = await this.articleModel.exists({
      title: createArticleDto.title,
    })
    if (isExist) {
      throw new HttpException(
        'Статья с таким именем уже существует!',
        HttpStatus.BAD_REQUEST,
      )
    }
    return await this.articleModel.create(createArticleDto)
  }
}
