const calcPriceAndQuantity = (statTotal) => {
	if (statTotal >= 401 && statTotal <= 470) return { price: 500, quantity: 513 };
	if (statTotal >= 201 && statTotal <= 300) return { price: 650, quantity: 387 };
	if (statTotal >= 301 && statTotal <= 400) return { price: 900, quantity: 301 };
	if (statTotal >= 401 && statTotal <= 470) return { price: 1200, quantity: 126 };
	if (statTotal >= 471 && statTotal <= 499) return { price: 1800, quantity: 91 };
	if (statTotal >= 500 && statTotal <= 520) return { price: 3000, quantity: 62 };
	if (statTotal >= 521 && statTotal <= 540) return { price: 4500, quantity: 24 };
	if (statTotal >= 541 && statTotal <= 599) return { price: 6000, quantity: 9 };
	if (statTotal === 600) return { price: 20000, quantity: 0 };
	if (statTotal > 600) return { price: 40000, quantity: 1 };

	if (!statTotal) console.error("!type error or falsy value!");
};

export default calcPriceAndQuantity;
