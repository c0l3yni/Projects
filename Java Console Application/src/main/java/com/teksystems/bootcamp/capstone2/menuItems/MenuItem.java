package com.teksystems.bootcamp.capstone2.menuItems;

import java.math.BigDecimal;

public abstract class MenuItem {
    private int ID;
    private String name;
    private BigDecimal price;
    
    public MenuItem(int ID, String name, BigDecimal price) {
        this.ID = ID;
        this.name = name;
        this.price = price;
    }
    
    public MenuItem() {
    }
    
    public String getName() {
        return name;
    }
    
    public BigDecimal getPrice() {
        return price;
    }
    
    public int getID() {
        return ID;
    }
    
    public void setPrice(BigDecimal price) {
        this.price = price;
    }
}