import { Component, OnInit } from '@angular/core';
import { HistorietasService } from '../mis-historietas.service'
import { Historieta } from '../historietas.model';
import { userModel } from 'src/app/user/user.model';
import { UserService } from 'src/app/user/user.Service';


@Component({
  selector: 'app-mis-historietas',
  templateUrl: './mis-historietas.component.html',
  styleUrls: ['./mis-historietas.component.css']
})
export class MisHistorietasComponent implements OnInit {


  misHistorietas:  Historieta[];
  user: userModel;
  constructor(private historietas: HistorietasService, private userService: UserService) { }

  ngOnInit() {
    this.historietas.getHistorietas().subscribe( (data: Historieta[]) => this.misHistorietas = data.sort().reverse(),
                                                  error => console.log(error),
                                                  () => console.log('Listas cargadas!!')
                                                  )
    this.userService.getUserById().subscribe( (data: userModel) => this.user = data,
    error => console.log(error),
    () => console.log('Listas cargadas!!')
    )
  }


}
