function orderSandwich(...items) {
    console.log("Sandwich Summary:");
    if (items.length === 0) {
        console.log("No items selected. Your sandwich is empty.");
    } else {
        console.log("You ordered a sandwich with:");
        items.forEach(item => {
            console.log("- " + item);
        });
    }
    console.log("-------------------------");
}
orderSandwich("Turkey", "Bacon", "Lettuce", "Tomato");
orderSandwich("Ham", "Swiss Cheese", "Mustard");
orderSandwich("Tuna Salad", "Pickles", "Onions", "Mayonnaise", "Lettuce");