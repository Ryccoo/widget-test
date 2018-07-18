//window.onload = function() {
//  console.log('+[window.onload]');
//  // Do nothing now
//  var url = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=demo";
//  console.log(document.getElementById('debug	'));
//  document.addEventListener('visibilityChange', visibilityChanged, false);
//  
//  function visibilityChanged() {
//		console.log("VISIBILITY");
//		document.getElementById("debug").innerHTML = "Blah";
//	}
//};
//
//
//function getDataFromNetwork(file, handler) {
//    var xhr = new XMLHttpRequest();
//    xhr.open('GET', file, true);
//    xhr.onreadystatechange = handler;
//    xhr.onload = function() {
//        if (this.status == 200) {
//            /* Handle the response */
//        }
//    };
//    xhr.send();
//}
//
///* If getting JSON data */
//function handleResponseJSON(e) {
//    if (e.target.readyState == 4) {
//        if (e.target.status == 200) {
////            var data = JSON.parse(e.target.responseText);
//            console.log(e);
//            console.log(e.target);
//            console.log(e.target.responeText);
//        } else {
//            /* Error handling */
//        }
//    }
//}

(function() {
	var mytext = 'something';
	
	
	function keyEventHandler(event) {
		document.getElementById('debug').textContent = "Key event";
//        if (event.keyName === "back") {
//            try {
////                tizen.application.getCurrentApplication().exit();
//            		document.getElementById('debug').textContent = "Back key";
//            } catch (ignore) {}
//        }
    }
	
	function visibilityChanged(event) {
		document.getElementById('debug').textContent = event.visibilityState;
	}
	
    /**
     * Initializes the application
     * @private
     */
    function init() {
    		document.getElementById('debug').textContent = mytext;
    		
    		document.addEventListener('tizenhwkey', keyEventHandler);
    		document.addEventListener('visibilityChange', visibilityChanged);
    		document.addEventListener("webkitvisibilitychange", visibilityChange);
    }

    window.onload = init();
}());
