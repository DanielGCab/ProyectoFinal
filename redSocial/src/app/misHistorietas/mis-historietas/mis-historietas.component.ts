import { Component, OnInit } from '@angular/core';
import { HistorietasService } from '../mis-historietas.service'
import { Historieta } from '../historietas.model';


@Component({
  selector: 'app-mis-historietas',
  templateUrl: './mis-historietas.component.html',
  styleUrls: ['./mis-historietas.component.css']
})
export class MisHistorietasComponent implements OnInit {


  misHistorietas:  Historieta[]
  constructor(private historietas: HistorietasService) { }

  ngOnInit() {
    this.historietas.getHistorietas().subscribe( (data: Historieta[]) => this.misHistorietas = data,
                                                  error => console.log(error),
                                                  () => console.log('Listas cargadas!!')
                                                  )
  }

}
