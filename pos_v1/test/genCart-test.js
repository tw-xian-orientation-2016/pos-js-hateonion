describe('genCart', function() {
  var inputs;
  var allItems;

  beforeEach(function() {
    allItems = loadAllItems();
    inputs = [
      'ITEM000001',
      'ITEM000001',
      'ITEM000001',
      'ITEM000001',
      'ITEM000001',
      'ITEM000003-2',
      'ITEM000005',
      'ITEM000005',
      'ITEM000005'
    ];
  });

  it('should return an object include item_object and amount', function() {

    var cartItems = genCart(inputs);
    var correctResult = [{item:{barcode: 'ITEM000001',
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
    expect(cartItems).toEqual(correctResult);
  });
});
