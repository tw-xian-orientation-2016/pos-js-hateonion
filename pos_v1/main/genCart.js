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
            var realBarcode = barcode.substr(0,barcode.indexOf('-') - 1);
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
    var cartItem = {};

    for(barcode in barcodeProcessResult){
        allItems.forEach(function(item){
            if(barcode = item.barcode){
                cartItem.item = item;
                cartItem.amount = barcodeProcessResult[barcode];
                cartItems.push(cartItem);
                break;
            }
        });
    }
    return cartItems;
}
