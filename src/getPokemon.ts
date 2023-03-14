import fetch from 'node-fetch';

export interface IPokemonList {
    count : number;
    next: string;
    previous?: any;
    results: {
        name: string;
        url: string;
    }[];
}

export interface IPokemon {
    id: number;
    name: string;
    stats: {
        base_stat: number;
        effort: number;
        stat: {
            name: string;
            url: string;
        };
    }[];
}

export const getPokemonList = async () : Promise<IPokemonList> =>{
    const listResp = await fetch("https://pokeapi.co/api/v2/pokemon/");
    return await listResp.json();
}

export const getPokemon = async (url : string): Promise<IPokemon> => {
    const dataResp = await fetch(url);
    return await dataResp.json();
}

export const getFirsPokemon = async () : Promise<IPokemon> => {
    return new Promise(async (resolve, reject) => {
        try {
            console.log("Getting List");
            const list = await getPokemonList();
            resolve(await getPokemon(list.results[0].url));
        } catch (e) {
            reject(e);
        }
    })
}