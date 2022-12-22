import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { OAuthModule } from 'angular-oauth2-oidc';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginCitizenComponent } from './components/btn/login-citizen/login-citizen.component';
import { LoginNotaryComponent } from './components/btn/login-notary/login-notary.component';
import { LoginCjComponent } from './components/btn/login-cj/login-cj.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginManyRealmsComponent } from './pages/login-many-realms/login-many-realms.component';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { AuthService } from './security/auth.service';
import { CiudadanoComponent } from './pages/ciudadano/ciudadano.component';
import { NotariaComponent } from './pages/notaria/notaria.component';
import { CjComponent } from './pages/cj/cj.component';
import { initializeKeycloak } from './app.init';

@NgModule({
  declarations: [
    AppComponent,
    LoginCitizenComponent,
    LoginNotaryComponent,
    LoginCjComponent,
    HomeComponent,
    LoginManyRealmsComponent,
    CiudadanoComponent,
    NotariaComponent,
    CjComponent
  ],
  imports: [
    KeycloakAngularModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    OAuthModule.forRoot({
      resourceServer: {
          allowedUrls: ['http://localhost:8080'],
          sendAccessToken: true
      }
  })
  ],
  providers: [
    AuthService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
