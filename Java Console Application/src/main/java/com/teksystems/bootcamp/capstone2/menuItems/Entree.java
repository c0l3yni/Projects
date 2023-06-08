package com.teksystems.bootcamp.capstone2.menuItems;

import java.math.BigDecimal;
import java.util.List;

public class Entree extends MenuItem {
    private List<Topping> toppings;
    
    public Entree(int ID, String name, BigDecimal price, List<Topping> toppings) {
        super(ID, name, price);
        this.toppings = toppings;
    }
    
    public Entree() {
        super();
    }
    
    public void addTopping(Topping topping) {
        this.toppings.add(topping);
        this.setPrice(this.getPrice().add(topping.getPrice()));
    }
    
    public List<Topping> getToppings() {
        return toppings;
    }
    
}