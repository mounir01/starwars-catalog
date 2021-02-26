import { ICharacter } from './../model/character';
import { IStarship } from './../model/starship';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { StarWarsService } from '../star-wars.service';
@Component({
  selector: 'app-starship-card',
  templateUrl: './starship-card.component.html',
  styleUrls: ['./starship-card.component.css']
})
export class StarshipCardComponent implements OnInit {
  pageTitle: string = 'Starship Detail';
  id: number;
  starship : IStarship = {} as IStarship;
  pilots:ICharacter[] = [];
  
  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _starwarsService: StarWarsService) {
      this.id = parseInt( this._route.snapshot.paramMap.get('id') ?? "");
    }

  onBack(): void {
      this._router.navigate(['categories/starships']);
  }
  
  ngOnInit(): void {
    this.getStarship();
    
  }

  getStarship(){
    this._starwarsService.getStarshipById(this.id).subscribe(
      response => { 
        this.starship = response;
        this.starship.id =this.id;
        this._starwarsService.setStarshipImgUrl(this.starship);
        console.log(this.starship);
      },
      err => console.error(err),
      () => console.log('done loading starship')
    );
  }

}
