var maxCallsDataLayer = 6;
var maxCallsProductId = 6;
console.log("entrou");

if (document.getElementById("dataLayer")) {
    console.log("dataLayer element exists");
    var jsonUser = [];
    jsonUser = $("#dataLayer").html();
    console.log(jsonUser);
    var jsonCant = jsonUser.split("var");
    console.log(jsonCant);
    console.log(jsonCant.length);
    if (jsonCant.length == 3) {
      var itemsCart = [];
      var cartTotalOrder = eval('(' + jsonCant[2] + ')');
      
      $.each(cartTotalOrder, function(key, val) {
        console.log("key ---->" + key);
        console.log("val ----->" + val.orderValue);
        itemsCart.push({
          "total_amount": val.orderValue,
          "shipping_cost": val.shippingValue,
          "payment_method": val.paymentMethod,
          "transaction_id": val.orderID,
          "product_category": val.productName,
          "quantity": val.quantity,
          "city": val.city
        });
      });
/*      window._veroq.push(['track', 'Successful Purchase', {
        "cart": itemsCart
      }]); */
  }
}



//==============================================================================================================
//==============================================================================================================

