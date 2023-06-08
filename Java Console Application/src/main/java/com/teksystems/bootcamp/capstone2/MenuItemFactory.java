package com.teksystems.bootcamp.capstone2;

import com.teksystems.bootcamp.capstone2.menuItems.*;

import java.util.ArrayList;

import static com.teksystems.bootcamp.capstone2.data.Combos.*;
import static com.teksystems.bootcamp.capstone2.data.Drinks.*;
import static com.teksystems.bootcamp.capstone2.data.Entrees.*;
import static com.teksystems.bootcamp.capstone2.data.Sides.*;

public abstract class MenuItemFactory {
    public static MenuItem createMenuItem(int input) {
        if (input == 1) {
            return new Combo(COMBO1.ID, COMBO1.name, COMBO1.price);
        }
        if (input == 2) {
            return new Combo(COMBO2.ID, COMBO2.name, COMBO2.price);
        }
        if (input == 3) {
            return new Entree(STEAK.ID, STEAK.name, STEAK.price, new ArrayList<>());
        }
        if (input == 4) {
            return new Entree(ENTREE2.ID, ENTREE2.name, ENTREE2.price, new ArrayList<>());
        }
        if (input == 5) {
            return new Entree(ENTREE3.ID, ENTREE3.name, ENTREE3.price, new ArrayList<>());
        }
        if (input == 6) {
            return new Entree(ENTREE4.ID, ENTREE4.name, ENTREE4.price, new ArrayList<>());
        }
        if (input == 7) {
            return new Side(FRIES.ID, FRIES.name, FRIES.price);
        }
        if (input == 8) {
            return new Side(SIDE2.ID, SIDE2.name, SIDE2.price);
        }
        if (input == 9) {
            return new Side(SIDE3.ID, SIDE3.name, SIDE3.price);
        }
        if (input == 10) {
            return new Drink(WATER.ID, WATER.name, WATER.price);
        }
        if (input == 11) {
            return new Drink(DRINK2.ID, DRINK2.name, DRINK2.price);
        }
        if (input == 12) {
            return new Drink(DRINK3.ID, DRINK3.name, DRINK3.price);
        }
        return null;
    }
}
