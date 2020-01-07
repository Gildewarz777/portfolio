import { Module } from '@nestjs/common'
import { AppController } from 'src/app.controller'
import { AppService } from 'src/app.service'
import { EducationController } from 'src/education/education.controller'
import { ExperiencesController } from 'src/experiences/experiences.controller'

@Module({
  imports: [],
  controllers: [AppController, EducationController, ExperiencesController],
  providers: [AppService]
})
export class AppModule {}
