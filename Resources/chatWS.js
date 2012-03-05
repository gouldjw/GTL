var latestChatDT = '1/1/1900';
var chatPoster;

var chatReceiver = Ti.Network.createHTTPClient();

chatReceiver.onerror = function (e) {
    //Ti.UI.createAlertDialog({ title: 'Error', message: 'Cannot communicate with server.  Please try again later.' }).show();
};
chatReceiver.setTimeout(30000);

chatReceiver.onload = function (e) {

	var chatDT;
	
	if (this.responseText != null)
	{
		var chats = JSON.parse(this.responseText);
		var parsedDateTime;
		for (var i = 0; i < chats.length; i++)
		{
//			if (i == 0 && chats[i].UserID != Ti.App.Properties.getString('currentUser'))
//			{
//				Titanium.Media.vibrate();
//				Titanium.Media.beep();
//			}

			chatDT = new Date(chats[i].TimeSent.substring(0, 18));
			parsedDateTime = (chatDT.getMonth() + 1);
			parsedDateTime += '/' + chatDT.getDate() + ' ';
			if (chatDT.getHours() > 12)
				parsedDateTime += (chatDT.getHours() - 12);
			else if (chatDT.getHours() > 0)
				parsedDateTime += chatDT.getHours();
			else
				parsedDateTime += "12";
			
			if (chatDT.getMinutes() < 10)
				parsedDateTime += ":0" + chatDT.getMinutes();
			else
				parsedDateTime += ":" + chatDT.getMinutes();
			
			if (chatDT.getHours() >= 12)
				parsedDateTime += " pm";
			else
				parsedDateTime += " am";
				
				
			if (chats[i].UserID == Ti.App.Properties.getString('currentUser'))
			{
				chatPoster = 'You';
				chatRoom.addLabel(chatPoster + ' @ ' + parsedDateTime + ':');
				chatRoom.sendMessage(chats[i].ChatText);
			}
			else
			{
				chatPoster = chats[i].UserID;
				chatRoom.addLabel(chatPoster + ' @ ' + parsedDateTime + ':');
			    chatRoom.recieveMessage(chats[i].ChatText);
			}

			latestChatDT = chats[i].TimeSent;

		}
	}
};

function getChat() {
	chatReceiver.open('GET', 'http://wcf.gametalklive.com/Chat.svc/getchats/?lasttime=' + latestChatDT + '&gameID=' + currGameID + '&userName=' + Ti.App.Properties.getString('currentUser') + '&appKey=1&deviceType=' + Ti.Platform.osname + '&deviceID=3');
	chatReceiver.send();
}



var chatSender = Ti.Network.createHTTPClient();

chatSender.onload = function (e) {
	getChat();
}

chatSender.onerror = function (e) {
    Ti.UI.createAlertDialog({ title: 'Error', message: 'Cannot communicate with server.  Please try again later.' }).show();
};
chatSender.setTimeout(15000);

function sendChat(chattext) {
	//Titanium.API.info(escape(chattext) + ' hi');

	chatRoom.blur();
				
	var chatObj = {
    	'data': chattext,
    	'gameID': currGameID,
    	'userName': Ti.App.Properties.getString('currentUser'),
    	'appKey': '1',
    	'deviceType': Ti.Platform.osname,
    	'deviceID': '3'
	}
	
	chatSender.open('POST', 'http://wcf.gametalklive.com/Chat.svc/sendchat');
    chatSender.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
	chatSender.send(JSON.stringify(chatObj));
}
