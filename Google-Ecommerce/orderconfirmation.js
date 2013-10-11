
//google analytics code



var maxCallsDataLayer = 6;

var veroEnsighten = function(){
maxCallsDataLayer--;
if (document.getElementById("dataLayer")) {

console.log("=============================GOOGLE ECOMMERCE===================");
    var jsonUser = [];
    jsonUser = $("#dataLayer").html();
    console.log("dataLayer ===========================> " + jsonUser);
    var jsonCant = jsonUser.split("var");
   
    if (jsonCant.length == 3) {
      
      jsonUser = jsonUser.replace(/var/g, "").replace(/\s/g, "");
      jsonUser = jsonUser.replace(",]", "]");
      console.log("jsonUSer ====> " + jsonUser);
      var pos = jsonUser.indexOf('}');
      var transactionsAux = jsonUser.substring(0, pos + 2).split('=');
      console.log("transactionsAux =====>" , transactionsAux);
      var transactionTotalOrderAux = jsonUser.substring(pos, (jsonUser.length )).split('=');
      console.log("transactionTotalOrderAux =====>" , transactionTotalOrderAux);
     
      var transactions = JSON.parse(transactionTotalOrderAux[1]);
      var itemsCart = new Array();
      console.log("transactions =====>" , transactions);
      
      $.each(transactions, function(index, value) {

        console.log("value.orderID ==============> " + value.orderID);
        console.log("value.orderValue ==============> " + value.orderValue);
        console.log("value.city ==============> " + value.city);
        console.log("value.state ==============> " + value.state);
        console.log("value.country ==============> " + value.country);
        console.log("value.quantity ==============> " + value.quantity);
        console.log("value.productSKU ==============> " + value.productSKU);
        console.log("value.productName ==============> " + value.productName);
        console.log("value.productCat ==============> " + value.productCat);
        console.log("value.unitPrice ==============> " + value.unitPrice);

       // _gaq.push(['_addTrans', value.orderID, '', value.orderValue, '', value.shippingValue, value.city, value.state, value.country]);
       // _gaq.push(['_addItem', value.orderID, value.productSKU, value.productName, value.productCat, value.unitPrice, value.quantity]);
      //_gaq.push(['_trackTrans']); //submits transaction to the Analytics servers  

      }); 
  }}
else{
    console.log("set timeout ====> will check in 1 sec");

    if(maxCallsDataLayer > 0){

      setTimeout(veroEnsighten, 1000); // check again in a second
    }
  }
};

veroEnsighten();
