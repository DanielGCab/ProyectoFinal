
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http'
import { Observable } from 'rxjs';
const httpOptions={
        headers: new HttpHeaders({
            'Content-type': 'application/json',
            'Authorization': 'my-auth-token'
        })
}
const URL_BASE = 'http://localhost:3000/misHistorietas';

@Injectable()

export class HistorietasService{
    URL_BASE: string ='http://localhost:3000/misHistorietas';
    

    constructor(private http: HttpClient){ }


    getHistorietas(){
        return this.http.get(URL_BASE)
    }



}