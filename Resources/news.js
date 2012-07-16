(function() {
	function formatTime(inputDateTime)
	{
	   var hour   = inputDateTime.getHours();
	   var minute = inputDateTime.getMinutes();
	   var ap = "AM";
	   if (hour   > 11) { ap = "PM";             }
	   if (hour   > 12) { hour = hour - 12;      }
	   if (hour   == 0) { hour = 12;             }
	   if (hour   < 10) { hour   = "0" + hour;   }
	   if (minute < 10) { minute = "0" + minute; }
	   var timeString = hour +
	                    ':' +
	                    minute +
	                    " " +
	                    ap; // +
//	                    " CDT";
	   return timeString;
	}

	newsWin = Ti.UI.createWindow({
		title: L('News / Notifications'),
		barColor: '#036',
		modal: 'false',
		backButtonTitle: L('Home'),
		tabBarHidden: true,
		navBarHidden: false
	});
	
	notificationsView = Ti.UI.createScrollView({
		top:0,
		left:0,
		width:'auto',
		height:'auto'
	});
	
	var tv = Ti.UI.createTableView({top: 0, height: 367, deleteButtonTitle:'Delete'});
	var row;
	var data = [];

	var db = Ti.Database.open('gtlDB');
	var notificationRS = db.execute('SELECT * FROM notifications WHERE title <> "DELETED" ORDER BY createdDate');
	var hasNotifications = false;
	var rowColor;
	var notificationDate;
	var notificationTime;

	while (notificationRS.isValidRow())
	{
		hasNotifications = true;
		notificationTime = new Date(notificationRS.fieldByName('createdDate').substr(0, 19));
		notificationDate = (notificationTime.getMonth() + 1) + '/' + notificationTime.getDate() + '/' + notificationTime.getFullYear();
		0+6
		if (notificationRS.fieldByName('viewed') == 0)
			rowColor = '#000';
		else
			rowColor = '#666';
			
		titleLabel = Titanium.UI.createLabel({
		    color: rowColor,
		    text: notificationRS.fieldByName('title'),
		    font: { fontSize: 14, fontFamily: 'Ariel' },
		    textAlign: 'left',
		    top: 2,
		    left: 5,
		    height: 20
		});
		timeLabel = Titanium.UI.createLabel({
		    color: rowColor,
		    text: notificationDate + ' ' + formatTime(notificationTime),
		    font: { fontSize: 14, fontFamily: 'Ariel' },
		    textAlign: 'left',
		    top: 25,
		    left: 5,
		    height: 20
		});
				
		row = Ti.UI.createTableViewRow({
			height: 45,
			id: notificationRS.fieldByName('id'),
			noteText: notificationRS.fieldByName('body'),
			noteTitle: notificationRS.fieldByName('title'),
			color: '#000'
		});
		
		row.add(titleLabel);
		row.add(timeLabel);
		data.push(row);
		notificationRS.next();
	}
	notificationRS.close();
	
	tv.setData(data);
	tv.addEventListener('delete',function(e)
	{
		var dbEdit = Ti.Database.open('gtlDB');
		dbEdit.execute('UPDATE notifications SET title = "DELETED" WHERE id = ' + e.rowData.id + ';');
		dbEdit.close();
	});
	
	tv.addEventListener('click',function(e)
	{
		Ti.UI.createAlertDialog({ title: e.rowData.noteTitle, message: e.rowData.noteText }).show();
		e.row.children[0].color = '#666';
		e.row.children[1].color = '#666';
		var dbEdit = Ti.Database.open('gtlDB');
		dbEdit.execute('UPDATE notifications SET viewed = 1 WHERE id = ' + e.rowData.id + ';');
		dbEdit.close();
	});
	
	notificationsView.add(tv);
	newsWin.add(notificationsView);
	
	
	var edit = Titanium.UI.createButton({
		title:'Edit'
	});
	
	edit.addEventListener('click', function()
	{
		newsWin.setRightNavButton(cancel);
		tv.editing = true;
	});
	
	var cancel = Titanium.UI.createButton({
		title:'Done',
		style:Titanium.UI.iPhone.SystemButtonStyle.DONE
	});
	cancel.addEventListener('click', function()
	{
		newsWin.setRightNavButton(edit);
		tv.editing = false;
	});
	
	newsWin.setRightNavButton(edit);
	db.close();

	
	module.exports = newsWin;
})();



/*
// create table view data object
var data = [];

var xhr = Ti.Network.createHTTPClient();
xhr.open("GET","http://feeds.foxsports.com/feedout/syndicatedContent?categoryId=0");
xhr.onload = function()
{
	//Ti.UI.createAlertDialog({ title: 'Test', message: this.responseText }).show();
	try
	{
		var doc = this.responseXML.documentElement;
		var items = doc.getElementsByTagName("item");
		var x = 0;
		var doctitle = doc.evaluate("//channel/title/text()").item(0).nodeValue;
		//Ti.UI.createAlertDialog({ title: 'Test', message: doctitle}).show();
		//Ti.UI.createAlertDialog({ title: 'Test', message: items.length}).show();
		for (var c=0;c<items.length;c++)
		{
			var item = items.item(c);
			var thumbnails = item.getElementsByTagName("enclosure");
			if (thumbnails && thumbnails.length > 0)
			{
				var media = thumbnails.item(0).getAttribute("url");
				var title = item.getElementsByTagName("title").item(0).text;
				var row = Ti.UI.createTableViewRow({height:80});
				var label = Ti.UI.createLabel({
					text:title,
					left:72,
					top:5,
					bottom:5,
					right:5				
				});
				row.add(label);
				var img;
				if (Titanium.Platform.name == 'android') 
				{
					// iphone moved to a single image property - android needs to do the same
					img = Ti.UI.createImageView({
						image:media,
						left:5,
						height:60,
						width:60
					});

				}
				else
				{
					img = Ti.UI.createImageView({
						image:media,
						left:5,
						height:60,
						width:60
					});
					
				}
				row.add(img);
				data[x++] = row;
				row.url = item.getElementsByTagName("link").item(0).text;
			}
		}
		var tableview = Titanium.UI.createTableView({data:data});
		Titanium.UI.currentWindow.add(tableview);
		tableview.addEventListener('click',function(e)
		{
			var w = Ti.UI.createWindow({title:doctitle, barColor: '#036'});
			var wb = Ti.UI.createWebView({url:e.row.url});
			w.add(wb);
			var b = Titanium.UI.createButton({
				title:'Close',
				style:Titanium.UI.iPhone.SystemButtonStyle.PLAIN
			});
			w.setLeftNavButton(b);
			b.addEventListener('click',function()
			{
				w.close();
			});
			w.open({modal:true});
		});
	}
	catch(E)
	{
		alert(E);
	}
};
xhr.send();



*/
