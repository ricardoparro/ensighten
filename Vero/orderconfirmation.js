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
      window._veroq.push(['track', 'Successful Purchase', {
        "cart": itemsCart
      }]);
  }
}
else{


  
}



//==============================================================================================================
//==============================================================================================================

var analyticsEnsighten =  
function(){
maxCallsDataLayer--;
if (document.getElementById("dataLayer")) {
    
    console.log("dataLayer element exists");
    var jsonUser = [];
    jsonUser = $("#dataLayer").html();
    console.log(jsonUser);
    var jsonCant = jsonUser.split("var");
    console.log(jsonCant);
    console.log(jsonCant.length);
    if (jsonCant.length == 2) {
      jsonUser = jsonUser.replace(/var/g, "");
      console.log("jsonUSer ====> " + jsonUser);
      var matches = jsonUser.match(/\[(.*?)\]/);
      console.log("matches ====> " + matches);
      if (matches) {
        var submatch = matches[1];
        console.log("submatch ====> " + submatch);  
        var arrayVariables = JSON.parse(submatch);
        console.log("arrayVariables ====> " + arrayVariables);  
        productId = arrayVariables['productVisited'];
        console.log("productVisited ====> " + productId);  

       sendVariables();
    }
  }
  }
  else {
        console.log("set timeout ====> will check in 1 sec");

        if(maxCallsDataLayer > 0){

          setTimeout(analyticsEnsighten, 1000); // check again in a second
        }
  }
};


var sendVariables = function(){ 
  maxCallsProductId--;
        if(productId != ""){
          
          console.log("productVisited going to be sent to vendor ====> " + productId); 

        window._struqPI = window._struqPI || [];
        _struqPI.push(['injectTrackingPixel', {
          trackingPixelId: 't8ysNFDjmUiZmN1Ks_wWaA',
          route: '/s/sa/',
          collectData: false,
          data: [{ title: "detail", pid: productId }],
          options: { timeoutMs: 2000, firstPartyDomain: '.printi.com.br', firstPartyCookie: '', firstPartyUid: '' }
        }]);
         (function() {
          var struq = document.createElement('script'); struq.type = 'text/javascript'; struq.async = true;
          struq.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'media.struq.com/content/scripts/Struq_Us_Pixel_Injector_min_v1-9.js';
          var s = document.getElementsByTagName('head')[0].appendChild(struq);
          });
      }
    else{
      if(maxCallsProductId > 0){
        console.log("set timeout ====> will check in 1 sec");
        setTimeout(analyticsEnsighten, 1000); // check again in a second
      }
    }
};


analyticsEnsighten();