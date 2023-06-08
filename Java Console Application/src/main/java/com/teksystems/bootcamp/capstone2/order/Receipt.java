package com.teksystems.bootcamp.capstone2.order;

import com.teksystems.bootcamp.capstone2.UI.Printer;

public class Receipt {
    private Order order;
    private int ID;
    
    public Receipt(int ID, Order order) {
        this.order = order;
        this.ID = ID;
    }
    
    public Order getOrder() {
        return order;
    }
    
    public int getID() {
        return ID;
    }
    
    public void setID(int ID) {
        this.ID = ID;
    }
    
    public void print() {
        Printer.printReceipt(this);
    }
}