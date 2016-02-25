function printInventory(receiptItems){
    var first_line = '***<没钱赚商店>收据***\n';
    var split_line = '----------------------\n';
    var star_line = '**********************';

    var final_money = 0;
    var total_save = 0;
    var print_content = "";
    print_content += first_line;

    receiptItems.forEach(function(receipt_item){
        final_money += receipt_item.total - receipt_item.save;
        total_save += receipt_item.save;
    });

    var final_money_line = "总计：" + final_money.toFixed(2) + "(元)\n";
    var total_save_line = "节省：" + total_save.toFixed(2) + "(元)\n";
    receiptItems.forEach(function(receipt_item){
        var print_pattern = "名称：" + receipt_item.cartItem.item.name + "，" + "数量：" + receipt_item.cartItem.amount + receipt_item.cartItem.item.unit + "，单价：" + receipt_item.cartItem.item.price.toFixed(2) + "(元)，小计：" + (receipt_item.total - receipt_item.save).toFixed(2) + "(元)\n";
        print_content += print_pattern;
    });

    print_content += split_line;
    print_content += final_money_line;
    print_content += total_save_line;
    print_content += star_line;

    console.log(print_content);
}
