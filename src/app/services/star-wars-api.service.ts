import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StarWarsApiService {

  urlApi: string = 'https://swapi.co/api/';

  constructor(private http: HttpClient) { }

  listarPersonagens(page: number){
    return this.http.get(`${this.urlApi}people/?page=${page}`);
  }
}