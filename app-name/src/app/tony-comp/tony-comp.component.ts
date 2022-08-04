import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tony-comp',
  templateUrl: './tony-comp.component.html',
  styleUrls: ['./tony-comp.component.css']
})
export class TonyCompComponent implements OnInit {
  
  loggedIn: boolean = true;
  names = ['tony'];
  pokemon: any;
  pokemonId: number | string = 365;

  constructor() { 
    
  }
switchBoolean(){
  
  if(this.loggedIn){
    this.loggedIn= false;
  }else{
    this.loggedIn=true;
  }

}
  ngOnInit(): void {
    this.getPokemon();
  }

  async getPokemon(){
    let resp = await fetch('https://pokeapi.co/api/v2/pokemon/' + this.pokemonId);
    if(resp.ok){
      this.pokemon = await resp.json();
    }
  }

}
