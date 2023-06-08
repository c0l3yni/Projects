package com.teksystems.bootcamp.capstone2.data;

import java.math.BigDecimal;

public enum Drinks {
    WATER(10, "Water, probably", new BigDecimal("6.37")),
    DRINK2(11, "Legal for minors", new BigDecimal("8.49")),
    DRINK3(12, "Do not drink", new BigDecimal("9.99"));
    
    public final int ID;
    public final String name;
    public final BigDecimal price;
    
    Drinks(int ID, String name, BigDecimal price) {
        this.ID = ID;
        this.name = name;
        this.price = price;
    }
}