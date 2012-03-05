var checkinWin;

var locationCheckin = function()
{
	//Ti.UI.createAlertDialog({ title: 'Worked!', message: 'In GPS Checkin.' }).show();

	if (Titanium.Geolocation.locationServicesEnabled==false) 
	{
	    Titanium.UI.createAlertDialog({title:'GPS', message:'Your device has geo turned off - please turn it on.'}).show();
	}
	else
	{
		/*
		var backBtn = Ti.UI.createButton({
			systemButton: Titanium.UI.iPhone.SystemButton.CANCEL
		});
		
		backBtn.addEventListener('click', function() {
			//checkinWin.close();
			Titanium.UI.currentTab.close(checkinWin,{animated:true});
		});
		*/
		checkinWin = Ti.UI.createWindow({
			title: L("Location Check In"),
			tabBarHidden:true,
			navBarHidden:false,
			barColor: '#036',
		    orientationModes : [
			Titanium.UI.PORTRAIT,
			Titanium.UI.UPSIDE_PORTRAIT
			]
		});
	
	
	    Titanium.Geolocation.accuracy = Titanium.Geolocation.ACCURACY_BEST;
	    var currentLongitude;
		var currentLatitude;
		
		
		Titanium.Geolocation.getCurrentPosition(function(e)
		{
			if (e.error)
			{
				currentLocation.text =  'First error: ' + JSON.stringify(e.error);
	            return;
			}
	
			currentLongitude = e.coords.longitude;
			currentLatitude = e.coords.latitude;
		});
		
		Titanium.UI.currentTab.open(checkinWin,{animated:true});
		
		// Set up Ajax calls to populate the list of check-in locations
		var xhr = Ti.Network.createHTTPClient();

		xhr.onerror = function (e) {
		    Ti.UI.createAlertDialog({ title: 'Error', message: 'Cannot communicate with server.  Please try again later.' }).show();
		    checkinWin.close();
		};
		xhr.setTimeout(10000);
		
		xhr.onload = function (e) {
			var row;
			var data = [];
			
			if (this.responseText != null)
			{
				var rowColor = '#e3e8ed';
				var locationIcon;
				var locationWidth;
				var locationHeight;
				var feetDistance;
				var miDistance;
				var displayDistance;
				var distanceUnits;
				var checkinlist = JSON.parse(this.responseText);
				var shortenedDesc = "";
				var reviewText = '';
				//Titanium.API.info('Number of leagues: ' + leaguelist.length);
				for (var i = 0; i < checkinlist.length; i++)
				{
					
					if (parseInt(checkinlist[i].LocType) == 0)
					{
						locationIcon = 'images/53-house.png';
						locationWidth = 22;
						locationHeight = 22;
					}
					else if (parseInt(checkinlist[i].LocType) > 30)
					{
						locationIcon = 'images/88-beer-glass.png';
						locationWidth = 22;
						locationHeight = 27;
					}
					else
					{
						locationIcon = 'images/football_ball.png';
						locationWidth = 24;
						locationHeight = 24;
					}
					
					if (checkinlist[i].LocDesc.length > 17)
					{ shortenedDesc = checkinlist[i].LocDesc.substr(0, 17) + "..."; }
					else { shortenedDesc = checkinlist[i].LocDesc; }
					
					
					var d2r = 0.0174532925199433;
					var lat1 = currentLatitude;
					var lon1 = currentLongitude;
					var lat2 = checkinlist[i].LocGPSLat;
					var lon2 = checkinlist[i].LocGPSLon;
	
					//var R = 6371; // km
					//var R = 3956; // mi
					var R = 3956; // feet
					var dLat = (lat2-lat1).toRad();
					var dLon = (lon2-lon1).toRad();
					lat1 = lat1.toRad();
					lat2 = lat2.toRad();
					
					var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
					        Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
					var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
					miDistance = R * c;
					feetDistance = Math.round(miDistance * 5280);
					miDistance = Math.round(miDistance * 10) / 10;
					if (feetDistance >= 1056)
					{
						displayDistance = miDistance;
						distanceUnits = 'miles';
					}
					else
					{
						displayDistance = feetDistance;
						distanceUnits = 'feet';
						if (displayDistance == 1) {displayDistance = 0;}
					}
					
					if (feetDistance < 2640)
					{
						if (rowColor == '#e3e8ed')
							rowColor = '#eef1f5';
						else
							rowColor = '#e3e8ed';
						
						var locationTypeBtn = Ti.UI.createButton({
							backgroundImage: locationIcon,
							height: locationHeight,
							width: locationWidth,
							top: 22,
							left: 5
						});
						
						locAddrLabel = Titanium.UI.createLabel({
						    color: '#487492',
						    text: checkinlist[i].LocAddress1.substr(0, 35),
						    font: { fontSize: 14, fontFamily: 'Ariel', fontWeight: 'bold' },
						    textAlign: 'left',
						    top: -42,
						    left: 40
						});
						locReviewLabel = Titanium.UI.createLabel({
						    color: '#999999',
						    text: reviewText,
						    font: { fontSize: 14, fontFamily: 'Ariel', fontWeight: 'bold' },
						    textAlign: 'left',
						    top: 40,
						    left: 40
						});
							
						if (reviewText == '')
						{ reviewText = 'reviews coming soon!'; }
						else if (reviewText == 'reviews coming soon!')
						{ reviewText = '...'; }
						
						locDescLabel = Titanium.UI.createLabel({
						    color: 'black',
						    text: shortenedDesc,
						    font: { fontSize: 20, fontFamily: 'Ariel' },
						    textAlign: 'left',
						    top: 0,
						    left: 40
						});
						locDistLabel = Titanium.UI.createLabel({
						    color: '#487492',
						    text: displayDistance,
						    font: { fontSize: 30, fontFamily: 'Ariel' },
						    textAlign: 'right',
						    top: 0,
						    right: 40
						});
						locDistUnitsLabel = Titanium.UI.createLabel({
						    color: '#487492',
						    text: distanceUnits,
						    font: { fontSize: 12, fontFamily: 'Ariel' },
						    textAlign: 'left',
						    top: 0,
						    left: 285
						});
										
						row = Ti.UI.createTableViewRow({
							height: 70,
							desc: checkinlist[i].LocDesc,
							id: checkinlist[i].LocID,
							type: checkinlist[i].LocType,
							backgroundColor: rowColor
							//leaguelist[i].LeagueName,
							//id: leaguelist[i].LeagueID,
							//active: leaguelist[i].Active,
							//color: rowColor
						});
						
						row.add(locationTypeBtn);
						row.add(locDescLabel);
						row.add(locAddrLabel);
						row.add(locDistLabel);
						row.add(locDistUnitsLabel);
						row.add(locReviewLabel);
						data.push(row);
					}
				}
			}
		    else
		    {
		    	//Titanium.API.info('No data');
		    	row = Ti.UI.createTableViewRow({
	        		height: 70,
	        		title: 'No locations found.  Please try again later.',
	        		id: 1
	    		});
				data.push(row);
		    }
			tv.setData(data);
		};
	
		var tv = Ti.UI.createTableView();
		
		tv.addEventListener('singletap', function(_e) {
			Ti.App.Properties.setString('currentLocation', _e.rowData.id);
			Ti.App.fireEvent('app:checkedIn', {
				message: 'test'
			});
			
			var thanksMessage;
			if (_e.rowData.desc == 'Home Check-In')
			{ thanksMessage = 'Thanks for checking in at home!'; }
			else { thanksMessage = 'Thanks for checking in at ' + _e.rowData.desc + '!'; }
			
			var popup = Ti.UI.createAlertDialog({
				title: 'Checked In!',
				message: thanksMessage
			});
			popup.addEventListener('click', function() {
				Titanium.UI.currentTab.close(checkinWin,{animated:true});
			});
			
			popup.show();
			//setTimeout(function()
			//{
			//	popup.hide();
			//	Titanium.UI.currentTab.close(checkinWin,{animated:true});
			//},3000);
		});
		
		function populateData() {
			Titanium.Geolocation.getCurrentPosition(function(e)
			{
				if (e.error)
				{
					currentLocation.text =  'First error: ' + JSON.stringify(e.error);
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
			
				xhr.open('GET', 'http://wcf.gametalklive.com/Checkin.svc/getcilocations/?lat=' + currentLatitude + '&lon=' + currentLongitude + '&gameID=0&userName=' + Ti.App.Properties.getString('currentUser') + '&appKey=1&deviceType=' + Ti.Platform.osname + '&deviceID=3');
				xhr.send();
			});
		}
		//run initial query
		populateData();
	
		//return tv;
		checkinWin.add(tv);
	}
}

/** Converts numeric degrees to radians */
if (typeof(Number.prototype.toRad) === "undefined") {
  Number.prototype.toRad = function() {
    return this * Math.PI / 180;
  }
}
