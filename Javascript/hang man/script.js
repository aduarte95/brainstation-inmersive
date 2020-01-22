var words = ['hola', 'caballo', 'jaja']
var selectedWord;
var state = {
    cont: 0,
    length: 0
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

function win(){
    for(let i = 0; i < 26; ++i) {
        buttonLetter = document.getElementById('abc-letter'+ i);
        buttonLetter.disabled = true;
    }
}


function verifyLetter() {
    var abcLetter = this.innerHTML;
    var fillLetter;
    var buttonLetter;
    var asciiCode;

    [...selectedWord].forEach(
        function(letter, i) {
            if(letter === abcLetter) {
                state[letter] = true;
                state.cont++
                fillLetter = document.getElementById('letter'+i);
                buttonLetter = document.getElementById('abc-letter'+ (abcLetter.charCodeAt(0)-97).toString());
                fillLetter.innerHTML = abcLetter;
                buttonLetter.disabled = true;
            } else {
                
            }
        }
    )

    if(state.cont == state.length) {
    win();
    }
}
