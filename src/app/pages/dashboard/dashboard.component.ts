import { Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { StudentDetail } from '../college.model';
import { CollegeService } from 'src/app/college.service';

const studentsTemp: StudentDetail[] = [
  {
    firstName: 'Rahul',
    lastName: 'Sunil',
    class: 'S6',
    address: 'Trivandrum',
    department: 'CSE',
  },
  {
    firstName: 'Ajay',
    lastName: 'John',
    class: 'S6',
    address: 'Trivandrum',
    department: 'CSE',
  },
  {
    firstName: 'Abin',
    lastName: 'Joseph',
    class: 'S6',
    address: 'Trivandrum',
    department: 'CSE',
  },
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  public displayedColumns: string[] = [
    'firstName',
    'lastName',
    'class',
    'address',
    'department',
  ];
  public dataSource: MatTableDataSource<StudentDetail>;

  constructor(public collegeService: CollegeService) {
    this.dataSource = new MatTableDataSource(studentsTemp);
    console.log(this.collegeService.getStudents());
  }

  public applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  @ViewChild(MatSort) sort!: MatSort;
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}
