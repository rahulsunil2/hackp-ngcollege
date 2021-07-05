import { Injectable } from '@angular/core';
import { DepartmentDetails, StudentDetail } from './pages/college.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CollegeService {
  constructor(private http: HttpClient) {}

  public getStudents(): Observable<any> {
    return this.http
      .get<Array<StudentDetail>>('http://01ove.mocklab.io/getStudents')
  }

  public getDepartments(): Observable<any> {
    return this.http
      .get<Array<DepartmentDetails>>('http://01ove.mocklab.io/getDepartments')
  }
}
