// this sets the background color of the current Window
Titanium.UI.currentWindow.setBackgroundColor('#333333');

var win = Titanium.UI.currentWindow;
//Titanium.API.info('Entered Chat Main');

Ti.include(
	'chatView.js'
);
//Ti.UI.createAlertDialog({ title: 'Welcome!', message: 'Welcome to Game Talk Live, ' + Ti.App.Properties.getString('currentUserFName') + '!' }).show();

function logout()
{
	//Ti.App.Properties.setString('currentUser', '');
	win.close();
}

function backToSports()
{
	win.remove(gamesList);
	sportsList = createSportsTableView();	
	win.add(sportsList);
	logoutBtn.title = 'Home';
	logoutBtn.removeEventListener('click', backToSports);
	logoutBtn.addEventListener('click', logout);
	win.title = 'Game Talk Live';
}

function backToGames()
{
	win.remove(chatRoom);
	gamesList = createGamesTableView(currLeagueID, currLeagueName);
	win.add(gamesList);
	logoutBtn.removeEventListener('click', backToGames);
	logoutBtn.addEventListener('click', backToSports);
	win.title = currLeagueName;
	win.titleControl = null;
	win.setRightNavButton(u);
}

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
                    ap +
                    " CDT";
   return timeString;
} // function getClockTime()

if (Ti.Platform.osname === 'iphone') {
			var logoutBtn = Titanium.UI.createButton({
				title:'Home',
				style:Titanium.UI.iPhone.SystemButtonStyle.PLAIN
			});
			logoutBtn.addEventListener('click', logout);
			
			var u = Titanium.UI.createLabel({
			    color: '#ffffff',
			    text: Ti.App.Properties.getString('currentUser'),
			    font: { fontSize: 14, fontFamily: 'Ariel' },
			    textAlign: 'left',
			    height: 'auto',
			    width: 'auto'
			});
			win.setLeftNavButton(logoutBtn);
			win.setRightNavButton(u);
		}



createGamesTableView = function(leagueID, leagueName) {
	logoutBtn.title = 'Back';
	logoutBtn.removeEventListener('click', logout);
	logoutBtn.addEventListener('click', backToSports);
	win.title = leagueName;
	Ti.App.Properties.setString('currentLocation', '');
			
	/////// Get games data from server
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
			var rowColor;
			var visitorLabel;
			var homeLabel;
			var gameTimeLabel;
			var gamelist = JSON.parse(this.responseText);
			//Titanium.API.info('Number of games: ' + gamelist.length);
			//Titanium.API.info(this.responseText);
			
			var gameTime;
			var currDate = '01/01/1900';
			var prevDate;
			
			for (var i = 0; i < gamelist.length; i++)
			{
				gameTime = new Date(gamelist[i].StartTime);
				prevDate = currDate;
				currDate = (gameTime.getMonth() + 1) + '/' + gameTime.getDate() + '/' + gameTime.getFullYear();
				
				if (gamelist[i].Active == 'True')
					rowColor = '#000000';
				else
					rowColor = '#cccccc';
				
				
				if (prevDate != currDate)
				{
					row = Ti.UI.createTableViewRow({
						height: 30,
						title: currDate,
						id: '',
						active: 'False',
						color: 'black',
						backgroundColor: '#999999'
					});
					data.push(row);
				}
				
				visitorLabel = Titanium.UI.createLabel({
				    color: rowColor,
				    text: gamelist[i].VisitorTeam,
				    font: { fontSize: 14, fontFamily: 'Ariel' },
				    textAlign: 'left',
				    top: -20
				});
				homeLabel = Titanium.UI.createLabel({
				    color: rowColor,
				    text: gamelist[i].HomeTeam,
				    font: { fontSize: 14, fontFamily: 'Ariel' },
				    textAlign: 'left',
				    top: 20
				});
				gameTimeLabel = Titanium.UI.createLabel({
				    color: rowColor,
				    text: formatTime(gameTime),
				    font: { fontSize: 14, fontFamily: 'Ariel' },
				    textAlign: 'left',
				    top: 0,
				    left: 220
				});
				
				
				row = Ti.UI.createTableViewRow({
					height: 45,
					//title: gamelist[i].VisitorName + ' at ' + gamelist[i].HomeName + ' (' + gamelist[i].GameTime + ')',
					id: gamelist[i].GameID,
					homeTeam: gamelist[i].HomeTeam,
					visitorTeam: gamelist[i].VisitorTeam,
					homeAbbrev: gamelist[i].HomeAbbrev,
					visitorAbbrev: gamelist[i].VisitorAbbrev,
					noHomeTeam: gamelist[i].NoHomeTeam,
					active: gamelist[i].Active,
					color: rowColor
				});
				row.add(visitorLabel);
				row.add(homeLabel);
				row.add(gameTimeLabel);
				data.push(row);
			}
		}
	    else
	    {
	    	//Titanium.API.info('No data');
	    	rowLabel = Titanium.UI.createLabel({
				    color: rowColor,
				    text: 'Error: No Data Found.',
				    font: { fontSize: 14, fontFamily: 'Ariel' },
				    textAlign: 'left'
				});
	    	row = Ti.UI.createTableViewRow({
        		height: 30,
        		//title: 'Error: No Data Found.',
        		id: 1,
        		active: 'False'
    		});
			row.add(rowLabel);
			data.push(row);
	    }
		tv.setData(data);
	};

	var tv = Ti.UI.createTableView();
	tv.addEventListener('singletap', function(_e) {
		//Titanium.API.info(_e.rowData.id);
		if (_e.rowData.active == 'True')
		{
			win.remove(gamesList);
			chatRoom = createChatRoom(_e.rowData.id, _e.rowData.homeTeam, _e.rowData.visitorTeam, _e.rowData.homeAbbrev, _e.rowData.visitorAbbrev, _e.rowData.noHomeTeam);
			win.add(chatRoom);
		}
		else
		{
			Ti.UI.createAlertDialog({
	    		title: 'Coming soon!', message:'Check in with Game Talk Live later for additional sports and features!'
	    	}).show();
		}
	});
		
	function populateGamesData() {
		xhr.open('GET', 'http://wcf.gametalklive.com/Utility.svc/getGames/?userName=' + Ti.App.Properties.getString('currentUser') + '&leagueid=' + leagueID + '&appKey=1&deviceType=' + Ti.Platform.osname + '&deviceID=3');
		xhr.send();
	}
	///////
	//run initial query
	populateGamesData();

	return tv;
}
	
	
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
			var rowColor;
			var leaguelist = JSON.parse(this.responseText);
			//Titanium.API.info('Number of leagues: ' + leaguelist.length);
			for (var i = 0; i < leaguelist.length; i++)
			{
				if (leaguelist[i].Active == 'True')
				{
					if (leaguelist[i].Active == 'True')
						rowColor = '#000000';
					else
						rowColor = '#cccccc';
					
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
		}
	    else
	    {
	    	//Titanium.API.info('No data');
	    	row = Ti.UI.createTableViewRow({
        		height: 35,
        		title: 'No leagues found.  Please try again later.',
        		id: 1
    		});
			data.push(row);
	    }
		tv.setData(data);
	};

	var tv = Ti.UI.createTableView();
	tv.addEventListener('click', function(_e) {
		//Titanium.API.info(_e.rowData.id);
		if (_e.rowData.active == 'True')
		{
			win.remove(sportsList);
			currLeagueID = _e.rowData.id;
			currLeagueName = _e.rowData.title;
			gamesList = createGamesTableView(currLeagueID, currLeagueName);
			win.add(gamesList);
		}
		else
		{
			Ti.UI.createAlertDialog({
	    		title: 'Coming soon!', message:'Check in with Game Talk Live later for additional sports and features!'
	    	}).show();
		}
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
win.add(sportsList);

var gamesList;
var currLeagueID;
var currLeagueName;
var chatwindow;
var chatRoom;