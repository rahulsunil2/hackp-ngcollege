import { Injectable } from '@angular/core';
import { DepartmentDetails, StudentDetail } from './pages/college.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CollegeService {
  private students = [];
  private departments: DepartmentDetails[] = [];

  constructor(private http: HttpClient) {}

  public getStudents(){
    this.http
      .get<{students: any}>('http://01ove.mocklab.io/getStudents')
      .pipe(map((studentsData) => {
          return studentsData.students.map(student => {
              return {
                  firstName: student.firstName,
                  lastName: student.lastName,
                  class: student.class,
                  address: student.address,
                  department: student.department
              }
          })
      }))
      .subscribe((transformedData) => {
          this.students = transformedData;
          console.log(this.students)
      });
    return this.students;
  }
}
