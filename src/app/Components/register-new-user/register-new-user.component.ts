import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-new-user',
  templateUrl: './register-new-user.component.html',
  styleUrls: ['./register-new-user.component.css']
})
export class RegisterNewUserComponent implements OnInit {

  constructor() { }

  RandomImage = "assets/imgs/deathstroke1.jpg";

  ngOnInit(): void {
  }

}
