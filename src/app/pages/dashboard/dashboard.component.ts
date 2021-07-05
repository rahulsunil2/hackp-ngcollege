import { Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { StudentDetail } from '../college.model';
import { CollegeService } from '../../college.service';

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
  private students: StudentDetail[] = [];

  constructor(private collegeService: CollegeService) {
    this.dataSource = new MatTableDataSource(this.students);
    this.collegeService.getStudents()
    .subscribe((studentsData) => {
        this.students = studentsData.students;
        this.dataSource = new MatTableDataSource(this.students);
    });
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
