import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface IPokemons {
  results: [];
}

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

  pokemons: IPokemons = {results:[]};
  filter: String = "";

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.getPokemons();
  }

  async getPokemons() {
    this.pokemons = await this.httpClient
      .get<IPokemons>('https://pokeapi.co/api/v2/pokemon?limit=-1')
      .toPromise();
  }

}
