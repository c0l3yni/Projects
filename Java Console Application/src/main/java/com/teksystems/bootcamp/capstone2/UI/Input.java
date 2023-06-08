package com.teksystems.bootcamp.capstone2.UI;

import java.util.Scanner;

public abstract class Input {
    public static void validateInput(Scanner scanner) {
        while (!scanner.hasNextInt()) {
            System.out.println("Please enter a valid selection\n");
            scanner.next();
        }
    }
    public static void validateInput(int input, int min, int max) {
        if (input < min || input > max) System.out.println("Please enter a valid selection");
    }
}
