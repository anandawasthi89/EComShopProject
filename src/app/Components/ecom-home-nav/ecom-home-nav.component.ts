import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ecom-home-nav',
  templateUrl: './ecom-home-nav.component.html',
  styleUrls: ['./ecom-home-nav.component.css']
})
export class ECOMHomeNavComponent implements OnInit {

isLoggedIn = false;
Username = "Guest";

  constructor() { }

  ngOnInit(): void {
  }

}
