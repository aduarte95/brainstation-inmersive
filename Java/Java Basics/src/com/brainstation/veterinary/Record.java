package com.brainstation.veterinary;

import com.brainstation.animal.Animal;

public class Record {
    Animal animal;
    String sickness;
    boolean haveBabies;

    public Record(Animal animal) {
        this.animal = animal;
        this.sickness = "none";
        this.haveBabies = false;
    }

    public Record(Animal animal, String sickness) {
        this(animal);
        this.sickness = sickness;
    }

    public Record(Animal animal, boolean haveBabies) {
        this(animal);
        this.haveBabies = haveBabies;
    }

    public Record(Animal animal, String sickness, boolean haveBabies) {
        this(animal);
        this.sickness = sickness;
        this.haveBabies = haveBabies;
    }
}
