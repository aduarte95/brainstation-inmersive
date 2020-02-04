package com.brainstation.utils;

public class Add {
    private int addNumber = 1;

    public int cont(int number) {
        return number + addNumber;
    }

    public static int getDefaultNumber() {
        int addNumber = 1;

        return addNumber;
    }
}
