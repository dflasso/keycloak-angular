import { Component, OnInit } from '@angular/core';
import { Realm } from 'src/app/security/auth.interfaces';
import { AuthService } from 'src/app/security/auth.service';

const realms : Realm[] = [
  {
    provieder: "http://201.159.220.212:8080",
    clientId: "app-web-pesnot-v1-0-0",
    displayName: "Ciudadano",
    name: "Ciudadania",
    urlCallback: "/ciudadano"
  },  
  {
    provieder: "http://201.159.220.212:8080",
    clientId: "app-web-pesnot-v1-0-0",
    displayName: "notaria",
    name: "notaria",
    urlCallback: "/notaria"
  },  
  {
    provieder: "http://201.159.220.212:8080",
    clientId: "app-web-pesnot-v1-0-0",
    displayName: "Consejo de la Judicatura",
    name: "Consejo",
    urlCallback: "/cj"
  }
]


@Component({
  selector: 'app-login-many-realms',
  templateUrl: './login-many-realms.component.html',
  styleUrls: ['./login-many-realms.component.scss']
})
export class LoginManyRealmsComponent implements OnInit {

  constructor(
    private authService : AuthService
  ) { }

  ngOnInit(): void {
  }


  loginCiudadno(){
    
    const realmCurrent = realms.find( realm => realm.urlCallback === "/ciudadano" )

    if(realmCurrent !== undefined){
      this.authService.login(realmCurrent)
    }

  }

  loginNotaria(){
    const realmCurrent = realms.find( realm => realm.urlCallback === "/notaria" )

    if(realmCurrent !== undefined){
      this.authService.login(realmCurrent)
    }
  }

  loginCj(){
    const realmCurrent = realms.find( realm => realm.urlCallback === "/cj" )

    if(realmCurrent !== undefined){
      this.authService.login(realmCurrent)
    }
  }

}
