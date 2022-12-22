import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/security/auth.service';

@Component({
  selector: 'app-notaria',
  templateUrl: './notaria.component.html',
  styleUrls: ['./notaria.component.scss']
})
export class NotariaComponent implements OnInit {

  constructor(
    private authService : AuthService
    ) { }

  ngOnInit(): void {
  }

  public logoutNot(){
    this.authService.logut()
  }
}
