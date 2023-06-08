package com.teksystems.bootcamp.capstone2.UI;

import com.teksystems.bootcamp.capstone2.order.Order;
import com.teksystems.bootcamp.capstone2.order.Receipt;
import com.teksystems.bootcamp.capstone2.order.ReceiptArchive;

import java.util.Scanner;

import static com.teksystems.bootcamp.capstone2.UI.Input.validateInput;
import static com.teksystems.bootcamp.capstone2.MenuItemFactory.createMenuItem;
import static com.teksystems.bootcamp.capstone2.UI.Printer.*;
import static com.teksystems.bootcamp.capstone2.ToppingFactory.createTopping;
import static com.teksystems.bootcamp.capstone2.UI.Menu.*;

public abstract class Console {
    static Order order = new Order();

    public static ReceiptArchive receiptList = new ReceiptArchive();
    private static int receiptID = 1;
    
    public static void run() {
        var scanner = new Scanner(System.in);
        int input;
        
        printIntro();
        printMenu();
        while (true) {
            validateInput(scanner);
            input = scanner.nextInt();
            
            if ((input < 1 || input > 12)) {
                System.out.println("\nPlease enter a valid selection");
                continue;
            } else {
                order.addToOrder(createMenuItem(input));
                if (input >= 3 && input <= 6) {
                    System.out.println("\nWould you like to add toppings?");
                    System.out.println("0. No");
                    System.out.println("1. Yes");
                    
                    validateInput(scanner);
                    input = scanner.nextInt();
                    validateInput(input, 0, 1);
                    if (input == 1) {
                        while (true) {
                            printToppings();
                            validateInput(scanner);
                            input = scanner.nextInt();
                            
                            validateInput(input, 1, 3);
                            
                            order.addTopping(createTopping(input));
                            printEntree(order.getItemByIndex(order.getItems().size() - 1));
                            
                            System.out.println("\nAdd additional toppings?");
                            System.out.println("0. No");
                            System.out.println("1. Yes");
                            validateInput(scanner);
                            input = scanner.nextInt();
                            validateInput(input, 0, 1);
                            if (input == 1) continue;
                            if (input == 0) break;
                        }
                    }
                }
                System.out.println("\nWould you like to order additional items?");
                System.out.println("0. No - Proceed to Checkout");
                System.out.println("1. Yes - See Menu");
                validateInput(scanner);
                input = scanner.nextInt();
                validateInput(input, 0, 1);
                
                if (input == 1) {
                    printMenu();
                    continue;
                } else {
                    receiptList.addReceipt(new Receipt(receiptID, order));
                    receiptID++;
                }
            }
            System.out.println("Your Receipt:");
            receiptList.getReceiptList().get(receiptID - 1).print();
            order = new Order();
            
            System.out.println("\nWhat would you like to do?");
            System.out.println("0. Quit");
            System.out.println("1. Place another order");
            System.out.println("2. View receipts");
            validateInput(scanner);
            input = scanner.nextInt();
            if (input < 0 || input > 2) {
                System.out.println("\nPlease enter a valid selection");
            } else {
                
                if (input == 0) break;
                if (input == 1) {
                    printMenu();
                    continue;
                }
                System.out.println("\nSelect a receipt to view:");
                receiptList.print();
                validateInput(scanner);
                input = scanner.nextInt();
                receiptList.printByID(input);
            }
        } scanner.close();
    }
}