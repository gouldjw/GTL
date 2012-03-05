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
	'GPSCheckin.js'
);

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
	/*
	if (Titanium.Gesture.orientation == Titanium.UI.LANDSCAPE_LEFT || Titanium.Gesture.orientation == Titanium.UI.LANDSCAPE_RIGHT)
	{
		chatTextTopFocus = 230;
		chatTextTopBlur = 390;
		chatAreaTop = 165;
	}
	*/
	chatwindow = Titanium.UI.createView({
	  title: L('Game Talk Live'),
	  height: 600
	});
	
	ChatView1 = Ti.UI.createScrollView({
		contentWidth:'auto',
		contentHeight:10,
		top: chatAreaTop,
		width: '100%',
		showVerticalScrollIndicator:true,
		showHorizontalScrollIndicator:false,
		zIndex: 50
	});
	
	var ChatView2 = Ti.UI.createView({
		top: chatTextTopBlur,
		height: 400,
		width: '100%',
		backgroundColor: '#333333',
		zIndex: 100
	});
	
	var ChatText = Ti.UI.createTextField({
			height: 30,
			font: { fontSize: 15, fontFamily: 'Ariel' },
			top: 5,
			left: 10,
			width: chatTextWidth,
			keyboardType: Titanium.UI.KEYBOARD_DEFAULT,
			returnKeyType: Titanium.UI.RETURNKEY_DONE,
			borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
			hintText:L('Tap to chat!')
		});
	
	var goButton = Titanium.UI.createImageView({
    	image: "GoButton.jpg",
    	width: 24,
    	height: 24,
    	top: 8,
    	left: chatTextWidth + 18
	});
	
	goButton.addEventListener('click', function () {
		sendChat(ChatText.value);
		ChatText.value = '';
		ChatText.blur();
	});
	
	ChatView2.add(ChatText);
	ChatView2.add(goButton);
	var cv2HasFocus = false;
	
	//
	// orientation change listener
	//
/*	Ti.Gesture.addEventListener('orientationchange',function(e)
	{
		if (e.source.isPortrait() || e.source.isLandscape())
		{
			if (e.source.isPortrait())
			{
				chatTextTopFocus = 250;
				chatTextTopBlur = 460;
				chatAreaTop = 90;
				ChatText.width = 270;
				goButton.left = 288;
				chatViewHeightOffset = 0;
				chatTextWidth = 270;
			}
			
			if (e.source.isLandscape())
			{
				chatTextTopFocus = 230;
				chatTextTopBlur = 390;
				chatAreaTop = 165;
				ChatText.width = 430;
				goButton.left = 448;
				chatViewHeightOffset = 65;
				chatTextWidth = 430;
			}
			
			ChatView2.width = '100%';
			ChatView1.top = chatAreaTop;
			ChatView1.contentHeight = currChatTop + 140 + chatViewHeightOffset;
			
			if (cv2HasFocus)
			{
				ChatView2.top = chatTextTopFocus;
			}
			else
			{
				ChatView2.top = chatTextTopBlur;
			}
				
			chatwindow.remove(ChatView1);
			chatwindow.add(ChatView1);
		}
	});*/
	
	ChatText.addEventListener('focus', function () {
		clearInterval(getChatIntervalHolder);
		ChatView2.top = chatTextTopFocus;
		cv2HasFocus = true;
	});
	ChatText.addEventListener('blur', function () {
		ChatView2.top = chatTextTopBlur;
		cv2HasFocus = false;
		//getChat();
		getChatIntervalHolder = setInterval(getChat, 30000);
	});
		
	currChatTop = 10;
	latestChatDT = '1/1/1900';
	getChat(latestChatDT);
	chatwindow.add(ChatView1);
	chatwindow.add(ChatView2);
	
	getChatIntervalHolder = setInterval(getChat, 30000);
	return chatwindow;
};