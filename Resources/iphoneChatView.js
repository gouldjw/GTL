


Titanium.SMSView = require('ti.smsview');

var buttonBar = Ti.UI.createButtonBar({
	labels:['Receive','Clear','Get All','Enable','Disable'],
	height:30,
	style:Ti.UI.iPhone.SystemButtonStyle.BAR
});

var headerView = Ti.UI.createView();

headerView.add(buttonBar);

var win = Ti.UI.createWindow({
	titleControl:buttonBar,
	orientationModes:[1,2,3,4],
});

var textArea = Ti.SMSView.createView({
	maxLines:6,
	minLines:2,		
	backgroundColor: '#dae1eb',
	sendColor:'Blue',
	recieveColor: 'Green',
	selectedColor: 'White',
	animated: true,
	buttonTitle: 'Send',
	font: {fontSize: 14},
	autocorrect: false,
	textAlignment: 'left',
	textColor: 'Black',
	camButtonDisabled: true,
	camButton: true,
	returnType: Ti.SMSView.RETURNKEY_SEND

			
});

win.add(textArea);

buttonBar.addEventListener('click', function(e){
	switch(e.index){
		case 0:	textArea.addLabel(new Date()+""),
				textArea.recieveMessage('Hello World!'),
				textArea.blur();
				break;
		case 1: textArea.empty();
				break;
		case 2: Ti.API.info(textArea.getAllMessages());
				break;	
		case 3: textArea.camButtonDisabled = false;
				break;	
		case 4: textArea.camButtonDisabled = true;
				break;
	}
});

textArea.addEventListener('click', function(e){
	if(e.scrollView){
		textArea.blur();
	}

});
textArea.addEventListener('buttonClicked', function(e){
    textArea.addLabel(new Date()+"");
    textArea.sendMessage(e.value);
    textArea.blur();
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

win.open({modal:true,animated:true});


