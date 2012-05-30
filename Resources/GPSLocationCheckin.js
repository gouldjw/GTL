var checkinWin;
Ti.Geolocation.preferredProvider = "gps";
var currentLongitudeCheckin;
var currentLatitudeCheckin;

var locationCheckin = function()
{
	//Ti.UI.createAlertDialog({ title: 'Worked!', message: 'In GPS Checkin.' }).show();

	if (Titanium.Geolocation.locationServicesEnabled==false) 
	{
	    Titanium.UI.createAlertDialog({title:'GPS', message:'Your device has geo turned off - please turn it on.'}).show();
	}
	else
	{
		if (Titanium.Platform.name != 'android') {
			var authorization = Titanium.Geolocation.locationServicesAuthorization;
			Ti.API.info('Authorization: '+authorization);
			if (authorization == Titanium.Geolocation.AUTHORIZATION_DENIED) {
				Ti.UI.createAlertDialog({
					title:'GPS',
					message:'You have disallowed Titanium from running geolocation services.'
				}).show();
			}
			else if (authorization == Titanium.Geolocation.AUTHORIZATION_RESTRICTED) {
				Ti.UI.createAlertDialog({
					title:'GPS',
					message:'Your system has disallowed Titanium from running geolocation services.'
				}).show();
			}
		}
	
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
	    Titanium.Geolocation.distanceFilter = 10;
	    Titanium.Geolocation.purpose = '';
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
			var timestamp = e.coords.timestamp;
		});
		
		Titanium.UI.currentTab.open(checkinWin,{animated:true});
		
		// Set up Ajax calls to populate the list of check-in locations
		var xhr = Ti.Network.createHTTPClient();

		xhr.onerror = function (e) {
		    //Ti.UI.createAlertDialog({ title: 'Error', message: 'Cannot communicate with server.  Please try again later.' }).show();
		    Titanium.UI.currentTab.close(checkinWin,{animated:true});
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
					
					if (checkinlist[i].LocDesc.length > 20)
					{ shortenedDesc = checkinlist[i].LocDesc.substr(0, 18) + "..."; }
					else { shortenedDesc = checkinlist[i].LocDesc; }
					
					
					var d2r = 0.0174532925199433;
					var lat1 = currentLatitudeCheckin;
					var lon1 = currentLongitudeCheckin;
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
						    top: 2,
						    left: 40
						});
						locReviewLabel = Titanium.UI.createLabel({
						    color: '#999999',
						    text: reviewText,
						    font: { fontSize: 14, fontFamily: 'Ariel', fontWeight: 'bold' },
						    textAlign: 'left',
						    top: 49,
						    left: 40
						});
							
						if (reviewText == '')
						{ reviewText = 'reviews coming soon!'; }
						else if (reviewText == 'reviews coming soon!')
						{ reviewText = '...'; }
						
						locDescLabel = Titanium.UI.createLabel({
						    color: 'black',
						    text: shortenedDesc,
						    font: { fontSize: 18, fontFamily: 'Ariel' },
						    textAlign: 'left',
						    top: 25,
						    left: 40
						});
						locDistLabel = Titanium.UI.createLabel({
						    color: '#487492',
						    text: displayDistance,
						    font: { fontSize: 30, fontFamily: 'Ariel' },
						    textAlign: 'right',
						    top: 18,
						    right: 40
						});
						locDistUnitsLabel = Titanium.UI.createLabel({
						    color: '#487492',
						    text: distanceUnits,
						    font: { fontSize: 12, fontFamily: 'Ariel' },
						    textAlign: 'left',
						    top: 28,
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
						
						if (parseInt(checkinlist[i].LocType) != 0)
						{
							row.add(locDistLabel);
							row.add(locDistUnitsLabel);
						}
						
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
		
		tv.addEventListener('longclick', function(_e) {
			tv.deselectRow(_e.index);
		});
		
		tv.addEventListener('click', function(_e) {
			
			Ti.App.Properties.setString('currentLocation', _e.rowData.id);
			Ti.App.fireEvent('app:checkedIn', {
				message: 'test'
			});
			
			var askForSeat = false;
			var privacyWinHeight = 250;
			var privacyWinTop = 125;
			if (parseInt(_e.rowData.type) > 0 && parseInt(_e.rowData.type) < 30)
			{
				askForSeat = true;
				privacyWinHeight = 350;
				privacyWinTop = 75;
			}
			
			var thanksMessage = '';
			var privacyMessage = '';
			if (_e.rowData.desc == 'Home Check-In')
			{ thanksMessage = 'Thanks for checking in\nat home!';
			  privacyMessage = '\n(Home address location will NEVER be shared.)' }
			else { thanksMessage = 'Thanks for checking in at\n' + _e.rowData.desc + '!'; }
			
//			var popup = Ti.UI.createAlertDialog({
//				title: 'Checked In!',
//				message: thanksMessage
//			});
//			popup.addEventListener('click', function() {
//				Titanium.UI.currentTab.close(checkinWin,{animated:true});
//			});
			
//			popup.show();

			var t = Titanium.UI.create2DMatrix();
			t = t.scale(0);
		
			var privacyWin = Ti.UI.createWindow({
				title: L("Privacy Check"),
			    backgroundColor:'#FFFFFF',
				borderWidth:2,
				borderColor:'#000000',
				height: privacyWinHeight,
				width:250,
				top: privacyWinTop,
				borderRadius:8,
				opacity:1,
				transform:t
			});
			
			var backgroundWin = Ti.UI.createWindow({
				backgroundColor: '#000000',
				opacity: 0.5
			});
			
			var privacyView = Ti.UI.createScrollView({
				height: privacyWinHeight
			});
			
			var privacyTitle = Ti.UI.createLabel({
				text: thanksMessage,
				height: 64,
				width: 240,
				top: 0,
				font:{fontColor: '#000',
						 fontWeight: 'bold',
						 fontFamily: 'Helvetica Neue',
						 fontSize: 16},
						 opacity: '.8',
				textAlign: 'center'
			});
			
			var privacyText = Ti.UI.createLabel({
				text: 'Would you like your check-in location to appear next to your username in the game room?\n' + privacyMessage,
				height: 120,
				width: 230,
				top: 55,
				font:{fontColor: '#000',
						 fontWeight: 'normal',
						 fontFamily: 'Helvetica Neue',
						 fontSize: 14},
						 opacity: '.8',
				textAlign: 'center'
			});
			
			var publicYes = Ti.UI.createButton({
				height: 32,
				width: 75,
				left: 30,
				top: 190,
				title: 'Yes!',
				color: '#000000'
			});
			
			var publicNo = Ti.UI.createButton({
				height: 32,
				width: 75,
				right: 30,
				top: 190,
				title: 'No!',
				color: '#000000'
			});
			
			
			privacyWin.add(privacyView);
			privacyView.add(privacyTitle);
			privacyView.add(privacyText);
			privacyView.add(publicYes);
			privacyView.add(publicNo);
			
			
			if (askForSeat)
			{
				var askForSeatLabel = Ti.UI.createLabel({
					text: '(OPTIONAL) You can also provide your Section, Row and Seat number to make yourself eligible for promotions and drawings!',
					height: 80,
					width: 230,
					top: 52,
					font:{fontColor: '#000',
							 fontWeight: 'normal',
							 fontFamily: 'Helvetica Neue',
							 fontSize: 14},
							 opacity: '.8',
					textAlign: 'center'
				});
				
				var sectionInput = Ti.UI.createTextField({
				    color: '#336699',
				    height: 30,
				    top: 140,
				    width: 100,
				    hintText: 'Section',
				    borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
				    autocapitalization:Titanium.UI.TEXT_AUTOCAPITALIZATION_NONE,
				    autocorrect:false,
				    font: { fontSize: 14, fontFamily: 'Ariel' }
				});
				
				var rowInput = Ti.UI.createTextField({
				    color: '#336699',
				    height: 30,
				    top: 180,
				    width: 100,
				    hintText: 'Row',
				    borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
				    autocapitalization:Titanium.UI.TEXT_AUTOCAPITALIZATION_NONE,
				    autocorrect:false,
				    font: { fontSize: 14, fontFamily: 'Ariel' }
				});
				
				var seatInput = Ti.UI.createTextField({
				    color: '#336699',
				    height: 30,
				    top: 220,
				    width: 100,
				    hintText: 'Seat Number',
				    borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
				    autocapitalization:Titanium.UI.TEXT_AUTOCAPITALIZATION_NONE,
				    autocorrect:false,
				    font: { fontSize: 14, fontFamily: 'Ariel' }
				});
				
				
				var seatYes = Ti.UI.createButton({
					height: 32,
					width: 200,
					top: 260,
					title: 'Sounds good to me!',
					color: '#000000'
				});
				
				var seatNo = Ti.UI.createButton({
					height: 32,
					width: 200,
					top: 300,
					title: 'No Thanks!',
					color: '#000000'
				});
				
				
				seatYes.addEventListener('click', function()
				{
					if (sectionInput.value == '' && rowInput.value == '' && seatInput.value == '')
					{
						Ti.UI.createAlertDialog({
				    		title: 'Nothing Entered!', message:"Please enter at least one value or choose 'No Thanks!'"
				    	}).show();
					}
					else
					{
						Ti.UI.createAlertDialog({
				    		title: 'Thanks!', message:"Thank you for entering your seat location."
				    	}).show();
//						checkinObj.isPrivate = 0;
						postCheckin(checkinObj);
						backgroundWin.close();
						privacyWin.close();
						checkinWin.remove(tv);
						Titanium.UI.currentTab.close(checkinWin,{animated:true});
					}
				});
				
				seatNo.addEventListener('click', function()
				{
//					checkinObj.isPrivate = 1;
					postCheckin(checkinObj);
					backgroundWin.close();
					privacyWin.close();
					checkinWin.remove(tv);
					Titanium.UI.currentTab.close(checkinWin,{animated:true});
				});
				
				

			
				publicYes.addEventListener('click', function()
				{
					checkinObj.isPrivate = 0;
					privacyView.remove(privacyText);
					privacyView.remove(publicYes);
					privacyView.remove(publicNo);
					privacyView.add(askForSeatLabel);
					privacyView.add(sectionInput);
					privacyView.add(rowInput);
					privacyView.add(seatInput);
					privacyView.add(seatYes);
					privacyView.add(seatNo);
				});
				
				publicNo.addEventListener('click', function()
				{
					checkinObj.isPrivate = 1;
					privacyView.remove(privacyText);
					privacyView.remove(publicYes);
					privacyView.remove(publicNo);
					privacyView.add(askForSeatLabel);
					privacyView.add(sectionInput);
					privacyView.add(rowInput);
					privacyView.add(seatInput);
					privacyView.add(seatYes);
					privacyView.add(seatNo);
				});
			}
			
			else
			{
			
				publicYes.addEventListener('click', function()
				{
					checkinObj.isPrivate = 0;
					postCheckin(checkinObj);
					backgroundWin.close();
					privacyWin.close();
					checkinWin.remove(tv);
					Titanium.UI.currentTab.close(checkinWin,{animated:true});
				});
				
				publicNo.addEventListener('click', function()
				{
					checkinObj.isPrivate = 1;
					postCheckin(checkinObj);
					backgroundWin.close();
					privacyWin.close();
					checkinWin.remove(tv);
					Titanium.UI.currentTab.close(checkinWin,{animated:true});
				});
				
			}
			
			
			var t1 = Titanium.UI.create2DMatrix();
			t1 = t1.scale(1.1);
			var a = Titanium.UI.createAnimation();
			a.transform = t1;
			a.duration = 200;
		
			a.addEventListener('complete', function()
			{
				var t2 = Titanium.UI.create2DMatrix();
				t2 = t2.scale(1.0);
				privacyWin.animate({transform:t2, duration:200});
			});
		
			backgroundWin.open();
			privacyWin.open(a);
		
			

			var checkinObj;
			var secInputVal;
			var rowInputVal;
			var seatInputVal;
			if (askForSeat)
			{
				secInputVal = sectionInput.value;
				rowInputVal = rowInput.value;
				seatInputVal = seatInput.value;
			}
			else
			{
				secInputVal = '';
				rowInputVal = '';
				seatInputVal = '';
			}
			
			
			checkinObj = {
				'gameID': currGameID,
				'userName': Ti.App.Properties.getString('currentUser'),
				'lat': currentLatitudeCheckin,
				'lon': currentLongitudeCheckin,
				'locID': _e.rowData.id,
				'isPrivate': 1,
				'appKey': '',
				'deviceType': '',
				'deviceID': '',
				'section': secInputVal,
				'row': rowInputVal,
				'seat': seatInputVal
			}
		});
		
		function postCheckin(checkinObj) {
			var checkinSender = Ti.Network.createHTTPClient();
			checkinSender.open('POST', 'http://wcf.gametalklive.com/Checkin.svc/checkin');
			checkinSender.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
			checkinSender.send(JSON.stringify(checkinObj));
		}
		
		function populateData() {
			Titanium.Geolocation.getCurrentPosition(function(e)
			{
				if (e.error)
				{
					//currentLocation.text =  'First error: ' + 
					Ti.API.info(JSON.stringify(e.error));
		            return;
				}
		
				currentLongitudeCheckin = e.coords.longitude;
				currentLatitudeCheckin = e.coords.latitude;
				var altitude = e.coords.altitude;
				var heading = e.coords.heading;
				var accuracy = e.coords.accuracy;
				var speed = e.coords.speed;
				var timestamp = e.coords.timestamp;
				var altitudeAccuracy = e.coords.altitudeAccuracy;
				
				Ti.API.info(new Date(timestamp));
			
				xhr.open('GET', 'http://wcf.gametalklive.com/Checkin.svc/getcilocations/?lat=' + currentLatitudeCheckin + '&lon=' + currentLongitudeCheckin + '&gameID=0&userName=' + Ti.App.Properties.getString('currentUser') + '&appKey=1&deviceType=' + Ti.Platform.osname + '&deviceID=3');
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
