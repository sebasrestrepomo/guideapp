import { Module } from '@nestjs/common';
import { CityController } from './city/controller/CityController';
import { DepartmentController } from './department/controller/DepartmentController';
import { SchoolController } from './school/controller/SchoolController';
import { QuestionController } from './question/controller/QuestionController';
import { SQLDepartmentRepository } from './department/repository/SQLDepartmentRepository';
import { SQLCityRepository } from './city/repository/SQLCityRepository';
import { SQLSchoolRepository } from './school/repository/SQLSchoolRepository';
import { SQLQuestionRepository } from './question/repository/SQLQuestionRepository';
import { CityService } from './city/service/CityService';
import { DepartmentService } from './department/service/DeparmentService';
import { SchoolService } from './school/service/SchoolService';
import { QuestionService } from './question/service/QuestionService';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as ormconfig from './ormconfig';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...ormconfig,
    }),
  ],
  controllers: [DepartmentController, CityController, SchoolController, QuestionController],
  providers: [
    { provide: 'DepartmentRepository', useClass: SQLDepartmentRepository },
    { provide: 'CityRepository', useClass: SQLCityRepository },
    { provide: 'SchoolRepository', useClass: SQLSchoolRepository },
    { provide: 'QuestionRepository', useClass: SQLQuestionRepository },
    DepartmentService,
    CityService,
    SchoolService,
    QuestionService,
  ],
  exports: [],
})
export class AppModule {}
