import { AfterViewInit, ViewChild, Component } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface StudentDetail {
  firstName: string;
  lastName: string;
  class: string;
  address: string;
  department: string;
}

const Students: StudentDetail[] = [
  {
    firstName: 'Rahul',
    lastName: 'Sunil',
    class: 'S6',
    address: 'Trivandrum',
    department: 'CSE',
  },
  {
    firstName: 'Kesia',
    lastName: 'Joies',
    class: 'S6',
    address: 'Trivandrum',
    department: 'CSE',
  },
  {
    firstName: 'Devika',
    lastName: 'Nair',
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
export class DashboardComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'firstName',
    'lastName',
    'class',
    'address',
    'department',
  ];
  dataSource = new MatTableDataSource(Students);

  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}
