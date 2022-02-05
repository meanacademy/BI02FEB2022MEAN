import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor() {}

  //shared student data
  getAllStudents() {
    let students = [
      { name: 'tohit', branch: 'IT' },
      { name: 'anish', branch: 'CSE' },
      { name: 'aseema', branch: 'MECH' },
      { name: 'bisal', branch: 'EnTC' },
    ];
    return students;
  }
}
