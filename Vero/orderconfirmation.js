var trimComma = function(stringToTest){
  var len= stringToTest.length; // length of the original string
  var lastChar = stringToTest.substring(len-1, len); // get the last char of the original string
  if (lastChar == ",") { // if the last char is dot, remove the last char
    result = stringToTest.substring(0, len-1);
  }
  else { // otherwise do nothing
    result = stringToTest;
  }
  return result;
}

var maxCallsDataLayer = 6;
var maxCallsProductId = 6;
console.log("entrou");

var variables = new Array();

var veroEnsighten = function(){
maxCallsDataLayer--;
if (document.getElementById("dataLayer")) {
    console.log("dataLayer element exists");
    var jsonUser = [];
    jsonUser = $("#dataLayer").html();
    console.log(jsonUser);
    var jsonCant = jsonUser.split("var");
    console.log(jsonCant);
    console.log(jsonCant.length);
    if (jsonCant.length == 3) {
      jsonUser = jsonUser.replace(/var/g, "").replace(/\s/g, "");
      
      console.log("jsonUSer ====> " + jsonUser);
      var pos = jsonUser.indexOf('}');
      console.log("position ==============> " + pos);

      var transactionsAux = jsonUser.substring(0, pos + 2).split('=');
      var transactionTotalOrderAux = jsonUser.substring(pos, (jsonUser.length - 1)).split('=');

      console.log(transactionsAux[1]);
      var transactionTotalOrder = $.parseJSON( trimComma(transactionsAux[1]));
      var transactions = $.parseJSON(trimComma(transactionTotalOrderAux[1]));

      console.log("transactions ==============> " + transactions);
      console.log("transactionTotalOrder ==============> " + transactionTotalOrder);
      var itemsCart = new Array();

      $.each(transactions, function(index, value) {

        console.log("city ==============> " + value.city);

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

      // window._veroq.push(['track', 'Successful Purchase', {
      //   "cart": transactions
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

//==============================================================================================================
//==============================================================================================================

