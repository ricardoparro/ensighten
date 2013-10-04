if (document.getElementById("dataLayer")) {
    var jsonUser = [];
    jsonUser = $("#dataLayer").html();
    var jsonCant = jsonUser.split("var");
    if (jsonCant.length == 3) {
      jsonUser = jsonUser.replace(/var/g, "");
      var matches = jsonUser.match(/\[(.*?)\]/);

if (matches) {
    var submatch = matches[1];
    var arrayVariables = JSON.parse(submatch);
    var productId = arrayVariables['productId'];
    var orderTotalID = arrayVariables['orderTotalID'];
    var orderTotalValue = arrayVariables['orderTotalValue'];
        //struq event call
     window._struqPI = window._struqPI || [];
    _struqPI.push(['injectTrackingPixel', {
    trackingPixelId: 'R7gz2c1iYUWxHSxQA-AS7A',
    route: '/s/cda/',
    collectData: false,
     data: [{ title: "li", pid: productId, qty: "1", tv: "1"},
          { title: "summary", oid: orderTotalID, tot: orderTotalValue, dis: "0", cur: "BRL"}
         ],
         options: { timeoutMs: 2000, firstPartyDomain: '.printi.com.br', firstPartyCookie: '', firstPartyUid: '' }
}]);
    (function() {
     var struq = document.createElement('script'); struq.type = 'text/javascript'; struq.async = true;
     struq.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'media.struq.com/content/scripts/Struq_Us_Pixel_Injector_min_v1-9.js';
     var s = document.getElementsByTagName('head')[0].appendChild(struq);
    })();  

}
    }
}