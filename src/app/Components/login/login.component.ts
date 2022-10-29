import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() {  }


  OfferAddDetails = [{imgurl:"assets/imgs/deathstroke1.jpg",slidetitle:"First Title",slideDesc:"First Slide Desc"},
                     {imgurl:"assets/imgs/deathstroke2.jpg",slidetitle:"Second Title",slideDesc:"Second Slide Desc"},
                     {imgurl:"assets/imgs/deathstroke3.jpg",slidetitle:"Third Title",slideDesc:"Third Slide Desc"}];

  ngOnInit(): void {
  }

}
