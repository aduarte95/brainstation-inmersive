var pokemon;

function init(){
    var urlParams = new URLSearchParams(window.location.search);
    var id = urlParams.get('id');

    var promise = fetch('https://pokeapi.co/api/v2/pokemon/' + id + '/');

    promise.then((response) => {
        return response.json();
    }).then(
        pokemon => {
            this.pokemon = pokemon;
            console.log(this.pokemon);
            setName();
            setSprites();
            setWeight();
            setAbilities();
            setMoves();

            promise = fetch('https://pokeapi.co/api/v2/evolution-chain/' + id + '/');

            promise.then((response) => {
                return response.json();
            }).then(
                chain => setEvolutionChain(chain)
            )
        }
    )
}

function setName() {
    var pokemonName = document.getElementsByClassName("container__pokemon-name");

    for(i = 0; i < pokemonName.length; ++i) {
        pokemonName[i].innerHTML = this.pokemon.name
    }
}

function setSprites(){
    var sprites = document.querySelector(".container__sprites");
    var node = document.createElement('img');

    node.src = this.pokemon.sprites.back_default;
    sprites.appendChild(node)

    node = document.createElement('img');
    node.src = this.pokemon.sprites.front_default;
    sprites.appendChild(node)
}

function setWeight() {
    var weight = document.querySelector(".container__weight");
    weight.innerHTML = pokemon.weight;
}

function setAbilities() {
    var abilities = document.querySelector(".container__abilities");
    var node;

    for(let i = 0; i < pokemon.abilities.length; ++i) {
        node = document.createElement('p');
        node.innerHTML = this.pokemon.abilities[i].ability.name;
        node.className = 'container__content'
        abilities.appendChild(node)
    }
}

function setMoves() {
    var randomNumbers = [];
    var random;

    while(randomNumbers.length != 4) {
        random = Math.floor(Math.random() * pokemon.moves.length);
        
        if(!randomNumbers.some( e => e == random)) {
            randomNumbers.push(random);
        }
    }    

    var moves = document.querySelector(".container__moves");
    var node;

    for(let i = 0; i < randomNumbers.length; ++i) {
        node = document.createElement('p');
        node.innerHTML = this.pokemon.moves[i].move.name;
        node.className = 'container__content'
        moves.appendChild(node)
    }
    
}

function setEvolutionChain(evolution) {
    var evolutionChain = document.querySelector(".container__evolution-chain");
    var node;

    var evolvesTo = evolution.chain.evolves_to
    var evolutionName = evolution.chain.species.name
    
    while(evolvesTo[0] != null) {
        node = document.createElement('p');
        node.innerHTML = evolutionName;
        node.className = 'container__content'
        evolutionChain.appendChild(node)
        
        evolutionName = evolvesTo[0].species.name
        evolvesTo = evolvesTo[0].evolves_to
    }
}

