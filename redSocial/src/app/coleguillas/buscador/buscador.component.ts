import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user/user.Service';
import { userModel } from 'src/app/user/user.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  cadena= {
    nombre:'',
  }
  colega: userModel[];
  colegaVer: userModel;

  
  constructor(private userService: UserService) { }

  ngOnInit() {

    

   
  }


  getColega(nombre: string){

    this.userService.getUserByName(nombre).subscribe( (data: userModel[]) => this.colega = data,
    error => console.log(error),
    () => console.log(this.colega)
    )
    
    
  }

  solicitarAm(user: userModel, id: string){
    user.friend = true;
    user.selected=false;
    this.userService.addAmistad(user,id).subscribe()
  }

  cancelarAm(user: userModel, id: string){
    user.friend = false;
    user.selected=false;
    this.userService.addAmistad(user,id).subscribe()
  }





}
