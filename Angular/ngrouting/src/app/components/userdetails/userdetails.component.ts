import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  userID: any;
  constructor(private activatedRoute: ActivatedRoute) { 
    this.activatedRoute.params.subscribe(data => {
      this.userID = data.userid;
    })
  }

  ngOnInit(): void {
  }

}
