import { Component } from '@angular/core';
import { DepartmentDetails } from '../college.model';
import { CollegeService } from '../../college.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss'],
})
export class DepartmentComponent {
    public departments: DepartmentDetails[] = [];
    constructor(private collegeService: CollegeService){
        this.collegeService.getDepartments()
        .subscribe((departmentsData) => {
            this.departments = departmentsData.departments;
        })
    }
}
