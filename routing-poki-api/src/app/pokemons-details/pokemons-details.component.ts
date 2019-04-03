import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

interface IPokemon {
  abilities: {ability: {name: String}}[];
  name: String;
}


@Component({
  selector: 'app-pokemons-details',
  templateUrl: './pokemons-details.component.html',
  styleUrls: ['./pokemons-details.component.css']
})



export class PokemonsDetailsComponent implements OnInit {

  id: String = '0';
  details: IPokemon;

  test: any;

  constructor(private route: ActivatedRoute, private httpClient: HttpClient) { }



  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
        this.getPokemon();
      });
  }

  async getPokemon() {
    this.details = await this.httpClient
      .get<IPokemon>(`https://pokeapi.co/api/v2/pokemon/${this.id}`)
      .toPromise();
  }
  async getPokemonTest() {
    this.test = await this.httpClient
      .get(`https://pokeapi.co/api/v2/pokemon/${this.id}`)
      .toPromise();
  }

}
