//LAzy loading for a specific jquery that is needed to load this javascript
var s = document.createElement('script');
s.type = 'text/javascript';
s.async = true;
s.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js';
var x = document.getElementsByTagName('script')[0];
x.parentNode.insertBefore(s, x);

//vero code

var maxCallsDataLayer = 6;

var veroEnsighten = function(){
maxCallsDataLayer--;
if (document.getElementById("dataLayer")) {
    var jsonUser = [];
    jsonUser = $("#dataLayer").html();
    var jsonCant = jsonUser.split("var");
   
    if (jsonCant.length == 3) {
      
      jsonUser = jsonUser.replace(/var/g, "").replace(/\s/g, "");
      jsonUser = jsonUser.replace(",]", "]");
      console.log("jsonUSer ====> " + jsonUser);
      var pos = jsonUser.indexOf('}');
      var transactionsAux = jsonUser.substring(0, pos + 2).split('=');
      console.log("transactionsAux =====>" , transactionsAux);
      var transactionTotalOrderAux = jsonUser.substring(pos, (jsonUser.length - 1)).split('=');
      console.log("transactionTotalOrderAux =====>" , transactionTotalOrderAux);
     
      var transactions = $.parseJSON(transactionTotalOrderAux[1]);
      var itemsCart = new Array();
      console.log("transactions =====>" , transactions);
      
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
        console.log("total_amount ==============> " + v["total_amount"]);
        console.log("shipping_cost ==============> " + v["shipping_cost"]);
        console.log("payment_method ==============> " + v["payment_method"]);
        console.log("transaction_id ==============> " + v["transaction_id"]);
        console.log("product_category ==============> " + v["product_category"]);
        console.log("quantity ==============> " + v["quantity"]);
        console.log("city ==============> " + v["city"]);

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
