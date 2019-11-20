import { Component, OnInit } from '@angular/core';
import { userModel } from './user.model';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from './user.Service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute,private userService: UserService) { }

  user: userModel;
  
  ngOnInit() {
    this.userService.getUserById().subscribe( (data: userModel) => this.user = data,
    error => console.log(error),
    () => console.log('Yo cargado!!')
    )

  }




}
