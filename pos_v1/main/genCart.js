function genCart(tags) {
  var barcodeCounts = barcodeCount(tags);
  var cartItems = generateCartItem(barcodeCounts);
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

function generateCartItem(barcodeCounts){
  var allItems = loadAllItems();
  var cartItems = [];

  for(barcode in barcodeCounts) {
    for(item of allItems) {
      if(barcode === item.barcode) {
        cartItems.push({item: item, amount: barcodeCounts[barcode]});
        break;
      }
    };
  };
  return cartItems;
}
