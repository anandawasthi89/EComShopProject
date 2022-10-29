import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

 CarouselHeight = "40vh";
 CardHeight = "40vh";

  OfferAddDetails = [{imgurl:"assets/imgs/aquaman1.gif",slidetitle:"First Title",slideDesc:"First Slide Desc"},
  {imgurl:"assets/imgs/thewitcher.png",slidetitle:"Second Title",slideDesc:"Second Slide Desc"},
  {imgurl:"assets/imgs/deathstroke3.jpg",slidetitle:"Third Title",slideDesc:"Third Slide Desc"}];

  DataList = [{imgurl:"assets/imgs/deathstroke1.jpg",slidetitle:"First Title",slideDesc:"First Slide Desc", Spec: {Spec1 : "Spec1-value",Spec2 : "Spec2-value",Spec3 : "Spec3-value"}},
  {imgurl:"assets/imgs/deathstroke2.jpg",slidetitle:"Second Title",slideDesc:"Second Slide Desc",Spec: {Spec1 : "Spec1-value",Spec2 : "Spec2-value",Spec3 : "Spec3-value"}},
  {imgurl:"assets/imgs/deathstroke3.jpg",slidetitle:"Third Title",slideDesc:"Third Slide Desc",Spec: {Spec1 : "Spec1-value",Spec2 : "Spec2-value",Spec3 : "Spec3-value"}}];


}
