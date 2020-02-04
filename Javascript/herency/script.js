class Animal {
    constructor(name, weigth) {
        this.name = name;
        this.weigth = weigth;
    }

    changeButton() {
        parentBtn.style.backgroundColor = "green";
        parentBtn.innerHTML = this.name;

    }

}

var animal = new Animal('Misty', 5)
var parentBtn = document.querySelector(".btn-parent");
console.log(document.querySelector(".btn-parent"));
parentBtn.style.backgroundColor = "red";
parentBtn.addEventListener('click', () => animal.changeButton());