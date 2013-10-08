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
      jsonUser = jsonUser.replace(/var/g, "");
      console.log("jsonUSer ====> " + jsonUser);
      var matches = jsonUser.match(/\[(.*?)\]/);
      console.log("matches ====> " + matches);
      if (matches) {



        // $.each(matches, function(index, value) {

        console.log("matches 0 ===========================================>" + matches[0]);

        console.log("matches 1 ===========================================>" + matches[1]);

        //   var submatch = matches[index];
        //   console.log("submatch ====> " + submatch);  
        //   var arrayVariables = JSON.parse(submatch);
        //   console.log("arrayVariables ====> " + arrayVariables);  
          
        //   $.each(arrayVariables, function(key, val) {
        //     console.log("type ============================> " + typeof val);
        //     if(typeof val == "object"){
        //       variables["transactions"] = val;
        //     }
        //     else{
        //       variables[key] = val;
        //     }

        //     console.log("key ---->" + key);
        //     console.log("val ----->" + val);

          
            

        //   }); 
        // });

   //     console.log("final ===========================================>" + variables["transactions"]);


     // $.each(variables["transactions"], function(i, v) {

     //    console.log("key ---->" + i);
     //    console.log("val ----->" + v);

     // });

      // $.each(cartTotalOrder, function(key, val) {
      //   console.log("key ---->" + key);
      //   console.log("val ----->" + val.orderValue);
      //   itemsCart.push({
      //     "total_amount": val.orderValue,
      //     "shipping_cost": val.shippingValue,
      //     "payment_method": val.paymentMethod,
      //     "transaction_id": val.orderID,
      //     "product_category": val.productName,
      //     "quantity": val.quantity,
      //     "city": val.city
      //   });
       //});
/*      window._veroq.push(['track', 'Successful Purchase', {
        "cart": itemsCart
      }]); */
  }
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

