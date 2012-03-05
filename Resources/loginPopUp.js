
//test code - replace with favoriteBtnEventListener above
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
