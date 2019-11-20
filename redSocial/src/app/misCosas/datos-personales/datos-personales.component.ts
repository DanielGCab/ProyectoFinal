import { Component, OnInit } from '@angular/core';
import { userModel } from 'src/app/user/user.model';
import { UserService } from 'src/app/user/user.Service';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.css']
})
export class DatosPersonalesComponent implements OnInit {

  constructor(private userService: UserService) { }

  user: userModel;

  ngOnInit() {
    this.userService.getUserById().subscribe( (data: userModel) => this.user = data,
    error => console.log(error),
    () => console.log('Yo editado cargado!!')
    )
  }

  editUser(){
    this.userService.editUser(this.user).subscribe()
  }

}
