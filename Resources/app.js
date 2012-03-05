///<reference path="Titanium-vsdoc1.js"/>

// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#ffffff');

// For Testing Only
/*
		var win = Ti.UI.createWindow({
			url: 'loginPopUp.js'
		});
		win.open();
	*/



var tabGroup = Titanium.UI.createTabGroup({id:'tabGroup1'});

var homeScreenWin = Ti.UI.createWindow({
	url: 'homeScreen.js',
	modal: 'false',
	tabBarHidden:true,
	navBarHidden:true,
    orientationModes : [
	Titanium.UI.PORTRAIT,
	Titanium.UI.UPSIDE_PORTRAIT
	]
});


var tab1 = Titanium.UI.createTab({
	id:'tab1',
	window:homeScreenWin
});

tabGroup.addTab(tab1);
tabGroup.open({
	transition:Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
});



//homeScreenWin.open();


	