function ios7StatusBarBump(detectedClass,statusBarElementClass,nonIOS7test) {
  var userAgentStr = /(iPad|iPhone);.*CPU.*OS 7_\d/i,
      statusBarHtml = "<span class="+statusBarElementClass+"></span>";

      if(navigator.userAgent.match(userAgentStr)){ // is ios7
        addElement(detectedClass,statusBarHtml);
      }
  
      if(nonIOS7test == 1){
        addElement(detectedClass,statusBarHtml);
      }

      function addElement(detectedClass,statusBarHtml){
        $('body').addClass(detectedClass).prepend(statusBarHtml);
      }
}

// pass class for body, added element's class, 0 or 1
// 1 = for non ios7 testing
ios7StatusBarBump('ios7-detected','status-bar-bump',0);