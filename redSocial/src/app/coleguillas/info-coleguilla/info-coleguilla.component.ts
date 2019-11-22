import { Component, OnInit } from '@angular/core';
import { userModel } from 'src/app/user/user.model';
import { UserService } from 'src/app/user/user.Service';

@Component({
  selector: 'app-info-coleguilla',
  templateUrl: './info-coleguilla.component.html',
  styleUrls: ['./info-coleguilla.component.css']
})
export class InfoColeguillaComponent implements OnInit {

  constructor(private userService: UserService) { }

  coleguillas: userModel[];
 

  ngOnInit() {
    this.userService.getUsers().subscribe( (data: userModel[]) => this.coleguillas = data,
    error => console.log(error),
    () => console.log('Coleguillas cargados!!'))
  
    
  }

  


}
