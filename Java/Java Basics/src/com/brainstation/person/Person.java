package com.brainstation.person;

import com.brainstation.animal.Animal;

import java.time.LocalDate;
// import java.time.Month;

public class Person extends PersonMethods implements PersonActions {

    @Override
    public void setAge(double age) {
        this.age = age;
    }

    @Override
    public void setName(String name) {
        this.setName(name);

    }

    public double getAge() {
        return this.age;
    }

    public String getName() {
        return this.name;
    }

    @Override
    public double getAge(LocalDate bornDay) {
        LocalDate date = bornDay; // LocalDate.of(2014, Month.JANUARY, 1);
        double age = date.until(LocalDate.now()).getYears();
        setAge(age);

        return age;
    }

    @Override
    public boolean equals(Object obj) {
        Person anotherPerson = (Person) obj;
        boolean areSamePerson = false;
        boolean haveSameAge = false;
        boolean haveSameName = false;

        if(this.age == anotherPerson.getAge()) {
            haveSameAge = true;
        }

        if(this.name.equals(anotherPerson.getName())) {
            haveSameName = true;
        }

        if(( haveSameAge && haveSameName )) {
            areSamePerson = true;
        }

        return areSamePerson;
    }
}
