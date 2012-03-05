//test code - replace with favoriteBtnEventListener above
favoriteBtn.addEventListener('click', function()
{
    
	var t = Titanium.UI.create2DMatrix();
	t = t.scale(0);

	var w = Titanium.UI.createWindow({
		backgroundColor:'#FFFFFF',
		borderWidth:3,
		borderColor:'#000000',
		height:400,
		width:250,
		top: 50,
		borderRadius:8,
		opacity:0.92,
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
		
	var userName = Ti.UI.createTextField({
		width: '100',
		height: '30',
		top: '50',
		hintText: 'Username'
	});
	
	var password = Ti.UI.createTextField({
		width: '100',
		height: '30',
		top: '50',
		hintText: 'Password'
	});

	var loginBtn = Ti.UI.createButton({
		width: '60',
		height: '30',
		top: '50',
		left: '30',
		title: 'Log In'
	});
	
	var cancelBtn = Ti.UI.createButton({
		width: '60',
		height: '30',
		top: '50',
		right: '30',
		title: 'Cancel'
	});
	
	
	w.add(userName);
	w.add(password);
	w.add(loginBtn);
	w.add(cancelBtn);
	
	//w.add(popUpView);
	
	//return popUpView;


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


	w.open(a);


});