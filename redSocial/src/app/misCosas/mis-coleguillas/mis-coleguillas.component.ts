import { Component, OnInit, Input } from '@angular/core';
import { userModel } from 'src/app/user/user.model';
import { UserService } from 'src/app/user/user.Service';

@Component({
  selector: 'app-mis-coleguillas',
  templateUrl: './mis-coleguillas.component.html',
  styleUrls: ['./mis-coleguillas.component.css']
})
export class MisColeguillasComponent implements OnInit {

  constructor(private userService: UserService) { }

 users: userModel[];

 



  ngOnInit() {
    this.userService.getUsers().subscribe( (data: userModel[]) => this.users = data,
              error => console.log(error),
              () => console.log('Usuarios cargados!!')
              
    )
    
   

  }

  selectedShow(user : userModel){
    user.selected = true;
    this.userService
  }
  selectedUser(user: userModel,id:string){
    user.selected=true;
    this.userService.selectedUser(user,id).subscribe()
  }
  unSelectedUser(user: userModel,id:string){
    user.selected=false;
    this.userService.selectedUser(user,id).subscribe()
  }
  
  unSelectedShow(user: userModel){
    user.selected= false;
  }
  solicitarAm(user: userModel, id: string){
    user.friend = true;
    this.userService.addAmistad(user,id).subscribe()
  }

  cancelarAm(user: userModel, id: string){
    user.friend = false;
    this.userService.addAmistad(user,id).subscribe()
  }



}
