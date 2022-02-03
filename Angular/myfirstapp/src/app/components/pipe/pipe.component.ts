import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css'],
})
export class PipeComponent implements OnInit {
  name: string = 'Mahesh Bodhgire';
  currentDate = new Date();
  user = {
    name: 'Mahesh Bodhgire',
    address: 'Pune',
    contact: 9999999888,
  };
  price: number = 100;
  num: number = 123.45678;
  

  constructor() {
    console.log('I am from constructor');
    
  }

  ngOnInit(): void {
    console.log('I am from ngoninit method');
    
  }
}
