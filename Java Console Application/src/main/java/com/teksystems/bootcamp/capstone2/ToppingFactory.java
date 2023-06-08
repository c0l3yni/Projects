package com.teksystems.bootcamp.capstone2;

import com.teksystems.bootcamp.capstone2.menuItems.Topping;

import static com.teksystems.bootcamp.capstone2.data.Toppings.*;

public abstract class ToppingFactory {
    public static Topping createTopping(int input) {
        if (input == 1) {
            return new Topping(MUSHROOMS.ID, MUSHROOMS.name, MUSHROOMS.price);
        }        if (input == 2) {
            return new Topping(TOPPING2.ID, TOPPING2.name, TOPPING2.price);
        }        if (input == 3) {
            return new Topping(TOPPING3.ID, TOPPING3.name, TOPPING3.price);
        }
        return null;
    }
}
