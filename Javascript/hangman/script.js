var words = ['pidget']
var selectedWord;
var state = {
    cont: 0,
    length: 0,
    imgCont: 2,
    id: 0
};

function init() {
    var promise = fetch('https://pokeapi.co/api/v2/pokemon');

    promise.then((response) => {
        return response.json();
    }).then(
        pokemons => {
            for (let i = 0; i < 20; ++i) {
                words.push(pokemons.results[i].name);
            }

            var wordIndex = Math.floor(Math.random() * words.length)
            selectedWord = words[wordIndex];
            state.length = selectedWord.length;

            var word = document.querySelector('.word');
            var abc = document.querySelector('.abc');
            var node;

            for(let i = 0; i < selectedWord.length; ++i) {
                node = document.createElement('div');
                node.className = 'letter'
                node.id = 'letter' + i
                word.appendChild(node)
            }

            for(let i = 0; i < 26; ++i) {
                node = document.createElement('button');
                node.innerHTML = String.fromCharCode(i+97);
                node.className = 'abc-letter'
                node.id = 'abc-letter' + i
                node.addEventListener('click', verifyLetter);
                abc.appendChild(node)
            }

            var ref = document.querySelector('.pokemon-details');
            ref.href = 'pokemonDetails.html?id=' + wordIndex;
        }
    )
}

function reload() {
    this.enableAllLetters();
}

function verifyState(){
    
    if(state.cont === state.length) {
        setTimeout(win(), 1000);
    } else if(state.imgCont === 12) {
        lose();
    }
}

function win() {
    this.disabledAllLetters();
    this. openDialog('You win! :D');
    setTimeout(() => reload(), 1000);
}

function lose() {
    this.disabledAllLetters();
    this.openDialog('You lose! :( <br> The correct answer was <span class=\"selected-word\">' + selectedWord + '</span>');
    setTimeout(() => reload(), 1000);
}

function disabledAllLetters(){
    for(let i = 0; i < 26; ++i) {
        toggleABCLetter(i, true);
    }
}

function enableAllLetters(){
    for(let i = 0; i < 26; ++i) {
        toggleABCLetter(i, false);
    }
}

function toggleABCLetter(i, isDisabled){
    buttonLetter = document.getElementById('abc-letter'+ i);
    buttonLetter.disabled = isDisabled;
}


function verifyLetter() {
    var abcLetter = this.innerHTML;
    var fillLetter;
    var img;
    var match = false;
    var abcLetteraAscci = (abcLetter.charCodeAt(0)-97).toString();
    
    toggleABCLetter(abcLetteraAscci, true);

    [...selectedWord].forEach(
        function(letter, i) {
            if(letter === abcLetter) {
                match = true;
                state.cont++
                fillLetter = document.getElementById('letter' + i);
                buttonLetter = document.getElementById('abc-letter'+ abcLetteraAscci);
                fillLetter.innerHTML = abcLetter;
            }
        }
    )

    if(match == false) {
        img = document.querySelector('.hangman-img');
        img.style.backgroundImage = 'url(assets/'+ state.imgCont++ + '.svg)';
    }

    verifyState();
}

function openDialog(msg) {
    // Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var modalText = document.querySelector(".modal-text");
modalText.innerHTML = msg;
modal.style.display = "block";

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
}

