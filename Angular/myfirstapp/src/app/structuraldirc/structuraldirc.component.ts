import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structuraldirc',
  templateUrl: './structuraldirc.component.html',
  styleUrls: ['./structuraldirc.component.css'],
})
export class StructuraldircComponent implements OnInit {
  names: string[] = ['Anish', 'Bipasa', 'Avinash', 'Aseema', 'Panda'];
  employees = [
    { empid: 1, empname: 'Anish', empsalary: 20000 },
    { empid: 2, empname: 'Bipasa', empsalary: 30000 },
    { empid: 3, empname: 'Avinash', empsalary: 40000 },
    { empid: 4, empname: 'Aseema', empsalary: 50000 },
    { empid: 5, empname: 'Panda', empsalary: 60000 },
  ];

  isGraduted: boolean = false;

  position = 5;
  constructor() {}

  ngOnInit(): void {}
}
