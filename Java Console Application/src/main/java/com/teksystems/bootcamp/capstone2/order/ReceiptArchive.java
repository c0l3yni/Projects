package com.teksystems.bootcamp.capstone2.order;

import com.teksystems.bootcamp.capstone2.UI.Printer;

import java.util.HashMap;
import java.util.Map;

public class ReceiptArchive {
    private final Map<Integer, Receipt> receiptList = new HashMap();
    
    public void addReceipt(Receipt receipt) {
        receiptList.put(receipt.getID(), receipt);
    }
    
    public Map<Integer, Receipt> getReceiptList() {
        return receiptList;
    }
    
    public void print() {
        Printer.printAllReceipts(this);
    }
    
    public void printByID(int ID) {
        receiptList.get(ID).print();
    }
    
}
