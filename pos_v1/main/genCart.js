function genCart(input){
  barcodeProcessResult = barcodeProcess(input);
  cartItems = cartIteration(barcodeProcessResult);
  return cartItems;
}

function barcodeProcess(input){
  var sortedInput = input.sort();
  var barcodeCount = {};

  sortedInput.forEach(function(barcode, index){
    if(barcode.indexOf('-') === -1){
      if(barcode in barcodeCount){
        barcodeCount[barcode]++;
      }
      else{
        barcodeCount[barcode] = 1;
      }
    }
    else{
      var realBarcode = barcode.substr(0,barcode.indexOf('-'));
      if(realBarcode in barcodeCount){
        barcodeCount[realBarcode] += parseInt(barcode[barcode.indexOf('-') + 1]);
      }
      else{
        barcodeCount[realBarcode] =parseInt(barcode[barcode.indexOf('-') + 1]);
      }
    }
  });
  return barcodeCount;
}

function cartIteration(barcodeProcessResult){
  var allItems = loadAllItems();
  var cartItems = [];

  for(barcode in barcodeProcessResult){
    for(item of allItems){
      if(barcode === item.barcode){
        var cartItem = {};
        cartItem.item = item;
        cartItem.amount = barcodeProcessResult[barcode];
        cartItems.push(cartItem);
        break;
      }
    };
  };
  return cartItems;
}
