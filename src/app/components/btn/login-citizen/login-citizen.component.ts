import { Component, OnInit } from '@angular/core';
import { NullValidationHandler, OAuthService } from 'angular-oauth2-oidc';

import { authConfig } from '../../../security/session.config'

@Component({
  selector: 'app-login-citizen',
  templateUrl: './login-citizen.component.html',
  styleUrls: ['./login-citizen.component.scss']
})
export class LoginCitizenComponent implements OnInit {

  constructor(private oauthService: OAuthService) {
    this.configure();
   }

  ngOnInit(): void {
  }

  configure(): void {
    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new NullValidationHandler();
    this.oauthService.setupAutomaticSilentRefresh();
    this.oauthService.loadDiscoveryDocument().then(
      () => this.oauthService.tryLogin()
    )
  }

  onClickLogin(){
    this.oauthService.initImplicitFlowInternal();
  }

  onClickLogout(){
    this.oauthService.logOut();
  }
}
