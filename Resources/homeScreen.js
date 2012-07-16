//var homeScreen = Titanium.UI.currentWindow;
//bottomLeftView.addEventListener('click', function(){
//	var newsTabGroup = Titanium.UI.createTabGroup();
 var Admob = require('ti.admob');

	var homeScreen = Ti.UI.createWindow({
		modal: 'false',
		title: L("Game Talk Live"),
		tabBarHidden: true,
		navBarHidden: true
		});
		
		
	/*
var ad;
homeScreen.add(ad = Admob.createView({
    top: 0, left: 0,
    width: 320, height: 50,
    publisherId: 'a14d65f9fb812a6', // You can get your own at http: //www.admob.com/
    adBackgroundColor: 'black',
    testing: true,
    dateOfBirth: new Date(1975, 10, 1, 12, 1, 1),
    gender: 'male',
    keywords: ''
}));
ad.addEventListener('didReceiveAd', function() {
  //  alert('Did receive ad!');
});
ad.addEventListener('didFailToReceiveAd', function() {
   // alert('Failed to receive ad!');
});
ad.addEventListener('willPresentScreen', function() {
  //  alert('Presenting screen!');
});
ad.addEventListener('willDismissScreen', function() {
    //alert('Dismissing screen!');
});
ad.addEventListener('didDismissScreen', function() {
   // alert('Dismissed screen!');
});
ad.addEventListener('willLeaveApplication', function() {
   // alert('Leaving the app!');
});

/*
 And we'll try to get the user's location for this second ad!
 */
Ti.Geolocation.accuracy = Ti.Geolocation.ACCURACY_BEST;
Ti.Geolocation.preferredProvider = Ti.Geolocation.PROVIDER_GPS;
Ti.Geolocation.distanceFilter = 0;
Ti.Geolocation.purpose = ''; //To show you local ads, of course!';
Ti.Geolocation.getCurrentPosition(function reportPosition(e) {
    if (!e.success || e.error) {
        // aw, shucks...
    }
    else {
        homeScreen.add(Admob.createView({
            bottom: 0, left: 0,
            width: 320, height: 50,
            publisherId: 'a14d65f9fb812a6', // You can get your own at http: //www.admob.com/
            adBackgroundColor: 'black',
            testing: false,
            dateOfBirth: new Date(1975, 10, 1, 12, 1, 1),
            gender: 'male',
            keywords: '',
            location: e.coords
        }));
    }
});

 	
		
		
		
		
	var loginoutText;
	if (Ti.App.Properties.getString('currentUser') != null && Ti.App.Properties.getString('currentUser') != '')
	{
		loginoutText = 'Log Out';
	}
	else
	{
		loginoutText = 'Log In';
	}
	
	var loginoutBtn = Titanium.UI.createButton({
		title: loginoutText,
		style: Titanium.UI.iPhone.SystemButtonStyle.BORDERED
	});

	// BS workaround to fake a navBar with no Back button		
	var titleBar = Ti.UI.iOS.createToolbar({
		top: -1,
		barColor: '#036',
		items: [loginoutBtn]
	});
	
	var titleLabel = Ti.UI.createLabel({
		width: 320,
		height: 30,
		top: 8,
		text: "Game Talk Live",
		color: '#FFFFFF',
		shadowColor:'#aaa',
		shadowOffset:{x:1,y:-1},
		textAlign: 'center',
		font: {fontFamily: 'Helvetica Neue',
				fontWeight: 'normal',
				fontSize: '20'}
	});
	
	titleBar.add(titleLabel);
	homeScreen.add(titleBar);
	
	Titanium.UI.currentTab.open(homeScreen,{animated:true});
//	Ti.API.info(titleBar.getBackgroundImage());
//---------------------------------------------
// Animation for Splash screen out/homeScreen in
 
//var t = Ti.UI.iPhone.AnimationStyle.FLIP_FROM_RIGHT;
// - - SPLASH? - - .animate({view:homeScreen,transition:t});




// Block for Top Left - Chat
var topLeftView = Ti.UI.createView({
	height: 140,
	width: 140,
	top: 84,
	left: 10	
});

var topLeftLabel = Ti.UI.createLabel({
	height: 150,
	width: 150,
	top: 30,
	text: 'Games & Chat',
	textAlign: 'center',
	font: {fontColor: 'black',
			fontSize: 16,
			fontFamily: 'Helvetica Neue',
			fontWeight: 'bold'
	},
});

var chatIcon = Ti.UI.createImageView({
	image: 'images/08-chat.png',
	width: 50,
	height: 50,
	top: 0,
	left: 'auto'
});

topLeftLabel.add(chatIcon);
topLeftView.add(topLeftLabel);





// Block for Top Right - Profile
var topRightView = Ti.UI.createView({
	height: 140,
	width: 140,
	top: 84,
	right: 10	
});

var topRightLabel = Ti.UI.createLabel({
	height: 150,
	width: 150,
	top: 30,
	text: 'Profile',
	textAlign: 'center',
	font: {fontColor: 'black',
			fontSize: 16,
			fontFamily: 'Helvetica Neue',
			fontWeight: 'bold'
	},
});

var profileIcon = Ti.UI.createImageView({
	image: 'images/111-user.png',
	width: 50,
	height: 50,
	top: 0,
	left: 'auto'
});

topRightLabel.add(profileIcon);
topRightView.add(topRightLabel);


// Block for Bottom Left - News
var bottomLeftView = Ti.UI.createView({
	height: 140,
	width: 140,
	top: 254,
	left: 10	
});

var bottomLeftLabel = Ti.UI.createLabel({
	height: 150,
	width: 150,
	top: 30,
	text: 'News',
	textAlign: 'center',
	font: {fontColor: 'black',
			fontSize: 16,
			fontFamily: 'Helvetica Neue',
			fontWeight: 'bold'
	},
});

var newsIcon = Ti.UI.createImageView({
	image: 'images/166-newspaper.png',
	width: 50,
	height: 50,
	top: 0,
	left: 'auto'
});

bottomLeftLabel.add(newsIcon);
bottomLeftView.add(bottomLeftLabel);

bottomLeftLabel.badge = 3;


// Block for Bottom Right - Friend Search
var bottomRightView = Ti.UI.createView({
	height: 140,
	width: 140,
	top: 254,
	right: 10	
});



var bottomRightLabel = Ti.UI.createLabel({
	height: 150,
	width: 150,
	top: 30,
	text: 'Find Friends',
	textAlign: 'center',
	font: {fontColor: 'black',
			fontSize: 16,
			fontFamily: 'Helvetica Neue',
			fontWeight: 'bold'
	},
});

var findIcon = Ti.UI.createImageView({
	image: 'images/06-magnify.png',
	width: 50,
	height: 50,
	top: 0,
	left: 'auto'
});

bottomRightLabel.add(findIcon);
bottomRightView.add(bottomRightLabel);


loginoutBtn.addEventListener('click', function(){
	if (Ti.App.Properties.getString('currentUser') != null && Ti.App.Properties.getString('currentUser') != '')
	{
		Ti.App.Properties.setString('currentUser', null);
		loginoutBtn.title = 'Log In';
	}
	else
	{
		var win = Ti.UI.createWindow({
			url: 'login.js'
		});
		win.open();
	}
});

bottomRightView.addEventListener('click', function(){
	if (Ti.App.Properties.getString('currentUser') != null && Ti.App.Properties.getString('currentUser') != '')
	{
		var t = Titanium.UI.create2DMatrix();
		t = t.scale(0);
	
		var findWin = Ti.UI.createWindow({
			title: L("Find Friends"),
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
		
		var tv = Ti.UI.createTableView({
			top: 36,
			height: 305
		});
	
		
		var findFriendHeader = Ti.UI.createView({
			height: 36,
			top: 0
			});
		
		var findFriendTitle = Ti.UI.createLabel({
			text: 'Find Friends',
			height: 32,
			width: 280,
			top: 2,
			backgroundColor: '#39C',
			font:{fontColor: '#FFFFFF',
					 fontWeight: 'bold',
					 fontFamily: 'Helvetica Neue',
					 fontSize: 24},
					 opacity: '.8',
			textAlign: 'center'
		});
		
		var findFriendFooter = Ti.UI.createView({
			height: 32,
			width: 190,
			top: 351
		});
		
		var findFriendCancel = Ti.UI.createButton({
			height: 32,
			width: 75,
			right: 0,
			title: 'Done',
			color: '#000000'
		});
		
		var findFriendSearch = Ti.UI.createButton({
			height: 32,
			width: 75,
			left: 0,
			title: 'Search',
			color: '#000000'
		});
		
		findFriendFooter.add(findFriendSearch);
		findFriendFooter.add(findFriendCancel);
		
		findFriendSearch.addEventListener('click', function() {
			userList = createUserListTableView(searchText.value);
			findWin.add(userList);
		});
		
		findFriendCancel.addEventListener('click', function(){
			var t3 = Titanium.UI.create2DMatrix();
			t3 = t3.scale(0);
			findWin.close({transform:t3,duration:300});
		});
		
		findFriendHeader.add(findFriendTitle);
		findWin.add(findFriendHeader);
		findWin.add(findFriendFooter);
		
		var searchText = Titanium.UI.createTextField({
		    height: 32,
		    top: 45,
		    left: 12,
		    width: 250,
		    hintText: 'Enter Search Text',
		    borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
		    font: { fontSize: 14, fontFamily: 'Helvetica Neue', fontWeight: 'bold' }
		});
		
		findWin.add(searchText);
		
		var t1 = Titanium.UI.create2DMatrix();
		t1 = t1.scale(1.1);
		var a = Titanium.UI.createAnimation();
		a.transform = t1;
		a.duration = 200;
	
		a.addEventListener('complete', function()
		{
			var t2 = Titanium.UI.create2DMatrix();
			t2 = t2.scale(1.0);
			findWin.animate({transform:t2, duration:200});
		});
	
		findWin.open(a);
	}
	else
	{
		Ti.UI.createAlertDialog({ title: 'Please Login First', message: 'You must login before you can search for friends.' }).show();
	}
});



//back to correct, existing code
topRightView.addEventListener('click', function(){
	if (Ti.App.Properties.getString('currentUser') != null && Ti.App.Properties.getString('currentUser') != '')
	{
		var profileWin = Ti.UI.createWindow({
			modal: 'false',
			url: 'profile.js',
			title: L("Edit Profile"),
		    barColor: '#036',
			tabBarHidden: true,
			navBarHidden: false
	});
	
	Titanium.UI.currentTab.open(profileWin,{animated:true});
	}
	else
	{
		Ti.UI.createAlertDialog({ title: 'Please Login First', message: 'Please login before editing your profile.' }).show();
	}
});

bottomLeftView.addEventListener('click', function(){
	var newsTabGroup = Titanium.UI.createTabGroup();
 /*
	var newsWin = Ti.UI.createWindow({
		modal: 'false',
		url: 'news.js',
		title: L("Sports News"),
		backButtonTitle: L('Home'),
	    barColor: '#036',
		tabBarHidden: true,
		navBarHidden: false
	});
	
	Titanium.UI.currentTab.open(newsWin,{animated:true});
	*/
	//Ti.UI.createAlertDialog({ title: 'GTL News Coming Soon', message: 'Check back here soon for notifications and news about Game Talk Live!' }).show();
	
	var newsWin = require('news');
	Titanium.UI.currentTab.open(newsWin, {animated: true});
});

topLeftView.addEventListener('click', function(){
	if (Ti.App.Properties.getString('currentUser') != null && Ti.App.Properties.getString('currentUser') != '')
	{
	    var winChatWindow = null;
	
	    if (Ti.Platform.name == "android") {
	        winChatWindow = Titanium.UI.createWindow({
				modal: 'false',
	            url: "chatMain.js",
	            title: L("Game Talk Live"),
	            orientationModes : [
				Titanium.UI.PORTRAIT,
				Titanium.UI.UPSIDE_PORTRAIT
				]
	        });
	    } else {
	        winChatWindow = Titanium.UI.createWindow({
				modal: 'false',
	            url: "chatMain.js",
	            title: L("Game Talk Live"),
	            backgroundColor: '#ffffff',
	            barColor: '#036',
				tabBarHidden: true,
				navBarHidden: false,
				//orientationModes:[1,2,3,4]
	            orientationModes : [
				Titanium.UI.PORTRAIT,
				Titanium.UI.UPSIDE_PORTRAIT
				]
	        });
		}
		//	winChatWindow.add(createSportsTableView());
		//homeScreen.hide();
		Titanium.UI.currentTab.open(winChatWindow,{animated:true});
    	//winChatWindow.open();
	}
	else
	{
		Ti.UI.createAlertDialog({ title: 'Please Login First', message: 'Please login before entering game rooms.' }).show();
	}
});

Ti.App.addEventListener('app:loggedIn', function(e) {
	loginoutBtn.title = 'Log Out';
});



//homeScreen.add(topBannerView);
homeScreen.add(topLeftView);
homeScreen.add(topRightView);
homeScreen.add(bottomLeftView);
homeScreen.add(bottomRightView);
//homeScreen.open();



createUserListTableView = function(searchString) {
	Ti.API.info('Search String: ' + searchString);
	var starIcon;
	var xhr = Ti.Network.createHTTPClient();
	xhr.onerror = function (e) {
		//Ti.UI.createAlertDialog({ title: 'Error', message: 'Cannot communicate with server.  Please try again later.' }).show();
	};
	xhr.setTimeout(10000);

	xhr.onload = function (e) {
		Ti.API.info('Search String: ' + searchString);
		var row;
		var data = [];

		if (this.responseText != null)
		{
			//var rowColor;
			var userlist = JSON.parse(this.responseText);	

			for (var i = 0; i < userlist.length; i++)
			{
				if (userlist[i].Favorite)
				{
					starIcon = 'images/btn_rating_star_on_focused_holo_light.png';
				}
				else
				{
					starIcon = 'images/btn_rating_star_off_disabled_holo_light.png';
				}
				
				userLabel = Titanium.UI.createLabel({
				    text: userlist[i].LastName + ', ' + userlist[i].FirstName + ' (' + userlist[i].UserName + ')',
				    font: { fontSize: 14, fontFamily: 'Ariel' },
				    textAlign: 'left',
				    left: 25
				});
				
				row = Ti.UI.createTableViewRow({
					height: 22,
					id: userlist[i].UID,
					title: '', //userlist[i].LastName + ', ' + userlist[i].FirstName + ' (' + userlist[i].UID + ')',
					leftImage: starIcon
				});
				
				row.add(userLabel);
						
				data.push(row);
			}
		}
	    else
	    {
	    	//Titanium.API.info('No data');
	    	row = Ti.UI.createTableViewRow({
        		height: 35,
        		title: 'No users found.',
        		id: 1
    		});
			data.push(row);	
		}
			
		userListView.setData(data);
	};
		

	var userListView = Ti.UI.createTableView({
		top: 86,
		height: 255
	});

	userListView.addEventListener('click', function(_e) {
		var favUserObj;
		var favUserSender = Ti.Network.createHTTPClient();
		
		if (_e.rowData.leftImage == 'images/btn_rating_star_off_disabled_holo_light.png')
		{
			favUserObj = {
				'uid': Ti.App.Properties.getString('currentUser'),
				'favUID': _e.rowData.id,
				'add': true
			}
			_e.rowData.leftImage = 'images/btn_rating_star_on_focused_holo_light.png';
		}
		else if (_e.rowData.leftImage == 'images/btn_rating_star_on_focused_holo_light.png')
		{
			favUserObj = {
				'uid': Ti.App.Properties.getString('currentUser'),
				'favUID': _e.rowData.id,
				'add': false
			}
			_e.rowData.leftImage = 'images/btn_rating_star_off_disabled_holo_light.png';
		}		

		favUserSender.open('POST', 'http://wcf.gametalklive.com/Profile.svc/setFavoriteUser');
		favUserSender.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
		favUserSender.send(JSON.stringify(favUserObj));
	});
	
	function populateData() {
		xhr.open('GET', 'http://wcf.gametalklive.com/Profile.svc/searchForUsers/?uid=' + Ti.App.Properties.getString('currentUser') + '&searchString=' + searchString);
		xhr.send();
	}
	//run initial query
	populateData();
	
	return userListView;
}