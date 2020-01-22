var words = ['hola', 'caballo', 'jaja']
var selectedWord;
var state;

function init() {
    var wordIndex = Math.floor(Math.random() * words.length)
    selectedWord = words[wordIndex]
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
        node.innerHTML = (i+10).toString(36);
        node.className = 'abc-letter'
        node.id = 'abc-letter' + i
        node.addEventListener('click', verifyLetter);
        abc.appendChild(node)
    }
}

function verifyLetter() {
    var abcLetter = this.innerHTML;
    var fillLetter;

    [...selectedWord].forEach(
        function(letter, i) {
            console.log(letter)
            if(letter === abcLetter) {
                fillLetter = document.getElementById('letter'+i);
                fillLetter.innerHTML = abcLetter;
            }
        }
    )
}