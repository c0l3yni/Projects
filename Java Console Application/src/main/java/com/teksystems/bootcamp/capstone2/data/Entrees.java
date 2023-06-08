package com.teksystems.bootcamp.capstone2.data;

import java.math.BigDecimal;

public enum Entrees {
    STEAK(3, "I think this is meat", new BigDecimal("20.00")),
    ENTREE2(4, "Non-toxic", new BigDecimal("15.99")),
    ENTREE3(5, "Number 18", new BigDecimal("16.79")),
    ENTREE4(6, "Entree 4", new BigDecimal("17.00"));
    
    public final int ID;
    public final String name;
    public final BigDecimal price;
    
    Entrees(int ID, String name, BigDecimal price) {
        this.ID = ID;
        this.name = name;
        this.price = price;
    }
}