import { IStarship } from './model/starship';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class StarWarsService {

  constructor(private http:HttpClient) { }

  getStarships(){
    return this.http.get('https://swapi.dev/api/starships/');
  }

  setStarshipsImgUrl(starships:IStarship[]){

      for(let starship of starships){
        starship.img_url = 'assets/img/placeholder.jpg';
      }
  }
}
