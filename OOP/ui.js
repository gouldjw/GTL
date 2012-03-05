


/////////////////////////////////////
//All code below is from MedOptimizer
//Replace base classes/methods with ones appropriate for GTL
/////////////////////////////////////


//Wrap all UI code in a self-calling function to protect the global namespace
(function() {
	//Create UI sub-namespace
	gtl.ui = {};
	
	
	//UI Window Class
	gtl.ui.createBaseWindow = function() {
		var win = Ti.UI.createWindow({
			modal : 'true',
			navBarHidden : 'false',
			backgroundColor : 'stripped'
		});
		return win;
	};


	//Base Slider Class
	gtl.ui.createBaseSlider = function(label, minLabel, maxLabel, min, max, step, value, width, top){
		var slider = Ti.UI.createSlider	({
			label: 'labelText',
			minLabel: 'minLabelText', //width?  position?
			maxLabel: 'maxLabelText', //width?  position?
			min: 'minValue',
			max: 'maxValue',
			step: 5,
			value: 3,   //set to default until changed by user
			width: width,
			top: top
		});
		
		return slider;
		
	};
});