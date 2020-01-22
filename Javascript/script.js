class Animal {
    constructor(name, weigth) {
        this.name = name;
        this.weigth = weigth;
    }

    changeButtonColor() {
        parentBtn.backgroundColor = green;
    }

    animal = new Animal('Misty', 5)
    parentBtn = document.querySelector(".btn-parent")
    parentBtn.addEventListener('click', () => animal.changeButtonColor);
}