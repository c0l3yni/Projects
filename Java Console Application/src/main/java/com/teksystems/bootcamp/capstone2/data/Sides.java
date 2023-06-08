package com.teksystems.bootcamp.capstone2.data;

import java.math.BigDecimal;

public enum Sides {
    FRIES(7, "Fries but horizontal", new BigDecimal("4.59")),
    SIDE2(8, "Hot pocket", new BigDecimal("6.57")),
    SIDE3(9, "Pot Hocket", new BigDecimal("3.99"));
    
    public final int ID;
    public String name;
    public BigDecimal price;
    
    Sides(int ID, String name, BigDecimal price) {
        this.ID = ID;
        this.name = name;
        this.price = price;
        
    }
}