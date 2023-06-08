package com.teksystems.bootcamp.capstone2.order;

import com.teksystems.bootcamp.capstone2.MenuItemFactory;
import com.teksystems.bootcamp.capstone2.ToppingFactory;
import com.teksystems.bootcamp.capstone2.menuItems.MenuItem;
import com.teksystems.bootcamp.capstone2.menuItems.Topping;
import org.testng.Assert;
import org.testng.annotations.Test;

public class OrderTest {
    @Test
    public static void subtotalShouldEqualTwentyFourFiftyNine() {
        String actual;
        String expected = "$24.59";
        
        Order order = new Order();
        MenuItem item1 = MenuItemFactory.createMenuItem(3);
        MenuItem item2 = MenuItemFactory.createMenuItem(7);
        
        order.updateSubtotal(item1);
        order.updateSubtotal(item2);
        actual = order.getSubtotal();
    
        Assert.assertEquals(actual, expected);
        
    }
    
    @Test
    public static void taxShouldEqualFiftyThreeCents() {
        String actual;
        String expected = "$0.53";
        
        Order order = new Order();
        MenuItem item = MenuItemFactory.createMenuItem(13);
        
        order.updateSubtotal(item);
        order.updateTax();
        actual = order.getTax();
        
        Assert.assertEquals(actual, expected);
        
    }
    
    @Test
    public static void totalShouldEqualTwentyFourThirtyThree() {
        String actual;
        String expected = "$24.33";
        
        Order order = new Order();
        MenuItem item = MenuItemFactory.createMenuItem(1);
        
        order.updateSubtotal(item);
        order.updateTax();
        order.updateTotal();
        actual = order.getTotal();
        
        Assert.assertEquals(actual, expected);
        
    }
    
    @Test
    public static void toppingNameShouldEqualSauteedMushroomsWhenAdded() {
        String actual;
        String expected = "Sauteed Mushrooms";

        Order order = new Order();
        MenuItem item = MenuItemFactory.createMenuItem(3);
        order.addToOrder(item);
        Topping topping = ToppingFactory.createTopping(1);
        order.addTopping(topping);
        
        actual = topping.getName();
        
        Assert.assertEquals(actual, expected);

    }
}
