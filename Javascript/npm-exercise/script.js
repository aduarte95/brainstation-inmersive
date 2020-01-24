const http = require('request');

http.get('https://pokeapi.co/api/v2/pokemon', (error, response, body) => {
    console.log(body)
})