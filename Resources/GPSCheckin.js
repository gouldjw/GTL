// Gelocation Function

    Titanium.Geolocation.accuracy = Titanium.Geolocation.ACCURACY_BEST;

   //
   //  SET DISTANCE FILTER.  
  //   THIS DICTATES HOW OFTEN AN EVENT FIRES BASED ON THE DISTANCE THE DEVICE MOVES

    Titanium.Geolocation.distanceFilter = 2;
    Titanium.Geolocation.purpose = ''; //"Game Talk Live \"At the Game\" Check-in";
    

      //
    //  SHOW CUSTOM ALERT IF DEVICE HAS GEO TURNED OFF


if (Titanium.Geolocation.locationServicesEnabled==false) 
{
    Titanium.UI.createAlertDialog({title:'GPS', message:'Your device has geo turned off - please turn it on.'}).show();
}
else
{
    Titanium.Geolocation.accuracy = Titanium.Geolocation.ACCURACY_BEST;
    Titanium.Geolocation.preferredProvider = Titanium.Geolocation.PROVIDER_GPS;
}
	//
	//  SET DISTANCE FILTER.  THIS DICTATES HOW OFTEN AN EVENT FIRES 
        //  BASED ON THE DISTANCE THE DEVICE MOVES
	//  THIS VALUE IS IN METERS
	//
	

	//
	// GET CURRENT POSITION - THIS FIRES ONCE
	//
var currentLongitude;
var currentLatitude;


checkCurrentLocation = function(gameID) {
	Titanium.Geolocation.getCurrentPosition(function(e)
	{
		
		if (e.error)
		{
		currentLocation.text =  'First error: ' + JSON.stringify(e.error);
		//	currentLocation.text =  'No GPS-Signal ';
			
            return;
		}

		currentLongitude = e.coords.longitude;
		currentLatitude = e.coords.latitude;
		var altitude = e.coords.altitude;
		var heading = e.coords.heading;
		var accuracy = e.coords.accuracy;
		var speed = e.coords.speed;
		var timestamp = e.coords.timestamp;
		var altitudeAccuracy = e.coords.altitudeAccuracy;
		
		/*
		var currentLocation = Ti.UI.createLabel({
			backgroundColor: '#FFFFFF',
			width: 230,
			height: 140,
			top: 100,
			color: '#000000',
			textAlign: 'center',
			text: 'Your current location is: ' + '\n' + '\n' + ' long: ' + longitude + '\n' + ' lat: ' + latitude + '\n' + ' accuracy: ' + accuracy
		});
		*/
		
		//Ti.UI.createAlertDialog({ title: 'GPS Test', message: 'Longitude: ' + longitude + '\nLatitude: ' + latitude }).show();
		//winGPS.add(currentLocation);
		var curUser = Ti.App.Properties.getString('currentUser');
		gpsCheckinAjax.open('GET', 'http://wcf.gametalklive.com/Chat.svc/getgameloc/?userName=' + curUser + '&gameid=' + gameID + '&lat=' + currentLatitude + '&lon=' + currentLongitude);
		gpsCheckinAjax.send();

	});
};


// Set up web service caller for GPS
var gpsCheckinAjax = Ti.Network.createHTTPClient();

gpsCheckinAjax.onerror = function (e) {
    Ti.UI.createAlertDialog({ title: 'Error', message: 'Cannot communicate with server.  Please try again later.' }).show();
};
gpsCheckinAjax.setTimeout(10000);

gpsCheckinAjax.onload = function (e) {
	var gameLocationInfo = JSON.parse(this.responseText);
	var venueDescription = gameLocationInfo[0].GameVenueDesc;
	var venueLatitude = gameLocationInfo[0].GameVenueGPSLat;
	var venueLongitude = gameLocationInfo[0].GameVenueGPSLon;
	var latDistance;
	var lonDistance;
	var hypDistance;
	var feetDistance;
	
//	currentLatitude = 39.76431;
//	currentLongitude = -86.164048;
	


///  Commented out in lieu of better GPS check-in procedure. -- 1/20/2012
/*
	if (venueDescription != '')
	{
		if (currentLatitude < venueLatitude) {latDistance = venueLatitude - currentLatitude;}
		else {latDistance = currentLatitude - venueLatitude;}
		
		if (currentLongitude < venueLongitude) {lonDistance = venueLongitude - currentLongitude;}
		else {lonDistance = currentLongitude - venueLongitude;}
		
		hypDistance = Math.sqrt((latDistance * latDistance) + (lonDistance * lonDistance));
		feetDistance = hypDistance * 607623.2558;
		
		if (!isNaN(parseFloat(hypDistance)) && feetDistance <= 2640)
		{
			Ti.UI.createAlertDialog({ title: 'Welcome to\n' + venueDescription, message: 'It looks like you\'re at the game!\nBe sure to log into Game Talk Live at every sporting event for special offers, games and many more features coming soon!' }).show();
		}
	}
*/
	
	//Ti.UI.createAlertDialog({ title: 'GPS Test', message: gameLocationInfo[0].GameVenueDesc }).show();
}




