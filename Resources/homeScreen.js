//var homeScreen = Titanium.UI.currentWindow;
//bottomLeftView.addEventListener('click', function(){
//	var newsTabGroup = Titanium.UI.createTabGroup();
 
	var homeScreen = Ti.UI.createWindow({
		modal: 'false',
		//url: 'news.js',
		title: L("Game Talk Live"),
		tabBarHidden: true,
		navBarHidden: true
		});
		
	// BS workaround to fake a navBar with no Back button		
	var titleBar = Ti.UI.iOS.createToolbar({
		top: -1,
		barColor: '#036'
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
//	titleBar.setBackgroundColor('#111111');
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



// Block for Bottom Right - Friend Search
var bottomRightView = Ti.UI.createView({
	height: 140,
	width: 140,
	top: 254,
	right: 10	
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

var bottomRightLabel = Ti.UI.createLabel({
	height: 150,
	width: 150,
	top: 30,
	text: loginoutText,
	textAlign: 'center',
	font: {fontColor: 'black',
			fontSize: 16,
			fontFamily: 'Helvetica Neue',
			fontWeight: 'bold'
	},
});

var loginIcon = Ti.UI.createImageView({
	image: 'images/237-key.png',
	width: 50,
	height: 50,
	top: 0,
	left: 'auto'
});

bottomRightLabel.add(loginIcon);
bottomRightView.add(bottomRightLabel);


bottomRightView.addEventListener('click', function(){
	if (Ti.App.Properties.getString('currentUser') != null && Ti.App.Properties.getString('currentUser') != '')
	{
		Ti.App.Properties.setString('currentUser', null);
		bottomRightLabel.text = 'Log In';
	}
	else
	{
		var win = Ti.UI.createWindow({
			url: 'login.js'
		});
		win.open();
	}
});


/*
bottomRightView.addEventListener('click', function()
{
	if (Ti.App.Properties.getString('currentUser') != null && Ti.App.Properties.getString('currentUser') != '')
	{
		Ti.App.Properties.setString('currentUser', null);
		bottomRightLabel.text = 'Log In';
		
		var alertDialog = Titanium.UI.createAlertDialog({
    		title: 'Later Tater!',
   			message: 'You have been signed out of \n Game Talk Live',
   			 buttonNames: ['OK']
		});
		alertDialog.show();
	}
	
	else{
	
	var t = Titanium.UI.create2DMatrix();
	t = t.scale(0);

	var w = Titanium.UI.createWindow({
		backgroundColor:'#FFFFFF',
		borderWidth:8,
		borderColor:'#999',
		height:250,
		width: 250,
		borderRadius:10,
		borderColor: "#000000",
		opacity:0.95,
		transform:t
	});

	var t1 = Titanium.UI.create2DMatrix();
	t1 = t1.scale(1.1);
	var a = Titanium.UI.createAnimation();
	a.transform = t1;
	a.duration = 200;

	a.addEventListener('complete', function()
	{
		Titanium.API.info('here in complete');
		var t2 = Titanium.UI.create2DMatrix();
		t2 = t2.scale(1.0);
		w.animate({transform:t2, duration:200});

	});

	}	
	var userID = Ti.UI.createTextField({
		width: '220',
		height: '36',
		top: '54',
		autocapitalization: false,
		hintText: '  Username or Email',
		borderColor: '#000000',
		borderWidth: '2',
		borderRadius: '8'
	});
	
	var password = Ti.UI.createTextField({
		width: '220',
		height: '36',
		top: '104',
		hintText: '  Password',
		textAlign: 'left',
		borderColor: '#000000',
		borderWidth: '2',
		borderRadius: '8',
		passwordMask: true,
	});

	var loginBtn = Ti.UI.createButton({
		width: '70',
		height: '30',
		color: '#000000',
		top: '174',
		left: '30',
		title: 'Log In',
		borderColor: '#000000',
		borderWidth: '2',
		borderRadius: '8'

	});
	
	var closeBtn = Ti.UI.createButton({
		width: '70',
		height: '30',
		color: '#000000',
		top: '174',
		right: '30',
		title: 'Cancel',
		borderColor: '#000000',
		borderWidth: '2',
		borderRadius: '8'
	});	
	
	
		
	w.add(userID);
	w.add(password);
	w.add(loginBtn);
	w.add(closeBtn);
	
	
	/////
	var xhr = Ti.Network.createHTTPClient();

xhr.onerror = function (e) {
    Ti.UI.createAlertDialog({ title: 'Error', message: e.error }).show();
};
xhr.setTimeout(10000);

xhr.onload = function (e) {
	if (this.responseText != null)
	{
		var user = JSON.parse(this.responseText);
		Ti.App.Properties.setString('currentUser', user[0].UID);
		Ti.App.Properties.setString('currentUserFName', user[0].FirstName);
		Ti.App.Properties.setString('currentUserLName', user[0].LastName);
		//Titanium.API.info(user[0].UID);
		Ti.App.fireEvent('app:loggedIn', {
			message: 'test'
		});
		
		Ti.UI.createAlertDialog({
    		title: 'Welcome to Game Talk Live!', message:"Click Games & Chat to check into a game room."
    	}).show();
		win.close();
    }
    else
    {
    	Ti.UI.createAlertDialog({
    		title: 'Incorrect Login', message:"Login incorrect.  Please try again."
    	}).show();
    }
};

loginBtn.addEventListener('click', function () {
	if (userID.value == '' || password.value == '')
	{
		Ti.UI.createAlertDialog({
    		title: 'Data error', message:"You must complete all fields.  Please try again."
    	}).show();
	}
	else
	{
		xhr.open('GET', 'http://wcf.gametalklive.com/Account.svc/login/?userName=' + userID.value + '&password=' + password.value + '&appKey=1&deviceType=' + Ti.Platform.osname + '&deviceID=3');
		xhr.send();
		w.close();
	}
	
});


	var t1 = Titanium.UI.create2DMatrix();
	t1 = t1.scale(1.1);
	var a = Titanium.UI.createAnimation();
	a.transform = t1;
	a.duration = 200;

	a.addEventListener('complete', function()
	{
		Titanium.API.info('here in complete');
		var t2 = Titanium.UI.create2DMatrix();
		t2 = t2.scale(1.0);
		w.animate({transform:t2, duration:200});

	});
	
	
	closeBtn.addEventListener('click', function()
	{
		var t3 = Titanium.UI.create2DMatrix();
		t3 = t3.scale(0);
		w.close({transform:t3,duration:300});
	});

	w.open(a);

});
*/

//back to correct, existing code
topRightView.addEventListener('click', function(){
	if (Ti.App.Properties.getString('currentUser') != null && Ti.App.Properties.getString('currentUser') != '')
	{
		// var profileWin = Ti.UI.createWindow({
			// url: 'profile.js'
		// });
		// profileWin.open();
 
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
//	var newsTabGroup = Titanium.UI.createTabGroup();
 
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
	 
//	var newsTab = Titanium.UI.createTab({  
//	  title:'My Window',
//	  window:newsWin
//	});
	 
//	newsTabGroup.addTab(newsTab);
//	newsTabGroup.open({
//		transition:Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_RIGHT
//	});
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
	bottomRightLabel.text = 'Log Out';
});


//homeScreen.add(topBannerView);
homeScreen.add(topLeftView);
homeScreen.add(topRightView);
homeScreen.add(bottomLeftView);
homeScreen.add(bottomRightView);

//homeScreen.open();


