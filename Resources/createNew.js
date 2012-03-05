///<reference path="Titanium-vsdoc1.js"/>

// this sets the background color of the current Window
Titanium.UI.currentWindow.setBackgroundImage('ChalkboardBg.jpg');

var win = Titanium.UI.currentWindow;

var scrollView = Titanium.UI.createScrollView({
	contentWidth:'auto',
	contentHeight:'auto',
	top:0,
	showVerticalScrollIndicator:true,
	showHorizontalScrollIndicator:true
});

var firstName = Titanium.UI.createTextField({
    color: '#336699',
    height: 30,
    top: 20,
    left: 20,
    width: 250,
    hintText: 'First Name',
    borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
    autocorrect:false,
    font: { fontSize: 14, fontFamily: 'Ariel' }
});

var lastName = Titanium.UI.createTextField({
    color: '#336699',
    height: 30,
    top: 60,
    left: 20,
    width: 250,
    hintText: 'Last Name',
    borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
    autocorrect:false,
    font: { fontSize: 14, fontFamily: 'Ariel' }
});

var email = Titanium.UI.createTextField({
    color: '#336699',
    height: 30,
    top: 100,
    left: 20,
    width: 250,
    hintText: 'Email',
    borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
    autocapitalization:Titanium.UI.TEXT_AUTOCAPITALIZATION_NONE,
    autocorrect:false,
    font: { fontSize: 14, fontFamily: 'Ariel' }
});

var userID = Titanium.UI.createTextField({
    color: '#336699',
    height: 30,
    top: 140,
    left: 20,
    width: 250,
    hintText: 'User ID (15 char max)',
    borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
    autocapitalization:Titanium.UI.TEXT_AUTOCAPITALIZATION_NONE,
    autocorrect:false,
    font: { fontSize: 14, fontFamily: 'Ariel' }
});

var password1 = Titanium.UI.createTextField({
    color: '#336699',
    height: 30,
    top: 180,
    left: 20,
    width: 250,
    hintText: 'Password',
    passwordMask: true,
    borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
    font: { fontSize: 14, fontFamily: 'Ariel' }
});

var pwdExplanation = Titanium.UI.createLabel({
	color: 'white',
	text: 'Password must contain at least 6-12 characters, including numbers and letters.',
    font: { fontSize: 12, fontFamily: 'Ariel' },
	height: 40,
	left: 20,
	top: 209,
	width: 250
})

var password2 = Titanium.UI.createTextField({
    color: '#336699',
    height: 30,
    top: 250,
    left: 20,
    width: 250,
    hintText: 'Password (repeat)',
    passwordMask: true,
    borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
    font: { fontSize: 14, fontFamily: 'Ariel' }
});

var createBtn = Titanium.UI.createButton({
    title: 'Create Account',
    top: 310,
    left: 20,
    height: 30,
    width: '60%',
    font: { fontSize: 14, fontFamily: 'Ariel' }//,
//    color: '#ffffff',
//    backgroundColor: '#000000'
});

var closeBtn = Titanium.UI.createButton({
    title: 'Cancel',
    top: 350,
    left: 20,
    height: 30,
    width: '60%',
    font: { fontSize: 14, fontFamily: 'Ariel' }//,
//    color: '#ffffff',
//    backgroundColor: '#000000'
});

closeBtn.addEventListener('click', function () {
    win.close();
});


//// Testing a call to the GTL Web Service
var xhr = Ti.Network.createHTTPClient();
var serverResponse;

xhr.onerror = function (e) {
    Ti.UI.createAlertDialog({ title: 'Error', message: 'Cannot communicate with server.  Please try again later.' }).show();
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
    		title: 'Welcome to Game Talk Live!', message:"Pick a league to begin chatting."
    	}).show();
		win.close();
    }
    else
    {
    	Ti.UI.createAlertDialog({
    		title: 'User Name taken', message:"That user name has already been taken.  Please try again."
    	}).show();
    }
};

createBtn.addEventListener('click', function () {
	if (password1.value != password2.value)
	{
		Ti.UI.createAlertDialog({
    		title: 'Password error', message:"Your passwords do not match.  Please try again."
    	}).show();
	}
	else if (firstName.value == '' || lastName.value == '' || userID.value == '' || email.value == '')
	{
		Ti.UI.createAlertDialog({
    		title: 'Data error', message:"You must complete all fields.  Please try again."
    	}).show();
	}
	else if (!validateEmail(email.value))
	{
		Ti.UI.createAlertDialog({
			title: 'Email error', message: 'Invalid email address.  Please try again.'
		}).show();	
	}
	else if (!validatePassword(password1.value))
	{
		Ti.UI.createAlertDialog({
			title: 'Password error', message: 'Password must contain 6-12 characters, including numbers and letters.  Please try again.'
		}).show();	
	}
	else
	{
		xhr.open('GET', 'http://wcf.gametalklive.com/Account.svc/createAcct/?fname=' + firstName.value + '&lname=' + lastName.value + '&email=' + email.value + '&userName=' + userID.value + '&password=' + password1.value + '&appKey=1&deviceType=' + Ti.Platform.osname + '&deviceID=3');
		xhr.send();
	}
});

function validateEmail(emailVal) 
{ 
	var re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return re.test(emailVal);
}

function validatePassword(pwdVal)
{ 
	var re = /^(?=.{6,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$/;
	return re.test(pwdVal);
}

scrollView.add(firstName);
scrollView.add(lastName);
scrollView.add(email);
scrollView.add(userID);
scrollView.add(password1);
scrollView.add(pwdExplanation);
scrollView.add(password2);
scrollView.add(createBtn);
scrollView.add(closeBtn);
win.add(scrollView);
