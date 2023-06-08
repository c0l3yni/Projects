package com.teksystems.bootcamp.capstone2.order;

import com.teksystems.bootcamp.capstone2.menuItems.Entree;
import com.teksystems.bootcamp.capstone2.menuItems.MenuItem;
import com.teksystems.bootcamp.capstone2.menuItems.Topping;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

import static com.teksystems.bootcamp.capstone2.CurrencyFormatter.formatCurrency;

public class Order {
    private final BigDecimal TAX_RATE = new BigDecimal(".0825");
    private BigDecimal subtotal = new BigDecimal("0.00");
    private BigDecimal tax = new BigDecimal("0.00");
    private BigDecimal total = new BigDecimal("0.00");
    private final List<MenuItem> items = new ArrayList<>();

    public void addToOrder(MenuItem item) {
        this.items.add(item);
        updateSubtotal(item);
        updateTax();
        updateTotal();
    }
    
    public void updateSubtotal(MenuItem item) {
        this.subtotal = this.subtotal.add(item.getPrice());
    }
    
    public void updateTax() {
        this.tax = this.subtotal.multiply(TAX_RATE);
    }
    
    public void updateTotal() {
        this.total = this.subtotal.add(this.tax);
    }
    
    public void addTopping(Topping topping) {
        Entree entree = this.getItemByIndex(items.size() - 1);
        entree.addTopping(topping);
        entree.setPrice(entree.getPrice().add(topping.getPrice()));
    }
    
    public Entree getItemByIndex(int index) {
        return (Entree) items.get(index);
    }
    
    public List<MenuItem> getItems() {
        return items;
    }
    
    public String getSubtotal() {
        return formatCurrency(subtotal);
    }
    
    public String getTax() {
        return formatCurrency(tax);
    }
    
    public String getTotal() {
        return formatCurrency(total);
    }
}