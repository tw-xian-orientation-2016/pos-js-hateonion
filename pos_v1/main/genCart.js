function genCart(input){
    var tempObject = {},
        tempCartItem = {};
    var allItems = loadAllItems();
    var count;
    var cartItems = [],
        barcodeProcessResult = [];
    tempCartItem.amount = 0;
    barcodeCache = [];

    input.forEach(function(barcode){
        barcodeCache.push(barcode);
        if (barcodeCache.indexof(barcode) === -1){
            allItems.forEach(function(item){
                if(barcode === item.barcode){
                    tempCartItem.item = item;
                    cartItems.push(tempCartItem);
                }
            }
        })
    })
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
