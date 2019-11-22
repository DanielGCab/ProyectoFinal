
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http'
import { Observable } from 'rxjs';
import { userModel } from '../user/user.model';

const httpOptions={
        headers: new HttpHeaders({
            'Content-type': 'application/json',
            'Authorization': 'my-auth-token'
        })
}
const URL_BASE = 'http://localhost:3000';

@Injectable()

export class UserService{
    URL_BASE: string ='http://localhost:3000';
    

    constructor(private http: HttpClient){ }


    getUsers(){
        return this.http.get(URL_BASE+'/users')
    }

    getUserById(){
        const url = URL_BASE+'/users/1';
        return this.http.get(url);
    }

    addUser(user: userModel){
       return this.http.post<userModel>(this.URL_BASE+'/misHistorietas',user,httpOptions);
         
    }

    editUser(user: userModel): Observable<userModel>{
        const url = `${URL_BASE}/users/1`
        
        return this.http.put<userModel>(url,user,httpOptions)
    }

    selectedUser(user: userModel, id: string){
        const url = `${URL_BASE}/users/${id}`
        return this.http.put<userModel>(url,user,httpOptions)
    }
    
    unSelectedUser(user: userModel, id: string){
        const url = `${URL_BASE}/users/${id}`
        return this.http.put<userModel>(url,user,httpOptions)
    }

    addAmistad(user: userModel,id:string){
        const url = `${URL_BASE}/users/${id}`
        
        return this.http.put<userModel>(url,user,httpOptions)
    }





}