import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-college',
  templateUrl: './college.component.html',
  styleUrls: ['./college.component.css'],
})
export class CollegeComponent implements OnInit {
 
  studentData: any = [];

  constructor(private studentService: StudentService) {
    this.studentData = studentService.getAllStudents();
    console.log(this.studentData);
    
  }

  ngOnInit(): void {}
}
