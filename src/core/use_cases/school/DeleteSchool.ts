import { Injectable, Inject } from '@nestjs/common';
import { SchoolNotFound } from 'src/core/domain/school/SchoolNotFound';
import { SchoolRepository } from 'src/core/domain/school/SchoolRepository';

@Injectable()
export class DeleteSchool {
  constructor(
    @Inject('SchoolRepository') private schoolRepository: SchoolRepository,
  ) {}

  async execute(schoolId: number): Promise<void> {
    const school = await this.schoolRepository.findById(schoolId);
    if (school == undefined) {
      throw new SchoolNotFound();
    }
    this.schoolRepository.delete(schoolId);
  }
}
