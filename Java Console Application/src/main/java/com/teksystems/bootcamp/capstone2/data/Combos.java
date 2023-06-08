package com.teksystems.bootcamp.capstone2.data;

import java.math.BigDecimal;

public enum Combos {
    COMBO1(1, "Super Special Combo", new BigDecimal("22.48")),
    COMBO2(2, "Another Special Combo", new BigDecimal("16.99"));
    
    public final int ID;
    public final String name;
    public final BigDecimal price;
    
    Combos(int ID, String name, BigDecimal price) {
        this.ID = ID;
        this.name = name;
        this.price = price;
    }
}
