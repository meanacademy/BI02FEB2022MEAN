import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css'],
})
export class DatabindingComponent implements OnInit {
  name: string = '';
  user = {};
  
  constructor() {}

  ngOnInit(): void {}

  setName(name: string): void {
    this.name = name;
  }

  getName() {
    alert('Name: ' + this.name);
  }
}
