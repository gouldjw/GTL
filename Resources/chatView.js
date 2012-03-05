var chatTextTopFocus = 250;
var chatTextTopBlur = 460;
var chatAreaTop = 90;
var chatViewHeightOffset = 0;
var currGameID;
var ChatView1;
var getChatIntervalHolder;
var chatTextWidth = 270;

Ti.include(
	'chatWS.js',
	'GPSCheckin.js',
	'GPSLocationCheckin.js'
);

Titanium.SMSView = require('ti.smsview');

createChatRoom = function(gameID, homeTeam, visitorTeam, homeAbbrev, visitorAbbrev) {
	checkCurrentLocation(gameID);
	
	currGameID = gameID;
	logoutBtn.removeEventListener('click', backToSports);
	logoutBtn.addEventListener('click', backToGames);
	win.title = 'Game Chat';
	
	var titleLabel = Titanium.UI.createLabel({
	    color:'#fff',
	    height:36,
	    width:210,
	    top:0,
	    text:visitorAbbrev + ' @ ' + homeAbbrev,
	    textAlign:'center',
	    font:{fontFamily:'Ariel',fontSize:18},
	    shadowColor:'#eee',shadowOffset:{x:0,y:1}
	});
	 
	// associate label to title
	win.setTitleControl(titleLabel);
	
	
	// Create GPS Check-in button
	var checkinButton = Ti.UI.createButton({
		backgroundImage:'images/117-todo.png',
		height:19,
		width:18,
		right:20
	});
	
	Ti.App.addEventListener('app:checkedIn', function(e) {
		//Ti.API.info('testing!');
		//checkinButton.setBackgroundImage('images/117-todo-green.png');
		var checkinButton = Ti.UI.createButton({ backgroundImage:'images/117-todo-green.png', height:19, width:18, right:20 });
		checkinButton.addEventListener('click', locationCheckin);
		win.setRightNavButton(checkinButton);
	});
	
	// Assign button to title bar
	checkinButton.addEventListener('click', locationCheckin);
	win.setRightNavButton(checkinButton);
	

/////////////////////////////////////////
//Code to create Awesome SMS Chat View
/////////////////////////////////////////
var textArea = Ti.SMSView.createView({
	maxLines:6,
	minLines:2,		
	backgroundColor: '#dae1eb',
	sendColor:'Blue',
	recieveColor: 'Gray',
	selectedColor: 'White',
	animated: true,
	buttonTitle: 'Send',
	font: {fontSize: 14},
	autocorrect: true,
	textAlignment: 'left',
	textColor: 'Black',
	camButtonDisabled: true,
	camButton: false,
	returnType: Ti.SMSView.RETURNKEY_SEND		
});



textArea.addEventListener('click', function(e){
	if(e.scrollView){
		textArea.blur();
	}

});
textArea.addEventListener('buttonClicked', function(e){
	sendChat(e.value);
});
textArea.addEventListener('camButtonClicked', function(){
	
	var options = Ti.UI.createOptionDialog({
		options: ['Photo Gallery', 'Cancel'],
		cancel: 1,
		title: 'Send a photo'
	});
	options.show();
	options.addEventListener('click', function(e) {
		if(e.index == 0){
		// --------------- open the photo gallery and send an image ------------------
			Titanium.Media.openPhotoGallery({
				success: function(event) {
					textArea.sendMessage(event.media);
				},
				mediaTypes: [Ti.Media.MEDIA_TYPE_PHOTO]
			});
		// ---------------------------------------------------------------------------
		}
	});	
});

textArea.addEventListener('change', function(e){
	Ti.API.info(e.value);
});

textArea.addEventListener('messageClicked', function(e){
	if(e.text){
		Ti.API.info('Text: '+e.text);
	}
	if(e.image){
		Ti.API.info('Image: '+e.image);
	}
	Ti.API.info('Index: ' + e.index);
});
/////////////////////////////////////////

	latestChatDT = '1/1/1900';
	getChat(latestChatDT);

	
	getChatIntervalHolder = setInterval(getChat, 30000);
	return textArea;
	
};