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

  getStarshipById(id : number){
    return this.http.get<IStarship>('https://swapi.dev/api/starships/'+ id);
  }

  setStarshipsImgUrl(starships:IStarship[]){

      for(let starship of starships){
        this.setStarshipImgUrl(starship);
      }
  }

  setStarshipImgUrl(starship:IStarship){
      starship.img_url = 'assets/img/placeholder.jpg';
  }

  setStarshipsId(starships:IStarship[]){

    for(let starship of starships){
      this.setStarshipId(starship);
    }
  }

  setStarshipId(starship:IStarship){
      let strId = this.getIdFromUrl(starship.url);
      if(strId !== "") starship.id = parseInt(strId);
  }

  getIdFromUrl(value:string):string{
    let id = value.match(/([0-9])+/g);
    if (id !== null) {
      return id[0];
    } else {
      return "";
    }
  };
}
