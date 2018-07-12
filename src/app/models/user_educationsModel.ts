export class user_educations {
        user_id:number;
        edu_course_type_id: number;
        edu_course_id: number;
        edu_specialization_id: number;
        institute_name: string;
        course_mode: string;
        grade: string;
        passing_year: number;
        edu_course_types: edu_course_typeModel[];
        edu_courses: edu_coursesModel[];
        edu_specializations: edu_specializationModel[]
  }
export class edu_course_typeModel{
        name: string;
        status: number
      }
export class edu_coursesModel{
  edu_course_type_id: number;
        name: string;
        status: number
}
export class edu_specializationModel{
  edu_course_id:number;
  name: string;
  status: number
}