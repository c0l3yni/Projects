package com.teksystems.bootcamp.capstone2.menuItems;

import java.math.BigDecimal;
import java.util.List;

public class Combo extends MenuItem {
    private List<MenuItem> itemList;
    
    public Combo(int ID, String name, BigDecimal price) {
        super(ID, name, price);
        
    }
}