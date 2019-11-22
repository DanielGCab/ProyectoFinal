import { Component, OnInit } from '@angular/core';

import { HistorietasService } from '../mis-historietas.service'
import { Historieta } from '../historietas.model';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { format } from 'url';

@Component({
  selector: 'app-comentar',
  templateUrl: './comentar.component.html',
  styleUrls: ['./comentar.component.css']
})
export class ComentarComponent implements OnInit {

  historieta: Historieta;
  misHistorietas: Historieta[];
  public formGroup: FormGroup;

  mensaje={
    contenido: ''
  }

   
  
 // dateNowMinusEigthHours = new Date(new Date(this.dateNow).getTime() - 1000 * 60 * 60 * 8)
    dateYear = new Date().getUTCFullYear().toString()
    dateMonth = new Date().getUTCMonth().toString()
    dateDay = new Date().getUTCDay().toString()

    fecha = this.dateYear.concat('/').concat(this.dateMonth).concat('/').concat(this.dateDay)
 

  constructor(
    private historietasService: HistorietasService,
    private route:ActivatedRoute,
    private formBuilder: FormBuilder) { }
   

  ngOnInit() {
    this.historietasService.getHistorietas().subscribe( (data: Historieta[]) => this.misHistorietas = data,
    error => console.log(error),
    () => console.log('Listas cargadas!!')
    )
    this.buildForm();
    console.log(this.fecha);
    
     
  }
  buildForm() {
    this.formGroup  = this.formBuilder.group({
      id:"4",
      content:'',
      publishDate:'31/1/2019',
      idUser:'1'
    });
  }

  addHistorieta(){
    let historieta= new Historieta();
    historieta.content = this.mensaje.contenido;
    historieta.publishDate= this.fecha;
    historieta.id = null;
    this.historietasService.addHistorieta(historieta).subscribe(
      () => this.misHistorietas.push(historieta)
    );
  }



}
