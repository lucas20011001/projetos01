var quantidade = document.getElementById('quantidade');
var toque = document.getElementById('button');

toque.addEventListener('click', ()=>{
    pegaPokemons(quantidade.value);

    if(quantidade.value == 0){
        alert('Digite um número válido')
    }

})

pegaPokemons(2);

function pegaPokemons(quantidade){
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10'+ quantidade).then(response => response.json()).then(allpokemon =>{

        var pokemons = [];

        allpokemon.results.map(function(val){
            
            fetch(val.url).then(response => response.json()).then(pokemonSingle =>{
                pokemons.push({nome:val.name, imagem:pokemonSingle.sprites.front_default});
                
                if(pokemons.length == quantidade){

                    var pokemonBoxes = document.querySelector('.pokemon-boxes');
                    pokemonBoxes.innerHTML = "";
                    
                    pokemons.map(function(val){

                        pokemonBoxes.innerHTML+=`
                            <div class="pokemon-box">
                                <img src="`+val.imagem+`" >
                                <p>`+val.nome+`</p>
                            </div>

                        `;
                    })
                        
                    
                }
            })

        })

        pokemons.map(function(val){
            console.log(val.nome);

        })

        })

}