import { Component } from '@angular/core';
import { DepartmentDetails } from '../college.model';

const departmentList: DepartmentDetails[] = [
  {
    deptCode: 'FE',
    deptName: 'Front End',
    HOD: 'Aswin',
    students: ['Ajay', 'Ebin', 'Rahul'],
  },
  {
    deptCode: 'DO',
    deptName: 'DevOps',
    HOD: 'Anees',
    students: ['Abin', 'Rahul'],
  },
];

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss'],
})
export class DepartmentComponent {
  departments = departmentList;
}
