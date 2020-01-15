package com.brainstation.person;

import java.time.LocalDate;

public abstract class PersonMethods  {
    protected String name = "Name";
    protected double age;

    public abstract double getAge(LocalDate date);

    public void setName(String name) {
        this.name = name;
    }

}
