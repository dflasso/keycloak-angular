import { Component, OnInit } from '@angular/core';
import { UserDetails } from 'src/app/security/auth.interfaces';
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
    }

  ngOnInit(): void {
    this.authService.getKeycloakInstancesFromCache()
    .then(isInitKeycloakInstance => {
      if(isInitKeycloakInstance){
        return this.authService.loadUserDetails()
      }else {
        throw Error("Usuario no autenticado")
      }
    })
    .then((userDetails : UserDetails) => {
      console.log(userDetails)
    })
  }

  public logoutCiu(){
    this.authService.logut()
  }
}
