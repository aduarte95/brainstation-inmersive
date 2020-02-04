package com.brainstation;

import com.brainstation.animal.Animal;
import com.brainstation.veterinary.Bill;

import java.time.LocalDate;
import java.time.Month;
import java.time.Year;
import java.time.format.DateTimeFormatter;
import java.time.format.FormatStyle;
import java.util.Locale;

public class Main {

    public static void main(String[] args) {
        DateTimeFormatter usFormatter = DateTimeFormatter.ofLocalizedDate(
                FormatStyle.MEDIUM).withLocale(Locale.US);

        LocalDate xmas = LocalDate.parse("2005-11-12");
        System.out.println(xmas);
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MMM-dd");
        formatter = formatter.withLocale( Locale.getDefault() );  // Locale specifies human language for translating, and cultural norms for lowercase/uppercase and abbreviations and such. Example: Locale.US or Locale.CANADA_FRENCH
        LocalDate date = LocalDate.parse("2005-nov-12", formatter);

        Animal cat = new Cat("Misty", date, 5);
        System.out.println(cat.getAge());

    }
}
