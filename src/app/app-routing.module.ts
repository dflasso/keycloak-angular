import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CiudadanoComponent } from './pages/ciudadano/ciudadano.component';
import { CjComponent } from './pages/cj/cj.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginManyRealmsComponent } from './pages/login-many-realms/login-many-realms.component';
import { NotariaComponent } from './pages/notaria/notaria.component';

const routes: Routes = [
  {path: 'ciudadano', component: CiudadanoComponent},
  {path: 'notaria', component: NotariaComponent},
  {path: 'cj', component: CjComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login-2', component: LoginManyRealmsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
