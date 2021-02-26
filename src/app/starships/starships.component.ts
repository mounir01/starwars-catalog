import { IStarship } from './../model/starship';
import { Component, OnInit } from '@angular/core';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {

  starships: IStarship[] = [];

  constructor() { }

  ngOnInit(): void {
    
  }
  
}
