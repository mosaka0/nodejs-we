import { getPokemonList } from "./getPokemon";

describe("getPokemon", () => {

    it("shouldRunTestSuite get list", async () => {
        const list = await getPokemonList();
        console.log("Actually running test");
        expect(list.results[0].name).toBe("bulbasaur");
    })
})