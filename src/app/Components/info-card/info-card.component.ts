import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.css']
})
export class InfoCardComponent implements OnInit {

  constructor() { }

  @Input()  CardDetail !: any | null;

  @Input()  StyleHeight !: any |null;

  ngOnInit(): void {
  }

}
