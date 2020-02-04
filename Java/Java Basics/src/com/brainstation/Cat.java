package com.brainstation;

import com.brainstation.animal.Animal;

import java.time.LocalDate;

public class Cat extends Animal {

    public Cat(String name, LocalDate bornDay, int size) {
        super(name, bornDay, size);
        this.animalType = "Cat";
    }

    public void attachNickname() {
        this.name = name + " (kitty)";
    }

    @Override
    public double getAge() {
        double age = super.getAge();

        return age;
    }

}
