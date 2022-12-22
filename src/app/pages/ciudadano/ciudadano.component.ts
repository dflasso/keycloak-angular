import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/security/auth.service';

@Component({
  selector: 'app-ciudadano',
  templateUrl: './ciudadano.component.html',
  styleUrls: ['./ciudadano.component.scss']
})
export class CiudadanoComponent implements OnInit {

  constructor(
    private authService : AuthService
    ) { 
      this.authService.loadUserDetails()
    }

  ngOnInit(): void {
  }

  public logoutCiu(){
    this.authService.logut()
  }
}
