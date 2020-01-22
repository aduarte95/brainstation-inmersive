var words = ['hola', 'caballo', 'jaja']
var selectedWord;
var state = {
    cont: 0,
    length: 0,
    imgCont: 2
};

function init() {
    var wordIndex = Math.floor(Math.random() * words.length)
    selectedWord = words[wordIndex];
    state.length = selectedWord.length;
    [...selectedWord].forEach( letter => { state[letter] = false; } )


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
}

function verifyState(){
    
    if(state.cont === state.length) {
        win();
    } else if(state.imgCont === 11) {
        lose();
    }
    
}

function win() {
    for(let i = 0; i < 26; ++i) {
        buttonLetter = document.getElementById('abc-letter'+ i);
        buttonLetter.disabled = true;
    }
}

function lose() {
    for(let i = 0; i < 26; ++i) {
        buttonLetter = document.getElementById('abc-letter'+ i);
        buttonLetter.disabled = true;
    }
}

function disableABCLetter(i){
    buttonLetter = document.getElementById('abc-letter'+ i);
    buttonLetter.disabled = true;
}


function verifyLetter() {
    var abcLetter = this.innerHTML;
    var fillLetter;
    var buttonLetter;
    var asciiCode;
    var img;
    var match = false;

    [...selectedWord].forEach(
        function(letter, i) {
            if(letter === abcLetter) {
                match = true;
                state[letter] = true;
                state.cont++
                fillLetter = document.getElementById('letter'+i);
                buttonLetter = document.getElementById('abc-letter'+ (abcLetter.charCodeAt(0)-97).toString());
                fillLetter.innerHTML = abcLetter;
            }
        }
    )

    if(match == false) {
        console.log(state.imgCont);
                img = document.querySelector('.hangman-img');
                img.style.backgroundImage = 'url(assets/'+ state.imgCont++ + '.svg)';
    }

    verifyState();
}
