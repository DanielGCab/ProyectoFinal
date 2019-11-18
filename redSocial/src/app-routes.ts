import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AppComponent } from './app/app.component';
import { UserComponent } from './app/user/user.component';
import { CabeceraComponent } from './app/cabecera/cabecera.component';
import { MisCosasComponent } from './app/misCosas/mis-cosas/mis-cosas.component';
import { ComentarComponent } from './app/misHistorietas/comentar/comentar.component';




const routes: Routes=[
    {path: '', component: ComentarComponent},
    {path: 'home', component: ComentarComponent},
    {path: 'cosas', component: MisCosasComponent}
  ];
  
  export const routing: ModuleWithProviders = RouterModule.forRoot(routes);