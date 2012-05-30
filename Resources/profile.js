
var profileWindow = Titanium.UI.currentWindow;
	//profileWindow.modal = 'true';

//Titanium.UI.currentWindow.setBackgroundImage('ChalkboardBg.jpg');
profileWindow.backgroundColor = '#ffffff';
profileWindow.backButtonTitle = 'Home';

var u = Titanium.UI.createLabel({
    color: '#ffffff',
    text: Ti.App.Properties.getString('currentUser'),
    font: { fontSize: 14, fontFamily: 'Ariel' },
    textAlign: 'left',
    height: 'auto',
    width: 'auto'
});
profileWindow.setRightNavButton(u);



// begin ScrollView
var scrollWrapper = Ti.UI.createScrollView({
	layout:'vertical',
    showVerticalScrollIndicator:'true',
    contentHeight: 'auto',
    width: profileWindow.width,
    top: 5    
});

scrollWrapper.addEventListener('return', function() {
    scrollWrapper.scrollTo(0, 0);
  });

// begin Profile View
var profileView = Titanium.UI.createView({
	contentWidth:'auto',
	contentHeight:'auto',
	top: 20
	});

var firstName = Titanium.UI.createTextField({
    height: 32,
    top: 0,
    left: 36,
    width: 250,
    hintText: 'First Name',
    borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
    font: { fontSize: 14, fontFamily: 'Helvetica Neue', fontWeight: 'bold' }
});

var lastName = Titanium.UI.createTextField({
    height: 32,
    top: 10,
    left: 36,
    width: 250,
    hintText: 'Last Name',
    borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
    font: { fontSize: 14, fontFamily: 'Helvetica Neue', fontWeight: 'bold' }
});

//-----

var gender = Titanium.UI.createTextField({
    height: 32,
    top: 10,
    left: 36,
    width: 70,
    hintText: 'Gender',
    borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
    font: { fontSize: 14, fontFamily: 'Helvetica Neue', fontWeight: 'bold' },
    maxLength: 1
});


var dob = Titanium.UI.createTextField({
    height: 32,
    top: -32,
    left: 116,
    width: 170,
    hintText: 'Birthdate (mm/dd/yyyy)',
    borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
    keyboardType: Titanium.UI.KEYBOARD_NUMBERS_PUNCTUATION,
    font: { fontSize: 14, fontFamily: 'Helvetica Neue', fontWeight: 'bold' }
});

//-----


var address1 = Titanium.UI.createTextField({
    height: 32,
    top: 10,
    left: 36,
    width: 250,
    hintText: 'Address 1',
    borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
    font: { fontSize: 14, fontFamily: 'Helvetica Neue', fontWeight: 'bold' }
});

var address2 = Titanium.UI.createTextField({
    height: 32,
    top: 10,
    left: 36,
    width: 250,
    hintText: 'Address 2',
    borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
    font: { fontSize: 14, fontFamily: 'Helvetica Neue', fontWeight: 'bold' }
});


var city = Titanium.UI.createTextField({
    height: 32,
    top: 10,
    left: 36,
    width: 250,
    hintText: 'City',
    borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
    font: { fontSize: 14, fontFamily: 'Helvetica Neue', fontWeight: 'bold' }
});

var state = Titanium.UI.createTextField({
    height: 32,
    top: 10,
    left: 36,
    width: 60,
    hintText: 'State',
    maxLength: 2,
    borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
    font: { fontSize: 14, fontFamily: 'Helvetica Neue', fontWeight: 'bold' }
});


var zip = Titanium.UI.createTextField({
    height: 32,
    top: -32,
    left: 136,
    width: 150,
    hintText: 'Zip Code',
    borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
    keyboardType: Titanium.UI.KEYBOARD_NUMBERS_PUNCTUATION,
    font: { fontSize: 14, fontFamily: 'Helvetica Neue', fontWeight: 'bold' },
    maxLength: 5
});


/*var country = Titanium.UI.createTextField({
    height: 32,
    top: 260,
    left: 36,
    width: 250,
    hintText: 'Country',
    borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
    font: { fontSize: 14, fontFamily: 'Helvetica Neue' }
});
*/

var email = Titanium.UI.createTextField({
    height: 32,
    top: 10,
    left: 36,
    width: 250,
    hintText: 'Email Address',
    borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
    keyboardType: Titanium.UI.KEYBOARD_EMAIL,
    font: { fontSize: 14, fontFamily: 'Helvetica Neue', fontWeight: 'bold' }
});

//------------------------------------
var favoriteBtn = Ti.UI.createButton({
	width: 200,
	top: 8,
	height: 32,
	left: 61,
	borderWidth: '1',
	borderRadius: '10'
});

var favoriteLabel = Ti.UI.createLabel({
	text: 'Pick favorite teams',
	textAlign: 'center',
    height: 32,
    width: 'auto',
    font: { fontSize: 16,
    		fontFamily: 'Helvetica Neue',
    		fontWeight: 'bold'
        	},
    color: '#000000'
});



var saveBtn = Titanium.UI.createButton({
    left: 36,
    height: 32,
    width: 100,
    top:8,
    borderWidth: '1',
	borderRadius: '10'
});


var saveLabel = Ti.UI.createLabel({
	text: 'Save',
	textAlign: 'center',
    height: 32,
    width: 100,
    font: { fontSize: 14,
    		fontFamily: 'Helvetica Neue',
    		fontWeight: 'bold'
        	},
    color: '#000000'
});



var cancelBtn = Titanium.UI.createButton({
    right: 36,
    height: 32,
    width: 100,
    top: -32,
    borderWidth: '1',
	borderRadius: '10'
});


var cancelLabel = Ti.UI.createLabel({
	text: 'Cancel',
	textAlign: 'center',
    height: 32,
    width: 100,
    font: { fontSize: 14,
    		fontFamily: 'Helvetica Neue',
    		fontWeight: 'bold'
        	},
    color: '#000000'
});


favoriteBtn.add(favoriteLabel);
saveBtn.add(saveLabel);
cancelBtn.add(cancelLabel);
//end profile view info




// Favorite Team selection Pop-up
favoriteBtn.addEventListener('click', function()
{
    
	var t = Titanium.UI.create2DMatrix();
	t = t.scale(0);

	var w = Titanium.UI.createWindow({
		backgroundColor:'#FFFFFF',
		borderWidth:2,
		borderColor:'#000000',
		height:400,
		width:280,
		top: 50,
		borderRadius:8,
		opacity:1,
		transform:t
	});
		
	
	
createSportsTableView = function() {
	var xhr = Ti.Network.createHTTPClient();
	xhr.onerror = function (e) {
	Ti.UI.createAlertDialog({ title: 'Error', message: 'Cannot communicate with server.  Please try again later.' }).show();
	};
	xhr.setTimeout(10000);

	xhr.onload = function (e) {
		var row;
		var data = [];
		
		if (this.responseText != null)
		{
			//var rowColor;
			var leaguelist = JSON.parse(this.responseText);	
			//Titanium.API.info('Number of leagues: ' + leaguelist.length);
			for (var i = 0; i < leaguelist.length; i++)
			{
				//if (leaguelist[i].Active == 'True')
					rowColor = '#000000';
				//else
				//	rowColor = '#cccccc';
				
				row = Ti.UI.createTableViewRow({
					height: 35,
					title: leaguelist[i].LeagueName,
					id: leaguelist[i].LeagueID,
					active: leaguelist[i].Active,
					color: rowColor
					});
						
				data.push(row);
			}
		}
	    else
	    {
	    	//Titanium.API.info('No data');
	    	row = Ti.UI.createTableViewRow({
        		height: 35,
        		title: 'No sports leagues found.  Check back again later!',
        		id: 1
    		});
			data.push(row);
			}
			
			
		
		tv.setData(data);
	};
		

	var tv = Ti.UI.createTableView({
		top: 36,
		height: 305
	});

	
	var pickLeagueHeader = Ti.UI.createView({
		height: 36,
		top: 0
		});
	
	var pickLeagueTitle = Ti.UI.createLabel({
		text: 'Choose a League',
		height: 32,
		width: 280,
		top: 2,
		backgroundColor: '#39C',
		font:{fontColor: '##FFFFFF',
				 fontWeight: 'bold',
				 fontFamily: 'Helvetica Neue',
				 fontSize: 24},
				 opacity: '.8',
		textAlign: 'center'
	});
		var pickLeagueFooter = Ti.UI.createView({
		height: 32,
		width: 150,
		top: 351
	});
	
	var pickLeagueCancel = Ti.UI.createButton({
		height: 32,
		width: 150,
		//top: 325,
		title: 'Done',
		color: '#000000'
	});
	
	pickLeagueFooter.add(pickLeagueCancel);
	
	pickLeagueCancel.addEventListener('click', function(){
	{
		var t3 = Titanium.UI.create2DMatrix();
		t3 = t3.scale(0);
		w.close({transform:t3,duration:300});
	};
	
	});
	
	pickLeagueHeader.add(pickLeagueTitle);
	w.add(pickLeagueHeader);
	w.add(pickLeagueFooter);
	

	
	
	
	tv.addEventListener('click', function(_e) {

		//if (_e.rowData.active == 'True')
		//{
			w.remove(sportsList);
			w.remove(pickLeagueHeader);
			w.remove(pickLeagueFooter);
			currLeagueId = _e.rowData.id;
			currLeagueTitle = _e.rowData.title;
			teamList = createTeamListTableView(currLeagueId, currLeagueTitle);
			w.add(teamList);		
		//}
		//else
		//{
		//	Ti.UI.createAlertDialog({
	    //		title: 'Coming soon!', message:'Check in with Game Talk Live later for additional sports and features!'
	    //	}).show();
		//}
	});
	
	function populateData() {
		xhr.open('GET', 'http://wcf.gametalklive.com/Utility.svc/getAllLeagues/?userName=' + Ti.App.Properties.getString('currentUser') + '&appKey=1&deviceType=' + Ti.Platform.osname + '&deviceID=3');
		xhr.send();
	}
	//run initial query
	populateData();
	
	return tv;

}



var sportsList = createSportsTableView();
w.add(sportsList);





//========================================




createTeamListTableView = function(leagueid, leaguetitle) {
//	Ti.API.info('League ID: ' + leagueid);
	var starIcon;
	var xhr = Ti.Network.createHTTPClient();
	xhr.onerror = function (e) {
	Ti.UI.createAlertDialog({ title: 'Error', message: 'Cannot communicate with server.  Please try again later.' }).show();
	};
	xhr.setTimeout(10000);

	xhr.onload = function (e) {
		var row;
		var data = [];
		
		if (this.responseText != null)
		{
			//var rowColor;
			var teamlist = JSON.parse(this.responseText);	

			for (var i = 0; i < teamlist.length; i++)
			{
				if (teamlist[i].Favorite)
				{
					starIcon = 'images/btn_rating_star_on_focused_holo_light.png';
				}
				else
				{
					starIcon = 'images/btn_rating_star_off_disabled_holo_light.png';
				}
				
				row = Ti.UI.createTableViewRow({
					height: 35,
					id: teamlist[i].TeamID,
					title: teamlist[i].TeamName,
					//abbrev: teamlist[i].Abbrev,
					//location: teamlist[i].Location,		
					//state: teamlist[i].State,
					//icon: teamlist[i].Icon,
					leftImage: starIcon
				});
						
				data.push(row);
			}
		}
	    else
	    {
	    	//Titanium.API.info('No data');
	    	row = Ti.UI.createTableViewRow({
        		height: 35,
        		title: 'No teams found.  Check back again later!',
        		id: 1
    		});
			data.push(row);	
		}
			
			
		
		teamListView.setData(data);
	};
		

	var teamListView = Ti.UI.createTableView({
		top: 36,
		height: 305
	});

	var pickTeamHeader = Ti.UI.createView({
		height: 36,
		top: 0
		});
	
	var pickTeamTitle = Ti.UI.createLabel({
		text: leaguetitle,
		height: 32,
		width: 280,
		top: 2,
		backgroundColor: '#39C',
		font:{fontColor: '#000',
				 fontWeight: 'bold',
				 fontFamily: 'Helvetica Neue',
				 fontSize: 24},
				 opacity: '.8',
		textAlign: 'center'
	});
		var pickTeamFooter = Ti.UI.createView({
		height: 32,
		width: 190,
		top: 351
	});
	
	var pickTeamSave = Ti.UI.createButton({
		height: 32,
		width: 75,
		//top: 325,
		left: 0,
		title: 'Back',
		color: '#000000'
	});
	
	pickTeamSave.addEventListener('click', function(_e) {
		w.remove(teamList);
		w.remove(pickTeamHeader);
		w.remove(pickTeamFooter);
		sportsList = createSportsTableView();
		w.add(sportsList);		
	});
	
	var pickTeamCancel = Ti.UI.createButton({
		height: 32,
		width: 75,
		//top: 325,
		right: 0,
		title: 'Done',
		color: '#000000'
	});
	
		pickTeamFooter.add(pickTeamSave);
		pickTeamFooter.add(pickTeamCancel);
	
	pickTeamCancel.addEventListener('click', function(){
	{
		var t3 = Titanium.UI.create2DMatrix();
		t3 = t3.scale(0);
		w.close({transform:t3,duration:300});
	};
	
	});
	
	pickTeamHeader.add(pickTeamTitle);
	w.add(pickTeamHeader);
	w.add(pickTeamFooter);

	
	teamListView.addEventListener('click', function(_e) {
		for (var i = 0; i < teamListView.data[0].rows.length; i++)
		{
			if (teamListView.data[0].rows[i].id != _e.rowData.id && teamListView.data[0].rows[i].leftImage != 'images/btn_rating_star_off_disabled_holo_light.png')
			{
				teamListView.data[0].rows[i].leftImage = 'images/btn_rating_star_off_disabled_holo_light.png';
			}
		}
		
		var favTeamObj;
		var favTeamSender = Ti.Network.createHTTPClient();
		
		if (_e.rowData.leftImage == 'images/btn_rating_star_off_disabled_holo_light.png')
		{
			favTeamObj = {
				'uid': Ti.App.Properties.getString('currentUser'),
				'teamID': _e.rowData.id,
				'add': true
			}
			_e.rowData.leftImage = 'images/btn_rating_star_on_focused_holo_light.png';
		}
		else if (_e.rowData.leftImage == 'images/btn_rating_star_on_focused_holo_light.png')
		{
			favTeamObj = {
				'uid': Ti.App.Properties.getString('currentUser'),
				'teamID': _e.rowData.id,
				'add': false
			}
			_e.rowData.leftImage = 'images/btn_rating_star_off_disabled_holo_light.png';
		}		

		favTeamSender.open('POST', 'http://wcf.gametalklive.com/Profile.svc/setFavoriteTeam');
		favTeamSender.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
		favTeamSender.send(JSON.stringify(favTeamObj));
	});
	
	function populateData() {
		xhr.open('GET', 'http://wcf.gametalklive.com/Utility.svc/getTeamsByLeague/?userName=' + Ti.App.Properties.getString('currentUser') + '&leagueID=' + leagueid + '&appKey=1&deviceType=' + Ti.Platform.osname + '&deviceID=3');
		xhr.send();
	}
	//run initial query
	populateData();
	
	return teamListView;
	
//	var teamsList = createTeamListTableView();
//	w.add(teamsList);

}

//========================================

	
	var t1 = Titanium.UI.create2DMatrix();
	t1 = t1.scale(1.1);
	var a = Titanium.UI.createAnimation();
	a.transform = t1;
	a.duration = 200;

	a.addEventListener('complete', function()
	{
		//Titanium.API.info('here in complete');
		var t2 = Titanium.UI.create2DMatrix();
		t2 = t2.scale(1.0);
		w.animate({transform:t2, duration:200});

	});

	w.open(a);


});





//  back to profileWindow stuff

cancelBtn.addEventListener('click', function () {
    profileWindow.close();
});

saveBtn.addEventListener('click', function () {
	var profileObj = {
    	'uid': Ti.App.Properties.getString('currentUser'),
    	'firstName': firstName.value,
    	'lastName': lastName.value,
    	'gender': gender.value,
    	'dob': dob.value,
    	'address1': address1.value,
    	'address2': address2.value,
    	'city': city.value,
    	'state': state.value,
    	'zip': zip.value,
    	'country': 1,
    	'email': email.value
	}
	
	profileSender.open('POST', 'http://wcf.gametalklive.com/Profile.svc/setProfile121');
	profileSender.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
	//Ti.UI.createAlertDialog({ title: 'Test', message: JSON.stringify(profileObj) }).show();
	profileSender.send(JSON.stringify(profileObj));
});

//Contact web service and pre-populate fields here
var profileReceiver = Ti.Network.createHTTPClient();

profileReceiver.onerror = function (e) {
    Ti.UI.createAlertDialog({ title: 'Error', message: 'Cannot communicate with server.  Please try again later.' }).show();
    profileWindow.close();
};
profileReceiver.ontimeout = function (e) {
    Ti.UI.createAlertDialog({ title: 'Error', message: 'Cannot communicate with server.  Please try again later.' }).show();
    profileWindow.close();
}
profileReceiver.setTimeout(10000);

profileReceiver.onload = function (e) {
	//Ti.UI.createAlertDialog({ title: 'Test', message: this.responseText }).show();
	var profileData = JSON.parse(this.responseText);
	firstName.value = profileData[0].FirstName;
	lastName.value = profileData[0].LastName;
	gender.value = profileData[0].Gender;
	dob.value = profileData[0].DOB;
	address1.value = profileData[0].Address1;
	address2.value = profileData[0].Address2;
	city.value = profileData[0].City;
	state.value = profileData[0].State;
	zip.value = profileData[0].Zip;
	email.value = profileData[0].Email;
}

profileReceiver.open('GET', 'http://wcf.gametalklive.com/Profile.svc/getProfile/?uid=' + Ti.App.Properties.getString('currentUser'));
profileReceiver.send();
//

//Set up Profile Sender
var profileSender = Ti.Network.createHTTPClient();

profileSender.onerror = function (e) {
    Ti.UI.createAlertDialog({ title: 'Error', message: 'Cannot communicate with server.  Please try again later.' }).show();
};
profileSender.ontimeout = function (e) {
    Ti.UI.createAlertDialog({ title: 'Error', message: 'Cannot communicate with server.  Please try again later.' }).show();
}
profileSender.setTimeout(10000);

profileSender.onload = function (e) {
	var a = Ti.UI.createAlertDialog({
		title: 'Profile Saved!',
		message: 'Thank you for updating your profile!'
	});
	
	a.addEventListener('click', function () {
		profileWindow.close();
	});
	
	a.show();
	setTimeout(function()
	{
		a.hide();
		profileWindow.close();
	},2000);
}
//


//lastName.value = Ti.App.Properties.getString('currentUser');




scrollWrapper.add(firstName);
scrollWrapper.add(lastName);
scrollWrapper.add(gender),
scrollWrapper.add(dob),
scrollWrapper.add(address1);
scrollWrapper.add(address2);
scrollWrapper.add(city);
scrollWrapper.add(state);
scrollWrapper.add(zip);
//profileView.add(country);
scrollWrapper.add(email);
scrollWrapper.add(favoriteBtn);
scrollWrapper.add(saveBtn);
scrollWrapper.add(cancelBtn);


//scrollWrapper.add(profileView);


profileWindow.add(scrollWrapper);
//profileWindow.add(profileBanner);
profileWindow.open();

