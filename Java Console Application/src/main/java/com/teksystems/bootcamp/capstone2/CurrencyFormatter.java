package com.teksystems.bootcamp.capstone2;

import java.math.BigDecimal;
import java.text.NumberFormat;
import java.util.Locale;

public abstract class CurrencyFormatter {
    public static NumberFormat currency = NumberFormat.getCurrencyInstance(Locale.US);
    
    public static String formatCurrency(BigDecimal num) {
        return currency.format(num);
    }
}
