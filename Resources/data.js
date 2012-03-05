function createSportsTableView() {
		var tv = Ti.UI.createTableView();
//		tv.addEventListener('click', function(_e) {
//			Titanium.API.info(_e.rowData);
//		});
		
		var data = [];
		
		function populateData() {
			var row = Ti.UI.createTableViewRow({
        		height: 30,
        		title: 'NFL Football'
    		});
    		data.push(row);
    		row = Ti.UI.createTableViewRow({
        		height: 30,
        		title: 'NCAA Football'
    		});
    		data.push(row);
			tv.setData(data);
			//Get list of sports here.
		}
		//Ti.App.addEventListener('databaseUpdated', populateData);
		//run initial query
		populateData();
		//tv.setData(data);

		return tv;
	}
