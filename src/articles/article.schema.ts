import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type ArticleDocument = HydratedDocument<Article>

@Schema()
class ArticleLinks {
  @Prop()
  pdf: string

  @Prop()
  wos: string

  @Prop()
  scopus: string

  @Prop()
  doi: string

  @Prop()
  rinc: string

  @Prop()
  vak: string

  @Prop()
  rsci: string
}

@Schema()
export class Article {
  @Prop({ unique: true })
  title: string

  @Prop()
  authors: string

  @Prop()
  abstract: string

  @Prop()
  published_journal: string

  @Prop()
  published_year: string

  @Prop()
  published_volume: string

  @Prop()
  published_number: string

  @Prop()
  pages: string

  @Prop()
  cite: string

  @Prop()
  is_russian: boolean

  @Prop()
  is_conference: boolean

  @Prop()
  links: ArticleLinks
}

export const ArticleSchema = SchemaFactory.createForClass(Article)
