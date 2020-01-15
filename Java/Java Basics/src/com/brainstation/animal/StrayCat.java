package com.brainstation.animal;

import com.brainstation.Cat;

import java.time.LocalDate;
import java.util.Date;

public class StrayCat extends Cat {
    private String streetName;

    public StrayCat(String name, LocalDate bornDay, int size, String streetName) {
        super(name, bornDay, size);
        this.streetName = streetName;
    }
}
