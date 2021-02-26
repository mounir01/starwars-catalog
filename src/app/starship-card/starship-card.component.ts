import { ICharacter } from './../model/character';
import { IStarship } from './../model/starship';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-starship-card',
  templateUrl: './starship-card.component.html',
  styleUrls: ['./starship-card.component.css']
})
export class StarshipCardComponent implements OnInit {
  @Input('pageTitle') pageTitle: string = 'Starship Detail';
  @Input('starship') starship:IStarship = {} as IStarship;
  @Input('pilots') pilots:ICharacter[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
