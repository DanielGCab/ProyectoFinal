import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HistorietasService } from './misHistorietas/mis-historietas.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { routing } from 'src/app-routes';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { ComentarComponent } from './misHistorietas/comentar/comentar.component';
import { MisHistorietasComponent } from './misHistorietas/mis-historietas/mis-historietas.component';
import { MisCosasComponent } from './misCosas/mis-cosas/mis-cosas.component';
import { DatosPersonalesComponent } from './misCosas/datos-personales/datos-personales.component';
import { MisColeguillasComponent } from './misCosas/mis-coleguillas/mis-coleguillas.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './user/user.Service';
import { ColeguillasComponent } from './coleguillas/coleguillas.component';
import { BuscadorComponent } from './coleguillas/buscador/buscador.component';
import { InfoColeguillaComponent } from './coleguillas/info-coleguilla/info-coleguilla.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    CabeceraComponent,
    ComentarComponent,
    MisHistorietasComponent,
    MisCosasComponent,
    DatosPersonalesComponent,
    MisColeguillasComponent,
    ColeguillasComponent,
    BuscadorComponent,
    InfoColeguillaComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    routing,
    FormsModule,
    ReactiveFormsModule
   
  ],
  providers: [HistorietasService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
