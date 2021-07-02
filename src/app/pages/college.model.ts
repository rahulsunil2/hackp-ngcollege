export interface StudentDetail {
  firstName: string;
  lastName: string;
  class: string;
  address: string;
  department: string;
}

export interface DepartmentDetails {
  deptCode: string;
  deptName: string;
  HOD: string;
  students: String[];
}
