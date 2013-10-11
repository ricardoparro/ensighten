if (document.getElementById("dataLayer")) {
    var jsonUser = [];
    jsonUser = $("#dataLayer").html();
    var jsonCant = jsonUser.split("var");
    if (jsonCant.length == 2) {
        jsonUser = jsonUser.replace(/var/g, "");
        var myObject = eval('(' + jsonUser + ')');
        $.each(myObject, function (key, val) {
            alert(val.custEmail)
        });
    } else if (jsonCant.length == 3) {
        var transactionTotalOrder = eval('(' + jsonCant[1] + ')');
        $.each(transactionTotalOrder, function (key, val) {

            //alert(val.orderTotalID)
            //alert(val.orderTotalValue)
        });
        var cartTotalOrder = eval('(' + jsonCant[2] + ')');
        $.each(cartTotalOrder, function (key, val) {            
                //console.log(val.orderID + "," + val.orderValue + "," + val.shippingValue + ","+ val.city + ","+ val.state+","+ val.country+ "\n");
                //console.log(val.orderID+","+ val.productSKU+","+ val.productName+","+ val.productCat+","+ val.unitPrice+","+ val.quantity+"\n");
                _gaq.push(['_addTrans', val.orderID, '', val.orderValue, '', val.shippingValue, val.city, val.state, val.country]);
                _gaq.push(['_addItem', val.orderID, val.productSKU, val.productName, val.productCat, val.unitPrice, val.quantity]);
                _gaq.push(['_trackTrans']); //submits transaction to the Analytics servers             
        });
    }
}