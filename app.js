const getPokemonUrl = id => ` https://pokeapi.co/api/v2/pokemon/${id}`;

const genaratePokemonPromises = () => Array(150).fill().map((_, index) =>
    fetch(getPokemonUrl(index + 1)).then(response => response.json()));

const generatHtml = pokemons => pokemons.reduce((accumalator, {name, id , types}) => {
    const elementTypes = pokemon.types.map(typeInfo => typeInfo.type.name);

    accumalator += `
        <li class="card ${elementTypes[0]}">
        <img class="card-image"  alt="${name}" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png">
            <h2>${id}. ${name}</h2>
            <p class="card-subtitle">${elementTypes.join(' | ')}</p>
        </li> `
    return accumalator;
}, '')



const insertPokemonIntoPage = pokemons => {
    const ul = document.querySelector('[data-js="pokedex"]');
    ul.innerHTML = pokemons;
}

const pokemonPromises = genaratePokemonPromises();

Promise.all(pokemonPromises)
    .then(generatHtml)
    .then(insertPokemonIntoPage);