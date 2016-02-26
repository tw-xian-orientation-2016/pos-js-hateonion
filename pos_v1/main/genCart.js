function genCart(tags) {
  barcodeCount = barcodeCount(tags);
  cartItems = cartIteration(barcodeCount);
  return cartItems;
}

function barcodeCount(tags) {
  var barcodeCounts = {};

  tags.forEach(function(currentTag) {
    var tagFormat = currentTag.split('-');
    var amount = parseFloat(tagFormat[1]) || 1;
      if(currentTag in barcodeCounts) {
        barcodeCounts[tagFormat[0]] += amount;
      } else {
        barcodeCounts[tagFormat[0]] = amount;
      }
  });
  return barcodeCounts;
}

function cartIteration(barcodeCounts){
  var allItems = loadAllItems();
  var cartItems = [];

  for(barcode in barcodeCounts){
    for(item of allItems) {
      if(barcode === item.barcode){
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
