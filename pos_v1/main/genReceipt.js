function genReceipt(cartItems) {
  var allPromotions = loadPromotions();
  var receiptItems = [];

  cartItems.forEach(function (cartItem) {
    var save = 0;

    allPromotions.forEach(function (promotion) {
      for (barcode of promotion.barcodes) {
        if (barcode === cartItem.item.barcode) {
          save = Math.floor(cartItem.amount / 3) * cartItem.item.price;
        }
      }
    });
    var total = cartItem.amount * cartItem.item.price;
    receiptItems.push({cartItem: cartItem, save: save, total: total});
  });

  return receiptItems;
}

