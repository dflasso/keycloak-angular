import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/security/auth.service';

@Component({
  selector: 'app-cj',
  templateUrl: './cj.component.html',
  styleUrls: ['./cj.component.scss']
})
export class CjComponent implements OnInit {

  constructor(
    private authService : AuthService
  ) { }

  ngOnInit(): void {
  }

  public logoutCj(){
    this.authService.logut()
  }

}
