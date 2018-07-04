function load() {

var loc = document.location.href;
//alert(loc);
if(loc == 'http://www.bellsfeeds.co.uk/contact/'){
      if (GBrowserIsCompatible()) {
        var map = new GMap2(document.getElementById("map"));
	map.addControl(new GSmallMapControl());
	map.addControl(new GMapTypeControl());
	map.setCenter(new GLatLng(53.280833, -2.384177), 11);
	map.openInfoWindow(map.getCenter(),document.createTextNode("Bells Feeds"));
      }
}

}

function addEvent(obj, evType, fn){
 if (obj.addEventListener){
   obj.addEventListener(evType, fn, true);
   return true;
 } else if (obj.attachEvent){
   var r = obj.attachEvent("on"+evType, fn);
   return r;
 } else {
   return false;
 }
}

