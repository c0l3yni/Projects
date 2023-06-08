package com.teksystems.bootcamp.capstone2.UI;

import com.teksystems.bootcamp.capstone2.order.Order;
import com.teksystems.bootcamp.capstone2.order.Receipt;
import com.teksystems.bootcamp.capstone2.order.ReceiptArchive;
import com.teksystems.bootcamp.capstone2.menuItems.Entree;
import com.teksystems.bootcamp.capstone2.menuItems.MenuItem;
import com.teksystems.bootcamp.capstone2.menuItems.Topping;

import java.util.List;
import java.util.Map;

import static com.teksystems.bootcamp.capstone2.CurrencyFormatter.formatCurrency;

public abstract class Printer {
    public static void printEntree(Entree entree) {
        System.out.println("You have selected " + entree.getName());
        System.out.println("with: ");
        if (entree.getToppings().size() == 0) {
            System.out.println("no toppings.");
        } else {
            for (Topping topping : entree.getToppings()) {
                System.out.println(topping.getName());
            }
        }
    }
    
    public static void printOrderItems(List<MenuItem> items) {
        System.out.println("You've ordered all of this stuff: ");
        for (MenuItem item : items) {
            System.out.println(item.getName() + " " + formatCurrency(item.getPrice()));
        }
    }
    
    public static void printOrderCost(Order order) {
        System.out.println("Subtotal: " + order.getSubtotal());
        System.out.println("Tax: " + order.getTax());
        System.out.println("Total: " + order.getTotal());
    }
    
    public static void printReceipt(Receipt receipt) {
        System.out.println("\nRestaurant Name");
        System.out.println("Some sort of other text");
        System.out.println();
        System.out.println("Customer Copy");
        System.out.println("Date/time");
        System.out.println("Order ID: " + receipt.getID());
        System.out.println();
        printOrderItems(receipt.getOrder().getItems());
        System.out.println();
        printOrderCost(receipt.getOrder());
    }
    
    public static void printAllReceipts(ReceiptArchive archive) {
        for (Map.Entry<Integer, Receipt> receipt : archive.getReceiptList().entrySet()) {
            System.out.println(receipt.getKey() + ". "
                    + receipt.getValue().getOrder().getTotal());
        }
    }
}
