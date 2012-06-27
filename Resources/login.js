// this sets the background color of the current Window
Titanium.UI.currentWindow.setBackgroundColor('#ffffff');
Titanium.UI.currentWindow.setBackgroundImage('ChalkboardBg.jpg');

var win = Titanium.UI.currentWindow;
var data = [];

var scrollView = Titanium.UI.createScrollView({
	contentWidth:'auto',
	contentHeight:'auto',
	top:0,
	showVerticalScrollIndicator:true,
	showHorizontalScrollIndicator:true
});

tableView = Titanium.UI.createTableView({
    top: 0,
    left: 0,
    bottom: 100,
    right: 0,
    style: Titanium.UI.iPhone.TableViewStyle.GROUPED,
    borderWidth: 0,
	backgroundImage:'ChalkboardBg.jpg'
});

var row = Ti.UI.createTableViewRow({
    hasChild: false,
    selectionStyle: Ti.UI.iPhone.TableViewCellSelectionStyle.NONE
});
row.height = 40;

var uidLabel = Titanium.UI.createLabel({
    text: 'User ID or Email:',
    textAlign: 'left',
    font: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    left: 10,
    color: 'black',
    width: '200',
    height: 40
});
row.add(uidLabel);

var userID = Titanium.UI.createTextField({
    color: '#336699',
    height: 40,
    left: 140,
    width: 150,
    textAlign: 'left',
    font: {
        fontSize: 14
    },
    //hintText: 'Enter User ID or Email',
    borderStyle: Titanium.UI.INPUT_BORDERSTYLE_NONE,
    autocapitalization:Titanium.UI.TEXT_AUTOCAPITALIZATION_NONE,
    autocorrect:false//,
//    font: { fontSize: 14, fontFamily: 'Ariel' }
});
row.add(userID);

data.push(row);

row = Ti.UI.createTableViewRow({
    hasChild: false,
    selectionStyle: Ti.UI.iPhone.TableViewCellSelectionStyle.NONE
});
row.height = 40;

var pwdLabel = Titanium.UI.createLabel({
    text: 'Password:',
    textAlign: 'left',
    font: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    left: 10,
    color: 'black',
    width: '200',
    height: 40
});
row.add(pwdLabel);

var password = Titanium.UI.createTextField({
    color: '#336699',
    height: 40,
    left: 140,
    width: 150,
    //hintText: 'Enter Password',
    passwordMask: true,
    borderStyle: Titanium.UI.INPUT_BORDERSTYLE_NONE,
    font: { fontSize: 14, fontFamily: 'Ariel' }
});
row.add(password);

data.push(row);

//create label (or button etc)
/*
var forgotPwdLbl = Ti.UI.createLabel({
	text: 'Forgot Password?',
	color: '#6666ff',
	left: 25,
	top: 100,
	height: 20,
	width: 250,
	textAlign: 'left',
    font: { fontSize: 14, fontFamily: 'Ariel' }
});       
 
//event listener
forgotPwdLbl.addEventListener('click', function(e)
{
//open link in safari - application will close
	Titanium.Platform.openURL('http://www.gametalklive.com/resetPassword.aspx');
});*/

var newAcctLbl = Ti.UI.createLabel({
	text: 'Create New Account',
	color: '#dddddd',
	left: 25,
	top: 120,
	height: 20,
	width: 250,
	textAlign: 'left',
    font: { fontSize: 14, fontFamily: 'Ariel' }
});       
 
//event listener
newAcctLbl.addEventListener('click', function(e)
{
	var win = Ti.UI.createWindow({
		url: 'createNew.js'
	});
	win.open();
});


var loginBtn = Titanium.UI.createButton({
    title: 'Login',
    top: 160,
    left: 20,
    height: 30,
    width: '60%',
    font: { fontSize: 14, fontFamily: 'Ariel' }
});

var closeBtn = Titanium.UI.createButton({
    title: 'Cancel',
    top: 200,
    left: 20,
    height: 30,
    width: '60%',
    font: { fontSize: 14, fontFamily: 'Ariel' }
});

closeBtn.addEventListener('click', function () {
    win.close();
});


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
		
		var a = Ti.UI.createAlertDialog({
    		title: 'Welcome to Game Talk Live!',
    		message:"Click Games & Chat to check into a game room."
	    });
	    
	    a.addEventListener('click', function () {
			win.close();
		});
    	
    	a.show();
		setTimeout(function()
		{
			a.hide();
			win.close();
		},3000);
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
	}
});

//Ti.App.addEventListener('app:loggedIn', function(e) {
//	win.close();
//});

tableView.setData(data);
scrollView.add(tableView);
scrollView.add(newAcctLbl);
scrollView.add(loginBtn);
scrollView.add(closeBtn);
win.add(scrollView);

