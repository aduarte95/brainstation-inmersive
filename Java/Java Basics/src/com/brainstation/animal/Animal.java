package com.brainstation.animal;

import java.time.LocalDate;
import java.time.Month;
import java.util.Date;

public class Animal {
    protected String name;
    protected String animalType;
    protected LocalDate bornDay;
    protected int size;

    public Animal(String name, LocalDate bornDay, int size) {
        this.name = name;
        this.bornDay = bornDay;
        this.size = size;
    }

    public boolean haveSameName(String otherName) {
        return this.name.equals(otherName);
    }

    final void attachLastName(String lastName) {
        this.name = name + ' ' + lastName;
    }

    public void attachNickname(String nickname) {
       this.name = this.name.concat("(" + nickname + ")");
    }

    public String getName() {
        return  this.name;
    }

    public String getAnimalType() {
        return this.animalType;
    }

    public LocalDate getBornDay() {
        return this.bornDay;
    }

     public double getAge() {
        double age = this.bornDay.until(LocalDate.now()).getYears();

        return age;
    }

    @Override
    public boolean equals(Object obj) {
        Animal anotherAnimal = (Animal)obj;
        boolean areSameType = false;
        boolean haveSameClass =  this.getClass().equals(anotherAnimal.getClass());
        boolean haveSameBornDay = this.bornDay.equals(anotherAnimal.getBornDay());

        if(( haveSameClass && haveSameBornDay )) {
            areSameType = true;
        }

        return areSameType;
    }

}
