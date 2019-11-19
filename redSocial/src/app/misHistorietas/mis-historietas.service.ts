
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Historieta } from './historietas.model';
const httpOptions={
        headers: new HttpHeaders({
            'Content-type': 'application/json',
            'Authorization': 'my-auth-token'
        })
}
const URL_BASE = 'http://localhost:3000';

@Injectable()

export class HistorietasService{
    URL_BASE: string ='http://localhost:3000';
    

    constructor(private http: HttpClient){ }


    getHistorietas(){
        return this.http.get(URL_BASE+'/misHistorietas')
    }

    getHistorietaById(id:string){
        const url = `${URL_BASE}/${id}`;
        return this.http.get(url);
    }

    addHistorieta(historieta: Historieta){
       return this.http.post<Historieta>(this.URL_BASE+'/misHistorietas',historieta,httpOptions);
         
    }



}