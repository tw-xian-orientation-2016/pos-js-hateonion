describe('genReceipt', function() {
    var cartItems;
    var allPromotions;

    beforeEach(function() {
        allItems = loadPromotions();
        cartItems = [{item:{barcode: 'ITEM000001',
            name: '雪碧',
            unit: '瓶',
            price: 3.00},
            amount: 5},
            {item:{barcode: 'ITEM000003',
                name: '荔枝',
                unit: '斤',
                price: 15.00},
                amount: 2},
                {item:{barcode: 'ITEM000005',
                    name: '方便面',
                    unit: '袋',
                    price: 4.50},
                    amount: 3}];
    });

    it('should return an object include cartItem,save and total', function() {

        var receiptItems = genReceipt(cartItems);
        var correctResult = [{cartItem:{item:{barcode: 'ITEM000001',
            name: '雪碧',
            unit: '瓶',
            price: 3.00},
            amount: 5},
            total: 15.00,
            save: 3.00},
            {cartItem:{item:{barcode: 'ITEM000003',
                name: '荔枝',
                unit: '斤',
                price: 15.00},
                amount: 2},
                total: 30.00,
                save: 0.00},
                {cartItem: {item:{barcode: 'ITEM000005',
                    name: '方便面',
                    unit: '袋',
                    price: 4.50},
                    amount: 3},
                    total: 13.50,
                    save: 4.50}];
        expect(receiptItems).toEqual(correctResult);
    });
});
