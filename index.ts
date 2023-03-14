import fetch from 'node-fetch';
import { getPokemonList , getPokemon } from "./src/getPokemon";

(async function (){
    try{
        const list = await getPokemonList();
        const data = await Promise.all(
            list.results.slice(0,5).map((pokemon)=> getPokemon(pokemon.url))
        );
        console.log(data[0].name);
    }
    catch (e){
        console.error(e);
    }
})();

/*fetch("https://pokeapi.co/api/v2/pokemon/")
    .then(response => response.json())
    .then((data: IPokemonList) => {
        fetch(data.results[0].url)
            .then(response => response.json())
            .then(data => console.log(data.stats));

    })
    .catch((err) => console.error(err));*/