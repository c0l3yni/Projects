package com.teksystems.bootcamp.capstone2.data;

import java.math.BigDecimal;

public enum Toppings {
    MUSHROOMS(1, "Sauteed mushrooms", new BigDecimal("1.75")),
    TOPPING2(2, "Raw mushrooms", new BigDecimal("2.49")),
    TOPPING3(3, "Rainbow sprinkles", new BigDecimal("4.99"));
    
    public int ID;
    public String name;
    public BigDecimal price;
    
    Toppings(int ID, String name, BigDecimal price) {
        this.ID = ID;
        this.name = name;
        this.price = price;
    }
}