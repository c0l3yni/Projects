package com.teksystems.bootcamp.capstone2.UI;

import com.teksystems.bootcamp.capstone2.data.*;


public abstract class Menu {

    public static void printCombos() {
        System.out.println("COMBOS:");
        for (var combo : Combos.values()) {
            System.out.println(combo.ID + ". " + combo.name + "\t$" + combo.price);
        }
    }
    
    public static void printEntrees() {
        System.out.println("ENTREES:");
        for (var entree : Entrees.values()) {
            System.out.println(entree.ID + ". " + entree.name + "\t$" + entree.price);
        }
    }
    
    public static void printSides() {
        System.out.println("SIDES:");
        for (var side : Sides.values()) {
            System.out.println(side.ID + ". " + side.name + "\t$" + side.price);
        }
    }
    
    public static void printDrinks() {
        System.out.println("DRINKS:");
        for (var drink : Drinks.values()) {
            System.out.println(drink.ID + ". " + drink.name + "\t$" + drink.price);
        }
    }
    
    public static void printToppings() {
        for (var topping : Toppings.values()) {
            System.out.println(topping.ID + ". " + topping.name + "\t$" + topping.price);
        }
    }
    
    public static void printIntro() {
        System.out.println("Welcome to RESTAURANT");
        System.out.println();
        System.out.println("What would you like to order");
    }
    
    public static void printMenu() {
        System.out.println();
        printCombos();
        System.out.println("---------------------------------------------------");
        printEntrees();
        System.out.println("---------------------------------------------------");
        printSides();
        System.out.println("---------------------------------------------------");
        printDrinks();
        
    }
    
    
}
