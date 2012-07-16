function NotificationDB() {
	var db = Ti.Database.open('gtlDB');
	
	db.execute('CREATE TABLE IF NOT EXISTS notifications(id INTEGER PRIMARY KEY, title TEXT, body TEXT, createdDate TEXT, receivedDate TEXT, viewed INTEGER);');
	db.execute('CREATE TABLE IF NOT EXISTS version(version_num TEXT);');
	
	db.execute('DELETE FROM version;');
	db.execute('INSERT INTO version (version_num) VALUES ("1.2.12");');

	var notificationRS = db.execute('SELECT * FROM notifications ORDER BY createdDate');
	var lastTime;
	var hasNotifications = false;
	while (notificationRS.isValidRow())
	{
		lastTime = notificationRS.fieldByName('createdDate');
		hasNotifications = true;
		notificationRS.next();
	}
	notificationRS.close();
	
	if (!hasNotifications)
	{
		lastTime = '1/1/1900';
	}

	var notificationReceiver = Ti.Network.createHTTPClient();

	notificationReceiver.onerror = function (e) {
	    //Ti.UI.createAlertDialog({ title: 'Error', message: 'Cannot communicate with server.  Please try again later.' }).show();
	};
	notificationReceiver.setTimeout(15000);
	
	notificationReceiver.onload = function (e) {
		var db = Ti.Database.open('gtlDB');
		var notifications = JSON.parse(this.responseText);
		var parsedDateTime;
		var notificationTitle;
		var notificationText;
		for (var i = notifications.length - 1; i >= 0; i--)
		{
			if (lastTime == '1/1/1900' || notifications[i].DateTimeStamp > lastTime)
			{
				notificationTitle = notifications[i].NotificationTitle;
				notificationText = notifications[i].NotificationText;
				if (notificationTitle == '' || notificationTitle == null) {notificationTitle = 'GTL Notification';}
				if (notificationText != '' && notificationText != null)
				{
					db.execute('INSERT INTO notifications (id, title, body, createdDate, receivedDate, viewed) VALUES (?,?,?,?,?,?)', notifications[i].NotificationID, notificationTitle, notificationText, notifications[i].DateTimeStamp, notifications[i].DateTimeStamp, 0);
					lastTime = notifications[i].DateTimeStamp;
					Ti.UI.createAlertDialog({ title: notificationTitle, message: notificationText }).show();
				}
			}
		}
		db.close();
	}
	
	function getNotifications() {
		if (Ti.App.Properties.getString('currentUser') != null && Ti.App.Properties.getString('currentUser') != '')
		{
			notificationReceiver.open('GET', 'http://wcf.gametalklive.com/Notification.svc/getnotifications/?userName=' + Ti.App.Properties.getString('currentUser') + '&lasttime=' + lastTime + '&appKey=1&deviceType=' + Ti.Platform.osname + '&deviceID=3');
			notificationReceiver.send();
		}
	}
	
	db.close();
	
	getNotifications();
	var getNotificationIntervalHolder = setInterval(getNotifications, 30000);
	return null;
};

module.exports = NotificationDB;