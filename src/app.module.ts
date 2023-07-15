import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'
import { ArticlesModule } from './articles/articles.module'
import { ScientistController } from './scientist/scientist.controller'
import { ScientistService } from './scientist/scientist.service'
import { ScientistModule } from './scientist/scientist.module'

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URI, { dbName: 'ScientistDB' }),
    ArticlesModule,
    ScientistModule,
  ],
  controllers: [ScientistController],
  providers: [ScientistService],
})
export class AppModule {}
