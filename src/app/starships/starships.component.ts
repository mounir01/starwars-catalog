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

  constructor(private _starwarsService: StarWarsService) { }

  ngOnInit(): void {
    this.getStarships();
  }

  getStarships(){
    this._starwarsService.getStarships().subscribe(
          response => { 
            let params = (response as any);
            console.log(params);
            this.starships = params.results;
            this._starwarsService.setStarshipsImgUrl(this.starships);
          },
          err => console.error(err),
          () => console.log('done loading starships')
        );
  }
  
}
