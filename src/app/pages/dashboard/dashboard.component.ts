import { Component } from '@angular/core';
import { Sort } from '@angular/material/sort';

export interface StudentDetail {
  firstName: string;
  lastName: string;
  class: string;
  address: string;
  department: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  students: StudentDetail[] = [
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
  ];
  sortedData: StudentDetail[];
  search: string;

  constructor() {
    this.sortedData = this.students.slice();
    this.search = '';
  }

  sortData(sort: Sort) {
    const data = this.students.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'firstName':
          return compare(a.firstName, b.firstName, isAsc);
        case 'lastName':
          return compare(a.lastName, b.lastName, isAsc);
        default:
          return 0;
      }
    });
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
