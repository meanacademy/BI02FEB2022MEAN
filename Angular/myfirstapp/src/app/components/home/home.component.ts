import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  appName: string = 'My First Angular Application';
  imgUrl: string = 'https://picsum.photos/200';
  blue: string = 'blueColor';
  isTrue: boolean = false;

  // color: string = 'green';

  myClasses = {
    blueColor: this.isTrue,
    redColor: !this.isTrue,
    // greenColor: !this.isTrue,
    italicFont: !this.isTrue,
  };

  myStyle = {
    'color': 'grey',
    'font-weight': '400',
    'text-transform': 'uppercase',
  };
  constructor() {}

  ngOnInit(): void { }
  
  btnClick() {
    alert('You just clicked me..!');
  }

}
