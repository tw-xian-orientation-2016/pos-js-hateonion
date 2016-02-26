function countSave(cartItems){
  var allPromotions = loadPromotions();
  var savedCartItems = [];


  cartItems.forEach(function(cartItem){
    var receiptItem = {};
    var save = 0;
    allPromotions.forEach(function(promotion){
      for(barcode of promotion.barcodes){
        if(barcode === cartItem.item.barcode){
          save = Math.floor(cartItem.amount / 3) * cartItem.item.price;
        }
      }
    });
    receiptItem.save = save;
    receiptItem.cartItem = cartItem;
    savedCartItems.push(receiptItem);
  });
  return savedCartItems;
}

function countTotal(savedCartItems){
  var receiptItems = [];

  savedCartItems.forEach(function(savedCartItem){
    var total = savedCartItem.cartItem.amount * savedCartItem.cartItem.item.price;
    savedCartItem.total = total;
    receiptItems.push(savedCartItem);
  });
  return receiptItems;
}

function genReceipt(cartItems){
  var savedCartItems = countSave(cartItems);
  var receiptItems = countTotal(savedCartItems);
  return receiptItems;
}
