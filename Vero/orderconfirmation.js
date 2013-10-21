
//vero code

var maxCallsDataLayer = 6;

var veroEnsighten = function(){
maxCallsDataLayer--;
if (document.getElementById("dataLayer")) {
    console.log("======================== VERO =======================================================");
    var jsonUser = [];
    jsonUser = $("#dataLayer").html();
    var jsonCant = jsonUser.split("var");
   
    if (jsonCant.length == 3) {
      
      jsonUser = jsonUser.replace(/var/g, "");
      jsonUser = jsonUser.replace(",]", "]");
      var pos = jsonUser.indexOf('}');
      var transactionsAux = jsonUser.substring(0, pos + 2).split('=');
      var transactionTotalOrderAux = jsonUser.substring(pos, (jsonUser.length )).split('=');
     
      var transactions = JSON.parse(transactionTotalOrderAux[1]);
      var itemsCart = new Array();
      
      $.each(transactions, function(index, value) {

        itemsCart.push({
          "total_amount": value.orderValue,
          "shipping_cost": value.shippingValue,
          "payment_method": value.paymentMethod,
          "transaction_id": value.orderID,
          "product_category": value.productName,
          "quantity": value.quantity,
          "city": value.city
        });
      });

      $.each(itemsCart, function(i,v){
        console.log("total_amount ==============> " + v['total_amount']);
        console.log("shipping_cost ==============> " + v['shipping_cost']);
        console.log("payment_method ==============> " + v['payment_method']);
        console.log("transaction_id ==============> " + v['transaction_id']);
        console.log("product_category ==============> " + v['product_category']);
        console.log("quantity ==============> " + v['quantity']);
        console.log("city ==============> " + v['city']);

      });

      // window._veroq.push(['track', 'Successful Purchase', {
      //   "cart": itemsCart
      // }]);
}}
else{
    console.log("set timeout ====> will check in 1 sec");

    if(maxCallsDataLayer > 0){

      setTimeout(veroEnsighten, 1000); // check again in a second
    }
  }
};

veroEnsighten();
