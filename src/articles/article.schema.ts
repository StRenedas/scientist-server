import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type ArticleDocument = HydratedDocument<Article>

@Schema()
export class Article {
  @Prop()
  title: string

  @Prop()
  authors: string

  @Prop()
  abstract: string

  @Prop()
  published_journal: string

  @Prop()
  published_year: number

  @Prop()
  published_volume: number

  @Prop()
  published_number: number

  @Prop()
  pages: string

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

  @Prop()
  cite: string

  @Prop()
  is_russian: boolean

  @Prop()
  is_conference: boolean
}

export const ArticleSchema = SchemaFactory.createForClass(Article)
