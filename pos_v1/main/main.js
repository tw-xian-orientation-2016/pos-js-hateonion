function printReceipt(input){
    var cartItems = genCart(input);
    var receiptItems = genReceipt(cartItems);
    printInventory(receiptItems);
}
