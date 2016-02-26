function genCart(tags) {
  var barcodeCounts = barcodeCount(tags);
  var cartItems = genCartItem(barcodeCounts);
  return cartItems;
}

function barcodeCount(tags) {
  var barcodeCounts = {};

  tags.forEach(function(currentTag) {
    var splitTag = currentTag.split('-');
    var currentBarcode = splitTag[0];
    var amount = parseFloat(splitTag[1]) || 1;
      if(currentTag in barcodeCounts) {
        barcodeCounts[currentBarcode] += amount;
      } else {
        barcodeCounts[currentBarcode] = amount;
      }
  });
  return barcodeCounts;
}

function genCartItem(barcodeCounts){
  var allItems = loadAllItems();
  var cartItems = [];

  for(barcode in barcodeCounts) {
    for(item of allItems) {
      if(barcode === item.barcode) {
        var cartItem = {};
        cartItem.item = item;
        cartItem.amount = barcodeCounts[barcode];
        cartItems.push(cartItem);
        break;
      }
    };
  };
  return cartItems;
}
