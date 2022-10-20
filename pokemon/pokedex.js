'use strict'

var pokedex = [];

var pkemon = prompt("ingresa el nombre del pokemon a consultar: ");
const link = "https://pokeapi.co/api/v2/pokemon/"+pkemon;
console.log(link);

fetch(link)
    .then(resp => resp.json())
    .then(datos => {
        pokedex = datos;
        let habilidades = [];
        let movimientos = [];
        for(let i in pokedex.abilities){
            habilidades.push(pokedex.abilities[i].ability.name);
        }
        for(let i = 0; i < 5; i++){
            movimientos.push(pokedex.moves[i].move.name);
        }
        
        console.log(pokedex);
        console.log("ID: "+pokedex.id);
        console.log("Nombre: "+pokedex.name);
        console.log("Tipo: "+pokedex.types[0].type.name);
        console.log("Habilidades: "+habilidades);
        console.log("Habilidades: "+movimientos);

    })

