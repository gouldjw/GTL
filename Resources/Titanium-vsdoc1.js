
Titanium = {
	userAgent :'',
	version :'',
	
	addEventListener : function(name, callback)
	{
		///<summary>add an event listener for the instance to receive view triggered events</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function to invoke when the event is fired</param>
		///<return type="void"/>
		return ;
	}, 	
	fireEvent : function(name, event)
	{
		///<summary>fire a synthesized event to the views listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="event" type="object">event object</param>
		///<return type="void"/>
		return ;
	}, 	
	include : function(name)
	{
		///<summary>one or more filenames to include as if the Javascript code was written in place.  This is similar to a C #include function.</summary>
		///<param name="name" type="string">filename to include</param>
		///<return type="void"/>
		return ;
	}, 	
	removeEventListener : function(name, callback)
	{
		///<summary>remove a previously added event listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function passed in addEventListener</param>
		///<return type="void"/>
		return ;
	}
};

Titanium.API = {
	
	addEventListener : function(name, callback)
	{
		///<summary>add an event listener for the instance to receive view triggered events</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function to invoke when the event is fired</param>
		///<return type="void"/>
		return ;
	}, 	
	debug : function(message)
	{
		///<summary>function for logging debug messages</summary>
		///<param name="message" type="string">the message to log</param>
		///<return type="void"/>
		return ;
	}, 	
	error : function(message)
	{
		///<summary>function for logging error messages</summary>
		///<param name="message" type="string">the message to log</param>
		///<return type="void"/>
		return ;
	}, 	
	fireEvent : function(name, event)
	{
		///<summary>fire a synthesized event to the views listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="event" type="object">event object</param>
		///<return type="void"/>
		return ;
	}, 	
	info : function(message)
	{
		///<summary>function for logging informational messages</summary>
		///<param name="message" type="string">the message to log</param>
		///<return type="void"/>
		return ;
	}, 	
	log : function(level, message)
	{
		///<summary>function for logging custom severity messages</summary>
		///<param name="level" type="string">the log level</param>
		///<param name="message" type="string">the message to log</param>
		///<return type="void"/>
		return ;
	}, 	
	removeEventListener : function(name, callback)
	{
		///<summary>remove a previously added event listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function passed in addEventListener</param>
		///<return type="void"/>
		return ;
	}, 	
	warn : function(message)
	{
		///<summary>function for logging warning messages</summary>
		///<param name="message" type="string">the message to log</param>
		///<return type="void"/>
		return ;
	}
};

Titanium.Accelerometer = {
	events : {'update' : 'update'},
	
	addEventListener : function(name, callback)
	{
		///<summary>add an event listener for the instance to receive view triggered events</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function to invoke when the event is fired</param>
		///<return type="void"/>
		return ;
	}, 	
	fireEvent : function(name, event)
	{
		///<summary>fire a synthesized event to the views listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="event" type="object">event object</param>
		///<return type="void"/>
		return ;
	}, 	
	removeEventListener : function(name, callback)
	{
		///<summary>remove a previously added event listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function passed in addEventListener</param>
		///<return type="void"/>
		return ;
	}
};

Titanium.Analytics = {
	
	addEvent : function(type, name, data)
	{
		///<summary>send a generic event for the application session</summary>
		///<param name="type" type="string">the event type</param>
		///<param name="name" type="string">the event name</param>
		///<param name="data" type="object">event data or null if not specified. the object must be serializable as JSON</param>
		///<return type="void"/>
		return ;
	}, 	
	addEventListener : function(name, callback)
	{
		///<summary>add an event listener for the instance to receive view triggered events</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function to invoke when the event is fired</param>
		///<return type="void"/>
		return ;
	}, 	
	featureEvent : function(name, data)
	{
		///<summary>send an analytics feature event for the application session</summary>
		///<param name="name" type="string">the event name</param>
		///<param name="data" type="object">event data or null if not specified. the object must be serializable as JSON</param>
		///<return type="void"/>
		return ;
	}, 	
	fireEvent : function(name, event)
	{
		///<summary>fire a synthesized event to the views listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="event" type="object">event object</param>
		///<return type="void"/>
		return ;
	}, 	
	navEvent : function(from, to, name, data)
	{
		///<summary>send an analytics nav event for the application session</summary>
		///<param name="from" type="string">the from location in the nav event</param>
		///<param name="to" type="string">the to location in the nav event</param>
		///<param name="name" type="string">the event name</param>
		///<param name="data" type="object">event data or null if not specified. the object must be serializable as JSON</param>
		///<return type="void"/>
		return ;
	}, 	
	removeEventListener : function(name, callback)
	{
		///<summary>remove a previously added event listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function passed in addEventListener</param>
		///<return type="void"/>
		return ;
	}, 	
	settingsEvent : function(name, data)
	{
		///<summary>send a analytics settings event for the application session</summary>
		///<param name="name" type="string">the event name</param>
		///<param name="data" type="object">event data or null if not specified. the object must be serializable as JSON</param>
		///<return type="void"/>
		return ;
	}, 	
	timedEvent : function(name, start, stop, duration, data)
	{
		///<summary>send an analytics timed event for the application session</summary>
		///<param name="name" type="string">the event name</param>
		///<param name="start" type="date">the event start as a Date object</param>
		///<param name="stop" type="date">the event end as a Date object</param>
		///<param name="duration" type="float">the event duration</param>
		///<param name="data" type="object">event data or null if not specified. the object must be serializable as JSON</param>
		///<return type="void"/>
		return ;
	}, 	
	userEvent : function(name, data)
	{
		///<summary>send an analytics user event for the application session</summary>
		///<param name="name" type="string">the event name</param>
		///<param name="data" type="object">event data or null if not specified. the object must be serializable as JSON</param>
		///<return type="void"/>
		return ;
	}
};

Titanium.Android = {
	ACTION_AIRPLANE_MODE_CHANGED :'',
	ACTION_ALL_APPS :'',
	ACTION_ANSWER :'',
	ACTION_ATTACH_DATA :'',
	ACTION_BATTERY_CHANGED :'',
	ACTION_BATTERY_LOW :'',
	ACTION_BATTERY_OKAY :'',
	ACTION_BOOT_COMPLETED :'',
	ACTION_BUG_REPORT :'',
	ACTION_CALL :'',
	ACTION_CALL_BUTTON :'',
	ACTION_CAMERA_BUTTON :'',
	ACTION_CHOOSER :'',
	ACTION_CLOSE_SYSTEM_DIALOGS :'',
	ACTION_CONFIGURATION_CHANGED :'',
	ACTION_CREATE_SHORTCUT :'',
	ACTION_DATE_CHANGED :'',
	ACTION_DEFAULT :'',
	ACTION_DELETE :'',
	ACTION_DEVICE_STORAGE_LOW :'',
	ACTION_DIAL :'',
	ACTION_EDIT :'',
	ACTION_GET_CONTENT :'',
	ACTION_GTALK_SERVICE_CONNECTED :'',
	ACTION_GTALK_SERVICE_DISCONNECTED :'',
	ACTION_HEADSET_PLUG :'',
	ACTION_INPUT_METHOD_CHANGED :'',
	ACTION_INSERT :'',
	ACTION_INSERT_OR_EDIT :'',
	ACTION_MAIN :'',
	ACTION_MANAGE_PACKAGE_STORAGE :'',
	ACTION_MEDIA_BAD_REMOVAL :'',
	ACTION_MEDIA_BUTTON :'',
	ACTION_MEDIA_CHECKING :'',
	ACTION_MEDIA_EJECT :'',
	ACTION_MEDIA_MOUNTED :'',
	ACTION_MEDIA_NOFS :'',
	ACTION_MEDIA_REMOVED :'',
	ACTION_MEDIA_SCANNER_FINISHED :'',
	ACTION_MEDIA_SCANNER_SCAN_FILE :'',
	ACTION_MEDIA_SCANNER_STARTED :'',
	ACTION_MEDIA_SHARED :'',
	ACTION_MEDIA_UNMOUNTABLE :'',
	ACTION_MEDIA_UNMOUNTED :'',
	ACTION_NEW_OUTGOING_CALL :'',
	ACTION_PACKAGE_ADDED :'',
	ACTION_PACKAGE_CHANGED :'',
	ACTION_PACKAGE_DATA_CLEARED :'',
	ACTION_PACKAGE_INSTALL :'',
	ACTION_PACKAGE_REMOVED :'',
	ACTION_PACKAGE_REPLACED :'',
	ACTION_PACKAGE_RESTARTED :'',
	ACTION_PICK :'',
	ACTION_PICK_ACTIVITY :'',
	ACTION_POWER_CONNECTED :'',
	ACTION_POWER_DISCONNECTED :'',
	ACTION_POWER_USAGE_SUMMARY :'',
	ACTION_PROVIDER_CHANGED :'',
	ACTION_REBOOT :'',
	ACTION_RUN :'',
	ACTION_SCREEN_OFF :'',
	ACTION_SCREEN_ON :'',
	ACTION_SEARCH :'',
	ACTION_SEARCH_LONG_PRESS :'',
	ACTION_SEND :'',
	ACTION_SENDTO :'',
	ACTION_SEND_MULTIPLE :'',
	ACTION_SET_WALLPAPER :'',
	ACTION_SHUTDOWN :'',
	ACTION_SYNC :'',
	ACTION_SYSTEM_TUTORIAL :'',
	ACTION_TIME_CHANGED :'',
	ACTION_TIME_TICK :'',
	ACTION_UID_REMOVED :'',
	ACTION_UMS_CONNECTED :'',
	ACTION_UMS_DISCONNECTED :'',
	ACTION_USER_PRESENT :'',
	ACTION_VIEW :'',
	ACTION_VOICE_COMMAND :'',
	ACTION_WALLPAPER_CHANGED :'',
	ACTION_WEB_SEARCH :'',
	CATEGORY_ALTERNATIVE :'',
	CATEGORY_BROWSABLE :'',
	CATEGORY_DEFAULT :'',
	CATEGORY_DEVELOPMENT_PREFERENCE :'',
	CATEGORY_EMBED :'',
	CATEGORY_FRAMEWORK_INSTRUMENTATION_TEST :'',
	CATEGORY_HOME :'',
	CATEGORY_INFO :'',
	CATEGORY_LAUNCHER :'',
	CATEGORY_MONKEY :'',
	CATEGORY_OPENABLE :'',
	CATEGORY_PREFERENCE :'',
	CATEGORY_SAMPLE_CODE :'',
	CATEGORY_SELECTED_ALTERNATIVE :'',
	CATEGORY_TAB :'',
	CATEGORY_TEST :'',
	CATEGORY_UNIT_TEST :'',
	EXTRA_ALARM_COUNT :'',
	EXTRA_BCC :'',
	EXTRA_CC :'',
	EXTRA_DATA_REMOVED :'',
	EXTRA_DONT_KILL_APP :'',
	EXTRA_EMAIL :'',
	EXTRA_INTENT :'',
	EXTRA_KEY_EVENT :'',
	EXTRA_PHONE_NUMBER :'',
	EXTRA_REPLACING :'',
	EXTRA_SHORTCUT_ICON :'',
	EXTRA_SHORTCUT_ICON_RESOURCE :'',
	EXTRA_SHORTCUT_INTENT :'',
	EXTRA_SHORTCUT_NAME :'',
	EXTRA_STREAM :'',
	EXTRA_SUBJECT :'',
	EXTRA_TEMPLATE :'',
	EXTRA_TEXT :'',
	EXTRA_TITLE :'',
	EXTRA_UID :'',
	FILL_IN_ACTION :0,
	FILL_IN_CATEGORIES :0,
	FILL_IN_COMPONENT :0,
	FILL_IN_DATA :0,
	FILL_IN_PACKAGE :0,
	FLAG_ACTIVITY_BROUGHT_TO_FRONT :0,
	FLAG_ACTIVITY_CLEAR_TOP :0,
	FLAG_ACTIVITY_CLEAR_WHEN_TASK_RESET :0,
	FLAG_ACTIVITY_EXCLUDE_FROM_RECENTS :0,
	FLAG_ACTIVITY_FORWARD_RESULT :0,
	FLAG_ACTIVITY_LAUNCHED_FROM_HISTORY :0,
	FLAG_ACTIVITY_MULTIPLE_TASK :0,
	FLAG_ACTIVITY_NEW_TASK :0,
	FLAG_ACTIVITY_NO_HISTORY :0,
	FLAG_ACTIVITY_NO_USER_ACTION :0,
	FLAG_ACTIVITY_PREVIOUS_IS_TOP :0,
	FLAG_ACTIVITY_REORDER_TO_FRONT :0,
	FLAG_ACTIVITY_RESET_TASK_IF_NEEDED :0,
	FLAG_ACTIVITY_SINGLE_TOP :0,
	FLAG_CANCEL_CURRENT :0,
	FLAG_DEBUG_LOG_RESOLUTION :0,
	FLAG_FROM_BACKGROUND :0,
	FLAG_GRANT_READ_URI_PERMISSION :0,
	FLAG_GRANT_WRITE_URI_PERMISSION :0,
	FLAG_NO_CREATE :0,
	FLAG_ONE_SHOT :0,
	FLAG_RECEIVER_REGISTERED_ONLY :0,
	FLAG_UPDATE_CURRENT :0,
	PENDING_INTENT_FOR_ACTIVITY :0,
	PENDING_INTENT_FOR_BROADCAST :0,
	PENDING_INTENT_FOR_SERVICE :0,
	PENDING_INTENT_MAX_VALUE :0,
	R :{},
	RESULT_CANCELED :0,
	RESULT_FIRST_USER :0,
	RESULT_OK :0,
	SCREEN_ORIENTATION_BEHIND :0,
	SCREEN_ORIENTATION_LANDSCAPE :0,
	SCREEN_ORIENTATION_NOSENSOR :0,
	SCREEN_ORIENTATION_PORTRAIT :0,
	SCREEN_ORIENTATION_SENSOR :0,
	SCREEN_ORIENTATION_UNSPECIFIED :0,
	SCREEN_ORIENTATION_USER :0,
	URI_INTENT_SCHEME :0,
	
	addEventListener : function(name, callback)
	{
		///<summary>add an event listener for the instance to receive view triggered events</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function to invoke when the event is fired</param>
		///<return type="void"/>
		return ;
	}, 	
	createIntent : function()
	{
		///<summary>Create a Titanium.Android.Intent. Used to start other Activities and for marshaling data.</summary>
		///<return type="Titanium.Android.Intent"/>
		return function(){return Titanium.Android.Intent; };
	}, 	
	createIntentChooser : function()
	{
		///<summary>Display chooser interface to allow selection of desired target.</summary>
		///<return type="Titanium.Android.Intent"/>
		return function(){return Titanium.Android.Intent; };
	}, 	
	createService : function(intent)
	{
		///<summary>Create a Titanium.Android.Service so you can start/stop it and listen for events from it.</summary>
		///<param name="intent" type="object">A Titanium.Android.Intent object created with Titanium.Android.createServiceIntent which specifies the service to be instantiated.</param>
		///<return type="Titanium.Android.Service"/>
		return function(){return Titanium.Android.Service; };
	}, 	
	createServiceIntent : function(options)
	{
		///<summary>Create an Intent to be used to start a Service.</summary>
		///<param name="options" type="object">Options dictionary -- pass in a url option to specify the path to a javascript-based service you create.</param>
		///<return type="Titanium.Android.Intent"/>
		return function(){return Titanium.Android.Intent; };
	}, 	
	fireEvent : function(name, event)
	{
		///<summary>fire a synthesized event to the views listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="event" type="object">event object</param>
		///<return type="void"/>
		return ;
	}, 	
	isServiceRunning : function(intent)
	{
		///<summary>Check on state of Service.</summary>
		///<param name="intent" type="object">A Titanium.Android.Intent object created with Titanium.Android.createServiceIntent which specifies the service to check.</param>
		///<return type="boolean"/>
		return true;
	}, 	
	removeEventListener : function(name, callback)
	{
		///<summary>remove a previously added event listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function passed in addEventListener</param>
		///<return type="void"/>
		return ;
	}, 	
	startService : function(intent)
	{
		///<summary>Start a simple service</summary>
		///<param name="intent" type="object">A Titanium.Android.Intent object created with Titanium.Android.createServiceIntent which specifies the service to start.</param>
		///<return type="void"/>
		return ;
	}, 	
	stopService : function(intent)
	{
		///<summary>Stop a simple service that was started with startService.</summary>
		///<param name="intent" type="object">A Titanium.Android.Intent object created with Titanium.Android.createServiceIntent which specifies the service to stop.</param>
		///<return type="void"/>
		return ;
	}
};

Titanium.Android.Activity = {
	intent :function(){return Titanium.Android.Intent; },
	onCreateOptionsMenu :function(){},
	onPrepareOptionsMenu :function(){},
	requestedOrientation :0,
	events : {'create' : 'create','destroy' : 'destroy','pause' : 'pause','resume' : 'resume','start' : 'start','stop' : 'stop'},
	
	getIntent : function()
	{
		///<summary>Returns the Titanium.Android.Intent that was used to start this Activity.</summary>
		///<return type="Titanium.Android.Intent"/>
		return function(){return Titanium.Android.Intent; };
	}, 	
	getString : function(resourceId, format)
	{
		///<summary>Get an Android or Application string using the passed-in Resource ID and optional format arguments. Also see Android's documentation for getString and String Resources</summary>
		///<param name="resourceId" type="int">A Resource ID from the Application or Android.</param>
		///<param name="format" type="array,...">Optional format arguments for the String resource</param>
		///<return type="string"/>
		return '';
	}, 	
	setRequestedOrientation : function(orientation)
	{
		///<summary>Set the requested Activity orientation. Also see Android's documentation for setRequestedOrientation</summary>
		///<param name="orientation" type="int">Can be one of Titanium.Android.SCREEN_ORIENTATION_BEHIND, Titanium.Android.SCREEN_ORIENTATION_LANDSCAPE, Titanium.Android.SCREEN_ORIENTATION_NOSENSOR, Titanium.Android.SCREEN_ORIENTATION_PORTRAIT, Titanium.Android.SCREEN_ORIENTATION_SENSOR, Titanium.Android.SCREEN_ORIENTATION_UNSPECIFIED, Titanium.Android.SCREEN_ORIENTATION_USER</param>
		///<return type="void"/>
		return ;
	}, 	
	setResult : function(resultCode, intent)
	{
		///<summary>Sets the result of this Activity using an Intent. This should be used in the case when the Activity responds to startActivityForResult. Also see Android's documentation for setResult</summary>
		///<param name="resultCode" type="int">The result code for this Activity. Must be one of Titanium.Android.RESULT_OK, Titanium.Android.RESULT_CANCELED, Titanium.Android.RESULT_FIRST_USER</param>
		///<param name="intent" type="<a href="Titanium.Android.Intent.html">Titanium.Android.Intent</a>">An optional Titanium.Android.Intent with extra result data</param>
		///<return type="void"/>
		return ;
	}, 	
	startActivity : function(intent)
	{
		///<summary>Starts a new Activity, using the passed in Intent as the description. Also see Android's documentation for startActivity</summary>
		///<param name="intent" type="<a href="Titanium.Android.Intent.html">Titanium.Android.Intent</a>">Description of the Activity to start</param>
		///<return type="void"/>
		return ;
	}, 	
	startActivityForResult : function(intent, callback)
	{
		///<summary>The same as startActivity, but also accepts a callback function for handling the result of the started Activity. Also see Android's documentation for startActivityForResult</summary>
		///<param name="intent" type="<a href="Titanium.Android.Intent.html">Titanium.Android.Intent</a>">Description of the Activity to start</param>
		///<param name="callback" type="function">A callback function that is executed when the Activity has set it's result. See example in Titanium.Android.Activity.</param>
		///<return type="void"/>
		return ;
	}
};

Titanium.Android.Calendar = {
	METHOD_ALERT :0,
	METHOD_DEFAULT :0,
	METHOD_EMAIL :0,
	METHOD_SMS :0,
	STATE_DISMISSED :0,
	STATE_FIRED :0,
	STATE_SCHEDULED :0,
	STATUS_CANCELED :0,
	STATUS_CONFIRMED :0,
	STATUS_TENTATIVE :0,
	VISIBILITY_CONFIDENTIAL :0,
	VISIBILITY_DEFAULT :0,
	VISIBILITY_PRIVATE :0,
	VISIBILITY_PUBLIC :0,
	allAlerts :[],
	allCalendars :[],
	selectableCalendars :[],
	
	addEventListener : function(name, callback)
	{
		///<summary>add an event listener for the instance to receive view triggered events</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function to invoke when the event is fired</param>
		///<return type="void"/>
		return ;
	}, 	
	createAlert : function(parameters)
	{
		///<summary>create and return an instance of Titanium.Android.Calendar.Alert</summary>
		///<param name="parameters" type="object">(optional) a dictionary object properties defined in Titanium.Android.Calendar.Alert</param>
		///<return type="object"/>
		return {};
	}, 	
	createCalendar : function(parameters)
	{
		///<summary>create and return an instance of Titanium.Android.Calendar.Calendar</summary>
		///<param name="parameters" type="object">(optional) a dictionary object properties defined in Titanium.Android.Calendar.Calendar</param>
		///<return type="object"/>
		return {};
	}, 	
	createEvent : function(parameters)
	{
		///<summary>create and return an instance of Titanium.Android.Calendar.Event</summary>
		///<param name="parameters" type="object">(optional) a dictionary object properties defined in Titanium.Android.Calendar.Event</param>
		///<return type="object"/>
		return {};
	}, 	
	createReminder : function(parameters)
	{
		///<summary>create and return an instance of Titanium.Android.Calendar.Reminder</summary>
		///<param name="parameters" type="object">(optional) a dictionary object properties defined in Titanium.Android.Calendar.Reminder</param>
		///<return type="object"/>
		return {};
	}, 	
	fireEvent : function(name, event)
	{
		///<summary>fire a synthesized event to the views listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="event" type="object">event object</param>
		///<return type="void"/>
		return ;
	}, 	
	getCalendarById : function(id)
	{
		///<summary>Returns the Titanium.Android.Calendar.Calendar object specified by the given integer id.</summary>
		///<param name="id" type="int">The system id of the calendar to be retrieved.</param>
		///<return type="object"/>
		return {};
	}, 	
	removeEventListener : function(name, callback)
	{
		///<summary>remove a previously added event listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function passed in addEventListener</param>
		///<return type="void"/>
		return ;
	}
};

Titanium.Android.Calendar.Alert = {
	alarmTime :new Date(),
	begin :new Date(),
	end :new Date(),
	eventId :0,
	id :'',
	minutes :0,
	state :0
};

Titanium.Android.Calendar.Calendar = {
	hidden :true,
	id :'',
	name :'',
	selected :true,
	
	createEvent : function(properties)
	{
		///<summary>Add an event to the calendar. Returns the created Titanium.Android.Calendar.Event.</summary>
		///<param name="properties" type="object">An object defining the properties of the event.  These correspond to properties of Titanium.Android.Calendar.Event.</param>
		///<return type="object"/>
		return {};
	}, 	
	getEventById : function(id)
	{
		///<summary>Returns the Titanium.Android.Calendar.Event object for the event with the given integer id.</summary>
		///<param name="id" type="int">The integer id of the event to return.</param>
		///<return type="object"/>
		return {};
	}, 	
	getEventsBetweenDates : function(date1, date2)
	{
		///<summary>Returns an array of Titanium.Android.Calendar.Event objects with all events in the given date range.</summary>
		///<param name="date1" type="date">The start date.</param>
		///<param name="date2" type="date">The end date.</param>
		///<return type="array"/>
		return [];
	}, 	
	getEventsInDate : function(year, month, day)
	{
		///<summary>Returns an array of Titanium.Android.Calendar.Event objects with all events on the given date.</summary>
		///<param name="year" type="int">The year of the desired date.</param>
		///<param name="month" type="int">The month of the desired date.  The month is zero-based, therefore January is 0 and December is 11.</param>
		///<param name="day" type="int">The day for which events should be returned.</param>
		///<return type="array"/>
		return [];
	}, 	
	getEventsInMonth : function(year, month)
	{
		///<summary>Returns an array of Titanium.Android.Calendar.Event objects with all events in the given month.</summary>
		///<param name="year" type="int">The year of the desired month.</param>
		///<param name="month" type="int">The month for which events should be returned.  The month is zero-based, therefore January is 0 and December is 11.</param>
		///<return type="array"/>
		return [];
	}, 	
	getEventsInYear : function(year)
	{
		///<summary>Returns an array of Titanium.Android.Calendar.Event objects with all events in the given year.</summary>
		///<param name="year" type="int">The year for which all events should be returned.</param>
		///<return type="array"/>
		return [];
	}
};

Titanium.Android.Calendar.Event = {
	alerts :[],
	allDay :true,
	begin :new Date(),
	description :'',
	end :new Date(),
	extendedProperties :{},
	hasAlarm :true,
	hasExtendedProperties :true,
	id :'',
	location :'',
	reminders :[],
	status :0,
	title :'',
	visibility :0,
	
	createAlert : function(data)
	{
		///<summary>create an alert for this event.  Pass a dictionary object containing attributes corresponding to properties of Titanium.Android.Calendar.Alert.  Returns the created alert.</summary>
		///<param name="data" type="object">Properties for the new alert, corresponding to properties of Titanium.Android.Calendar.Alert.</param>
		///<return type="object"/>
		return {};
	}, 	
	createReminder : function(data)
	{
		///<summary>create a reminder for this event.  Pass a dictionary object containing attributes corresponding to properties of Titanium.Android.Calendar.Reminder.  Returns the created Reminder.</summary>
		///<param name="data" type="object">Properties for the new reminder, corresponding to properties of Titanium.Android.Calendar.Reminder.</param>
		///<return type="object"/>
		return {};
	}, 	
	getExtendedProperty : function(name)
	{
		///<summary>Returns the value of the given extended property key string.</summary>
		///<param name="name" type="string">The name of the extended property whose value should be returned.</param>
		///<return type="string"/>
		return '';
	}, 	
	setExtendedProperty : function(name, value)
	{
		///<summary>Set the value of the named extended property.</summary>
		///<param name="name" type="string">The name of the extended property whose value should be set.</param>
		///<param name="value" type="string">The value to which to set the named extended property.</param>
		///<return type="void"/>
		return ;
	}
};

Titanium.Android.Calendar.Reminder = {
	id :'',
	method :0,
	minutes :0
};

Titanium.Android.Intent = {
	action :'',
	className :'',
	data :'',
	packageName :'',
	type :'',
	url :'',
	
	addCategory : function(name)
	{
		///<summary>Add a category to this Intent. See the category constants in Titanium.Android.</summary>
		///<param name="name" type="string">The category name. See the category constants in Titanium.Android</param>
		///<return type="void"/>
		return ;
	}, 	
	getBooleanExtra : function(name)
	{
		///<summary>Get a boolean property from this Intent</summary>
		///<param name="name" type="string">The boolean property to get</param>
		///<return type="boolean"/>
		return true;
	}, 	
	getData : function()
	{
		///<summary>Get the Data URI from this Intent</summary>
		///<return type="void"/>
		return ;
	}, 	
	getDoubleExtra : function(name)
	{
		///<summary>Get a double property from this Intent</summary>
		///<param name="name" type="string">The double property to get</param>
		///<return type="double"/>
		return 0.0;
	}, 	
	getIntExtra : function(name)
	{
		///<summary>Get a int property from this Intent</summary>
		///<param name="name" type="string">The int property to get</param>
		///<return type="int"/>
		return 0;
	}, 	
	getLongExtra : function(name)
	{
		///<summary>Get a long property from this Intent</summary>
		///<param name="name" type="string">The long property to get</param>
		///<return type="int"/>
		return 0;
	}, 	
	getStringExtra : function(name)
	{
		///<summary>Get a string property from this Intent</summary>
		///<param name="name" type="string">The string property to get</param>
		///<return type="string"/>
		return '';
	}, 	
	hasExtra : function(name)
	{
		///<summary>Returns whether or not this Intent has a property</summary>
		///<param name="name" type="string">The property name to check for</param>
		///<return type="boolean"/>
		return true;
	}, 	
	putExtra : function(name, value)
	{
		///<summary>Put an extra property on this Intent</summary>
		///<param name="name" type="string">The property name</param>
		///<param name="value" type="object">The property value</param>
		///<return type="void"/>
		return ;
	}
};

Titanium.Android.Menu = {
	items :[],
	
	add : function(options)
	{
		///<summary>creates a Titanium.Android.MenuItem from the passed creation options.</summary>
		///<param name="options" type="object">creation options. Supported options are itemId, groupId, title, and order.</param>
		///<return type="Titanium.Android.MenuItem"/>
		return function(){return Titanium.Android.MenuItem; };
	}, 	
	clear : function()
	{
		///<summary>clear all items from the menu. You should release all references you have retained to Titanium.Android.MenuItem previously created.</summary>
		///<return type="void"/>
		return ;
	}, 	
	close : function()
	{
		///<summary>close the menu if visible</summary>
		///<return type="void"/>
		return ;
	}, 	
	findItem : function(item)
	{
		///<summary>locate a Titanium.Android.MenuItem</summary>
		///<param name="item" type="object">integer itemId or Titanium.Android.MenuItem</param>
		///<return type="Titanium.Android.MenuItem"/>
		return function(){return Titanium.Android.MenuItem; };
	}, 	
	getItem : function(index)
	{
		///<summary>return the Titanium.Android.MenuItem at a specific index</summary>
		///<param name="index" type="int">item at index where index < size()</param>
		///<return type="Titanium.Android.MenuItem"/>
		return function(){return Titanium.Android.MenuItem; };
	}, 	
	hasVisibleItems : function()
	{
		///<summary>query for any visible menu items</summary>
		///<return type="boolean"/>
		return true;
	}, 	
	removeGroup : function(groupId)
	{
		///<summary>remove all Titanium.Android.MenuItem with the specified groupId</summary>
		///<param name="groupId" type="int">groupId of items to remove.</param>
		///<return type="void"/>
		return ;
	}, 	
	removeItem : function(itemId)
	{
		///<summary>remove a specific Titanium.Android.MenuItem by the specified itemId</summary>
		///<param name="itemId" type="int">itemId of item to remove.</param>
		///<return type="void"/>
		return ;
	}, 	
	setGroupEnabled : function(groupId, enabled)
	{
		///<summary>enable or disable a group of Titanium.Android.MenuItem by groupId</summary>
		///<param name="groupId" type="int">groupId to enable or disable</param>
		///<param name="enabled" type="boolean">true to enable, false to disable.</param>
		///<return type="void"/>
		return ;
	}, 	
	setGroupVisible : function(groupId, visible)
	{
		///<summary>show or hide a group of Titanium.Android.MenuItem by groupId</summary>
		///<param name="groupId" type="int">groupId to enable or disable</param>
		///<param name="visible" type="boolean">true to show, false to hide</param>
		///<return type="void"/>
		return ;
	}, 	
	size : function()
	{
		///<summary>number of Titanium.Android.MenuItem in this menu</summary>
		///<return type="int"/>
		return 0;
	}
};

Titanium.Android.MenuItem = {
	enabled :true,
	groupId :0,
	itemId :0,
	order :0,
	title :'',
	titleCondensed :'',
	visible :true,
	events : {'click' : 'click'},
	
	getCondensedTitle : function()
	{
		///<summary>retrieve the condensed title of the item</summary>
		///<return type="string"/>
		return '';
	}, 	
	getGroupId : function()
	{
		///<summary>retrieve the groupId for this item</summary>
		///<return type="int"/>
		return 0;
	}, 	
	getItemId : function()
	{
		///<summary>retrieve the itemId for this item</summary>
		///<return type="int"/>
		return 0;
	}, 	
	getOrder : function()
	{
		///<summary>retrieve the sort order</summary>
		///<return type="int"/>
		return 0;
	}, 	
	getTitle : function()
	{
		///<summary>retrieve the title of the item</summary>
		///<return type="string"/>
		return '';
	}, 	
	isEnabled : function()
	{
		///<summary>retrieve the enabled state of the menu</summary>
		///<return type="boolean"/>
		return true;
	}, 	
	isVisible : function()
	{
		///<summary>retrieve the visible state of the menu</summary>
		///<return type="boolean"/>
		return true;
	}, 	
	setCondensedTitle : function(condensedTitle)
	{
		///<summary>set the condensed title for the item</summary>
		///<param name="condensedTitle" type="string">new condensed title</param>
		///<return type="void"/>
		return ;
	}, 	
	setEnabled : function(enabled)
	{
		///<summary>set the enabled state of the item</summary>
		///<param name="enabled" type="boolean">true to enable item, false to disable</param>
		///<return type="void"/>
		return ;
	}, 	
	setIcon : function(icon)
	{
		///<summary>set the icon for the item</summary>
		///<param name="icon" type="object">icon to use with the item</param>
		///<return type="void"/>
		return ;
	}, 	
	setTitle : function(title)
	{
		///<summary>set the title for the item</summary>
		///<param name="title" type="string">new title</param>
		///<return type="void"/>
		return ;
	}, 	
	setVisible : function(visible)
	{
		///<summary>set the visible state of the item</summary>
		///<param name="visible" type="boolean">true to show the item, false to hide</param>
		///<return type="void"/>
		return ;
	}
};

Titanium.Android.PendingIntent = {
	activity :function(){return Titanium.Android.Activity; },
	flags :0,
	intent :function(){return Titanium.Android.Intent; },
	type :0
};

Titanium.Android.R = {
	anim :{},
	array :{},
	attr :{},
	color :{},
	dimen :{},
	drawable :{},
	id :{},
	integer :{},
	layout :{},
	string :{},
	style :{},
	styleable :{}
};

Titanium.Android.Service = {
	intent :function(){return Intent; },
	serviceInstanceId :0,
	events : {'pause' : 'pause','resume' : 'resume','start' : 'start','stop' : 'stop'},
	
	start : function()
	{
		///<summary>Start the Service.  Effective only if this instance of Titanium.Android.Service was created with Titanium.Android.createService.</summary>
		///<return type="void"/>
		return ;
	}, 	
	stop : function()
	{
		///<summary>Stop this running instance of the Service.</summary>
		///<return type="void"/>
		return ;
	}
};

Titanium.App = {
	copyright :'',
	description :'',
	guid :'',
	id :'',
	idleTimerDisabled :true,
	name :'',
	proximityDetection :true,
	proximityState :0,
	publisher :'',
	url :'',
	version :'',
	events : {'proximity' : 'proximity'},
	
	addEventListener : function(name, callback)
	{
		///<summary>add an event listener for the instance to receive view triggered events</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function to invoke when the event is fired</param>
		///<return type="void"/>
		return ;
	}, 	
	fireEvent : function(name, event, name, data)
	{
		///<summary>fire a cross-context application event.  listeners in any Javascript context can receive these events if they have added themselves as a listener with the event name.  NOTE: you can only pass JSON serializable data in the data payload of the event object since the data must be transportable between contexts.</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="event" type="object">event object</param>
		///<param name="name" type="string">the event name</param>
		///<param name="data" type="object">optional data payload for the event. NOTE: you can only pass JSON serializable data since the data must be transportable between contexts.</param>
		///<return type="void"/>
		return ;
	}, 	
	getArguments : function()
	{
		///<summary>return the arguments passed to the application on startup as a dictionary</summary>
		///<return type="object"/>
		return {};
	}, 	
	removeEventListener : function(name, callback)
	{
		///<summary>remove a previously added event listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function passed in addEventListener</param>
		///<return type="void"/>
		return ;
	}
};

Titanium.App.Android = {
	R :function(){return Titanium.App.Android.R; },
	
	addEventListener : function(name, callback)
	{
		///<summary>add an event listener for the instance to receive view triggered events</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function to invoke when the event is fired</param>
		///<return type="void"/>
		return ;
	}, 	
	fireEvent : function(name, event)
	{
		///<summary>fire a synthesized event to the views listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="event" type="object">event object</param>
		///<return type="void"/>
		return ;
	}, 	
	removeEventListener : function(name, callback)
	{
		///<summary>remove a previously added event listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function passed in addEventListener</param>
		///<return type="void"/>
		return ;
	}
};

Titanium.App.Android.R = {

};

Titanium.App.Properties = {
	
	addEventListener : function(name, callback)
	{
		///<summary>add an event listener for the instance to receive view triggered events</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function to invoke when the event is fired</param>
		///<return type="void"/>
		return ;
	}, 	
	fireEvent : function(name, event)
	{
		///<summary>fire a synthesized event to the views listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="event" type="object">event object</param>
		///<return type="void"/>
		return ;
	}, 	
	getBool : function(property, defaultValue)
	{
		///<summary>return a boolean value</summary>
		///<param name="property" type="string">return a boolean value for property</param>
		///<param name="defaultValue" type="boolean">optional default value if property is not found</param>
		///<return type="boolean"/>
		return true;
	}, 	
	getDouble : function(property, defaultValue)
	{
		///<summary>return a double value</summary>
		///<param name="property" type="string">return a double value for property</param>
		///<param name="defaultValue" type="double">optional default value if property is not found</param>
		///<return type="double"/>
		return 0.0;
	}, 	
	getInt : function(property, defaultValue)
	{
		///<summary>return an integer value</summary>
		///<param name="property" type="string">return a integer value for property</param>
		///<param name="defaultValue" type="int">optional default value if property is not found</param>
		///<return type="int"/>
		return 0;
	}, 	
	getList : function(property, defaultValue)
	{
		///<summary>return a value as an array</summary>
		///<param name="property" type="string">return an array value for property</param>
		///<param name="defaultValue" type="array">optional default value if property is not found</param>
		///<return type="array"/>
		return [];
	}, 	
	getString : function(property, defaultValue)
	{
		///<summary>return a string value</summary>
		///<param name="property" type="string">return a string value for property</param>
		///<param name="defaultValue" type="string">optional default value if property is not found</param>
		///<return type="string"/>
		return '';
	}, 	
	hasProperty : function(property)
	{
		///<summary>returns true if the property exists</summary>
		///<param name="property" type="string">property name to check</param>
		///<return type="boolean"/>
		return true;
	}, 	
	listProperties : function()
	{
		///<summary>return an array of property propertys</summary>
		///<return type="array"/>
		return [];
	}, 	
	removeEventListener : function(name, callback)
	{
		///<summary>remove a previously added event listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function passed in addEventListener</param>
		///<return type="void"/>
		return ;
	}, 	
	removeProperty : function(property)
	{
		///<summary>remove an existing property</summary>
		///<param name="property" type="string">property name to remove</param>
		///<return type="void"/>
		return ;
	}, 	
	setBool : function(property, value)
	{
		///<summary>set a property as a boolean value</summary>
		///<param name="property" type="string">property name</param>
		///<param name="value" type="boolean">value</param>
		///<return type="void"/>
		return ;
	}, 	
	setDouble : function(property, value)
	{
		///<summary>set a property as a double value</summary>
		///<param name="property" type="string">property name</param>
		///<param name="value" type="double">value</param>
		///<return type="void"/>
		return ;
	}, 	
	setInt : function(property, value, property, value)
	{
		///<summary>set a property as an integer value</summary>
		///<param name="property" type="string">property name</param>
		///<param name="value" type="int">value</param>
		///<param name="property" type="string">property name</param>
		///<param name="value" type="int">value</param>
		///<return type="void"/>
		return ;
	}, 	
	setList : function(property, value)
	{
		///<summary>set a property as an array value</summary>
		///<param name="property" type="string">property name</param>
		///<param name="value" type="array">value</param>
		///<return type="void"/>
		return ;
	}, 	
	setString : function(property, value)
	{
		///<summary>set a property as a string value</summary>
		///<param name="property" type="string">property name</param>
		///<param name="value" type="string">value</param>
		///<return type="void"/>
		return ;
	}
};

Titanium.App.iOS = {
	events : {'notification' : 'notification'},
	
	addEventListener : function(name, callback)
	{
		///<summary>add an event listener for the instance to receive view triggered events</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function to invoke when the event is fired</param>
		///<return type="void"/>
		return ;
	}, 	
	cancelAllLocalNotifications : function()
	{
		///<summary>cancel all scheduled local notifications</summary>
		///<return type="void"/>
		return ;
	}, 	
	cancelLocalNotification : function()
	{
		///<summary>cancel a specific local notification</summary>
		///<return type="void"/>
		return ;
	}, 	
	createBackgroundService : function(parameters)
	{
		///<summary>create and return an instance of Titanium.App.iOS.BackgroundService</summary>
		///<param name="parameters" type="object">(optional) a dictionary object properties defined in Titanium.App.iOS.BackgroundService</param>
		///<return type="object"/>
		return {};
	}, 	
	createLocalNotification : function(parameters)
	{
		///<summary>create and return an instance of Titanium.App.iOS.LocalNotification</summary>
		///<param name="parameters" type="object">(optional) a dictionary object properties defined in Titanium.App.iOS.LocalNotification</param>
		///<return type="object"/>
		return {};
	}, 	
	fireEvent : function(name, event)
	{
		///<summary>fire a synthesized event to the views listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="event" type="object">event object</param>
		///<return type="void"/>
		return ;
	}, 	
	registerBackgroundService : function(params)
	{
		///<summary>register a background service to run when the app is backgrounded</summary>
		///<param name="params" type="object">dictionary of key/values that are used to create the service. the url property should point to a local JavaScript url that will be executed when the app is backgrounded.</param>
		///<return type="object"/>
		return {};
	}, 	
	removeEventListener : function(name, callback)
	{
		///<summary>remove a previously added event listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function passed in addEventListener</param>
		///<return type="void"/>
		return ;
	}, 	
	scheduleLocalNotification : function(params)
	{
		///<summary>schedule a local notification</summary>
		///<param name="params" type="object">dictionary of key/values that are used to create the notification. the date property is when the notification should fire, repeat is an optional property of one of: weekly, daily, yearly, monthly, alertBody is an optional property that is the body of the alert when the notification is displayed, alertAction is an optional property that represents the alert button text or the 'slide to unlock...' slider in place of unlock, alertLaunchImage is an optional property that specifies the launch image to display instead of Default.png when launching the application, badge is the optional badge value for the application, sound is the optional property to specify the sound to play when the notification is triggered and userInfo is the optional property which specifies data passed to the application upon launch when the notification is triggered.</param>
		///<return type="object"/>
		return {};
	}
};

Titanium.App.iOS.BackgroundService = {
	
	addEventListener : function(name, callback)
	{
		///<summary>add an event listener for the instance to receive view triggered events</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function to invoke when the event is fired</param>
		///<return type="void"/>
		return ;
	}, 	
	fireEvent : function(name, event)
	{
		///<summary>fire a synthesized event to the views listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="event" type="object">event object</param>
		///<return type="void"/>
		return ;
	}, 	
	removeEventListener : function(name, callback)
	{
		///<summary>remove a previously added event listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function passed in addEventListener</param>
		///<return type="void"/>
		return ;
	}, 	
	stop : function()
	{
		///<summary>stop the service from the current background session to conserve resources</summary>
		///<return type="void"/>
		return ;
	}, 	
	unregister : function()
	{
		///<summary>unregister the background service</summary>
		///<return type="void"/>
		return ;
	}
};

Titanium.App.iOS.LocalNotification = {
	
	addEventListener : function(name, callback)
	{
		///<summary>add an event listener for the instance to receive view triggered events</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function to invoke when the event is fired</param>
		///<return type="void"/>
		return ;
	}, 	
	cancel : function()
	{
		///<summary>cancel the pending notification</summary>
		///<return type="void"/>
		return ;
	}, 	
	fireEvent : function(name, event)
	{
		///<summary>fire a synthesized event to the views listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="event" type="object">event object</param>
		///<return type="void"/>
		return ;
	}, 	
	removeEventListener : function(name, callback)
	{
		///<summary>remove a previously added event listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function passed in addEventListener</param>
		///<return type="void"/>
		return ;
	}
};

Titanium.Contacts = {
	CONTACTS_KIND_ORGANIZATION :0,
	CONTACTS_KIND_PERSON :0,
	CONTACTS_SORT_FIRST_NAME :0,
	CONTACTS_SORT_LAST_NAME :0,
	
	addEventListener : function(name, callback)
	{
		///<summary>add an event listener for the instance to receive view triggered events</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function to invoke when the event is fired</param>
		///<return type="void"/>
		return ;
	}, 	
	createGroup : function(parameters)
	{
		///<summary>create and return an instance of Titanium.Contacts.Group</summary>
		///<param name="parameters" type="object">(optional) a dictionary object properties defined in Titanium.Contacts.Group</param>
		///<return type="object"/>
		return {};
	}, 	
	createPerson : function(parameters)
	{
		///<summary>create and return an instance of Titanium.Contacts.Person</summary>
		///<param name="parameters" type="object">(optional) a dictionary object properties defined in Titanium.Contacts.Person</param>
		///<return type="object"/>
		return {};
	}, 	
	fireEvent : function(name, event)
	{
		///<summary>fire a synthesized event to the views listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="event" type="object">event object</param>
		///<return type="void"/>
		return ;
	}, 	
	getAllGroups : function()
	{
		///<summary>Returns an of all Titanium.Contacts.Group objects in the contacts database</summary>
		///<return type="void"/>
		return ;
	}, 	
	getAllPeople : function()
	{
		///<summary>Returns an array of all Titanium.Contacts.Person objects in the contacts database</summary>
		///<return type="void"/>
		return ;
	}, 	
	getGroupByID : function(id)
	{
		///<summary>Returns a Titanium.Contacts.Group object with the given ID</summary>
		///<param name="id" type="int">The database ID of the group to retrieve</param>
		///<return type="object"/>
		return {};
	}, 	
	getPeopleWithName : function(name)
	{
		///<summary>Returns an array of Titanium.Contacts.Person objects who have a name (first, last, middle, composite) which matches the given name</summary>
		///<param name="name" type="string">The name to match in the database</param>
		///<return type="array"/>
		return [];
	}, 	
	getPersonByID : function(id)
	{
		///<summary>Returns a Titanium.Contacts.Person object with the given ID</summary>
		///<param name="id" type="int">The database ID of the person to retrieve</param>
		///<return type="object"/>
		return {};
	}, 	
	removeEventListener : function(name, callback)
	{
		///<summary>remove a previously added event listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function passed in addEventListener</param>
		///<return type="void"/>
		return ;
	}, 	
	removeGroup : function(group)
	{
		///<summary>Removes a group from the contacts database (NOTE: not supported on Android.)</summary>
		///<param name="group" type="object">The Titanium.Contacts.Group object to remove from the database. (NOTE: not supported on Android.)</param>
		///<return type="void"/>
		return ;
	}, 	
	removePerson : function(person)
	{
		///<summary>Removes a person from the contacts database. (NOTE: not supported on Android.)</summary>
		///<param name="person" type="object">The Titanium.Contacts.Person object to remove from the database. (NOTE: not supported on Android.)</param>
		///<return type="void"/>
		return ;
	}, 	
	revert : function()
	{
		///<summary>Reverts all changes made to the previous save of the database (NOTE: not supported on Android.)</summary>
		///<return type="void"/>
		return ;
	}, 	
	save : function()
	{
		///<summary>Saves all changes to contacts to the database (NOTE: not supported on Android.)</summary>
		///<return type="void"/>
		return ;
	}, 	
	showContacts : function(cancel, selectedPerson, selectedProperty, animated, fields)
	{
		///<summary>Displays the contact picker</summary>
		///<param name="cancel" type="function">The function to call when selection is cancelled</param>
		///<param name="selectedPerson" type="function">The function to call when a person is selected.  Mutually exclusive with selectedProperty</param>
		///<param name="selectedProperty" type="function">The function to call when a property is selected.  Mutally exclusive with selectedPerson</param>
		///<param name="animated" type="boolean">Whether or not to animate the show/hide of the contacts picker</param>
		///<param name="fields" type="array">A list of field names to show when selecting properties, default is to show all available</param>
		///<return type="void"/>
		return ;
	}
};

Titanium.Contacts.Group = {
	name :'',
	
	add : function(person)
	{
		///<summary>Adds a person to the group</summary>
		///<param name="person" type="object">Titanium.Contacts.Person object to remove from the group</param>
		///<return type="void"/>
		return ;
	}, 	
	members : function()
	{
		///<summary>The complete list of members of the group</summary>
		///<return type="void"/>
		return ;
	}, 	
	remove : function(person)
	{
		///<summary>Removes a person from the group</summary>
		///<param name="person" type="object">Titanium.Contacts.Person object to remove from the group</param>
		///<return type="void"/>
		return ;
	}, 	
	sortedMembers : function(sortBy)
	{
		///<summary>A list of sorted members</summary>
		///<param name="sortBy" type="int">Method for sorting.  Must be one of  Titanium.Contacts.CONTACTS_SORT_FIRST_NAME or Titanium.Contacts.CONTACTS_SORT_LAST_NAME</param>
		///<return type="void"/>
		return ;
	}
};

Titanium.Contacts.Person = {
	URL :{},
	address :{},
	birthday :'',
	created :'',
	date :{},
	department :'',
	email :{},
	firstName :'',
	firstPhonetic :'',
	fullName :'',
	image :{},
	instantMessage :{},
	jobTitle :'',
	kind :0,
	lastName :'',
	lastPhonetic :'',
	middleName :'',
	middlePhonetic :'',
	modified :'',
	nickname :'',
	note :'',
	organization :'',
	phone :{},
	prefix :'',
	relatedNames :{},
	suffix :''
};

Titanium.Database = {
	
	addEventListener : function(name, callback)
	{
		///<summary>add an event listener for the instance to receive view triggered events</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function to invoke when the event is fired</param>
		///<return type="void"/>
		return ;
	}, 	
	fireEvent : function(name, event)
	{
		///<summary>fire a synthesized event to the views listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="event" type="object">event object</param>
		///<return type="void"/>
		return ;
	}, 	
	install : function(path, name)
	{
		///<summary>install a database from the application Resources folder (at build time) and return a reference to the opened database. it is safe to call this method multiple times since this method will only install once if it doesn't already exist on the device.</summary>
		///<param name="path" type="string">the path (relative to the main application Resources folder at build time) to the db to install. this file must be in the SQLite 3 file format.</param>
		///<param name="name" type="string">the name of the database</param>
		///<return type="object"/>
		return {};
	}, 	
	open : function(name)
	{
		///<summary>open a database. if it doesn't yet exist, create it.</summary>
		///<param name="name" type="string">the name of the database</param>
		///<return type="object"/>
		return {};
	}, 	
	removeEventListener : function(name, callback)
	{
		///<summary>remove a previously added event listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function passed in addEventListener</param>
		///<return type="void"/>
		return ;
	}
};

Titanium.Database.DB = {
	lastInsertRowId :0,
	name :'',
	rowsAffected :0,
	
	close : function()
	{
		///<summary>close the database and release resources from memory. once closed, this instance is no longer valid and must no longer be used.</summary>
		///<return type="void"/>
		return ;
	}, 	
	execute : function(sql, vararg)
	{
		///<summary>execute a SQL statement against the database and returns a ResultSet</summary>
		///<param name="sql" type="string">the SQL to execute</param>
		///<param name="vararg" type="array,...">one or more optional variable arguments passed to this function or an array of objects to be replaced in the query using ? substitution.</param>
		///<return type="object"/>
		return {};
	}, 	
	remove : function()
	{
		///<summary>remove the database files for this instance from disk. WARNING: this is a destructive operation and cannot be reversed. All data in the database will be lost upon calling this function. Use with caution.</summary>
		///<return type="void"/>
		return ;
	}
};

Titanium.Database.ResultSet = {
	rowCount :0,
	validRow :true,
	
	close : function()
	{
		///<summary>close the result set and release resources. once closed, this result set must no longer be used</summary>
		///<return type="void"/>
		return ;
	}, 	
	field : function(index)
	{
		///<summary>retrieve a row value by field index</summary>
		///<param name="index" type="int">column index (which is zero based)</param>
		///<return type="object"/>
		return {};
	}, 	
	fieldByName : function(name)
	{
		///<summary>retrieve a row value by field name</summary>
		///<param name="name" type="string">column name from SQL query</param>
		///<return type="object"/>
		return {};
	}, 	
	fieldCount : function()
	{
		///<summary>return the number of columns in the result set</summary>
		///<return type="int"/>
		return 0;
	}, 	
	fieldName : function(index)
	{
		///<summary>return the field name for field index</summary>
		///<param name="index" type="int">field name column index (which is zero based)</param>
		///<return type="string"/>
		return '';
	}, 	
	isValidRow : function()
	{
		///<summary>return true if the row is a valid row</summary>
		///<return type="boolean"/>
		return true;
	}
};

Titanium.Facebook = {
	loggedIn :true,
	permissions :{},
	session :{},
	userId :0,
	events : {'login' : 'login','logout' : 'logout'},
	
	addEventListener : function(name, callback)
	{
		///<summary>add an event listener for the instance to receive view triggered events</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function to invoke when the event is fired</param>
		///<return type="void"/>
		return ;
	}, 	
	createLoginButton : function(params, parameters)
	{
		///<summary>create and return an instance of Titanium.Facebook.LoginButton</summary>
		///<param name="params" type="object">the parameters for the request. the following keys are valid: apikey (the application API key), secret (the application API secret or null if using a session proxy), sessionProxy (the URL to the application session proxy), style (the button style - which is either normal or wide).</param>
		///<param name="parameters" type="object">(optional) a dictionary object properties defined in Titanium.Facebook.LoginButton</param>
		///<return type="object"/>
		return {};
	}, 	
	execute : function(method, params, callback, data)
	{
		///<summary>execute a FB API execute request</summary>
		///<param name="method" type="string">method to execute</param>
		///<param name="params" type="object">JSON serializable object or null (if no parameters) to send with the request</param>
		///<param name="callback" type="function">the callback function to execute upon receiving a response. the result object will contain a success boolean to indicate the result.  if success is false, the error property will give the error message.  the data property will contain the result if successfully executed.</param>
		///<param name="data" type="object">the data payload for the request. Must either null, a string or a Blob object.</param>
		///<return type="void"/>
		return ;
	}, 	
	fireEvent : function(name, event)
	{
		///<summary>fire a synthesized event to the views listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="event" type="object">event object</param>
		///<return type="void"/>
		return ;
	}, 	
	hasPermission : function(permission)
	{
		///<summary>checks the existing permission and returns true if the user has granted the requested permission</summary>
		///<param name="permission" type="string">the permission to check</param>
		///<return type="boolean"/>
		return true;
	}, 	
	isLoggedIn : function()
	{
		///<summary>return true if the user has logged in</summary>
		///<return type="void"/>
		return ;
	}, 	
	publishStream : function(title, data, target, callback)
	{
		///<summary>execute a stream request to FB</summary>
		///<param name="title" type="string">the title of the stream post</param>
		///<param name="data" type="object">the data to include in the post. Must be JSON serializable or null.</param>
		///<param name="target" type="string">the target user id to publish the stream or null if the logged in users account</param>
		///<param name="callback" type="function">the callback function to execute upon receiving a response. the result object will contain a success boolean to indicate the result.  if success is false, the error property will give the error message.  the data property will contain the result if successfully executed. the cancel property will be set to true if the user cancelled the dialog.</param>
		///<return type="void"/>
		return ;
	}, 	
	query : function(fql, callback)
	{
		///<summary>execute a FQL query against the FB API</summary>
		///<param name="fql" type="string">the FQL query to execute</param>
		///<param name="callback" type="function">the callback to execute with results once the query is completed. the result object will contain a success boolean to indicate the result.  if success is false, the error property will give the error message.  the data property will contain the result if successfully executed.</param>
		///<return type="void"/>
		return ;
	}, 	
	removeEventListener : function(name, callback)
	{
		///<summary>remove a previously added event listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function passed in addEventListener</param>
		///<return type="void"/>
		return ;
	}, 	
	requestPermission : function(permission, callback)
	{
		///<summary>request a special permission from the user</summary>
		///<param name="permission" type="string">name of the permission</param>
		///<param name="callback" type="function">the callback function to execute upon receiving a response. the result object will contain a success boolean to indicate the result.  if success is false, the error property will give the error message.  the data property will contain the result if successfully executed. the cancel property will be set to true if the user cancelled the dialog.</param>
		///<return type="void"/>
		return ;
	}
};

Titanium.Facebook.LoginButton = {
	anchorPoint :{},
	animatedCenterPoint :{},
	backgroundColor :'',
	backgroundDisabledColor :'',
	backgroundDisabledImage :'',
	backgroundFocusedColor :'',
	backgroundFocusedImage :'',
	backgroundGradient :{},
	backgroundImage :'',
	backgroundLeftCap :0.0,
	backgroundSelectedColor :'',
	backgroundSelectedImage :'',
	backgroundTopCap :0.0,
	borderColor :'',
	borderRadius :0.0,
	borderWidth :0.0,
	bottom :'',
	center :{},
	focusable :true,
	fontFamily :'',
	fontSize :'',
	fontStyle :'',
	fontWeight :'',
	height :'',
	left :'',
	opacity :0.0,
	right :'',
	size :{},
	softKeyboardOnFocus :0,
	top :'',
	touchEnabled :true,
	transform :{},
	visible :true,
	width :'',
	zIndex :0,
	events : {'cancel' : 'cancel','click' : 'click','dblclick' : 'dblclick','doubletap' : 'doubletap','login' : 'login','logout' : 'logout','singletap' : 'singletap','swipe' : 'swipe','touchcancel' : 'touchcancel','touchend' : 'touchend','touchmove' : 'touchmove','touchstart' : 'touchstart','twofingertap' : 'twofingertap'},
	
	add : function(view)
	{
		///<summary>add a child to the view hierarchy</summary>
		///<param name="view" type="object">the view to add to this views hiearchy</param>
		///<return type="void"/>
		return ;
	}, 	
	addEventListener : function(name, callback)
	{
		///<summary>add an event listener for the instance to receive view triggered events</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function to invoke when the event is fired</param>
		///<return type="void"/>
		return ;
	}, 	
	animate : function(obj, callback)
	{
		///<summary>animate the view</summary>
		///<param name="obj" type="object">either a dictionary of animation properties or an Animation object</param>
		///<param name="callback" type="function">function to be invoked upon completion of the animation</param>
		///<return type="void"/>
		return ;
	}, 	
	fireEvent : function(name, event)
	{
		///<summary>fire a synthesized event to the views listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="event" type="object">event object</param>
		///<return type="void"/>
		return ;
	}, 	
	hide : function()
	{
		///<summary>hide the view</summary>
		///<return type="void"/>
		return ;
	}, 	
	remove : function(view)
	{
		///<summary>remove a previously add view from the view hiearchy</summary>
		///<param name="view" type="object">the view to remove from this views hiearchy</param>
		///<return type="void"/>
		return ;
	}, 	
	removeEventListener : function(name, callback)
	{
		///<summary>remove a previously added event listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function passed in addEventListener</param>
		///<return type="void"/>
		return ;
	}, 	
	show : function()
	{
		///<summary>make the view visible</summary>
		///<return type="void"/>
		return ;
	}, 	
	toImage : function(f)
	{
		///<summary>return a Blob image of the rendered view</summary>
		///<param name="f" type="function">function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately</param>
		///<return type="object"/>
		return {};
	}
};

Titanium.Filesystem = {
	MODE_APPEND :0,
	MODE_READ :0,
	MODE_WRITE :0,
	applicationDataDirectory :'',
	applicationDirectory :'',
	lineEnding :'',
	resourcesDirectory :'',
	separator :'',
	tempDirectory :'',
	
	addEventListener : function(name, callback)
	{
		///<summary>add an event listener for the instance to receive view triggered events</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function to invoke when the event is fired</param>
		///<return type="void"/>
		return ;
	}, 	
	createFile : function(parameters)
	{
		///<summary>create and return an instance of Titanium.Filesystem.File</summary>
		///<param name="parameters" type="object">(optional) a dictionary object properties defined in Titanium.Filesystem.File</param>
		///<return type="object"/>
		return {};
	}, 	
	createTempDirectory : function()
	{
		///<summary>create temp file and return a Titanium.Filesystem.File</summary>
		///<return type="Titanium.Filesystem.File"/>
		return function(){return Titanium.Filesystem.File; };
	}, 	
	createTempFile : function()
	{
		///<summary>create a temp file and return a Titanium.Filesystem.File</summary>
		///<return type="Titanium.Filesystem.File"/>
		return function(){return Titanium.Filesystem.File; };
	}, 	
	fireEvent : function(name, event)
	{
		///<summary>fire a synthesized event to the views listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="event" type="object">event object</param>
		///<return type="void"/>
		return ;
	}, 	
	getFile : function(path)
	{
		///<summary>return a fully formed file path as a Titanium.Filesystem.File object</summary>
		///<param name="path" type="string">one or more path arguments to form the full path joined together with the platform specific path separator. if a relative path is passed, the full path will be relative to the application resource folder.</param>
		///<return type="Titanium.Filesystem.File"/>
		return function(){return Titanium.Filesystem.File; };
	}, 	
	isExteralStoragePresent : function()
	{
		///<summary>returns true if the device supports external storage such as an SD card</summary>
		///<return type="boolean"/>
		return true;
	}, 	
	removeEventListener : function(name, callback)
	{
		///<summary>remove a previously added event listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function passed in addEventListener</param>
		///<return type="void"/>
		return ;
	}
};

Titanium.Filesystem.File = {
	
	addEventListener : function(name, callback)
	{
		///<summary>add an event listener for the instance to receive view triggered events</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function to invoke when the event is fired</param>
		///<return type="void"/>
		return ;
	}, 	
	createDirectory : function()
	{
		///<summary>create a directory at the path for the file object</summary>
		///<return type="boolean"/>
		return true;
	}, 	
	createFile : function()
	{
		///<summary>create a file path at the path for the file object</summary>
		///<return type="boolean"/>
		return true;
	}, 	
	createTimestamp : function()
	{
		///<summary>return the created timestamp for the file</summary>
		///<return type="long"/>
		return 0;
	}, 	
	deleteDirectory : function(recursive)
	{
		///<summary>delete the file directory path</summary>
		///<param name="recursive" type="boolean">pass true to recursively delete any contents. defaults to false</param>
		///<return type="boolean"/>
		return true;
	}, 	
	deleteFile : function()
	{
		///<summary>delete the file</summary>
		///<return type="boolean"/>
		return true;
	}, 	
	executable : function()
	{
		///<summary>returns true if the file is executable</summary>
		///<return type="boolean"/>
		return true;
	}, 	
	exists : function()
	{
		///<summary>returns true if the file or directory exists on the device</summary>
		///<return type="boolean"/>
		return true;
	}, 	
	extension : function()
	{
		///<summary>return the file extension</summary>
		///<return type="string"/>
		return '';
	}, 	
	fireEvent : function(name, event)
	{
		///<summary>fire a synthesized event to the views listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="event" type="object">event object</param>
		///<return type="void"/>
		return ;
	}, 	
	getDirectoryListing : function()
	{
		///<summary>return an array of paths in the directory of the file object</summary>
		///<return type="array"/>
		return [];
	}, 	
	getParent : function()
	{
		///<summary>return the file parent</summary>
		///<return type="Titanium.Filesystem.File"/>
		return function(){return Titanium.Filesystem.File; };
	}, 	
	hidden : function()
	{
		///<summary>returns true if the file is hidden</summary>
		///<return type="boolean"/>
		return true;
	}, 	
	modificationTimestamp : function()
	{
		///<summary>return the last modification timestamp for the file</summary>
		///<return type="long"/>
		return 0;
	}, 	
	move : function(newpath)
	{
		///<summary>move the file to another path</summary>
		///<param name="newpath" type="string|object">new location</param>
		///<return type="boolean"/>
		return true;
	}, 	
	name : function()
	{
		///<summary>the name of the file</summary>
		///<return type="string"/>
		return '';
	}, 	
	nativePath : function()
	{
		///<summary>returns the fully resolved native path</summary>
		///<return type="string"/>
		return '';
	}, 	
	read : function()
	{
		///<summary>return the contents of file as blob</summary>
		///<return type="Titanium.Blob"/>
		return function(){return Titanium.Blob; };
	}, 	
	readonly : function()
	{
		///<summary>returns true if the file is readonly</summary>
		///<return type="boolean"/>
		return true;
	}, 	
	removeEventListener : function(name, callback)
	{
		///<summary>remove a previously added event listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function passed in addEventListener</param>
		///<return type="void"/>
		return ;
	}, 	
	rename : function(newname)
	{
		///<summary>rename the file</summary>
		///<param name="newname" type="string">new name</param>
		///<return type="boolean"/>
		return true;
	}, 	
	setExecutable : function()
	{
		///<summary>make the file executable</summary>
		///<return type="void"/>
		return ;
	}, 	
	setHidden : function()
	{
		///<summary>make the file hidden</summary>
		///<return type="void"/>
		return ;
	}, 	
	setReadonly : function()
	{
		///<summary>make the file readonly</summary>
		///<return type="void"/>
		return ;
	}, 	
	spaceAvailable : function()
	{
		///<summary>return boolean to indicate if the path has space available for storage</summary>
		///<return type="boolean"/>
		return true;
	}, 	
	symbolicLink : function()
	{
		///<summary>returns true if the file points to a symbolic link</summary>
		///<return type="boolean"/>
		return true;
	}, 	
	write : function(contents)
	{
		///<summary>write the contents to file</summary>
		///<param name="contents" type="string|object">write the contents of string, blob or [[Titanium.Filesystem.File]] to file</param>
		///<return type="boolean"/>
		return true;
	}, 	
	writeable : function()
	{
		///<summary>returns true if the file is writeable</summary>
		///<return type="boolean"/>
		return true;
	}
};

Titanium.Geolocation = {
	ACCURACY_BEST :0,
	ACCURACY_HUNDRED_METERS :0,
	ACCURACY_KILOMETER :0,
	ACCURACY_NEAREST_TEN_METERS :0,
	ACCURACY_THREE_KILOMETERS :0,
	AUTHORIZATION_AUTHORIZED :0,
	AUTHORIZATION_DENIED :0,
	AUTHORIZATION_RESTRICTED :0,
	AUTHORIZATION_UNKNOWN :0,
	ERROR_DENIED :0,
	ERROR_HEADING_FAILURE :0,
	ERROR_LOCATION_UNKNOWN :0,
	ERROR_NETWORK :0,
	ERROR_REGION_MONITORING_DELAYED :0,
	ERROR_REGION_MONITORING_DENIED :0,
	ERROR_REGION_MONITORING_FAILURE :0,
	PROVIDER_GPS :'',
	PROVIDER_NETWORK :'',
	locationServicesAuthorization :0,
	locationServicesEnabled :true,
	preferredProvider :'',
	purpose :'',
	showCalibration :true,
	events : {'calibration' : 'calibration','heading' : 'heading','location' : 'location'},
	
	addEventListener : function(name, callback)
	{
		///<summary>add an event listener for the instance to receive view triggered events</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function to invoke when the event is fired</param>
		///<return type="void"/>
		return ;
	}, 	
	fireEvent : function(name, event)
	{
		///<summary>fire a synthesized event to the views listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="event" type="object">event object</param>
		///<return type="void"/>
		return ;
	}, 	
	removeEventListener : function(name, callback)
	{
		///<summary>remove a previously added event listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function passed in addEventListener</param>
		///<return type="void"/>
		return ;
	}, 	
	setShowCalibration : function()
	{
		///<summary>configure the calibration UI. set the false to disable the calibration display.</summary>
		///<return type="void"/>
		return ;
	}
};

Titanium.Gesture = {
	events : {'orientationchange' : 'orientationchange','shake' : 'shake'},
	
	addEventListener : function(name, callback)
	{
		///<summary>add an event listener for the instance to receive view triggered events</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function to invoke when the event is fired</param>
		///<return type="void"/>
		return ;
	}, 	
	fireEvent : function(name, event)
	{
		///<summary>fire a synthesized event to the views listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="event" type="object">event object</param>
		///<return type="void"/>
		return ;
	}, 	
	removeEventListener : function(name, callback)
	{
		///<summary>remove a previously added event listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function passed in addEventListener</param>
		///<return type="void"/>
		return ;
	}
};

Titanium.Locale = {
	currentCountry :'',
	currentLanguage :'',
	currentLocale :'',
	
	addEventListener : function(name, callback)
	{
		///<summary>add an event listener for the instance to receive view triggered events</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function to invoke when the event is fired</param>
		///<return type="void"/>
		return ;
	}, 	
	fireEvent : function(name, event)
	{
		///<summary>fire a synthesized event to the views listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="event" type="object">event object</param>
		///<return type="void"/>
		return ;
	}, 	
	formatTelephoneNumber : function(number)
	{
		///<summary>format a telephone number according to the current locale.</summary>
		///<param name="number" type="string">the phone number to format</param>
		///<return type="string"/>
		return '';
	}, 	
	getCurrencyCode : function(locale)
	{
		///<summary>return a currency code for a given locale. (Android only)</summary>
		///<param name="locale" type="string">the locale for which you want to the currency code, e.g. getCurrencyCode('en-US') -> 'USD'</param>
		///<return type="string"/>
		return '';
	}, 	
	getCurrencySymbol : function(currencyCode)
	{
		///<summary>return a currency symbol for the given currency code. (Android only)</summary>
		///<param name="currencyCode" type="string">the currency for which you want the symbol, e.g. getCurrencySymbol('USD') -> '$'</param>
		///<return type="string"/>
		return '';
	}, 	
	getLocaleCurrencySymbol : function(locale)
	{
		///<summary>return a currency symbol for the given locale. (Android only)</summary>
		///<param name="locale" type="string">the locale whose currency symbol you want, e.g. getLocaleCurrencySymbol('en-US') -> '$'</param>
		///<return type="string"/>
		return '';
	}, 	
	getString : function(key, hint)
	{
		///<summary>return a localization string</summary>
		///<param name="key" type="string">the key to use when mapping into the localization file</param>
		///<param name="hint" type="string">the text to use if no key found in the localization file</param>
		///<return type="string"/>
		return '';
	}, 	
	removeEventListener : function(name, callback)
	{
		///<summary>remove a previously added event listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function passed in addEventListener</param>
		///<return type="void"/>
		return ;
	}
};

Titanium.Map = {
	HYBRID_TYPE :0,
	SATELLITE_TYPE :0,
	STANDARD_TYPE :0,
	
	addEventListener : function(name, callback)
	{
		///<summary>add an event listener for the instance to receive view triggered events</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function to invoke when the event is fired</param>
		///<return type="void"/>
		return ;
	}, 	
	createAnnotation : function(parameters)
	{
		///<summary>create and return an instance of Titanium.Map.Annotation</summary>
		///<param name="parameters" type="object">(optional) a dictionary object properties defined in Titanium.Map.Annotation</param>
		///<return type="object"/>
		return {};
	}, 	
	createMapView : function(parameters)
	{
		///<summary>create and return an instance of Titanium.Map.MapView</summary>
		///<param name="parameters" type="object">(optional) a dictionary object properties defined in Titanium.Map.MapView</param>
		///<return type="object"/>
		return {};
	}, 	
	fireEvent : function(name, event)
	{
		///<summary>fire a synthesized event to the views listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="event" type="object">event object</param>
		///<return type="void"/>
		return ;
	}, 	
	removeEventListener : function(name, callback)
	{
		///<summary>remove a previously added event listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function passed in addEventListener</param>
		///<return type="void"/>
		return ;
	}
};

Titanium.Map.Annotation = {
	animate :true,
	image :'',
	leftButton :'',
	leftView :{},
	pincolor :0,
	rightButton :'',
	rightView :{},
	subtitle :'',
	subtitleid :'',
	title :'',
	titleid :'',
	
	addEventListener : function(name, callback)
	{
		///<summary>add an event listener for the instance to receive view triggered events</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function to invoke when the event is fired</param>
		///<return type="void"/>
		return ;
	}, 	
	fireEvent : function(name, event)
	{
		///<summary>fire a synthesized event to the views listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="event" type="object">event object</param>
		///<return type="void"/>
		return ;
	}, 	
	removeEventListener : function(name, callback)
	{
		///<summary>remove a previously added event listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function passed in addEventListener</param>
		///<return type="void"/>
		return ;
	}
};

Titanium.Map.MapView = {
	anchorPoint :{},
	animate :true,
	animatedCenterPoint :{},
	annotations :[],
	backgroundColor :'',
	backgroundDisabledColor :'',
	backgroundDisabledImage :'',
	backgroundFocusedColor :'',
	backgroundFocusedImage :'',
	backgroundGradient :{},
	backgroundImage :'',
	backgroundLeftCap :0.0,
	backgroundSelectedColor :'',
	backgroundSelectedImage :'',
	backgroundTopCap :0.0,
	borderColor :'',
	borderRadius :0.0,
	borderWidth :0.0,
	bottom :'',
	center :{},
	focusable :true,
	fontFamily :'',
	fontSize :'',
	fontStyle :'',
	fontWeight :'',
	height :'',
	left :'',
	location :{},
	mapType :0,
	opacity :0.0,
	region :{},
	regionFit :true,
	right :'',
	size :{},
	softKeyboardOnFocus :0,
	top :'',
	touchEnabled :true,
	transform :{},
	userLocation :true,
	visible :true,
	width :'',
	zIndex :0,
	events : {'click' : 'click','complete' : 'complete','dblclick' : 'dblclick','doubletap' : 'doubletap','error' : 'error','loading' : 'loading','regionChanged' : 'regionChanged','singletap' : 'singletap','swipe' : 'swipe','touchcancel' : 'touchcancel','touchend' : 'touchend','touchmove' : 'touchmove','touchstart' : 'touchstart','twofingertap' : 'twofingertap'},
	
	add : function(view)
	{
		///<summary>add a child to the view hierarchy</summary>
		///<param name="view" type="object">the view to add to this views hiearchy</param>
		///<return type="void"/>
		return ;
	}, 	
	addAnnotation : function(annotation)
	{
		///<summary>add a new annotation to the map</summary>
		///<param name="annotation" type="object">either a dictionary of properties for the annotation or a [Titanium.Map.Annotation](Titanium.Map.Annotation) instance.</param>
		///<return type="void"/>
		return ;
	}, 	
	addAnnotations : function(annotations)
	{
		///<summary>add one or more new annotation to the map</summary>
		///<param name="annotations" type="array">an array of either a dictionary of properties for the annotation or a [Titanium.Map.Annotation](Titanium.Map.Annotation) instance.</param>
		///<return type="void"/>
		return ;
	}, 	
	addEventListener : function(name, callback)
	{
		///<summary>add an event listener for the instance to receive view triggered events</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function to invoke when the event is fired</param>
		///<return type="void"/>
		return ;
	}, 	
	addRoute : function(route)
	{
		///<summary>add a route. currently only supported on iphone</summary>
		///<param name="route" type="object">dictionary with the properties: name route name, points dictionary of values with longitude and latitude keys, color for the line color and width for the line width.</param>
		///<return type="void"/>
		return ;
	}, 	
	animate : function(obj, callback)
	{
		///<summary>animate the view</summary>
		///<param name="obj" type="object">either a dictionary of animation properties or an Animation object</param>
		///<param name="callback" type="function">function to be invoked upon completion of the animation</param>
		///<return type="void"/>
		return ;
	}, 	
	deselectAnnotation : function(annotation)
	{
		///<summary>cause the annotation to be deselected (hidden).</summary>
		///<param name="annotation" type="string,object">either a string of the annotation title or a [Titanium.Map.Annotation](Titanium.Map.Annotation) reference.</param>
		///<return type="void"/>
		return ;
	}, 	
	fireEvent : function(name, event)
	{
		///<summary>fire a synthesized event to the views listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="event" type="object">event object</param>
		///<return type="void"/>
		return ;
	}, 	
	hide : function()
	{
		///<summary>hide the view</summary>
		///<return type="void"/>
		return ;
	}, 	
	remove : function(view)
	{
		///<summary>remove a previously add view from the view hiearchy</summary>
		///<param name="view" type="object">the view to remove from this views hiearchy</param>
		///<return type="void"/>
		return ;
	}, 	
	removeAllAnnotations : function()
	{
		///<summary>removes all annotations added to the map</summary>
		///<return type="void"/>
		return ;
	}, 	
	removeAnnotation : function(annotation)
	{
		///<summary>remove an existing annotation from the map</summary>
		///<param name="annotation" type="string,object">either a string of the annotation title or a [Titanium.Map.Annotation](Titanium.Map.Annotation) reference.</param>
		///<return type="void"/>
		return ;
	}, 	
	removeAnnotations : function(annotation)
	{
		///<summary>remove one or more existing annotations from the map</summary>
		///<param name="annotation" type="array">an array of either a string of the annotation title or a [Titanium.Map.Annotation](Titanium.Map.Annotation) reference.</param>
		///<return type="void"/>
		return ;
	}, 	
	removeEventListener : function(name, callback)
	{
		///<summary>remove a previously added event listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function passed in addEventListener</param>
		///<return type="void"/>
		return ;
	}, 	
	removeRoute : function(route)
	{
		///<summary>remove a previously added route. currently only supported on iphone</summary>
		///<param name="route" type="object">same route object used during addRoute</param>
		///<return type="void"/>
		return ;
	}, 	
	selectAnnotation : function(annotation)
	{
		///<summary>cause the annotation to be selected (shown).</summary>
		///<param name="annotation" type="string,object">either a string of the annotation title or a [Titanium.Map.Annotation](Titanium.Map.Annotation) reference.</param>
		///<return type="void"/>
		return ;
	}, 	
	setLocation : function(location)
	{
		///<summary>set and center the map location.</summary>
		///<param name="location" type="object">a dictionary that specifies the following properties specifying the location to set the map: latitudeDelta, longitudeDelta, latitude, longitude.</param>
		///<return type="void"/>
		return ;
	}, 	
	setMapType : function(mapType)
	{
		///<summary>set the type of map (satellite, hybrid, standard)</summary>
		///<param name="mapType" type="int">the map type constant of either Titanium.Map.STANDARD_TYPE, Titanium.Map.SATELLITE_TYPE or Titanium.Map.HYBRID_TYPE.</param>
		///<return type="void"/>
		return ;
	}, 	
	show : function()
	{
		///<summary>make the view visible</summary>
		///<return type="void"/>
		return ;
	}, 	
	toImage : function(f)
	{
		///<summary>return a Blob image of the rendered view</summary>
		///<param name="f" type="function">function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately</param>
		///<return type="object"/>
		return {};
	}, 	
	zoom : function(level)
	{
		///<summary>zoom in or out of the map</summary>
		///<param name="level" type="double">zoom level (can be positive or negative)</param>
		///<return type="void"/>
		return ;
	}
};

Titanium.Media = {
	AUDIO_FILEFORMAT_3GP2 :0,
	AUDIO_FILEFORMAT_3GPP :0,
	AUDIO_FILEFORMAT_AIFF :0,
	AUDIO_FILEFORMAT_AMR :0,
	AUDIO_FILEFORMAT_CAF :0,
	AUDIO_FILEFORMAT_MP3 :0,
	AUDIO_FILEFORMAT_MP4 :0,
	AUDIO_FILEFORMAT_MP4A :0,
	AUDIO_FILEFORMAT_WAVE :0,
	AUDIO_FORMAT_AAC :0,
	AUDIO_FORMAT_ALAW :0,
	AUDIO_FORMAT_APPLE_LOSSLESS :0,
	AUDIO_FORMAT_ILBC :0,
	AUDIO_FORMAT_IMA4 :0,
	AUDIO_FORMAT_LINEAR_PCM :0,
	AUDIO_FORMAT_ULAW :0,
	AUDIO_HEADPHONES :0,
	AUDIO_HEADPHONES_AND_MIC :0,
	AUDIO_HEADSET_INOUT :0,
	AUDIO_LINEOUT :0,
	AUDIO_MICROPHONE :0,
	AUDIO_MUTED :0,
	AUDIO_RECEIVER_AND_MIC :0,
	AUDIO_SESSION_MODE_AMBIENT :0,
	AUDIO_SESSION_MODE_PLAYBACK :0,
	AUDIO_SESSION_MODE_PLAY_AND_RECORD :0,
	AUDIO_SESSION_MODE_RECORD :0,
	AUDIO_SESSION_MODE_SOLO_AMBIENT :0,
	AUDIO_SPEAKER :0,
	AUDIO_UNAVAILABLE :0,
	AUDIO_UNKNOWN :0,
	DEVICE_BUSY :0,
	MEDIA_TYPE_PHOTO :0,
	MEDIA_TYPE_VIDEO :0,
	MUSIC_MEDIA_TYPE_ALL :0,
	MUSIC_MEDIA_TYPE_ANY_AUDIO :0,
	MUSIC_MEDIA_TYPE_AUDIOBOOK :0,
	MUSIC_MEDIA_TYPE_MUSIC :0,
	MUSIC_MEDIA_TYPE_PODCAST :0,
	MUSIC_PLAYER_REPEAT_ALL :0,
	MUSIC_PLAYER_REPEAT_DEFAULT :0,
	MUSIC_PLAYER_REPEAT_NONE :0,
	MUSIC_PLAYER_REPEAT_ONE :0,
	MUSIC_PLAYER_SHUFFLE_ALBUMS :0,
	MUSIC_PLAYER_SHUFFLE_DEFAULT :0,
	MUSIC_PLAYER_SHUFFLE_NONE :0,
	MUSIC_PLAYER_SHUFFLE_SONGS :0,
	MUSIC_PLAYER_STATE_INTERRUPTED :0,
	MUSIC_PLAYER_STATE_PAUSED :0,
	MUSIC_PLAYER_STATE_PLAYING :0,
	MUSIC_PLAYER_STATE_SEEK_BACKWARD :0,
	MUSIC_PLAYER_STATE_SKEEK_FORWARD :0,
	MUSIC_PLAYER_STATE_STOPPED :0,
	NO_CAMERA :0,
	NO_VIDEO :0,
	QUALITY_HIGH :0,
	QUALITY_LOW :0,
	QUALITY_MEDIUM :0,
	UNKNOWN_ERROR :0,
	VIDEO_CONTROL_DEFAULT :0,
	VIDEO_CONTROL_EMBEDDED :0,
	VIDEO_CONTROL_FULLSCREEN :0,
	VIDEO_CONTROL_HIDDEN :0,
	VIDEO_CONTROL_NONE :0,
	VIDEO_CONTROL_VOLUME_ONLY :0,
	VIDEO_FINISH_REASON_PLAYBACK_ENDED :0,
	VIDEO_FINISH_REASON_PLAYBACK_ERROR :0,
	VIDEO_FINISH_REASON_USER_EXITED :0,
	VIDEO_LOAD_STATE_PLAYABLE :0,
	VIDEO_LOAD_STATE_PLAYTHROUGH_OK :0,
	VIDEO_LOAD_STATE_STALLED :0,
	VIDEO_LOAD_STATE_UNKNOWN :0,
	VIDEO_MEDIA_TYPE_AUDIO :0,
	VIDEO_MEDIA_TYPE_NONE :0,
	VIDEO_MEDIA_TYPE_VIDEO :0,
	VIDEO_PLAYBACK_STATE_INTERRUPTED :0,
	VIDEO_PLAYBACK_STATE_PAUSED :0,
	VIDEO_PLAYBACK_STATE_PLAYING :0,
	VIDEO_PLAYBACK_STATE_SEEKING_BACKWARD :0,
	VIDEO_PLAYBACK_STATE_SEEKING_FORWARD :0,
	VIDEO_PLAYBACK_STATE_STOPPED :0,
	VIDEO_REPEAT_MODE_NONE :0,
	VIDEO_REPEAT_MODE_ONE :0,
	VIDEO_SCALING_ASPECT_FILL :0,
	VIDEO_SCALING_ASPECT_FIT :0,
	VIDEO_SCALING_MODE_FILL :0,
	VIDEO_SCALING_NONE :0,
	VIDEO_SOURCE_TYPE_FILE :0,
	VIDEO_SOURCE_TYPE_STREAMING :0,
	VIDEO_SOURCE_TYPE_UNKNOWN :0,
	VIDEO_TIME_OPTION_EXACT :0,
	VIDEO_TIME_OPTION_NEAREST_KEYFRAME :0,
	appMusicPlayer :{},
	audioLineType :0,
	audioPlaying :true,
	audioSessionMode :0,
	availableCameraMediaTypes :[],
	availablePhotoGalleryMediaTypes :[],
	availablePhotoMediaTypes :[],
	averageMicrophonePower :0.0,
	canRecord :true,
	isCameraSupported :true,
	peakMicrophonePower :0.0,
	systemMusicPlayer :{},
	volume :0.0,
	events : {'linechange' : 'linechange','recordinginput' : 'recordinginput','volume' : 'volume'},
	
	addEventListener : function(name, callback)
	{
		///<summary>add an event listener for the instance to receive view triggered events</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function to invoke when the event is fired</param>
		///<return type="void"/>
		return ;
	}, 	
	beep : function()
	{
		///<summary>play a device beep notification</summary>
		///<return type="void"/>
		return ;
	}, 	
	createAudioPlayer : function(parameters)
	{
		///<summary>create and return an instance of Titanium.Media.AudioPlayer</summary>
		///<param name="parameters" type="object">(optional) a dictionary object properties defined in Titanium.Media.AudioPlayer</param>
		///<return type="object"/>
		return {};
	}, 	
	createAudioRecorder : function(parameters)
	{
		///<summary>create and return an instance of Titanium.Media.AudioRecorder</summary>
		///<param name="parameters" type="object">(optional) a dictionary object properties defined in Titanium.Media.AudioRecorder</param>
		///<return type="object"/>
		return {};
	}, 	
	createItem : function(parameters)
	{
		///<summary>create and return an instance of Titanium.Media.Item</summary>
		///<param name="parameters" type="object">(optional) a dictionary object properties defined in Titanium.Media.Item</param>
		///<return type="object"/>
		return {};
	}, 	
	createMusicPlayer : function(parameters)
	{
		///<summary>create and return an instance of Titanium.Media.MusicPlayer</summary>
		///<param name="parameters" type="object">(optional) a dictionary object properties defined in Titanium.Media.MusicPlayer</param>
		///<return type="object"/>
		return {};
	}, 	
	createSound : function(parameters)
	{
		///<summary>create and return an instance of Titanium.Media.Sound</summary>
		///<param name="parameters" type="object">(optional) a dictionary object properties defined in Titanium.Media.Sound</param>
		///<return type="object"/>
		return {};
	}, 	
	createVideoPlayer : function(parameters)
	{
		///<summary>create and return an instance of Titanium.Media.VideoPlayer</summary>
		///<param name="parameters" type="object">(optional) a dictionary object properties defined in Titanium.Media.VideoPlayer</param>
		///<return type="object"/>
		return {};
	}, 	
	fireEvent : function(name, event)
	{
		///<summary>fire a synthesized event to the views listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="event" type="object">event object</param>
		///<return type="void"/>
		return ;
	}, 	
	hideCamera : function()
	{
		///<summary>hide the device camera UI. this must be called after calling showCamera and only when autohide is set to false. this method will cause the media capture device be hidden.</summary>
		///<return type="void"/>
		return ;
	}, 	
	hideMusicLibrary : function()
	{
		///<summary>hide the music library.  This must be called after calling showMusicLibrary and only when autohide is set to false.  iPhone and iPad only.</summary>
		///<return type="void"/>
		return ;
	}, 	
	isMediaTypeSupported : function(media, type)
	{
		///<summary>return boolean to indicate if the media type is supported</summary>
		///<param name="media" type="string">media type as a string of either camera, photo or photogallery.</param>
		///<param name="type" type="string">the type of media to check</param>
		///<return type="boolean"/>
		return true;
	}, 	
	openPhotoGallery : function(options)
	{
		///<summary>open the photo gallery picker</summary>
		///<param name="options" type="object">pass a dictionary with the following supported keys: success a function that will be called when the camera is completed, error a function that will be called upon receiving an error, cancel a function that will be called if the user presses the cancel button, autohide boolean if the camera should auto hide after the media capture is completed (defaults to true), animated boolean if the dialog should be animated (defaults to true) upon showing and hiding, saveToPhotoGallery boolean if the media should be saved to the photo gallery upon successful capture, allowEditing boolean if the media should be editable after capture in the UI interface, mediaTypes an array of media type constants supported by the capture device UI, showControls boolean to indicate if the built-in UI controls should be displayed, overlay view which is added as an overlay to the UI (on top), transform an transformation matrix that applies to the UI transform. For iPad, popoverView can be provided to position the photo gallery popover a specific view and arrowDirection can be provided to control the type of arrow and position of the gallery.</param>
		///<return type="void"/>
		return ;
	}, 	
	removeEventListener : function(name, callback)
	{
		///<summary>remove a previously added event listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function passed in addEventListener</param>
		///<return type="void"/>
		return ;
	}, 	
	saveToPhotoGallery : function(media, callbacks)
	{
		///<summary>save media to photo gallery / camera roll</summary>
		///<param name="media" type="object">save the media passed to the cameras photo roll/media gallery. must be one of Blob object or File object or an error will be generated.</param>
		///<param name="callbacks" type="object">pass a dictionary with the following supported keys: success a function that will be called when the save succeeds, and error a function that will be called upon anreceiving an error</param>
		///<return type="void"/>
		return ;
	}, 	
	showCamera : function(options)
	{
		///<summary>show the camera</summary>
		///<param name="options" type="object">pass a dictionary with the following supported keys: success a function that will be called when the camera is completed, error a function that will be called upon receiving an error, cancel a function that will be called if the user presses the cancel button, autohide boolean if the camera should auto hide after the media capture is completed (defaults to true), animated boolean if the dialog should be animated (defaults to true) upon showing and hiding, saveToPhotoGallery boolean if the media should be saved to the photo gallery upon successful capture, allowEditing boolean if the media should be editable after capture in the UI interface, mediaTypes an array of media type constants supported by the capture device UI, videoMaximumDuration float duration on how long in milliseconds to allow capture before completing, videoQuality constant to indicate the video quality during capture, showControls boolean to indicate if the built-in UI controls should be displayed, overlay view which is added as an overlay to the camera UI (on top), transform an transformation matrix that applies to the camera UI transform.</param>
		///<return type="void"/>
		return ;
	}, 	
	showMusicLibrary : function(options)
	{
		///<summary>show the music library.  iPhone and iPad only.</summary>
		///<param name="options" type="object">pass a dictionary with the following supported keys: success a function that will be called when the camera is completed, error a function that will be called upon receiving an error, cancel a function that will be called if the user presses the cancel button, autohide boolean if the library listing should auto hide after selection is completed (defaults to true), animated boolean if the dialog should be animated (defaults to true) upon showing and hiding, mediaTypes an array of media type constants defining selectable media (see MUSIC_MEDIA_TYPE_* properties below) as either an array or a bitwise-or single value, allowMultipleSelections boolean whether or not more than one media selection is allowed</param>
		///<return type="void"/>
		return ;
	}, 	
	startMicrophoneMonitor : function()
	{
		///<summary>start the monitoring of microphone sound level</summary>
		///<return type="void"/>
		return ;
	}, 	
	stopMicrophoneMonitor : function()
	{
		///<summary>stop the monitoring of microphone sound level</summary>
		///<return type="void"/>
		return ;
	}, 	
	takePicture : function()
	{
		///<summary>use the device camera to capture a photo. this must be called after calling showCamera and only when autohide is set to false. this method will cause the media capture device to capture a photo and call the success callback.</summary>
		///<return type="void"/>
		return ;
	}, 	
	takeScreenshot : function(callback)
	{
		///<summary>take a screen shot of the visible UI on the device</summary>
		///<param name="callback" type="function">function that will be called upon capture. the event property media will contain an image Blob object of the screenshot</param>
		///<return type="void"/>
		return ;
	}, 	
	vibrate : function()
	{
		///<summary>play a device vibration</summary>
		///<return type="void"/>
		return ;
	}
};

Titanium.Media.AudioPlayer = {
	STATE_BUFFERING :0,
	STATE_INITIALIZED :0,
	STATE_PAUSED :0,
	STATE_PLAYING :0,
	STATE_STARTING :0,
	STATE_STOPPED :0,
	STATE_STOPPING :0,
	STATE_WAITING_FOR_DATA :0,
	STATE_WAITING_FOR_QUEUE :0,
	allowBackground :true,
	bitRate :0.0,
	idle :true,
	paused :true,
	playing :true,
	progress :0.0,
	state :0,
	url :'',
	waiting :true,
	events : {'change' : 'change','progress' : 'progress'},
	
	addEventListener : function(name, callback)
	{
		///<summary>add an event listener for the instance to receive view triggered events</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function to invoke when the event is fired</param>
		///<return type="void"/>
		return ;
	}, 	
	fireEvent : function(name, event)
	{
		///<summary>fire a synthesized event to the views listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="event" type="object">event object</param>
		///<return type="void"/>
		return ;
	}, 	
	pause : function()
	{
		///<summary>pause playback</summary>
		///<return type="void"/>
		return ;
	}, 	
	removeEventListener : function(name, callback)
	{
		///<summary>remove a previously added event listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function passed in addEventListener</param>
		///<return type="void"/>
		return ;
	}, 	
	setPaused : function(paused)
	{
		///<summary>control the playback of the audio</summary>
		///<param name="paused" type="boolean">pass true to pause the current playback temporarily, false to unpause it</param>
		///<return type="void"/>
		return ;
	}, 	
	setUrl : function(url)
	{
		///<summary>change the url of the audio playback</summary>
		///<param name="url" type="string">the new url</param>
		///<return type="void"/>
		return ;
	}, 	
	start : function()
	{
		///<summary>start playback</summary>
		///<return type="void"/>
		return ;
	}, 	
	stateDescription : function()
	{
		///<summary>convert a state into a textual description suitable for display</summary>
		///<return type="string"/>
		return '';
	}, 	
	stop : function()
	{
		///<summary>stop playback</summary>
		///<return type="void"/>
		return ;
	}
};

Titanium.Media.AudioRecorder = {
	compression :0,
	format :0,
	paused :true,
	recording :true,
	stopped :true,
	
	addEventListener : function(name, callback)
	{
		///<summary>add an event listener for the instance to receive view triggered events</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function to invoke when the event is fired</param>
		///<return type="void"/>
		return ;
	}, 	
	fireEvent : function(name, event)
	{
		///<summary>fire a synthesized event to the views listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="event" type="object">event object</param>
		///<return type="void"/>
		return ;
	}, 	
	pause : function()
	{
		///<summary>called to temporarily pause recording</summary>
		///<return type="void"/>
		return ;
	}, 	
	removeEventListener : function(name, callback)
	{
		///<summary>remove a previously added event listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function passed in addEventListener</param>
		///<return type="void"/>
		return ;
	}, 	
	resume : function()
	{
		///<summary>called to resume audio recording</summary>
		///<return type="void"/>
		return ;
	}, 	
	start : function()
	{
		///<summary>called to start recording audio</summary>
		///<return type="void"/>
		return ;
	}, 	
	stop : function()
	{
		///<summary>called to stop recording audio</summary>
		///<return type="void"/>
		return ;
	}
};

Titanium.Media.Item = {
	albumArtist :'',
	albumTitle :'',
	albumTrackCount :0,
	albumTrackNumber :0,
	artist :'',
	artwork :{},
	composer :'',
	discCount :0,
	discNumber :0,
	genre :'',
	isCompilation :true,
	lyrics :'',
	mediaType :0,
	playCount :0,
	playbackDuration :0.0,
	podcastTitle :'',
	rating :0,
	skipCount :0,
	title :''
};

Titanium.Media.MusicPlayer = {
	currentPlaybackTime :0.0,
	nowPlaying :{},
	playbackState :0,
	repeatMode :0,
	shuffleMode :0,
	volume :0.0,
	events : {'playingChange' : 'playingChange','stateChange' : 'stateChange','volumeChange' : 'volumeChange'},
	
	pause : function()
	{
		///<summary>pause playback</summary>
		///<return type="void"/>
		return ;
	}, 	
	play : function()
	{
		///<summary>begin playback</summary>
		///<return type="void"/>
		return ;
	}, 	
	seekBackward : function()
	{
		///<summary>seek backward in the currently playing media</summary>
		///<return type="void"/>
		return ;
	}, 	
	seekForward : function()
	{
		///<summary>seek forward in the currently playing media</summary>
		///<return type="void"/>
		return ;
	}, 	
	setQueue : function(queue)
	{
		///<summary>set the media queue</summary>
		///<param name="queue" type="object">a queue representation to set the player queue to.  Can be any of: A dictionary with an items key that is an array of Titanium.Media.Item objects, an array of Titanium.Media.Item objects, or a single Titanium.Media.Item object.</param>
		///<return type="void"/>
		return ;
	}, 	
	skipToBeginning : function()
	{
		///<summary>skip to the beginning of the currently playing media</summary>
		///<return type="void"/>
		return ;
	}, 	
	skipToNext : function()
	{
		///<summary>skip to the next media in the queue</summary>
		///<return type="void"/>
		return ;
	}, 	
	skipToPrevious : function()
	{
		///<summary>skip to the previous media in the queue</summary>
		///<return type="void"/>
		return ;
	}, 	
	stop : function()
	{
		///<summary>stop playback</summary>
		///<return type="void"/>
		return ;
	}, 	
	stopSeeking : function()
	{
		///<summary>end a seek operation</summary>
		///<return type="void"/>
		return ;
	}
};

Titanium.Media.Sound = {
	allowBackground :true,
	duration :0.0,
	looping :true,
	paused :true,
	playing :true,
	time :0.0,
	url :'',
	volume :0.0,
	events : {'complete' : 'complete','error' : 'error','interrupted' : 'interrupted','resume' : 'resume'},
	
	addEventListener : function(name, callback)
	{
		///<summary>add an event listener for the instance to receive view triggered events</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function to invoke when the event is fired</param>
		///<return type="void"/>
		return ;
	}, 	
	fireEvent : function(name, event)
	{
		///<summary>fire a synthesized event to the views listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="event" type="object">event object</param>
		///<return type="void"/>
		return ;
	}, 	
	getTime : function()
	{
		///<summary>return the current time position of the audio</summary>
		///<return type="double"/>
		return 0.0;
	}, 	
	getVolume : function()
	{
		///<summary>return the value of the audio</summary>
		///<return type="float"/>
		return 0.0;
	}, 	
	isLooping : function()
	{
		///<summary>returns true if the audio will loop</summary>
		///<return type="boolean"/>
		return true;
	}, 	
	isPaused : function()
	{
		///<summary>returns true if the audio is paused</summary>
		///<return type="boolean"/>
		return true;
	}, 	
	isPlaying : function()
	{
		///<summary>returns true if the audio is playing</summary>
		///<return type="boolean"/>
		return true;
	}, 	
	pause : function()
	{
		///<summary>temporarily pause the audio. to resume, invoke play.</summary>
		///<return type="void"/>
		return ;
	}, 	
	play : function()
	{
		///<summary>starting playing the source. if paused, will resume.</summary>
		///<return type="void"/>
		return ;
	}, 	
	release : function()
	{
		///<summary>release all internal resources. this is typically unnecessary but can be useful if you load a large audio file in app.js and play it only once and you would like to release all releases after your final play to reduce memory.</summary>
		///<return type="void"/>
		return ;
	}, 	
	removeEventListener : function(name, callback)
	{
		///<summary>remove a previously added event listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function passed in addEventListener</param>
		///<return type="void"/>
		return ;
	}, 	
	reset : function()
	{
		///<summary>reset the audio to the beginning.</summary>
		///<return type="void"/>
		return ;
	}, 	
	setLooping : function()
	{
		///<summary>control whether the audio should loop</summary>
		///<return type="void"/>
		return ;
	}, 	
	setPaused : function()
	{
		///<summary>control whether the audio is paused</summary>
		///<return type="void"/>
		return ;
	}, 	
	setTime : function()
	{
		///<summary>set the time position of the audio</summary>
		///<return type="void"/>
		return ;
	}, 	
	setVolume : function()
	{
		///<summary>set the volume of the audio</summary>
		///<return type="void"/>
		return ;
	}, 	
	stop : function()
	{
		///<summary>stop playing the audio and reset it to the beginning.</summary>
		///<return type="void"/>
		return ;
	}
};

Titanium.Media.VideoPlayer = {
	anchorPoint :{},
	animatedCenterPoint :{},
	autoplay :true,
	backgroundColor :'',
	backgroundDisabledColor :'',
	backgroundDisabledImage :'',
	backgroundFocusedColor :'',
	backgroundFocusedImage :'',
	backgroundGradient :{},
	backgroundImage :'',
	backgroundLeftCap :0.0,
	backgroundSelectedColor :'',
	backgroundSelectedImage :'',
	backgroundTopCap :0.0,
	borderColor :'',
	borderRadius :0.0,
	borderWidth :0.0,
	bottom :'',
	center :{},
	contentURL :'',
	duration :0.0,
	endPlaybackTime :0.0,
	focusable :true,
	fontFamily :'',
	fontSize :'',
	fontStyle :'',
	fontWeight :'',
	fullscreen :true,
	height :'',
	initialPlaybackTime :0.0,
	left :'',
	loadState :0,
	media :{},
	mediaControlStyle :0,
	mediaTypes :0,
	movieControlMode :0,
	naturalSize :{},
	opacity :0.0,
	playableDuration :0.0,
	playbackState :0,
	playing :true,
	repeatMode :0,
	right :'',
	scalingMode :0,
	size :{},
	softKeyboardOnFocus :0,
	sourceType :0,
	top :'',
	touchEnabled :true,
	transform :{},
	url :'',
	useApplicationAudioSession :true,
	visible :true,
	width :'',
	zIndex :0,
	events : {'click' : 'click','complete' : 'complete','dblclick' : 'dblclick','doubletap' : 'doubletap','durationAvailable' : 'durationAvailable','error' : 'error','fullscreen' : 'fullscreen','load' : 'load','loadstate' : 'loadstate','mediaTypesAvailable' : 'mediaTypesAvailable','naturalSizeAvailable' : 'naturalSizeAvailable','playbackState' : 'playbackState','playing' : 'playing','preload' : 'preload','resize' : 'resize','singletap' : 'singletap','sourceChange' : 'sourceChange','swipe' : 'swipe','thumbnail' : 'thumbnail','touchcancel' : 'touchcancel','touchend' : 'touchend','touchmove' : 'touchmove','touchstart' : 'touchstart','twofingertap' : 'twofingertap'},
	
	add : function(view)
	{
		///<summary>add a child to the view hierarchy</summary>
		///<param name="view" type="object">the view to add to this views hiearchy</param>
		///<return type="void"/>
		return ;
	}, 	
	addEventListener : function(name, callback)
	{
		///<summary>add an event listener for the instance to receive view triggered events</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function to invoke when the event is fired</param>
		///<return type="void"/>
		return ;
	}, 	
	animate : function(obj, callback)
	{
		///<summary>animate the view</summary>
		///<param name="obj" type="object">either a dictionary of animation properties or an Animation object</param>
		///<param name="callback" type="function">function to be invoked upon completion of the animation</param>
		///<return type="void"/>
		return ;
	}, 	
	cancelAllThumbnailImageRequests : function()
	{
		///<summary>Cancels all pending asynchronous thumbnail requests.</summary>
		///<return type="void"/>
		return ;
	}, 	
	fireEvent : function(name, event)
	{
		///<summary>fire a synthesized event to the views listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="event" type="object">event object</param>
		///<return type="void"/>
		return ;
	}, 	
	hide : function()
	{
		///<summary>hide the view</summary>
		///<return type="void"/>
		return ;
	}, 	
	pause : function()
	{
		///<summary>pause playing the video. On iOS only available under 3.2 and later</summary>
		///<return type="void"/>
		return ;
	}, 	
	play : function()
	{
		///<summary>start playing the video</summary>
		///<return type="void"/>
		return ;
	}, 	
	release : function()
	{
		///<summary>release the internal video resources immediately.  this is not usually necessary but can help if you no longer need to use the player after it is used to help converse memory.</summary>
		///<return type="void"/>
		return ;
	}, 	
	remove : function(view)
	{
		///<summary>remove a previously add view from the view hiearchy</summary>
		///<param name="view" type="object">the view to remove from this views hiearchy</param>
		///<return type="void"/>
		return ;
	}, 	
	removeEventListener : function(name, callback)
	{
		///<summary>remove a previously added event listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function passed in addEventListener</param>
		///<return type="void"/>
		return ;
	}, 	
	requestThumbnailImagesAtTimes : function(times, option)
	{
		///<summary>Asynchronously request thumbnails for one or more times, provided as an array of numbers (double). Fires a thumbnail event on completion. Optionally invokes the callback function passed in the method.</summary>
		///<param name="times" type="array">array of doubles for each time to request</param>
		///<param name="option" type="int">either [[Titanium.Media.VIDEO_TIME_OPTION_NEAREST_KEYFRAME]] or [[Titanium.Media.VIDEO_TIME_OPTION_EXACT]].</param>
		///<return type="void"/>
		return ;
	}, 	
	setBackgroundView : function(view)
	{
		///<summary>A view for customization which is always displayed behind movie content.</summary>
		///<param name="view" type="object">view to set</param>
		///<return type="void"/>
		return ;
	}, 	
	setMedia : function(media)
	{
		///<summary>the a non-url based media to play, either a File or Blob.</summary>
		///<param name="media" type="object">media to play</param>
		///<return type="void"/>
		return ;
	}, 	
	setUrl : function(url)
	{
		///<summary>the url to play</summary>
		///<param name="url" type="string">the url to play</param>
		///<return type="void"/>
		return ;
	}, 	
	show : function()
	{
		///<summary>make the view visible</summary>
		///<return type="void"/>
		return ;
	}, 	
	stop : function()
	{
		///<summary>stop playing the video</summary>
		///<return type="void"/>
		return ;
	}, 	
	thumbnailImageAtTime : function(time, option)
	{
		///<summary>Returns a thumbnail at the given time as a blob.</summary>
		///<param name="time" type="double">playback time</param>
		///<param name="option" type="int">either [[Titanium.Media.VIDEO_TIME_OPTION_NEAREST_KEYFRAME]] or [[Titanium.Media.VIDEO_TIME_OPTION_EXACT]]</param>
		///<return type="object"/>
		return {};
	}, 	
	toImage : function(f)
	{
		///<summary>return a Blob image of the rendered view</summary>
		///<param name="f" type="function">function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately</param>
		///<return type="object"/>
		return {};
	}
};

Titanium.Network = {
	INADDR_ANY :'',
	NETWORK_LAN :0,
	NETWORK_MOBILE :0,
	NETWORK_NONE :0,
	NETWORK_UNKNOWN :0,
	NETWORK_WIFI :0,
	NOTIFICATION_TYPE_ALERT :0,
	NOTIFICATION_TYPE_BADGE :0,
	NOTIFICATION_TYPE_SOUND :0,
	READ_MODE :0,
	READ_WRITE_MODE :0,
	WRITE_MODE :0,
	networkType :0,
	networkTypeName :'',
	online :true,
	remoteDeviceUUID :'',
	remoteNotificationTypes :[],
	remoteNotificationsEnabled :true,
	events : {'change' : 'change'},
	
	addConnectivityListener : function(callback)
	{
		///<summary>adds a connectivity listener to listen for network changes. This method has been deprecated in favor of listening for a change event.</summary>
		///<param name="callback" type="function">callback function to invoke upon network connectivity changes</param>
		///<return type="void"/>
		return ;
	}, 	
	addEventListener : function(name, callback)
	{
		///<summary>add an event listener for the instance to receive view triggered events</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function to invoke when the event is fired</param>
		///<return type="void"/>
		return ;
	}, 	
	createBonjourBrowser : function(serviceType, domain, parameters)
	{
		///<summary>create and return an instance of Titanium.Network.BonjourBrowser</summary>
		///<param name="serviceType" type="string">service to search for, must include the protocol type suffix (._tcp)</param>
		///<param name="domain" type="string">the Bonjour service domain to conduct the search in.  Default value is 'local.'</param>
		///<param name="parameters" type="object">(optional) a dictionary object properties defined in Titanium.Network.BonjourBrowser</param>
		///<return type="object"/>
		return {};
	}, 	
	createBonjourService : function(name, type, domain, parameters)
	{
		///<summary>create and return an instance of Titanium.Network.BonjourService</summary>
		///<param name="name" type="string">the name of the service.  Must be a unique identifier for this service type and domain.</param>
		///<param name="type" type="string">the type of service.  Must include the protocol identifier (._tcp)</param>
		///<param name="domain" type="string">the domain to publish the service in.  Default value is 'local.'</param>
		///<param name="parameters" type="object">(optional) a dictionary object properties defined in Titanium.Network.BonjourService</param>
		///<return type="object"/>
		return {};
	}, 	
	createHTTPClient : function(parameters)
	{
		///<summary>create and return an instance of Titanium.Network.HTTPClient</summary>
		///<param name="parameters" type="object">(optional) a dictionary object properties defined in Titanium.Network.HTTPClient</param>
		///<return type="object"/>
		return {};
	}, 	
	createTCPSocket : function(hostName, port, mode, parameters)
	{
		///<summary>create and return an instance of Titanium.Network.TCPSocket</summary>
		///<param name="hostName" type="string">the host name to connect to/listen on</param>
		///<param name="port" type="int">the port for the socket</param>
		///<param name="mode" type="int">the socket's mode; one of Titanium.Network.READ_MODE, Titanium.Network.WRITE_MODE, Titanium.Network.READ_WRITE_MODE</param>
		///<param name="parameters" type="object">(optional) a dictionary object properties defined in Titanium.Network.TCPSocket</param>
		///<return type="object"/>
		return {};
	}, 	
	decodeURIComponent : function(value)
	{
		///<summary>decode a URI component part using URI encoding</summary>
		///<param name="value" type="string">input value to be decoded</param>
		///<return type="string"/>
		return '';
	}, 	
	encodeURIComponent : function(value)
	{
		///<summary>encode a URI component part using URI encoding</summary>
		///<param name="value" type="string">input value to be encoded</param>
		///<return type="string"/>
		return '';
	}, 	
	fireEvent : function(name, event)
	{
		///<summary>fire a synthesized event to the views listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="event" type="object">event object</param>
		///<return type="void"/>
		return ;
	}, 	
	registerForPushNotifications : function(config)
	{
		///<summary>register for push notifications with the Apple Push Notification Service. Only available on iPhone.</summary>
		///<param name="config" type="object">dictionary of the following: types is an array of type constants that the application would like to receive, success is a callback function that is called when the push registration is successfully completed, error is a callback function that is called when an error is received during registration and callback is a callback function that is invoked upon receiving a new push notification. This method should be called at application startup.</param>
		///<return type="void"/>
		return ;
	}, 	
	removeConnectivityListener : function(callback)
	{
		///<summary>removes a connectivity listener. This method has been deprecated in favor of listening for a change event.</summary>
		///<param name="callback" type="function">callback function to remove</param>
		///<return type="void"/>
		return ;
	}, 	
	removeEventListener : function(name, callback)
	{
		///<summary>remove a previously added event listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function passed in addEventListener</param>
		///<return type="void"/>
		return ;
	}
};

Titanium.Network.BonjourBrowser = {
	domain :'',
	isSearching :true,
	serviceType :'',
	events : {'-event' : '-event','services' : 'services','updatedServices' : 'updatedServices'},
	
	search : function()
	{
		///<summary>Conduct a search for Bonjour services matching the type and domain specified during creation</summary>
		///<return type="void"/>
		return ;
	}, 	
	stopSearch : function()
	{
		///<summary>Halt an ongoing search</summary>
		///<return type="void"/>
		return ;
	}
};

Titanium.Network.BonjourService = {
	domain :'',
	isLocal :true,
	name :'',
	socket :{},
	type :'',
	
	publish : function(socket)
	{
		///<summary>Publish a Bonjour service to the network.  Only works if isLocal is TRUE</summary>
		///<param name="socket" type="object">a TCPSocket object to associate with the Bonjour service.</param>
		///<return type="void"/>
		return ;
	}, 	
	resolve : function(timeout)
	{
		///<summary>Resolve a Bonjour service from the network.  Must be done before attempting to access the service's socket information, if a remote service.  You cannot resolve a locally published service.</summary>
		///<param name="timeout" type="double">the timeout for service resolution, in seconds.  Optional, default is 120s.</param>
		///<return type="void"/>
		return ;
	}, 	
	stop : function()
	{
		///<summary>Halts publication of a service.</summary>
		///<return type="void"/>
		return ;
	}
};

Titanium.Network.HTTPClient = {
	DONE :0,
	HEADERS_RECEIVED :0,
	LOADING :0,
	OPENED :0,
	UNSENT :0,
	connected :true,
	connectionType :'',
	file :'',
	location :'',
	ondatastream :function(){},
	onerror :function(){},
	onload :function(){},
	onreadystatechange :function(){},
	onsendstream :function(){},
	readyState :0,
	responseData :{},
	responseText :'',
	responseXML :{},
	status :0,
	timeout :0,
	validatesSecureCertificate :true,
	
	abort : function()
	{
		///<summary>abort a pending request</summary>
		///<return type="void"/>
		return ;
	}, 	
	getResponseHeader : function(name)
	{
		///<summary>return the response header.</summary>
		///<param name="name" type="string">the header name</param>
		///<return type="string"/>
		return '';
	}, 	
	open : function(method, url, async)
	{
		///<summary>open the request and ready the connection</summary>
		///<param name="method" type="string">the HTTP method</param>
		///<param name="url" type="string">the URL for the request</param>
		///<param name="async" type="boolean">optional property to indicate if asynchronous (default) or not</param>
		///<return type="void"/>
		return ;
	}, 	
	send : function(data)
	{
		///<summary>send the request</summary>
		///<param name="data" type="object">the data to send in the request. can either be null, dictionary, string, File object or Blob.</param>
		///<return type="void"/>
		return ;
	}, 	
	setRequestHeader : function(name, value)
	{
		///<summary>set the request header. Must be called after open but before send.</summary>
		///<param name="name" type="string">name of the header</param>
		///<param name="value" type="string">value of the header. May be null to clearing out a property, such as X-Requested-With</param>
		///<return type="void"/>
		return ;
	}, 	
	setTimeout : function(timeout)
	{
		///<summary>set the request timeout</summary>
		///<param name="timeout" type="double">the timeout in milliseconds</param>
		///<return type="void"/>
		return ;
	}
};

Titanium.Network.TCPSocket = {
	hostName :'',
	isValid :true,
	mode :0,
	port :0,
	stripTerminator :true,
	events : {'read' : 'read','readError' : 'readError','writeError' : 'writeError'},
	
	close : function()
	{
		///<summary>close the socket</summary>
		///<return type="void"/>
		return ;
	}, 	
	connect : function()
	{
		///<summary>connect the scocket to a TCP server</summary>
		///<return type="void"/>
		return ;
	}, 	
	listen : function()
	{
		///<summary>set up the socket to receive connections</summary>
		///<return type="void"/>
		return ;
	}, 	
	write : function(data, sendTo)
	{
		///<summary>write data to the socket, if the mode is WRITE_MODE or READ_WRITE_MODE</summary>
		///<param name="data" type="object,string">either a string or blob object representing the data to be transferred</param>
		///<param name="sendTo" type="int">the socket reference to send the data to.  Default is to send to all connected sockets</param>
		///<return type="void"/>
		return ;
	}
};

Titanium.Platform = {
	BATTERY_STATE_CHARGING :0,
	BATTERY_STATE_FULL :0,
	BATTERY_STATE_UNKNOWN :0,
	BATTERY_STATE_UNPLUGGED :0,
	address :'',
	architecture :'',
	availableMemory :0.0,
	batteryLevel :0.0,
	batteryMonitoring :true,
	batteryState :0,
	displayCaps :{},
	id :'',
	locale :'',
	macaddress :'',
	model :'',
	name :'',
	netmask :'',
	osname :'',
	ostype :'',
	processorCount :0,
	username :'',
	version :'',
	events : {'battery' : 'battery'},
	
	addEventListener : function(name, callback)
	{
		///<summary>add an event listener for the instance to receive view triggered events</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function to invoke when the event is fired</param>
		///<return type="void"/>
		return ;
	}, 	
	canOpenURL : function(url)
	{
		///<summary>returns whether or not a system URL can be opened. iOS only</summary>
		///<param name="url" type="string">the url to check</param>
		///<return type="void"/>
		return ;
	}, 	
	createUUID : function()
	{
		///<summary>create a globally unique identifier</summary>
		///<return type="string"/>
		return '';
	}, 	
	fireEvent : function(name, event)
	{
		///<summary>fire a synthesized event to the views listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="event" type="object">event object</param>
		///<return type="void"/>
		return ;
	}, 	
	openURL : function(url)
	{
		///<summary>open a URL in the system default manner</summary>
		///<param name="url" type="string">the url to open</param>
		///<return type="void"/>
		return ;
	}, 	
	removeEventListener : function(name, callback)
	{
		///<summary>remove a previously added event listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function passed in addEventListener</param>
		///<return type="void"/>
		return ;
	}
};

Titanium.Platform.DisplayCaps = {
	density :'',
	dpi :0,
	platformHeight :0.0,
	platformWidth :0.0
};

Titanium.UI = {
	ANIMATION_CURVE_EASE_IN :0,
	ANIMATION_CURVE_EASE_IN_OUT :0,
	ANIMATION_CURVE_EASE_OUT :0,
	ANIMATION_CURVE_LINEAR :0,
	BLEND_MODE_CLEAR :0,
	BLEND_MODE_COLOR :0,
	BLEND_MODE_COLOR_BURN :0,
	BLEND_MODE_COLOR_DODGE :0,
	BLEND_MODE_COPY :0,
	BLEND_MODE_DARKEN :0,
	BLEND_MODE_DESTINATION_ATOP :0,
	BLEND_MODE_DESTINATION_IN :0,
	BLEND_MODE_DESTINATION_OUT :0,
	BLEND_MODE_DESTINATION_OVER :0,
	BLEND_MODE_DIFFERENCE :0,
	BLEND_MODE_EXCLUSION :0,
	BLEND_MODE_HARD_LIGHT :0,
	BLEND_MODE_HUE :0,
	BLEND_MODE_LIGHTEN :0,
	BLEND_MODE_LUMINOSITY :0,
	BLEND_MODE_MULTIPLY :0,
	BLEND_MODE_NORMAL :0,
	BLEND_MODE_OVERLAY :0,
	BLEND_MODE_PLUS_DARKER :0,
	BLEND_MODE_PLUS_LIGHTER :0,
	BLEND_MODE_SATURATION :0,
	BLEND_MODE_SCREEN :0,
	BLEND_MODE_SOFT_LIGHT :0,
	BLEND_MODE_SOURCE_ATOP :0,
	BLEND_MODE_SOURCE_IN :0,
	BLEND_MODE_SOURCE_OUT :0,
	BLEND_MODE_XOR :0,
	FACE_DOWN :0,
	FACE_UP :0,
	INPUT_BORDERSTYLE_BEZEL :0,
	INPUT_BORDERSTYLE_LINE :0,
	INPUT_BORDERSTYLE_NONE :0,
	INPUT_BORDERSTYLE_ROUNDED :0,
	INPUT_BUTTONMODE_ALWAYS :0,
	INPUT_BUTTONMODE_NEVER :0,
	INPUT_BUTTONMODE_ONBLUR :0,
	INPUT_BUTTONMODE_ONFOCUS :0,
	KEYBOARD_APPEARANCE_ALERT :0,
	KEYBOARD_APPEARANCE_DEFAULT :0,
	KEYBOARD_ASCII :0,
	KEYBOARD_DEFAULT :0,
	KEYBOARD_EMAIL :0,
	KEYBOARD_NAMEPHONE_PAD :0,
	KEYBOARD_NUMBERS_PUNCTUATION :0,
	KEYBOARD_NUMBER_PAD :0,
	KEYBOARD_PHONE_PAD :0,
	KEYBOARD_URL :0,
	LANDSCAPE_LEFT :0,
	LANDSCAPE_RIGHT :0,
	NOTIFICATION_DURATION_LONG :0,
	NOTIFICATION_DURATION_SHORT :0,
	PICKER_TYPE_COUNT_DOWN_TIMER :0,
	PICKER_TYPE_DATE :0,
	PICKER_TYPE_DATE_AND_TIME :0,
	PICKER_TYPE_PLAIN :0,
	PICKER_TYPE_TIME :0,
	PORTRAIT :0,
	RETURNKEY_DEFAULT :0,
	RETURNKEY_DONE :0,
	RETURNKEY_EMERGENCY_CALL :0,
	RETURNKEY_GO :0,
	RETURNKEY_GOOGLE :0,
	RETURNKEY_JOIN :0,
	RETURNKEY_NEXT :0,
	RETURNKEY_ROUTE :0,
	RETURNKEY_SEARCH :0,
	RETURNKEY_SEND :0,
	RETURNKEY_YAHOO :0,
	TEXT_ALIGNMENT_CENTER :0,
	TEXT_ALIGNMENT_LEFT :0,
	TEXT_ALIGNMENT_RIGHT :0,
	TEXT_AUTOCAPITALIZATION_ALL :0,
	TEXT_AUTOCAPITALIZATION_NONE :0,
	TEXT_AUTOCAPITALIZATION_SENTENCES :0,
	TEXT_AUTOCAPITALIZATION_WORDS :0,
	TEXT_VERTICAL_ALIGNMENT_BOTTOM :0,
	TEXT_VERTICAL_ALIGNMENT_CENTER :0,
	TEXT_VERTICAL_ALIGNMENT_TOP :0,
	UNKNOWN :0,
	UPSIDE_PORTRAIT :0,
	
	addEventListener : function(name, callback)
	{
		///<summary>add an event listener for the instance to receive view triggered events</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function to invoke when the event is fired</param>
		///<return type="void"/>
		return ;
	}, 	
	create2DMatrix : function(parameters)
	{
		///<summary>create and return an instance of Titanium.UI.2DMatrix</summary>
		///<param name="parameters" type="object">(optional) a dictionary object properties defined in Titanium.UI.2DMatrix</param>
		///<return type="object"/>
		return {};
	}, 	
	create3DMatrix : function(parameters)
	{
		///<summary>create and return an instance of Titanium.UI.3DMatrix</summary>
		///<param name="parameters" type="object">(optional) a dictionary object properties defined in Titanium.UI.3DMatrix</param>
		///<return type="object"/>
		return {};
	}, 	
	createActivityIndicator : function(parameters)
	{
		///<summary>create and return an instance of Titanium.UI.ActivityIndicator</summary>
		///<param name="parameters" type="object">(optional) a dictionary object properties defined in Titanium.UI.ActivityIndicator</param>
		///<return type="object"/>
		return {};
	}, 	
	createAlertDialog : function(parameters)
	{
		///<summary>create and return an instance of Titanium.UI.AlertDialog</summary>
		///<param name="parameters" type="object">(optional) a dictionary object properties defined in Titanium.UI.AlertDialog</param>
		///<return type="object"/>
		return {};
	}, 	
	createAnimation : function(parameters)
	{
		///<summary>create and return an instance of Titanium.UI.Animation</summary>
		///<param name="parameters" type="object">(optional) a dictionary object properties defined in Titanium.UI.Animation</param>
		///<return type="object"/>
		return {};
	}, 	
	createButton : function(parameters)
	{
		///<summary>create and return an instance of Titanium.UI.Button</summary>
		///<param name="parameters" type="object">(optional) a dictionary object properties defined in Titanium.UI.Button</param>
		///<return type="object"/>
		return {};
	}, 	
	createButtonBar : function(parameters)
	{
		///<summary>create and return an instance of Titanium.UI.ButtonBar</summary>
		///<param name="parameters" type="object">(optional) a dictionary object properties defined in Titanium.UI.ButtonBar</param>
		///<return type="object"/>
		return {};
	}, 	
	createCoverFlowView : function(parameters)
	{
		///<summary>create and return an instance of Titanium.UI.CoverFlowView</summary>
		///<param name="parameters" type="object">(optional) a dictionary object properties defined in Titanium.UI.CoverFlowView</param>
		///<return type="object"/>
		return {};
	}, 	
	createDashboardItem : function(parameters)
	{
		///<summary>create and return an instance of Titanium.UI.DashboardItem</summary>
		///<param name="parameters" type="object">(optional) a dictionary object properties defined in Titanium.UI.DashboardItem</param>
		///<return type="object"/>
		return {};
	}, 	
	createDashboardView : function(parameters)
	{
		///<summary>create and return an instance of Titanium.UI.DashboardView</summary>
		///<param name="parameters" type="object">(optional) a dictionary object properties defined in Titanium.UI.DashboardView</param>
		///<return type="object"/>
		return {};
	}, 	
	createEmailDialog : function(parameters)
	{
		///<summary>create and return an instance of Titanium.UI.EmailDialog</summary>
		///<param name="parameters" type="object">(optional) a dictionary object properties defined in Titanium.UI.EmailDialog</param>
		///<return type="object"/>
		return {};
	}, 	
	createImageView : function(parameters)
	{
		///<summary>create and return an instance of Titanium.UI.ImageView</summary>
		///<param name="parameters" type="object">(optional) a dictionary object properties defined in Titanium.UI.ImageView</param>
		///<return type="object"/>
		return {};
	}, 	
	createLabel : function(parameters)
	{
		///<summary>create and return an instance of Titanium.UI.Label</summary>
		///<param name="parameters" type="object">(optional) a dictionary object properties defined in Titanium.UI.Label</param>
		///<return type="object"/>
		return {};
	}, 	
	createOptionDialog : function(parameters)
	{
		///<summary>create and return an instance of Titanium.UI.OptionDialog</summary>
		///<param name="parameters" type="object">(optional) a dictionary object properties defined in Titanium.UI.OptionDialog</param>
		///<return type="object"/>
		return {};
	}, 	
	createPicker : function(parameters)
	{
		///<summary>create and return an instance of Titanium.UI.Picker</summary>
		///<param name="parameters" type="object">(optional) a dictionary object properties defined in Titanium.UI.Picker</param>
		///<return type="object"/>
		return {};
	}, 	
	createPickerColumn : function(parameters)
	{
		///<summary>create and return an instance of Titanium.UI.PickerColumn</summary>
		///<param name="parameters" type="object">(optional) a dictionary object properties defined in Titanium.UI.PickerColumn</param>
		///<return type="object"/>
		return {};
	}, 	
	createPickerRow : function(parameters)
	{
		///<summary>create and return an instance of Titanium.UI.PickerRow</summary>
		///<param name="parameters" type="object">(optional) a dictionary object properties defined in Titanium.UI.PickerRow</param>
		///<return type="object"/>
		return {};
	}, 	
	createProgressBar : function(parameters)
	{
		///<summary>create and return an instance of Titanium.UI.ProgressBar</summary>
		///<param name="parameters" type="object">(optional) a dictionary object properties defined in Titanium.UI.ProgressBar</param>
		///<return type="object"/>
		return {};
	}, 	
	createScrollView : function(parameters)
	{
		///<summary>create and return an instance of Titanium.UI.ScrollView</summary>
		///<param name="parameters" type="object">(optional) a dictionary object properties defined in Titanium.UI.ScrollView</param>
		///<return type="object"/>
		return {};
	}, 	
	createScrollableView : function(parameters)
	{
		///<summary>create and return an instance of Titanium.UI.ScrollableView</summary>
		///<param name="parameters" type="object">(optional) a dictionary object properties defined in Titanium.UI.ScrollableView</param>
		///<return type="object"/>
		return {};
	}, 	
	createSearchBar : function(parameters)
	{
		///<summary>create and return an instance of Titanium.UI.SearchBar</summary>
		///<param name="parameters" type="object">(optional) a dictionary object properties defined in Titanium.UI.SearchBar</param>
		///<return type="object"/>
		return {};
	}, 	
	createSlider : function(parameters)
	{
		///<summary>create and return an instance of Titanium.UI.Slider</summary>
		///<param name="parameters" type="object">(optional) a dictionary object properties defined in Titanium.UI.Slider</param>
		///<return type="object"/>
		return {};
	}, 	
	createSwitch : function(parameters)
	{
		///<summary>create and return an instance of Titanium.UI.Switch</summary>
		///<param name="parameters" type="object">(optional) a dictionary object properties defined in Titanium.UI.Switch</param>
		///<return type="object"/>
		return {};
	}, 	
	createTab : function(parameters)
	{
		///<summary>create and return an instance of Titanium.UI.Tab</summary>
		///<param name="parameters" type="object">(optional) a dictionary object properties defined in Titanium.UI.Tab</param>
		///<return type="object"/>
		return {};
	}, 	
	createTabGroup : function(parameters)
	{
		///<summary>create and return an instance of Titanium.UI.TabGroup</summary>
		///<param name="parameters" type="object">(optional) a dictionary object properties defined in Titanium.UI.TabGroup</param>
		///<return type="object"/>
		return {};
	}, 	
	createTabbedBar : function(parameters)
	{
		///<summary>create and return an instance of Titanium.UI.TabbedBar</summary>
		///<param name="parameters" type="object">(optional) a dictionary object properties defined in Titanium.UI.TabbedBar</param>
		///<return type="object"/>
		return {};
	}, 	
	createTableView : function(parameters)
	{
		///<summary>create and return an instance of Titanium.UI.TableView</summary>
		///<param name="parameters" type="object">(optional) a dictionary object properties defined in Titanium.UI.TableView</param>
		///<return type="object"/>
		return {};
	}, 	
	createTableViewRow : function(parameters)
	{
		///<summary>create and return an instance of Titanium.UI.TableViewRow</summary>
		///<param name="parameters" type="object">(optional) a dictionary object properties defined in Titanium.UI.TableViewRow</param>
		///<return type="object"/>
		return {};
	}, 	
	createTableViewSection : function(parameters)
	{
		///<summary>create and return an instance of Titanium.UI.TableViewSection</summary>
		///<param name="parameters" type="object">(optional) a dictionary object properties defined in Titanium.UI.TableViewSection</param>
		///<return type="object"/>
		return {};
	}, 	
	createTextArea : function(parameters)
	{
		///<summary>create and return an instance of Titanium.UI.TextArea</summary>
		///<param name="parameters" type="object">(optional) a dictionary object properties defined in Titanium.UI.TextArea</param>
		///<return type="object"/>
		return {};
	}, 	
	createTextField : function(parameters)
	{
		///<summary>create and return an instance of Titanium.UI.TextField</summary>
		///<param name="parameters" type="object">(optional) a dictionary object properties defined in Titanium.UI.TextField</param>
		///<return type="object"/>
		return {};
	}, 	
	createToolbar : function(parameters)
	{
		///<summary>create and return an instance of Titanium.UI.Toolbar</summary>
		///<param name="parameters" type="object">(optional) a dictionary object properties defined in Titanium.UI.Toolbar</param>
		///<return type="object"/>
		return {};
	}, 	
	createView : function(parameters)
	{
		///<summary>create and return an instance of Titanium.UI.View</summary>
		///<param name="parameters" type="object">(optional) a dictionary object properties defined in Titanium.UI.View</param>
		///<return type="object"/>
		return {};
	}, 	
	createWebView : function(parameters)
	{
		///<summary>create and return an instance of Titanium.UI.WebView</summary>
		///<param name="parameters" type="object">(optional) a dictionary object properties defined in Titanium.UI.WebView</param>
		///<return type="object"/>
		return {};
	}, 	
	createWindow : function(parameters)
	{
		///<summary>create and return an instance of Titanium.UI.Window</summary>
		///<param name="parameters" type="object">(optional) a dictionary object properties defined in Titanium.UI.Window</param>
		///<return type="object"/>
		return {};
	}, 	
	fireEvent : function(name, event)
	{
		///<summary>fire a synthesized event to the views listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="event" type="object">event object</param>
		///<return type="void"/>
		return ;
	}, 	
	removeEventListener : function(name, callback)
	{
		///<summary>remove a previously added event listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function passed in addEventListener</param>
		///<return type="void"/>
		return ;
	}
};

Titanium.UI['2DMatrix'] = {
	
	addEventListener : function(name, callback)
	{
		///<summary>add an event listener for the instance to receive view triggered events</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function to invoke when the event is fired</param>
		///<return type="void"/>
		return ;
	}, 	
	fireEvent : function(name, event)
	{
		///<summary>fire a synthesized event to the views listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="event" type="object">event object</param>
		///<return type="void"/>
		return ;
	}, 	
	invert : function()
	{
		///<summary>Returns a matrix constructed by inverting an existing matrix</summary>
		///<return type="void"/>
		return ;
	}, 	
	multiply : function(t2)
	{
		///<summary>Returns a matrix constructed by combining two existing matrix.</summary>
		///<param name="t2" type="object">The second matrix. This matrix is concatenated to the matrix instance against which the function is invoked.  The result of this function is the first matrix multiplied by the second matrix. You might perform several multiplications in order to create a single matrix that contains the cumulative effects of several transformations. Note that matrix operations are not commutative - the order in which you concatenate matrices is important. That is, the result of multiplying matrix t1 by matrix t2 does not necessarily equal the result of multiplying matrix t2 by matrix t1.</param>
		///<return type="object"/>
		return {};
	}, 	
	removeEventListener : function(name, callback)
	{
		///<summary>remove a previously added event listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function passed in addEventListener</param>
		///<return type="void"/>
		return ;
	}, 	
	rotate : function(angle)
	{
		///<summary>Returns a matrix constructed by rotating an existing matrix</summary>
		///<param name="angle" type="float">The angle, in degrees, by which to rotate the matrix. A positive value specifies counterclockwise rotation and a negative value specifies clockwise rotation.</param>
		///<return type="object"/>
		return {};
	}, 	
	scale : function(sx, sy)
	{
		///<summary>Returns a matrix constructed by scaling an existing matrix</summary>
		///<param name="sx" type="float">The value by which to scale x values of the matrix</param>
		///<param name="sy" type="float">The value by which to scale y values of the matrix</param>
		///<return type="object"/>
		return {};
	}, 	
	translate : function(tx, ty)
	{
		///<summary>Returns a matrix constructed by translating an existing matrix</summary>
		///<param name="tx" type="float">The value by which to move x values with the matrix</param>
		///<param name="ty" type="float">The value by which to move y values with the matrix</param>
		///<return type="object"/>
		return {};
	}
};

Titanium.UI['3DMatrix'] = {
	
	addEventListener : function(name, callback)
	{
		///<summary>add an event listener for the instance to receive view triggered events</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function to invoke when the event is fired</param>
		///<return type="void"/>
		return ;
	}, 	
	fireEvent : function(name, event)
	{
		///<summary>fire a synthesized event to the views listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="event" type="object">event object</param>
		///<return type="void"/>
		return ;
	}, 	
	invert : function()
	{
		///<summary>Returns a matrix constructed by inverting an existing matrix</summary>
		///<return type="void"/>
		return ;
	}, 	
	multiply : function(t2)
	{
		///<summary>Returns a matrix constructed by combining two existing matrix.</summary>
		///<param name="t2" type="object">The second matrix. This matrix is concatenated to the matrix instance against which the function is invoked.  The result of this function is the first matrix multiplied by the second matrix. You might perform several multiplications in order to create a single matrix that contains the cumulative effects of several transformations. Note that matrix operations are not commutative - the order in which you concatenate matrices is important. That is, the result of multiplying matrix t1 by matrix t2 does not necessarily equal the result of multiplying matrix t2 by matrix t1.</param>
		///<return type="object"/>
		return {};
	}, 	
	removeEventListener : function(name, callback)
	{
		///<summary>remove a previously added event listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function passed in addEventListener</param>
		///<return type="void"/>
		return ;
	}, 	
	rotate : function(angle, x, y, z)
	{
		///<summary>Returns a matrix constructed by rotating an existing matrix</summary>
		///<param name="angle" type="float">The angle, in degrees, by which to rotate the matrix. A positive value specifies counterclockwise rotation and a negative value specifies clockwise rotation.</param>
		///<param name="x" type="float">The x part of the vector about which to rotate</param>
		///<param name="y" type="float">The y part of the vector about which to rotate</param>
		///<param name="z" type="float">The z part of the vector about which to rotate</param>
		///<return type="object"/>
		return {};
	}, 	
	scale : function(sx, sy, sz)
	{
		///<summary>Returns a matrix constructed by scaling an existing matrix</summary>
		///<param name="sx" type="float">The value by which to scale x values of the matrix</param>
		///<param name="sy" type="float">The value by which to scale y values of the matrix</param>
		///<param name="sz" type="float">The value by which to scale z values of the matrix</param>
		///<return type="object"/>
		return {};
	}, 	
	translate : function(tx, ty, tz)
	{
		///<summary>Returns a matrix constructed by translating an existing matrix</summary>
		///<param name="tx" type="float">The value by which to move x values with the matrix</param>
		///<param name="ty" type="float">The value by which to move y values with the matrix</param>
		///<param name="tz" type="float">The value by which to move z values with the matrix</param>
		///<return type="object"/>
		return {};
	}
};

Titanium.UI.ActivityIndicator = {
	color :'',
	font :{},
	message :'',
	messageid :'',
	style :0,
	
	hide : function()
	{
		///<summary>call hide to make the activity indicator hidden and stop spinning</summary>
		///<return type="void"/>
		return ;
	}, 	
	show : function()
	{
		///<summary>call show to make the activity indicator visible and start spinning</summary>
		///<return type="void"/>
		return ;
	}
};

Titanium.UI.AlertDialog = {
	buttonNames :[],
	cancel :0,
	message :'',
	messageid :'',
	title :'',
	events : {'click' : 'click'},
	
	addEventListener : function(name, callback)
	{
		///<summary>add an event listener for the instance to receive view triggered events</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function to invoke when the event is fired</param>
		///<return type="void"/>
		return ;
	}, 	
	fireEvent : function(name, event)
	{
		///<summary>fire a synthesized event to the views listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="event" type="object">event object</param>
		///<return type="void"/>
		return ;
	}, 	
	hide : function()
	{
		///<summary>cause the dialog to become hidden</summary>
		///<return type="void"/>
		return ;
	}, 	
	removeEventListener : function(name, callback)
	{
		///<summary>remove a previously added event listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function passed in addEventListener</param>
		///<return type="void"/>
		return ;
	}, 	
	show : function()
	{
		///<summary>cause the dialog to become visible</summary>
		///<return type="void"/>
		return ;
	}
};

Titanium.UI.Android = {
	LINKIFY_ALL :0,
	LINKIFY_EMAIL_ADDRESSES :0,
	LINKIFY_MAP_ADDRESSES :0,
	LINKIFY_MAP_LINKS :0,
	LINKIFY_PHONE_NUMBERS :0,
	LINKIFY_WEB_URLS :0,
	SOFT_INPUT_ADJUST_PAN :0,
	SOFT_INPUT_ADJUST_RESIZE :0,
	SOFT_INPUT_ADJUST_UNSPECIFIED :0,
	SOFT_INPUT_STATE_HIDDEN :0,
	SOFT_INPUT_STATE_UNSPECIFIED :0,
	SOFT_INPUT_STATE_VISIBLE :0,
	SOFT_KEYBOARD_DEFAULT_ON_FOCUS :0,
	SOFT_KEYBOARD_HIDE_ON_FOCUS :0,
	SOFT_KEYBOARD_SHOW_ON_FOCUS :0,
	SWITCH_STYLE_CHECKBOX :0,
	SWITCH_STYLE_TOGGLEBUTTON :0,
	
	addEventListener : function(name, callback)
	{
		///<summary>add an event listener for the instance to receive view triggered events</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function to invoke when the event is fired</param>
		///<return type="void"/>
		return ;
	}, 	
	fireEvent : function(name, event)
	{
		///<summary>fire a synthesized event to the views listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="event" type="object">event object</param>
		///<return type="void"/>
		return ;
	}, 	
	hideSoftKeyboard : function()
	{
		///<summary>request that the soft keyboard hide. Note: It is not currently possible in the native Android API to detect that the keyboard is already visible. Note: It is not possible to globally show the keyboard at this point.</summary>
		///<return type="void"/>
		return ;
	}, 	
	openPreferences : function()
	{
		///<summary>open Android native preferences UI activity. You need to place your preferences.xml file in the platform/android/res/xml/ folder of your project. Documentation on the file format may be found in the Android documentation http://developer.android.com/resources/samples/ApiDemos/res/xml/preferences.html</summary>
		///<return type="void"/>
		return ;
	}, 	
	removeEventListener : function(name, callback)
	{
		///<summary>remove a previously added event listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function passed in addEventListener</param>
		///<return type="void"/>
		return ;
	}
};

Titanium.UI.Animation = {
	autoreverse :true,
	backgroundColor :'',
	bottom :0.0,
	center :{},
	color :'',
	curve :0,
	delay :0.0,
	duration :0.0,
	height :0.0,
	left :0.0,
	opacity :0.0,
	opaque :true,
	repeat :0,
	right :0.0,
	top :0.0,
	transform :{},
	transition :0,
	visible :true,
	width :0.0,
	zIndex :0,
	events : {'complete' : 'complete','start' : 'start'},
	
	addEventListener : function(name, callback)
	{
		///<summary>add an event listener for the instance to receive view triggered events</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function to invoke when the event is fired</param>
		///<return type="void"/>
		return ;
	}, 	
	fireEvent : function(name, event)
	{
		///<summary>fire a synthesized event to the views listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="event" type="object">event object</param>
		///<return type="void"/>
		return ;
	}, 	
	removeEventListener : function(name, callback)
	{
		///<summary>remove a previously added event listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function passed in addEventListener</param>
		///<return type="void"/>
		return ;
	}
};

Titanium.UI.Button = {
	anchorPoint :{},
	animatedCenterPoint :{},
	backgroundColor :'',
	backgroundDisabledColor :'',
	backgroundDisabledImage :'',
	backgroundFocusedColor :'',
	backgroundFocusedImage :'',
	backgroundGradient :{},
	backgroundImage :'',
	backgroundLeftCap :0.0,
	backgroundSelectedColor :'',
	backgroundSelectedImage :'',
	backgroundTopCap :0.0,
	borderColor :'',
	borderRadius :0.0,
	borderWidth :0.0,
	bottom :'',
	center :{},
	color :'',
	enabled :true,
	focusable :true,
	font :{},
	fontFamily :'',
	fontSize :'',
	fontStyle :'',
	fontWeight :'',
	height :'',
	image :'',
	left :'',
	opacity :0.0,
	right :'',
	selectedColor :'',
	size :{},
	softKeyboardOnFocus :0,
	style :0,
	title :'',
	titleid :'',
	top :'',
	touchEnabled :true,
	transform :{},
	visible :true,
	width :'',
	zIndex :0,
	events : {'click' : 'click','dblclick' : 'dblclick','doubletap' : 'doubletap','singletap' : 'singletap','swipe' : 'swipe','touchcancel' : 'touchcancel','touchend' : 'touchend','touchmove' : 'touchmove','touchstart' : 'touchstart','twofingertap' : 'twofingertap'},
	
	add : function(view)
	{
		///<summary>add a child to the view hierarchy</summary>
		///<param name="view" type="object">the view to add to this views hiearchy</param>
		///<return type="void"/>
		return ;
	}, 	
	addEventListener : function(name, callback)
	{
		///<summary>add an event listener for the instance to receive view triggered events</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function to invoke when the event is fired</param>
		///<return type="void"/>
		return ;
	}, 	
	animate : function(obj, callback)
	{
		///<summary>animate the view</summary>
		///<param name="obj" type="object">either a dictionary of animation properties or an Animation object</param>
		///<param name="callback" type="function">function to be invoked upon completion of the animation</param>
		///<return type="void"/>
		return ;
	}, 	
	fireEvent : function(name, event)
	{
		///<summary>fire a synthesized event to the views listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="event" type="object">event object</param>
		///<return type="void"/>
		return ;
	}, 	
	hide : function()
	{
		///<summary>hide the view</summary>
		///<return type="void"/>
		return ;
	}, 	
	remove : function(view)
	{
		///<summary>remove a previously add view from the view hiearchy</summary>
		///<param name="view" type="object">the view to remove from this views hiearchy</param>
		///<return type="void"/>
		return ;
	}, 	
	removeEventListener : function(name, callback)
	{
		///<summary>remove a previously added event listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function passed in addEventListener</param>
		///<return type="void"/>
		return ;
	}, 	
	show : function()
	{
		///<summary>make the view visible</summary>
		///<return type="void"/>
		return ;
	}, 	
	toImage : function(f)
	{
		///<summary>return a Blob image of the rendered view</summary>
		///<param name="f" type="function">function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately</param>
		///<return type="object"/>
		return {};
	}
};

Titanium.UI.ButtonBar = {
	anchorPoint :{},
	animatedCenterPoint :{},
	backgroundColor :'',
	backgroundDisabledColor :'',
	backgroundDisabledImage :'',
	backgroundFocusedColor :'',
	backgroundFocusedImage :'',
	backgroundGradient :{},
	backgroundImage :'',
	backgroundLeftCap :0.0,
	backgroundSelectedColor :'',
	backgroundSelectedImage :'',
	backgroundTopCap :0.0,
	borderColor :'',
	borderRadius :0.0,
	borderWidth :0.0,
	bottom :'',
	center :{},
	focusable :true,
	fontFamily :'',
	fontSize :'',
	fontStyle :'',
	fontWeight :'',
	height :'',
	index :0,
	labels :[],
	left :'',
	opacity :0.0,
	right :'',
	size :{},
	softKeyboardOnFocus :0,
	style :0,
	top :'',
	touchEnabled :true,
	transform :{},
	visible :true,
	width :'',
	zIndex :0,
	events : {'click' : 'click','dblclick' : 'dblclick','doubletap' : 'doubletap','singletap' : 'singletap','swipe' : 'swipe','touchcancel' : 'touchcancel','touchend' : 'touchend','touchmove' : 'touchmove','touchstart' : 'touchstart','twofingertap' : 'twofingertap'},
	
	add : function(view)
	{
		///<summary>add a child to the view hierarchy</summary>
		///<param name="view" type="object">the view to add to this views hiearchy</param>
		///<return type="void"/>
		return ;
	}, 	
	addEventListener : function(name, callback)
	{
		///<summary>add an event listener for the instance to receive view triggered events</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function to invoke when the event is fired</param>
		///<return type="void"/>
		return ;
	}, 	
	animate : function(obj, callback)
	{
		///<summary>animate the view</summary>
		///<param name="obj" type="object">either a dictionary of animation properties or an Animation object</param>
		///<param name="callback" type="function">function to be invoked upon completion of the animation</param>
		///<return type="void"/>
		return ;
	}, 	
	fireEvent : function(name, event)
	{
		///<summary>fire a synthesized event to the views listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="event" type="object">event object</param>
		///<return type="void"/>
		return ;
	}, 	
	hide : function()
	{
		///<summary>hide the view</summary>
		///<return type="void"/>
		return ;
	}, 	
	remove : function(view)
	{
		///<summary>remove a previously add view from the view hiearchy</summary>
		///<param name="view" type="object">the view to remove from this views hiearchy</param>
		///<return type="void"/>
		return ;
	}, 	
	removeEventListener : function(name, callback)
	{
		///<summary>remove a previously added event listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function passed in addEventListener</param>
		///<return type="void"/>
		return ;
	}, 	
	show : function()
	{
		///<summary>make the view visible</summary>
		///<return type="void"/>
		return ;
	}, 	
	toImage : function(f)
	{
		///<summary>return a Blob image of the rendered view</summary>
		///<param name="f" type="function">function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately</param>
		///<return type="object"/>
		return {};
	}
};

Titanium.UI.Clipboard = {
	
	addEventListener : function(name, callback)
	{
		///<summary>add an event listener for the instance to receive view triggered events</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function to invoke when the event is fired</param>
		///<return type="void"/>
		return ;
	}, 	
	clearData : function(type)
	{
		///<summary>Clear data of the given mime-type from the clipboard. If no mime-type is given, clear all data from the clipboard.</summary>
		///<param name="type" type="string">(optional) The mime-type of the data to clear.</param>
		///<return type="void"/>
		return ;
	}, 	
	clearText : function()
	{
		///<summary>Clear the text portion of the clipboard.</summary>
		///<return type="void"/>
		return ;
	}, 	
	fireEvent : function(name, event)
	{
		///<summary>fire a synthesized event to the views listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="event" type="object">event object</param>
		///<return type="void"/>
		return ;
	}, 	
	getData : function(type)
	{
		///<summary>Get the data on the clipboard from the portion which contains data of the given mime-type.</summary>
		///<param name="type" type="string">The mime-type of the data to get.</param>
		///<return type="void"/>
		return ;
	}, 	
	getText : function()
	{
		///<summary>Get the current text on the clipboard.</summary>
		///<return type="void"/>
		return ;
	}, 	
	hasData : function(type)
	{
		///<summary>Return true if there is any content of the given mime-type on the clipboard.</summary>
		///<param name="type" type="string">(optional) The mime-type of the data to check.</param>
		///<return type="void"/>
		return ;
	}, 	
	hasText : function()
	{
		///<summary>Return true if there is any content in the text portion of the clipboard.</summary>
		///<return type="void"/>
		return ;
	}, 	
	removeEventListener : function(name, callback)
	{
		///<summary>remove a previously added event listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function passed in addEventListener</param>
		///<return type="void"/>
		return ;
	}, 	
	setData : function(type, data)
	{
		///<summary>Set the data on the clipboard given a mime-type and the new data. This method will set data on the appropriate portion of the clipboard for the given mime-type.</summary>
		///<param name="type" type="string">The mime-type of the data to set.</param>
		///<param name="data" type="object">The new clipboard text.</param>
		///<return type="void"/>
		return ;
	}, 	
	setText : function(text)
	{
		///<summary>Set the text on the clipboard. This will overwrite the current contents of the clipboard.</summary>
		///<param name="text" type="string">The new clipboard text. If the text is an empty string</param>
		///<return type="void"/>
		return ;
	}
};

Titanium.UI.CoverFlowView = {
	anchorPoint :{},
	animatedCenterPoint :{},
	backgroundColor :'',
	backgroundDisabledColor :'',
	backgroundDisabledImage :'',
	backgroundFocusedColor :'',
	backgroundFocusedImage :'',
	backgroundGradient :{},
	backgroundImage :'',
	backgroundLeftCap :0.0,
	backgroundSelectedColor :'',
	backgroundSelectedImage :'',
	backgroundTopCap :0.0,
	borderColor :'',
	borderRadius :0.0,
	borderWidth :0.0,
	bottom :'',
	center :{},
	focusable :true,
	fontFamily :'',
	fontSize :'',
	fontStyle :'',
	fontWeight :'',
	height :'',
	images :[],
	left :'',
	opacity :0.0,
	right :'',
	selected :0,
	size :{},
	softKeyboardOnFocus :0,
	top :'',
	touchEnabled :true,
	transform :{},
	visible :true,
	width :'',
	zIndex :0,
	events : {'change' : 'change','click' : 'click','dblclick' : 'dblclick','doubletap' : 'doubletap','singletap' : 'singletap','swipe' : 'swipe','touchcancel' : 'touchcancel','touchend' : 'touchend','touchmove' : 'touchmove','touchstart' : 'touchstart','twofingertap' : 'twofingertap'},
	
	add : function(view)
	{
		///<summary>add a child to the view hierarchy</summary>
		///<param name="view" type="object">the view to add to this views hiearchy</param>
		///<return type="void"/>
		return ;
	}, 	
	addEventListener : function(name, callback)
	{
		///<summary>add an event listener for the instance to receive view triggered events</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function to invoke when the event is fired</param>
		///<return type="void"/>
		return ;
	}, 	
	animate : function(obj, callback)
	{
		///<summary>animate the view</summary>
		///<param name="obj" type="object">either a dictionary of animation properties or an Animation object</param>
		///<param name="callback" type="function">function to be invoked upon completion of the animation</param>
		///<return type="void"/>
		return ;
	}, 	
	fireEvent : function(name, event)
	{
		///<summary>fire a synthesized event to the views listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="event" type="object">event object</param>
		///<return type="void"/>
		return ;
	}, 	
	hide : function()
	{
		///<summary>hide the view</summary>
		///<return type="void"/>
		return ;
	}, 	
	remove : function(view)
	{
		///<summary>remove a previously add view from the view hiearchy</summary>
		///<param name="view" type="object">the view to remove from this views hiearchy</param>
		///<return type="void"/>
		return ;
	}, 	
	removeEventListener : function(name, callback)
	{
		///<summary>remove a previously added event listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function passed in addEventListener</param>
		///<return type="void"/>
		return ;
	}, 	
	setImage : function(index, image)
	{
		///<summary>change an image for a index</summary>
		///<param name="index" type="int">index to change</param>
		///<param name="image" type="object">the image to set the index to. May be a TiBlob, TiFile, URL, or dictionary with 'image' (may be any of TiBlob, TiFile, URL), 'width', 'height' keys.  'auto' is not allowed, only exact sizes (although a size may be omitted to keep the image at that size).  If passed as a TiFile or URL, will perform a check for '@2x' on Retina displays</param>
		///<return type="void"/>
		return ;
	}, 	
	show : function()
	{
		///<summary>make the view visible</summary>
		///<return type="void"/>
		return ;
	}, 	
	toImage : function(f)
	{
		///<summary>return a Blob image of the rendered view</summary>
		///<param name="f" type="function">function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately</param>
		///<return type="object"/>
		return {};
	}
};

Titanium.UI.DashboardItem = {
	badge :0,
	canDelete :true,
	image :'',
	selectedImage :'',
	events : {'click' : 'click','delete' : 'delete','move' : 'move'},
	
	addEventListener : function(name, callback)
	{
		///<summary>add an event listener for the instance to receive view triggered events</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function to invoke when the event is fired</param>
		///<return type="void"/>
		return ;
	}, 	
	fireEvent : function(name, event)
	{
		///<summary>fire a synthesized event to the views listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="event" type="object">event object</param>
		///<return type="void"/>
		return ;
	}, 	
	removeEventListener : function(name, callback)
	{
		///<summary>remove a previously added event listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function passed in addEventListener</param>
		///<return type="void"/>
		return ;
	}
};

Titanium.UI.DashboardView = {
	anchorPoint :{},
	animatedCenterPoint :{},
	backgroundColor :'',
	backgroundDisabledColor :'',
	backgroundDisabledImage :'',
	backgroundFocusedColor :'',
	backgroundFocusedImage :'',
	backgroundGradient :{},
	backgroundImage :'',
	backgroundLeftCap :0.0,
	backgroundSelectedColor :'',
	backgroundSelectedImage :'',
	backgroundTopCap :0.0,
	borderColor :'',
	borderRadius :0.0,
	borderWidth :0.0,
	bottom :'',
	center :{},
	data :[],
	focusable :true,
	fontFamily :'',
	fontSize :'',
	fontStyle :'',
	fontWeight :'',
	height :'',
	left :'',
	opacity :0.0,
	right :'',
	size :{},
	softKeyboardOnFocus :0,
	top :'',
	touchEnabled :true,
	transform :{},
	visible :true,
	width :'',
	wobble :true,
	zIndex :0,
	events : {'click' : 'click','commit' : 'commit','dblclick' : 'dblclick','delete' : 'delete','doubletap' : 'doubletap','edit' : 'edit','move' : 'move','singletap' : 'singletap','swipe' : 'swipe','touchcancel' : 'touchcancel','touchend' : 'touchend','touchmove' : 'touchmove','touchstart' : 'touchstart','twofingertap' : 'twofingertap'},
	
	add : function(view)
	{
		///<summary>add a child to the view hierarchy</summary>
		///<param name="view" type="object">the view to add to this views hiearchy</param>
		///<return type="void"/>
		return ;
	}, 	
	addEventListener : function(name, callback)
	{
		///<summary>add an event listener for the instance to receive view triggered events</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function to invoke when the event is fired</param>
		///<return type="void"/>
		return ;
	}, 	
	animate : function(obj, callback)
	{
		///<summary>animate the view</summary>
		///<param name="obj" type="object">either a dictionary of animation properties or an Animation object</param>
		///<param name="callback" type="function">function to be invoked upon completion of the animation</param>
		///<return type="void"/>
		return ;
	}, 	
	fireEvent : function(name, event)
	{
		///<summary>fire a synthesized event to the views listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="event" type="object">event object</param>
		///<return type="void"/>
		return ;
	}, 	
	hide : function()
	{
		///<summary>hide the view</summary>
		///<return type="void"/>
		return ;
	}, 	
	remove : function(view)
	{
		///<summary>remove a previously add view from the view hiearchy</summary>
		///<param name="view" type="object">the view to remove from this views hiearchy</param>
		///<return type="void"/>
		return ;
	}, 	
	removeEventListener : function(name, callback)
	{
		///<summary>remove a previously added event listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function passed in addEventListener</param>
		///<return type="void"/>
		return ;
	}, 	
	show : function()
	{
		///<summary>make the view visible</summary>
		///<return type="void"/>
		return ;
	}, 	
	startEditing : function()
	{
		///<summary>put the dashboard in edit mode</summary>
		///<return type="void"/>
		return ;
	}, 	
	stopEditing : function()
	{
		///<summary>cancel editing</summary>
		///<return type="void"/>
		return ;
	}, 	
	toImage : function(f)
	{
		///<summary>return a Blob image of the rendered view</summary>
		///<param name="f" type="function">function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately</param>
		///<return type="object"/>
		return {};
	}
};

Titanium.UI.EmailDialog = {
	CANCELLED :0,
	FAILED :0,
	SAVED :0,
	SENT :0,
	barColor :'',
	bccRecipients :[],
	ccRecipients :[],
	html :true,
	messageBody :'',
	subject :'',
	toRecipients :[],
	events : {'complete' : 'complete'},
	
	addAttachment : function(attachment)
	{
		///<summary>add an attachment to the email. the attachment can either be a Blob or File object. (Note: Android will only accept one attachment at this time.)</summary>
		///<param name="attachment" type="object">attachment object as either a Blob or File object</param>
		///<return type="void"/>
		return ;
	}, 	
	addEventListener : function(name, callback)
	{
		///<summary>add an event listener for the instance to receive view triggered events</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function to invoke when the event is fired</param>
		///<return type="void"/>
		return ;
	}, 	
	fireEvent : function(name, event)
	{
		///<summary>fire a synthesized event to the views listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="event" type="object">event object</param>
		///<return type="void"/>
		return ;
	}, 	
	isSupported : function()
	{
		///<summary>return whether or not sending email is supported</summary>
		///<return type="void"/>
		return ;
	}, 	
	open : function(properties)
	{
		///<summary>open the email dialog. the email dialog itself is a modal window</summary>
		///<param name="properties" type="object">object of animation properties. pass animated property (as boolean) to indicate if the dialog should be animated on open.</param>
		///<return type="void"/>
		return ;
	}, 	
	removeEventListener : function(name, callback)
	{
		///<summary>remove a previously added event listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function passed in addEventListener</param>
		///<return type="void"/>
		return ;
	}
};

Titanium.UI.ImageView = {
	anchorPoint :{},
	animatedCenterPoint :{},
	animating :true,
	backgroundColor :'',
	backgroundDisabledColor :'',
	backgroundDisabledImage :'',
	backgroundFocusedColor :'',
	backgroundFocusedImage :'',
	backgroundGradient :{},
	backgroundImage :'',
	backgroundLeftCap :0.0,
	backgroundSelectedColor :'',
	backgroundSelectedImage :'',
	backgroundTopCap :0.0,
	borderColor :'',
	borderRadius :0.0,
	borderWidth :0.0,
	bottom :'',
	canScale :true,
	center :{},
	defaultImage :'',
	duration :0.0,
	enableZoomControls :true,
	focusable :true,
	fontFamily :'',
	fontSize :'',
	fontStyle :'',
	fontWeight :'',
	height :0.0,
	image :{},
	images :[],
	left :'',
	opacity :0.0,
	paused :true,
	preventDefaultImage :true,
	repeatCount :0,
	reverse :true,
	right :'',
	size :{},
	softKeyboardOnFocus :0,
	top :'',
	touchEnabled :true,
	transform :{},
	url :'',
	visible :true,
	width :0.0,
	zIndex :0,
	events : {'change' : 'change','click' : 'click','dblclick' : 'dblclick','doubletap' : 'doubletap','load' : 'load','singletap' : 'singletap','start' : 'start','stop' : 'stop','swipe' : 'swipe','touchcancel' : 'touchcancel','touchend' : 'touchend','touchmove' : 'touchmove','touchstart' : 'touchstart','twofingertap' : 'twofingertap'},
	
	add : function(view)
	{
		///<summary>add a child to the view hierarchy</summary>
		///<param name="view" type="object">the view to add to this views hiearchy</param>
		///<return type="void"/>
		return ;
	}, 	
	addEventListener : function(name, callback)
	{
		///<summary>add an event listener for the instance to receive view triggered events</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function to invoke when the event is fired</param>
		///<return type="void"/>
		return ;
	}, 	
	animate : function(obj, callback)
	{
		///<summary>animate the view</summary>
		///<param name="obj" type="object">either a dictionary of animation properties or an Animation object</param>
		///<param name="callback" type="function">function to be invoked upon completion of the animation</param>
		///<return type="void"/>
		return ;
	}, 	
	fireEvent : function(name, event)
	{
		///<summary>fire a synthesized event to the views listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="event" type="object">event object</param>
		///<return type="void"/>
		return ;
	}, 	
	hide : function()
	{
		///<summary>hide the view</summary>
		///<return type="void"/>
		return ;
	}, 	
	pause : function()
	{
		///<summary>pause a started animation.</summary>
		///<return type="void"/>
		return ;
	}, 	
	remove : function(view)
	{
		///<summary>remove a previously add view from the view hiearchy</summary>
		///<param name="view" type="object">the view to remove from this views hiearchy</param>
		///<return type="void"/>
		return ;
	}, 	
	removeEventListener : function(name, callback)
	{
		///<summary>remove a previously added event listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function passed in addEventListener</param>
		///<return type="void"/>
		return ;
	}, 	
	show : function()
	{
		///<summary>make the view visible</summary>
		///<return type="void"/>
		return ;
	}, 	
	start : function()
	{
		///<summary>start the image animation. this method only works if you set multiple images</summary>
		///<return type="void"/>
		return ;
	}, 	
	stop : function()
	{
		///<summary>stop a started animation and reset the index to the first image</summary>
		///<return type="void"/>
		return ;
	}, 	
	toBlob : function()
	{
		///<summary>return the image as a Blob object</summary>
		///<return type="void"/>
		return ;
	}, 	
	toImage : function(f)
	{
		///<summary>return a Blob image of the rendered view</summary>
		///<param name="f" type="function">function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately</param>
		///<return type="object"/>
		return {};
	}
};

Titanium.UI.Label = {
	anchorPoint :{},
	animatedCenterPoint :{},
	autoLink :0,
	backgroundColor :'',
	backgroundDisabledColor :'',
	backgroundDisabledImage :'',
	backgroundFocusedColor :'',
	backgroundFocusedImage :'',
	backgroundGradient :{},
	backgroundImage :'',
	backgroundLeftCap :0.0,
	backgroundPaddingBottom :0,
	backgroundPaddingLeft :0,
	backgroundPaddingRight :0,
	backgroundPaddingTop :0,
	backgroundSelectedColor :'',
	backgroundSelectedImage :'',
	backgroundTopCap :0.0,
	borderColor :'',
	borderRadius :0.0,
	borderWidth :0.0,
	bottom :'',
	center :{},
	color :'',
	ellipsize :true,
	focusable :true,
	font :{},
	fontFamily :'',
	fontSize :'',
	fontStyle :'',
	fontWeight :'',
	height :'',
	highlightedColor :'',
	html :'',
	left :'',
	minimumFontSize :0,
	opacity :0.0,
	right :'',
	shadowColor :'',
	shadowOffset :{},
	size :{},
	softKeyboardOnFocus :0,
	text :'',
	textAlign :'',
	textid :'',
	top :'',
	touchEnabled :true,
	transform :{},
	visible :true,
	width :'',
	wordWrap :true,
	zIndex :0,
	events : {'click' : 'click','dblclick' : 'dblclick','doubletap' : 'doubletap','singletap' : 'singletap','swipe' : 'swipe','touchcancel' : 'touchcancel','touchend' : 'touchend','touchmove' : 'touchmove','touchstart' : 'touchstart','twofingertap' : 'twofingertap'},
	
	add : function(view)
	{
		///<summary>add a child to the view hierarchy</summary>
		///<param name="view" type="object">the view to add to this views hiearchy</param>
		///<return type="void"/>
		return ;
	}, 	
	addEventListener : function(name, callback)
	{
		///<summary>add an event listener for the instance to receive view triggered events</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function to invoke when the event is fired</param>
		///<return type="void"/>
		return ;
	}, 	
	animate : function(obj, callback)
	{
		///<summary>animate the view</summary>
		///<param name="obj" type="object">either a dictionary of animation properties or an Animation object</param>
		///<param name="callback" type="function">function to be invoked upon completion of the animation</param>
		///<return type="void"/>
		return ;
	}, 	
	fireEvent : function(name, event)
	{
		///<summary>fire a synthesized event to the views listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="event" type="object">event object</param>
		///<return type="void"/>
		return ;
	}, 	
	hide : function()
	{
		///<summary>hide the view</summary>
		///<return type="void"/>
		return ;
	}, 	
	remove : function(view)
	{
		///<summary>remove a previously add view from the view hiearchy</summary>
		///<param name="view" type="object">the view to remove from this views hiearchy</param>
		///<return type="void"/>
		return ;
	}, 	
	removeEventListener : function(name, callback)
	{
		///<summary>remove a previously added event listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function passed in addEventListener</param>
		///<return type="void"/>
		return ;
	}, 	
	show : function()
	{
		///<summary>make the view visible</summary>
		///<return type="void"/>
		return ;
	}, 	
	toImage : function(f)
	{
		///<summary>return a Blob image of the rendered view</summary>
		///<param name="f" type="function">function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately</param>
		///<return type="object"/>
		return {};
	}
};

Titanium.UI.OptionDialog = {
	androidView :{},
	cancel :0,
	destructive :0,
	options :[],
	title :'',
	titleid :'',
	events : {'click' : 'click'},
	
	show : function()
	{
		///<summary>cause the dialog to become visible</summary>
		///<return type="void"/>
		return ;
	}
};

Titanium.UI.Picker = {
	columns :[],
	countDownDuration :0.0,
	locale :'',
	minDate :new Date(),
	minuteInterval :0,
	selectionIndicator :true,
	type :0,
	useSpinner :true,
	value :new Date(),
	visibleItems :0,
	events : {'change' : 'change'},
	
	add : function(data)
	{
		///<summary>add an array of rows, a single row or a column to the picker</summary>
		///<param name="data" type="array,object">add an array of rows, a single row or a column to the picker</param>
		///<return type="void"/>
		return ;
	}, 	
	addEventListener : function(name, callback)
	{
		///<summary>add an event listener for the instance to receive view triggered events</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function to invoke when the event is fired</param>
		///<return type="void"/>
		return ;
	}, 	
	fireEvent : function(name, event)
	{
		///<summary>fire a synthesized event to the views listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="event" type="object">event object</param>
		///<return type="void"/>
		return ;
	}, 	
	getSelectedRow : function(index)
	{
		///<summary>get the selected row object for column</summary>
		///<param name="index" type="int">for the column index, return the row object or nil if not found</param>
		///<return type="object"/>
		return {};
	}, 	
	reloadColumn : function(column)
	{
		///<summary>causes the picker to reload the values from the new column.</summary>
		///<param name="column" type="object">new column to load</param>
		///<return type="void"/>
		return ;
	}, 	
	removeEventListener : function(name, callback)
	{
		///<summary>remove a previously added event listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function passed in addEventListener</param>
		///<return type="void"/>
		return ;
	}, 	
	setSelectedRow : function(column, row, animated)
	{
		///<summary>set the column's row to the selected state</summary>
		///<param name="column" type="int">the column index</param>
		///<param name="row" type="int">the row index</param>
		///<param name="animated" type="boolean">boolean to indicate if the selection should be animated (default) (optional)</param>
		///<return type="void"/>
		return ;
	}
};

Titanium.UI.PickerColumn = {
	anchorPoint :{},
	animatedCenterPoint :{},
	backgroundColor :'',
	backgroundDisabledColor :'',
	backgroundDisabledImage :'',
	backgroundFocusedColor :'',
	backgroundFocusedImage :'',
	backgroundGradient :{},
	backgroundImage :'',
	backgroundLeftCap :0.0,
	backgroundSelectedColor :'',
	backgroundSelectedImage :'',
	backgroundTopCap :0.0,
	borderColor :'',
	borderRadius :0.0,
	borderWidth :0.0,
	bottom :'',
	center :{},
	focusable :true,
	fontFamily :'',
	fontSize :'',
	fontStyle :'',
	fontWeight :'',
	height :'',
	left :'',
	opacity :0.0,
	right :'',
	rowCount :0,
	rows :[],
	size :{},
	softKeyboardOnFocus :0,
	top :'',
	touchEnabled :true,
	transform :{},
	visible :true,
	width :'',
	zIndex :0,
	events : {'click' : 'click','dblclick' : 'dblclick','doubletap' : 'doubletap','singletap' : 'singletap','swipe' : 'swipe','touchcancel' : 'touchcancel','touchend' : 'touchend','touchmove' : 'touchmove','touchstart' : 'touchstart','twofingertap' : 'twofingertap'},
	
	add : function(view)
	{
		///<summary>add a child to the view hierarchy</summary>
		///<param name="view" type="object">the view to add to this views hiearchy</param>
		///<return type="void"/>
		return ;
	}, 	
	addEventListener : function(name, callback)
	{
		///<summary>add an event listener for the instance to receive view triggered events</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function to invoke when the event is fired</param>
		///<return type="void"/>
		return ;
	}, 	
	addRow : function()
	{
		///<summary>a Titanium.UI.PickerRow object to add to the column</summary>
		///<return type="void"/>
		return ;
	}, 	
	animate : function(obj, callback)
	{
		///<summary>animate the view</summary>
		///<param name="obj" type="object">either a dictionary of animation properties or an Animation object</param>
		///<param name="callback" type="function">function to be invoked upon completion of the animation</param>
		///<return type="void"/>
		return ;
	}, 	
	fireEvent : function(name, event)
	{
		///<summary>fire a synthesized event to the views listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="event" type="object">event object</param>
		///<return type="void"/>
		return ;
	}, 	
	hide : function()
	{
		///<summary>hide the view</summary>
		///<return type="void"/>
		return ;
	}, 	
	remove : function(view)
	{
		///<summary>remove a previously add view from the view hiearchy</summary>
		///<param name="view" type="object">the view to remove from this views hiearchy</param>
		///<return type="void"/>
		return ;
	}, 	
	removeEventListener : function(name, callback)
	{
		///<summary>remove a previously added event listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function passed in addEventListener</param>
		///<return type="void"/>
		return ;
	}, 	
	removeRow : function()
	{
		///<summary>a Titanium.UI.PickerRow object to remove</summary>
		///<return type="void"/>
		return ;
	}, 	
	show : function()
	{
		///<summary>make the view visible</summary>
		///<return type="void"/>
		return ;
	}, 	
	toImage : function(f)
	{
		///<summary>return a Blob image of the rendered view</summary>
		///<param name="f" type="function">function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately</param>
		///<return type="object"/>
		return {};
	}
};

Titanium.UI.PickerRow = {
	anchorPoint :{},
	animatedCenterPoint :{},
	backgroundColor :'',
	backgroundDisabledColor :'',
	backgroundDisabledImage :'',
	backgroundFocusedColor :'',
	backgroundFocusedImage :'',
	backgroundGradient :{},
	backgroundImage :'',
	backgroundLeftCap :0.0,
	backgroundSelectedColor :'',
	backgroundSelectedImage :'',
	backgroundTopCap :0.0,
	borderColor :'',
	borderRadius :0.0,
	borderWidth :0.0,
	bottom :'',
	center :{},
	focusable :true,
	fontFamily :'',
	fontSize :'',
	fontStyle :'',
	fontWeight :'',
	fontSize :0,
	height :'',
	left :'',
	opacity :0.0,
	right :'',
	selected :true,
	size :{},
	softKeyboardOnFocus :0,
	title :'',
	top :'',
	touchEnabled :true,
	transform :{},
	visible :true,
	width :'',
	zIndex :0,
	events : {'click' : 'click','dblclick' : 'dblclick','doubletap' : 'doubletap','singletap' : 'singletap','swipe' : 'swipe','touchcancel' : 'touchcancel','touchend' : 'touchend','touchmove' : 'touchmove','touchstart' : 'touchstart','twofingertap' : 'twofingertap'},
	
	add : function(view)
	{
		///<summary>add a child to the view hierarchy</summary>
		///<param name="view" type="object">the view to add to this views hiearchy</param>
		///<return type="void"/>
		return ;
	}, 	
	addEventListener : function(name, callback)
	{
		///<summary>add an event listener for the instance to receive view triggered events</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function to invoke when the event is fired</param>
		///<return type="void"/>
		return ;
	}, 	
	animate : function(obj, callback)
	{
		///<summary>animate the view</summary>
		///<param name="obj" type="object">either a dictionary of animation properties or an Animation object</param>
		///<param name="callback" type="function">function to be invoked upon completion of the animation</param>
		///<return type="void"/>
		return ;
	}, 	
	fireEvent : function(name, event)
	{
		///<summary>fire a synthesized event to the views listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="event" type="object">event object</param>
		///<return type="void"/>
		return ;
	}, 	
	hide : function()
	{
		///<summary>hide the view</summary>
		///<return type="void"/>
		return ;
	}, 	
	remove : function(view)
	{
		///<summary>remove a previously add view from the view hiearchy</summary>
		///<param name="view" type="object">the view to remove from this views hiearchy</param>
		///<return type="void"/>
		return ;
	}, 	
	removeEventListener : function(name, callback)
	{
		///<summary>remove a previously added event listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function passed in addEventListener</param>
		///<return type="void"/>
		return ;
	}, 	
	show : function()
	{
		///<summary>make the view visible</summary>
		///<return type="void"/>
		return ;
	}, 	
	toImage : function(f)
	{
		///<summary>return a Blob image of the rendered view</summary>
		///<param name="f" type="function">function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately</param>
		///<return type="object"/>
		return {};
	}
};

Titanium.UI.ProgressBar = {
	color :'',
	font :{},
	max :0.0,
	message :'',
	min :0.0,
	style :0,
	value :0.0
};

Titanium.UI.ScrollView = {
	anchorPoint :{},
	animatedCenterPoint :{},
	backgroundColor :'',
	backgroundDisabledColor :'',
	backgroundDisabledImage :'',
	backgroundFocusedColor :'',
	backgroundFocusedImage :'',
	backgroundGradient :{},
	backgroundImage :'',
	backgroundLeftCap :0.0,
	backgroundSelectedColor :'',
	backgroundSelectedImage :'',
	backgroundTopCap :0.0,
	borderColor :'',
	borderRadius :0.0,
	borderWidth :0.0,
	bottom :'',
	canCancelEvents :true,
	center :{},
	contentHeight :0.0,
	contentOffset :{},
	contentWidth :0.0,
	disableBounce :true,
	focusable :true,
	fontFamily :'',
	fontSize :'',
	fontStyle :'',
	fontWeight :'',
	height :'',
	horizontalBounce :true,
	left :'',
	maxZoomScale :0.0,
	minZoomScale :0.0,
	opacity :0.0,
	right :'',
	scrollType :'',
	showHorizontalScrollIndicator :true,
	showVerticalScrollIndicator :true,
	size :{},
	softKeyboardOnFocus :0,
	top :'',
	touchEnabled :true,
	transform :{},
	verticalBounce :true,
	visible :true,
	width :'',
	zIndex :0,
	zoomScale :0.0,
	events : {'click' : 'click','dblclick' : 'dblclick','doubletap' : 'doubletap','scale' : 'scale','scroll' : 'scroll','singletap' : 'singletap','swipe' : 'swipe','touchcancel' : 'touchcancel','touchend' : 'touchend','touchmove' : 'touchmove','touchstart' : 'touchstart','twofingertap' : 'twofingertap'},
	
	add : function(view)
	{
		///<summary>add a child to the view hierarchy</summary>
		///<param name="view" type="object">the view to add to this views hiearchy</param>
		///<return type="void"/>
		return ;
	}, 	
	addEventListener : function(name, callback)
	{
		///<summary>add an event listener for the instance to receive view triggered events</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function to invoke when the event is fired</param>
		///<return type="void"/>
		return ;
	}, 	
	animate : function(obj, callback)
	{
		///<summary>animate the view</summary>
		///<param name="obj" type="object">either a dictionary of animation properties or an Animation object</param>
		///<param name="callback" type="function">function to be invoked upon completion of the animation</param>
		///<return type="void"/>
		return ;
	}, 	
	fireEvent : function(name, event)
	{
		///<summary>fire a synthesized event to the views listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="event" type="object">event object</param>
		///<return type="void"/>
		return ;
	}, 	
	hide : function()
	{
		///<summary>hide the view</summary>
		///<return type="void"/>
		return ;
	}, 	
	remove : function(view)
	{
		///<summary>remove a previously add view from the view hiearchy</summary>
		///<param name="view" type="object">the view to remove from this views hiearchy</param>
		///<return type="void"/>
		return ;
	}, 	
	removeEventListener : function(name, callback)
	{
		///<summary>remove a previously added event listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function passed in addEventListener</param>
		///<return type="void"/>
		return ;
	}, 	
	scrollTo : function(x, y)
	{
		///<summary>scrollTo a particular point</summary>
		///<param name="x" type="float">the x point within the view</param>
		///<param name="y" type="float">the y point within the view</param>
		///<return type="void"/>
		return ;
	}, 	
	show : function()
	{
		///<summary>make the view visible</summary>
		///<return type="void"/>
		return ;
	}, 	
	toImage : function(f)
	{
		///<summary>return a Blob image of the rendered view</summary>
		///<param name="f" type="function">function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately</param>
		///<return type="object"/>
		return {};
	}
};

Titanium.UI.ScrollableView = {
	anchorPoint :{},
	animatedCenterPoint :{},
	backgroundColor :'',
	backgroundDisabledColor :'',
	backgroundDisabledImage :'',
	backgroundFocusedColor :'',
	backgroundFocusedImage :'',
	backgroundGradient :{},
	backgroundImage :'',
	backgroundLeftCap :0.0,
	backgroundSelectedColor :'',
	backgroundSelectedImage :'',
	backgroundTopCap :0.0,
	borderColor :'',
	borderRadius :0.0,
	borderWidth :0.0,
	bottom :'',
	center :{},
	currentPage :0,
	focusable :true,
	fontFamily :'',
	fontSize :'',
	fontStyle :'',
	fontWeight :'',
	height :'',
	left :'',
	maxZoomScale :0.0,
	minZoomScale :0.0,
	opacity :0.0,
	pagingControlColor :'',
	pagingControlHeight :0.0,
	right :'',
	showPagingControl :true,
	size :{},
	softKeyboardOnFocus :0,
	top :'',
	touchEnabled :true,
	transform :{},
	views :[],
	visible :true,
	width :'',
	zIndex :0,
	events : {'click' : 'click','dblclick' : 'dblclick','doubletap' : 'doubletap','scroll' : 'scroll','singletap' : 'singletap','swipe' : 'swipe','touchcancel' : 'touchcancel','touchend' : 'touchend','touchmove' : 'touchmove','touchstart' : 'touchstart','twofingertap' : 'twofingertap'},
	
	add : function(view)
	{
		///<summary>add a child to the view hierarchy</summary>
		///<param name="view" type="object">the view to add to this views hiearchy</param>
		///<return type="void"/>
		return ;
	}, 	
	addEventListener : function(name, callback)
	{
		///<summary>add an event listener for the instance to receive view triggered events</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function to invoke when the event is fired</param>
		///<return type="void"/>
		return ;
	}, 	
	addView : function(view)
	{
		///<summary>add a new view to the Scrollable View</summary>
		///<param name="view" type="object">the view to add</param>
		///<return type="void"/>
		return ;
	}, 	
	animate : function(obj, callback)
	{
		///<summary>animate the view</summary>
		///<param name="obj" type="object">either a dictionary of animation properties or an Animation object</param>
		///<param name="callback" type="function">function to be invoked upon completion of the animation</param>
		///<return type="void"/>
		return ;
	}, 	
	fireEvent : function(name, event)
	{
		///<summary>fire a synthesized event to the views listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="event" type="object">event object</param>
		///<return type="void"/>
		return ;
	}, 	
	hide : function()
	{
		///<summary>hide the view</summary>
		///<return type="void"/>
		return ;
	}, 	
	remove : function(view)
	{
		///<summary>remove a previously add view from the view hiearchy</summary>
		///<param name="view" type="object">the view to remove from this views hiearchy</param>
		///<return type="void"/>
		return ;
	}, 	
	removeEventListener : function(name, callback)
	{
		///<summary>remove a previously added event listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function passed in addEventListener</param>
		///<return type="void"/>
		return ;
	}, 	
	removeView : function(view)
	{
		///<summary>remove an existing view from the Scrollable View</summary>
		///<param name="view" type="object">the view to remove</param>
		///<return type="void"/>
		return ;
	}, 	
	scrollToView : function(view)
	{
		///<summary>scroll to a specific view</summary>
		///<param name="view" type="int,object">either an integer index or the view object to bring into view as the currentPage</param>
		///<return type="void"/>
		return ;
	}, 	
	show : function()
	{
		///<summary>make the view visible</summary>
		///<return type="void"/>
		return ;
	}, 	
	toImage : function(f)
	{
		///<summary>return a Blob image of the rendered view</summary>
		///<param name="f" type="function">function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately</param>
		///<return type="object"/>
		return {};
	}
};

Titanium.UI.SearchBar = {
	anchorPoint :{},
	animatedCenterPoint :{},
	autocapitalization :true,
	autocorrect :true,
	backgroundColor :'',
	backgroundDisabledColor :'',
	backgroundDisabledImage :'',
	backgroundFocusedColor :'',
	backgroundFocusedImage :'',
	backgroundGradient :{},
	backgroundImage :'',
	backgroundLeftCap :0.0,
	backgroundSelectedColor :'',
	backgroundSelectedImage :'',
	backgroundTopCap :0.0,
	barColor :'',
	borderColor :'',
	borderRadius :0.0,
	borderWidth :0.0,
	bottom :'',
	center :{},
	focusable :true,
	fontFamily :'',
	fontSize :'',
	fontStyle :'',
	fontWeight :'',
	height :'',
	hintText :'',
	hinttextid :'',
	keyboardType :0,
	left :'',
	opacity :0.0,
	prompt :'',
	promptid :'',
	right :'',
	showCancel :true,
	size :{},
	softKeyboardOnFocus :0,
	top :'',
	touchEnabled :true,
	transform :{},
	value :'',
	visible :true,
	width :'',
	zIndex :0,
	events : {'blur' : 'blur','cancel' : 'cancel','change' : 'change','click' : 'click','dblclick' : 'dblclick','doubletap' : 'doubletap','focus' : 'focus','return' : 'return','singletap' : 'singletap','swipe' : 'swipe','touchcancel' : 'touchcancel','touchend' : 'touchend','touchmove' : 'touchmove','touchstart' : 'touchstart','twofingertap' : 'twofingertap'},
	
	add : function(view)
	{
		///<summary>add a child to the view hierarchy</summary>
		///<param name="view" type="object">the view to add to this views hiearchy</param>
		///<return type="void"/>
		return ;
	}, 	
	addEventListener : function(name, callback)
	{
		///<summary>add an event listener for the instance to receive view triggered events</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function to invoke when the event is fired</param>
		///<return type="void"/>
		return ;
	}, 	
	animate : function(obj, callback)
	{
		///<summary>animate the view</summary>
		///<param name="obj" type="object">either a dictionary of animation properties or an Animation object</param>
		///<param name="callback" type="function">function to be invoked upon completion of the animation</param>
		///<return type="void"/>
		return ;
	}, 	
	blur : function()
	{
		///<summary>called to force the search bar to lose focus</summary>
		///<return type="void"/>
		return ;
	}, 	
	fireEvent : function(name, event)
	{
		///<summary>fire a synthesized event to the views listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="event" type="object">event object</param>
		///<return type="void"/>
		return ;
	}, 	
	focus : function()
	{
		///<summary>called to force the search bar to focus</summary>
		///<return type="void"/>
		return ;
	}, 	
	hide : function()
	{
		///<summary>hide the view</summary>
		///<return type="void"/>
		return ;
	}, 	
	remove : function(view)
	{
		///<summary>remove a previously add view from the view hiearchy</summary>
		///<param name="view" type="object">the view to remove from this views hiearchy</param>
		///<return type="void"/>
		return ;
	}, 	
	removeEventListener : function(name, callback)
	{
		///<summary>remove a previously added event listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function passed in addEventListener</param>
		///<return type="void"/>
		return ;
	}, 	
	show : function()
	{
		///<summary>make the view visible</summary>
		///<return type="void"/>
		return ;
	}, 	
	toImage : function(f)
	{
		///<summary>return a Blob image of the rendered view</summary>
		///<param name="f" type="function">function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately</param>
		///<return type="object"/>
		return {};
	}
};

Titanium.UI.Slider = {
	anchorPoint :{},
	animatedCenterPoint :{},
	backgroundColor :'',
	backgroundDisabledColor :'',
	backgroundDisabledImage :'',
	backgroundFocusedColor :'',
	backgroundFocusedImage :'',
	backgroundGradient :{},
	backgroundImage :'',
	backgroundLeftCap :0.0,
	backgroundSelectedColor :'',
	backgroundSelectedImage :'',
	backgroundTopCap :0.0,
	borderColor :'',
	borderRadius :0.0,
	borderWidth :0.0,
	bottom :'',
	center :{},
	disabledLeftTrackImage :'',
	disabledRightTrackImage :'',
	disabledThumbImage :'',
	enabled :true,
	focusable :true,
	fontFamily :'',
	fontSize :'',
	fontStyle :'',
	fontWeight :'',
	height :'',
	highlightedLeftTrackImage :'',
	highlightedRightTrackImage :'',
	highlightedThumbImage :'',
	left :'',
	leftTrackImage :'',
	max :0.0,
	maxRange :0,
	min :0.0,
	minRange :0,
	opacity :0.0,
	right :'',
	rightTrackImage :'',
	selectedLeftTrackImage :'',
	selectedRightTrackImage :'',
	selectedThumbImage :'',
	size :{},
	softKeyboardOnFocus :0,
	thumbImage :'',
	top :'',
	touchEnabled :true,
	transform :{},
	value :'',
	visible :true,
	width :'',
	zIndex :0,
	events : {'change' : 'change','click' : 'click','dblclick' : 'dblclick','doubletap' : 'doubletap','singletap' : 'singletap','swipe' : 'swipe','touchcancel' : 'touchcancel','touchend' : 'touchend','touchmove' : 'touchmove','touchstart' : 'touchstart','twofingertap' : 'twofingertap'},
	
	add : function(view)
	{
		///<summary>add a child to the view hierarchy</summary>
		///<param name="view" type="object">the view to add to this views hiearchy</param>
		///<return type="void"/>
		return ;
	}, 	
	addEventListener : function(name, callback)
	{
		///<summary>add an event listener for the instance to receive view triggered events</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function to invoke when the event is fired</param>
		///<return type="void"/>
		return ;
	}, 	
	animate : function(obj, callback)
	{
		///<summary>animate the view</summary>
		///<param name="obj" type="object">either a dictionary of animation properties or an Animation object</param>
		///<param name="callback" type="function">function to be invoked upon completion of the animation</param>
		///<return type="void"/>
		return ;
	}, 	
	fireEvent : function(name, event)
	{
		///<summary>fire a synthesized event to the views listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="event" type="object">event object</param>
		///<return type="void"/>
		return ;
	}, 	
	hide : function()
	{
		///<summary>hide the view</summary>
		///<return type="void"/>
		return ;
	}, 	
	remove : function(view)
	{
		///<summary>remove a previously add view from the view hiearchy</summary>
		///<param name="view" type="object">the view to remove from this views hiearchy</param>
		///<return type="void"/>
		return ;
	}, 	
	removeEventListener : function(name, callback)
	{
		///<summary>remove a previously added event listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function passed in addEventListener</param>
		///<return type="void"/>
		return ;
	}, 	
	show : function()
	{
		///<summary>make the view visible</summary>
		///<return type="void"/>
		return ;
	}, 	
	toImage : function(f)
	{
		///<summary>return a Blob image of the rendered view</summary>
		///<param name="f" type="function">function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately</param>
		///<return type="object"/>
		return {};
	}
};

Titanium.UI.Switch = {
	anchorPoint :{},
	animatedCenterPoint :{},
	backgroundColor :'',
	backgroundDisabledColor :'',
	backgroundDisabledImage :'',
	backgroundFocusedColor :'',
	backgroundFocusedImage :'',
	backgroundGradient :{},
	backgroundImage :'',
	backgroundLeftCap :0.0,
	backgroundSelectedColor :'',
	backgroundSelectedImage :'',
	backgroundTopCap :0.0,
	borderColor :'',
	borderRadius :0.0,
	borderWidth :0.0,
	bottom :'',
	center :{},
	enabled :true,
	focusable :true,
	fontFamily :'',
	fontSize :'',
	fontStyle :'',
	fontWeight :'',
	height :'',
	left :'',
	opacity :0.0,
	right :'',
	size :{},
	softKeyboardOnFocus :0,
	style :0,
	title :'',
	titleOff :'',
	titleOn :'',
	top :'',
	touchEnabled :true,
	transform :{},
	value :true,
	visible :true,
	width :'',
	zIndex :0,
	events : {'change' : 'change','click' : 'click','dblclick' : 'dblclick','doubletap' : 'doubletap','singletap' : 'singletap','swipe' : 'swipe','touchcancel' : 'touchcancel','touchend' : 'touchend','touchmove' : 'touchmove','touchstart' : 'touchstart','twofingertap' : 'twofingertap'},
	
	add : function(view)
	{
		///<summary>add a child to the view hierarchy</summary>
		///<param name="view" type="object">the view to add to this views hiearchy</param>
		///<return type="void"/>
		return ;
	}, 	
	addEventListener : function(name, callback)
	{
		///<summary>add an event listener for the instance to receive view triggered events</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function to invoke when the event is fired</param>
		///<return type="void"/>
		return ;
	}, 	
	animate : function(obj, callback)
	{
		///<summary>animate the view</summary>
		///<param name="obj" type="object">either a dictionary of animation properties or an Animation object</param>
		///<param name="callback" type="function">function to be invoked upon completion of the animation</param>
		///<return type="void"/>
		return ;
	}, 	
	fireEvent : function(name, event)
	{
		///<summary>fire a synthesized event to the views listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="event" type="object">event object</param>
		///<return type="void"/>
		return ;
	}, 	
	hide : function()
	{
		///<summary>hide the view</summary>
		///<return type="void"/>
		return ;
	}, 	
	remove : function(view)
	{
		///<summary>remove a previously add view from the view hiearchy</summary>
		///<param name="view" type="object">the view to remove from this views hiearchy</param>
		///<return type="void"/>
		return ;
	}, 	
	removeEventListener : function(name, callback)
	{
		///<summary>remove a previously added event listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function passed in addEventListener</param>
		///<return type="void"/>
		return ;
	}, 	
	show : function()
	{
		///<summary>make the view visible</summary>
		///<return type="void"/>
		return ;
	}, 	
	toImage : function(f)
	{
		///<summary>return a Blob image of the rendered view</summary>
		///<param name="f" type="function">function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately</param>
		///<return type="object"/>
		return {};
	}
};

Titanium.UI.Tab = {
	anchorPoint :{},
	animatedCenterPoint :{},
	backgroundColor :'',
	backgroundDisabledColor :'',
	backgroundDisabledImage :'',
	backgroundFocusedColor :'',
	backgroundFocusedImage :'',
	backgroundGradient :{},
	backgroundImage :'',
	backgroundLeftCap :0.0,
	backgroundSelectedColor :'',
	backgroundSelectedImage :'',
	backgroundTopCap :0.0,
	badge :'',
	borderColor :'',
	borderRadius :0.0,
	borderWidth :0.0,
	bottom :'',
	center :{},
	focusable :true,
	fontFamily :'',
	fontSize :'',
	fontStyle :'',
	fontWeight :'',
	height :'',
	icon :'',
	left :'',
	opacity :0.0,
	right :'',
	size :{},
	softKeyboardOnFocus :0,
	title :'',
	top :'',
	touchEnabled :true,
	transform :{},
	visible :true,
	width :'',
	window :{},
	zIndex :0,
	events : {'click' : 'click','dblclick' : 'dblclick','doubletap' : 'doubletap','singletap' : 'singletap','swipe' : 'swipe','touchcancel' : 'touchcancel','touchend' : 'touchend','touchmove' : 'touchmove','touchstart' : 'touchstart','twofingertap' : 'twofingertap'},
	
	add : function(view)
	{
		///<summary>add a child to the view hierarchy</summary>
		///<param name="view" type="object">the view to add to this views hiearchy</param>
		///<return type="void"/>
		return ;
	}, 	
	addEventListener : function(name, callback)
	{
		///<summary>add an event listener for the instance to receive view triggered events</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function to invoke when the event is fired</param>
		///<return type="void"/>
		return ;
	}, 	
	animate : function(obj, callback)
	{
		///<summary>animate the view</summary>
		///<param name="obj" type="object">either a dictionary of animation properties or an Animation object</param>
		///<param name="callback" type="function">function to be invoked upon completion of the animation</param>
		///<return type="void"/>
		return ;
	}, 	
	fireEvent : function(name, event)
	{
		///<summary>fire a synthesized event to the views listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="event" type="object">event object</param>
		///<return type="void"/>
		return ;
	}, 	
	hide : function()
	{
		///<summary>hide the view</summary>
		///<return type="void"/>
		return ;
	}, 	
	remove : function(view)
	{
		///<summary>remove a previously add view from the view hiearchy</summary>
		///<param name="view" type="object">the view to remove from this views hiearchy</param>
		///<return type="void"/>
		return ;
	}, 	
	removeEventListener : function(name, callback)
	{
		///<summary>remove a previously added event listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function passed in addEventListener</param>
		///<return type="void"/>
		return ;
	}, 	
	show : function()
	{
		///<summary>make the view visible</summary>
		///<return type="void"/>
		return ;
	}, 	
	toImage : function(f)
	{
		///<summary>return a Blob image of the rendered view</summary>
		///<param name="f" type="function">function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately</param>
		///<return type="object"/>
		return {};
	}
};

Titanium.UI.TabGroup = {
	activeTab :{},
	allowUserCustomization :true,
	anchorPoint :{},
	animatedCenterPoint :{},
	backgroundColor :'',
	backgroundDisabledColor :'',
	backgroundDisabledImage :'',
	backgroundFocusedColor :'',
	backgroundFocusedImage :'',
	backgroundGradient :{},
	backgroundImage :'',
	backgroundLeftCap :0.0,
	backgroundSelectedColor :'',
	backgroundSelectedImage :'',
	backgroundTopCap :0.0,
	barColor :'',
	borderColor :'',
	borderRadius :0.0,
	borderWidth :0.0,
	bottom :'',
	center :{},
	editButtonTitle :'',
	focusable :true,
	fontFamily :'',
	fontSize :'',
	fontStyle :'',
	fontWeight :'',
	height :'',
	left :'',
	opacity :0.0,
	right :'',
	size :{},
	softKeyboardOnFocus :0,
	tabs :[],
	top :'',
	touchEnabled :true,
	transform :{},
	visible :true,
	width :'',
	zIndex :0,
	events : {'blur' : 'blur','click' : 'click','close' : 'close','dblclick' : 'dblclick','doubletap' : 'doubletap','focus' : 'focus','open' : 'open','singletap' : 'singletap','swipe' : 'swipe','touchcancel' : 'touchcancel','touchend' : 'touchend','touchmove' : 'touchmove','touchstart' : 'touchstart','twofingertap' : 'twofingertap'},
	
	add : function(view)
	{
		///<summary>add a child to the view hierarchy</summary>
		///<param name="view" type="object">the view to add to this views hiearchy</param>
		///<return type="void"/>
		return ;
	}, 	
	addEventListener : function(name, callback)
	{
		///<summary>add an event listener for the instance to receive view triggered events</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function to invoke when the event is fired</param>
		///<return type="void"/>
		return ;
	}, 	
	addTab : function()
	{
		///<summary>add a tab to the tab group</summary>
		///<return type="void"/>
		return ;
	}, 	
	animate : function(obj, callback)
	{
		///<summary>animate the view</summary>
		///<param name="obj" type="object">either a dictionary of animation properties or an Animation object</param>
		///<param name="callback" type="function">function to be invoked upon completion of the animation</param>
		///<return type="void"/>
		return ;
	}, 	
	close : function()
	{
		///<summary>close the tab group and remove it from the UI</summary>
		///<return type="void"/>
		return ;
	}, 	
	fireEvent : function(name, event)
	{
		///<summary>fire a synthesized event to the views listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="event" type="object">event object</param>
		///<return type="void"/>
		return ;
	}, 	
	hide : function()
	{
		///<summary>hide the view</summary>
		///<return type="void"/>
		return ;
	}, 	
	open : function()
	{
		///<summary>open the tab group and make it visible</summary>
		///<return type="void"/>
		return ;
	}, 	
	remove : function(view)
	{
		///<summary>remove a previously add view from the view hiearchy</summary>
		///<param name="view" type="object">the view to remove from this views hiearchy</param>
		///<return type="void"/>
		return ;
	}, 	
	removeEventListener : function(name, callback)
	{
		///<summary>remove a previously added event listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function passed in addEventListener</param>
		///<return type="void"/>
		return ;
	}, 	
	removeTab : function()
	{
		///<summary>remove a tab from the tab group</summary>
		///<return type="void"/>
		return ;
	}, 	
	setActiveTab : function(indexOrObject)
	{
		///<summary>select the currently active tab in a tab group</summary>
		///<param name="indexOrObject" type="object">an int representing the desired tab index or a reference to the tab object you'd like to switch to</param>
		///<return type="void"/>
		return ;
	}, 	
	show : function()
	{
		///<summary>make the view visible</summary>
		///<return type="void"/>
		return ;
	}, 	
	toImage : function(f)
	{
		///<summary>return a Blob image of the rendered view</summary>
		///<param name="f" type="function">function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately</param>
		///<return type="object"/>
		return {};
	}
};

Titanium.UI.TabbedBar = {
	anchorPoint :{},
	animatedCenterPoint :{},
	backgroundColor :'',
	backgroundDisabledColor :'',
	backgroundDisabledImage :'',
	backgroundFocusedColor :'',
	backgroundFocusedImage :'',
	backgroundGradient :{},
	backgroundImage :'',
	backgroundLeftCap :0.0,
	backgroundSelectedColor :'',
	backgroundSelectedImage :'',
	backgroundTopCap :0.0,
	borderColor :'',
	borderRadius :0.0,
	borderWidth :0.0,
	bottom :'',
	center :{},
	focusable :true,
	fontFamily :'',
	fontSize :'',
	fontStyle :'',
	fontWeight :'',
	height :'',
	index :0,
	labels :[],
	left :'',
	opacity :0.0,
	right :'',
	size :{},
	softKeyboardOnFocus :0,
	style :0,
	top :'',
	touchEnabled :true,
	transform :{},
	visible :true,
	width :'',
	zIndex :0,
	events : {'click' : 'click','dblclick' : 'dblclick','doubletap' : 'doubletap','singletap' : 'singletap','swipe' : 'swipe','touchcancel' : 'touchcancel','touchend' : 'touchend','touchmove' : 'touchmove','touchstart' : 'touchstart','twofingertap' : 'twofingertap'},
	
	add : function(view)
	{
		///<summary>add a child to the view hierarchy</summary>
		///<param name="view" type="object">the view to add to this views hiearchy</param>
		///<return type="void"/>
		return ;
	}, 	
	addEventListener : function(name, callback)
	{
		///<summary>add an event listener for the instance to receive view triggered events</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function to invoke when the event is fired</param>
		///<return type="void"/>
		return ;
	}, 	
	animate : function(obj, callback)
	{
		///<summary>animate the view</summary>
		///<param name="obj" type="object">either a dictionary of animation properties or an Animation object</param>
		///<param name="callback" type="function">function to be invoked upon completion of the animation</param>
		///<return type="void"/>
		return ;
	}, 	
	fireEvent : function(name, event)
	{
		///<summary>fire a synthesized event to the views listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="event" type="object">event object</param>
		///<return type="void"/>
		return ;
	}, 	
	hide : function()
	{
		///<summary>hide the view</summary>
		///<return type="void"/>
		return ;
	}, 	
	remove : function(view)
	{
		///<summary>remove a previously add view from the view hiearchy</summary>
		///<param name="view" type="object">the view to remove from this views hiearchy</param>
		///<return type="void"/>
		return ;
	}, 	
	removeEventListener : function(name, callback)
	{
		///<summary>remove a previously added event listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function passed in addEventListener</param>
		///<return type="void"/>
		return ;
	}, 	
	show : function()
	{
		///<summary>make the view visible</summary>
		///<return type="void"/>
		return ;
	}, 	
	toImage : function(f)
	{
		///<summary>return a Blob image of the rendered view</summary>
		///<param name="f" type="function">function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately</param>
		///<return type="object"/>
		return {};
	}
};

Titanium.UI.TableView = {
	allowsSelection :true,
	anchorPoint :{},
	animatedCenterPoint :{},
	backgroundColor :'',
	backgroundDisabledColor :'',
	backgroundDisabledImage :'',
	backgroundFocusedColor :'',
	backgroundFocusedImage :'',
	backgroundGradient :{},
	backgroundImage :'',
	backgroundLeftCap :0.0,
	backgroundSelectedColor :'',
	backgroundSelectedImage :'',
	backgroundTopCap :0.0,
	borderColor :'',
	borderRadius :0.0,
	borderWidth :0.0,
	bottom :'',
	center :{},
	data :[],
	editable :true,
	editing :true,
	filterAttribute :'',
	filterCaseInsensitive :true,
	focusable :true,
	fontFamily :'',
	fontSize :'',
	fontStyle :'',
	fontWeight :'',
	footerTitle :'',
	footerView :{},
	headerTitle :'',
	headerView :{},
	height :'',
	index :[],
	left :'',
	maxRowHeight :0.0,
	minRowHeight :0.0,
	moving :true,
	opacity :0.0,
	right :'',
	rowHeight :0.0,
	scrollable :true,
	search :{},
	searchHidden :true,
	separatorColor :'',
	separatorStyle :0,
	size :{},
	softKeyboardOnFocus :0,
	style :0,
	top :'',
	touchEnabled :true,
	transform :{},
	visible :true,
	width :'',
	zIndex :0,
	events : {'click' : 'click','dblclick' : 'dblclick','delete' : 'delete','doubletap' : 'doubletap','move' : 'move','scroll' : 'scroll','scrollEnd' : 'scrollEnd','singletap' : 'singletap','swipe' : 'swipe','touchcancel' : 'touchcancel','touchend' : 'touchend','touchmove' : 'touchmove','touchstart' : 'touchstart','twofingertap' : 'twofingertap'},
	
	add : function(view)
	{
		///<summary>add a child to the view hierarchy</summary>
		///<param name="view" type="object">the view to add to this views hiearchy</param>
		///<return type="void"/>
		return ;
	}, 	
	addEventListener : function(name, callback)
	{
		///<summary>add an event listener for the instance to receive view triggered events</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function to invoke when the event is fired</param>
		///<return type="void"/>
		return ;
	}, 	
	animate : function(obj, callback)
	{
		///<summary>animate the view</summary>
		///<param name="obj" type="object">either a dictionary of animation properties or an Animation object</param>
		///<param name="callback" type="function">function to be invoked upon completion of the animation</param>
		///<return type="void"/>
		return ;
	}, 	
	appendRow : function(row, properties)
	{
		///<summary>append a row to the table, optionally with animation</summary>
		///<param name="row" type="object">row to append</param>
		///<param name="properties" type="object">animation properties</param>
		///<return type="void"/>
		return ;
	}, 	
	deleteRow : function(row, properties)
	{
		///<summary>delete an existing row, optionally with animation</summary>
		///<param name="row" type="int">index of row to delete</param>
		///<param name="properties" type="object">animation properties</param>
		///<return type="void"/>
		return ;
	}, 	
	deselectRow : function(row)
	{
		///<summary>programmatically deselect a row</summary>
		///<param name="row" type="int">row index to deselect</param>
		///<return type="void"/>
		return ;
	}, 	
	fireEvent : function(name, event)
	{
		///<summary>fire a synthesized event to the views listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="event" type="object">event object</param>
		///<return type="void"/>
		return ;
	}, 	
	hide : function()
	{
		///<summary>hide the view</summary>
		///<return type="void"/>
		return ;
	}, 	
	insertRowAfter : function(index, row, properties)
	{
		///<summary>insert a row before another row, optionally with animation</summary>
		///<param name="index" type="int">index</param>
		///<param name="row" type="object">row to insert</param>
		///<param name="properties" type="object">animation properties</param>
		///<return type="void"/>
		return ;
	}, 	
	insertRowBefore : function(index, row, properties)
	{
		///<summary>insert a row after another row, optionally with animation</summary>
		///<param name="index" type="int">index</param>
		///<param name="row" type="object">row to insert</param>
		///<param name="properties" type="object">animation properties</param>
		///<return type="void"/>
		return ;
	}, 	
	remove : function(view)
	{
		///<summary>remove a previously add view from the view hiearchy</summary>
		///<param name="view" type="object">the view to remove from this views hiearchy</param>
		///<return type="void"/>
		return ;
	}, 	
	removeEventListener : function(name, callback)
	{
		///<summary>remove a previously added event listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function passed in addEventListener</param>
		///<return type="void"/>
		return ;
	}, 	
	scrollToIndex : function(index, properties)
	{
		///<summary>scroll to a specific row index and ensure that that row is on screen</summary>
		///<param name="index" type="int">index</param>
		///<param name="properties" type="object">animation properties. position property controls the position constant to use for position (on iPhone, use constants from Titanium.UI.iPhone.TableViewScrollPosition).</param>
		///<return type="void"/>
		return ;
	}, 	
	scrollToTop : function(top, properties)
	{
		///<summary>scroll the table to a specific top position where 0 is the topmost y position in the table view</summary>
		///<param name="top" type="float">y position</param>
		///<param name="properties" type="object">optional dictionary with the key animated (default, true) as boolean to indicate if the scroll should be animated or immediate</param>
		///<return type="void"/>
		return ;
	}, 	
	selectRow : function(row)
	{
		///<summary>programmatically select a row</summary>
		///<param name="row" type="int">row index to select</param>
		///<return type="void"/>
		return ;
	}, 	
	setData : function(data, properties)
	{
		///<summary>set the data in the table, optionally with animation</summary>
		///<param name="data" type="array">data array of rows either as objects or row objects</param>
		///<param name="properties" type="object">animation properties</param>
		///<return type="void"/>
		return ;
	}, 	
	show : function()
	{
		///<summary>make the view visible</summary>
		///<return type="void"/>
		return ;
	}, 	
	toImage : function(f)
	{
		///<summary>return a Blob image of the rendered view</summary>
		///<param name="f" type="function">function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately</param>
		///<return type="object"/>
		return {};
	}, 	
	updateRow : function(row, properties)
	{
		///<summary>update an existing row, optionally with animation</summary>
		///<param name="row" type="object">row data to update</param>
		///<param name="properties" type="object">animation properties</param>
		///<return type="void"/>
		return ;
	}
};

Titanium.UI.TableViewRow = {
	anchorPoint :{},
	animatedCenterPoint :{},
	backgroundColor :'',
	backgroundDisabledColor :'',
	backgroundDisabledImage :'',
	backgroundFocusedColor :'',
	backgroundFocusedImage :'',
	backgroundGradient :{},
	backgroundImage :'',
	backgroundLeftCap :0.0,
	backgroundSelectedColor :'',
	backgroundSelectedImage :'',
	backgroundTopCap :0.0,
	borderColor :'',
	borderRadius :0.0,
	borderWidth :0.0,
	bottom :'',
	center :{},
	className :'',
	color :'',
	focusable :true,
	fontFamily :'',
	fontSize :'',
	fontStyle :'',
	fontWeight :'',
	hasCheck :true,
	hasChild :true,
	hasDetail :true,
	height :0.0,
	indentionLevel :0,
	layout :'',
	left :'',
	leftImage :'',
	opacity :0.0,
	right :'',
	rightImage :'',
	selectedBackgroundColor :'',
	selectedBackgroundImage :'',
	selectedColor :'',
	selectionStyle :0,
	size :{},
	softKeyboardOnFocus :0,
	title :'',
	top :'',
	touchEnabled :true,
	transform :{},
	visible :true,
	width :'',
	zIndex :0,
	events : {'click' : 'click','dblclick' : 'dblclick','doubletap' : 'doubletap','singletap' : 'singletap','swipe' : 'swipe','touchcancel' : 'touchcancel','touchend' : 'touchend','touchmove' : 'touchmove','touchstart' : 'touchstart','twofingertap' : 'twofingertap'},
	
	add : function(view)
	{
		///<summary>add a child to the view hierarchy</summary>
		///<param name="view" type="object">the view to add to this views hiearchy</param>
		///<return type="void"/>
		return ;
	}, 	
	addEventListener : function(name, callback)
	{
		///<summary>add an event listener for the instance to receive view triggered events</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function to invoke when the event is fired</param>
		///<return type="void"/>
		return ;
	}, 	
	animate : function(obj, callback)
	{
		///<summary>animate the view</summary>
		///<param name="obj" type="object">either a dictionary of animation properties or an Animation object</param>
		///<param name="callback" type="function">function to be invoked upon completion of the animation</param>
		///<return type="void"/>
		return ;
	}, 	
	fireEvent : function(name, event)
	{
		///<summary>fire a synthesized event to the views listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="event" type="object">event object</param>
		///<return type="void"/>
		return ;
	}, 	
	hide : function()
	{
		///<summary>hide the view</summary>
		///<return type="void"/>
		return ;
	}, 	
	remove : function(view)
	{
		///<summary>remove a previously add view from the view hiearchy</summary>
		///<param name="view" type="object">the view to remove from this views hiearchy</param>
		///<return type="void"/>
		return ;
	}, 	
	removeEventListener : function(name, callback)
	{
		///<summary>remove a previously added event listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function passed in addEventListener</param>
		///<return type="void"/>
		return ;
	}, 	
	show : function()
	{
		///<summary>make the view visible</summary>
		///<return type="void"/>
		return ;
	}, 	
	toImage : function(f)
	{
		///<summary>return a Blob image of the rendered view</summary>
		///<param name="f" type="function">function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately</param>
		///<return type="object"/>
		return {};
	}
};

Titanium.UI.TableViewSection = {
	anchorPoint :{},
	animatedCenterPoint :{},
	backgroundColor :'',
	backgroundDisabledColor :'',
	backgroundDisabledImage :'',
	backgroundFocusedColor :'',
	backgroundFocusedImage :'',
	backgroundGradient :{},
	backgroundImage :'',
	backgroundLeftCap :0.0,
	backgroundSelectedColor :'',
	backgroundSelectedImage :'',
	backgroundTopCap :0.0,
	borderColor :'',
	borderRadius :0.0,
	borderWidth :0.0,
	bottom :'',
	center :{},
	focusable :true,
	fontFamily :'',
	fontSize :'',
	fontStyle :'',
	fontWeight :'',
	footerTitle :'',
	footerView :{},
	headerTitle :'',
	headerView :{},
	height :'',
	left :'',
	opacity :0.0,
	right :'',
	rowCount :0,
	size :{},
	softKeyboardOnFocus :0,
	top :'',
	touchEnabled :true,
	transform :{},
	visible :true,
	width :'',
	zIndex :0,
	events : {'click' : 'click','dblclick' : 'dblclick','doubletap' : 'doubletap','singletap' : 'singletap','swipe' : 'swipe','touchcancel' : 'touchcancel','touchend' : 'touchend','touchmove' : 'touchmove','touchstart' : 'touchstart','twofingertap' : 'twofingertap'},
	
	add : function(view, row)
	{
		///<summary>add a row to the section</summary>
		///<param name="view" type="object">the view to add to this views hiearchy</param>
		///<param name="row" type="object">the row object to add to the section</param>
		///<return type="void"/>
		return ;
	}, 	
	addEventListener : function(name, callback)
	{
		///<summary>add an event listener for the instance to receive view triggered events</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function to invoke when the event is fired</param>
		///<return type="void"/>
		return ;
	}, 	
	animate : function(obj, callback)
	{
		///<summary>animate the view</summary>
		///<param name="obj" type="object">either a dictionary of animation properties or an Animation object</param>
		///<param name="callback" type="function">function to be invoked upon completion of the animation</param>
		///<return type="void"/>
		return ;
	}, 	
	fireEvent : function(name, event)
	{
		///<summary>fire a synthesized event to the views listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="event" type="object">event object</param>
		///<return type="void"/>
		return ;
	}, 	
	hide : function()
	{
		///<summary>hide the view</summary>
		///<return type="void"/>
		return ;
	}, 	
	remove : function(view, row)
	{
		///<summary>remove a remove from the section</summary>
		///<param name="view" type="object">the view to remove from this views hiearchy</param>
		///<param name="row" type="object">the row object to remove from the section</param>
		///<return type="void"/>
		return ;
	}, 	
	removeEventListener : function(name, callback)
	{
		///<summary>remove a previously added event listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function passed in addEventListener</param>
		///<return type="void"/>
		return ;
	}, 	
	show : function()
	{
		///<summary>make the view visible</summary>
		///<return type="void"/>
		return ;
	}, 	
	toImage : function(f)
	{
		///<summary>return a Blob image of the rendered view</summary>
		///<param name="f" type="function">function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately</param>
		///<return type="object"/>
		return {};
	}
};

Titanium.UI.TextArea = {
	anchorPoint :{},
	animatedCenterPoint :{},
	backgroundColor :'',
	backgroundDisabledColor :'',
	backgroundDisabledImage :'',
	backgroundFocusedColor :'',
	backgroundFocusedImage :'',
	backgroundGradient :{},
	backgroundImage :'',
	backgroundLeftCap :0.0,
	backgroundSelectedColor :'',
	backgroundSelectedImage :'',
	backgroundTopCap :0.0,
	borderColor :'',
	borderRadius :0.0,
	borderWidth :0.0,
	bottom :'',
	center :{},
	editable :true,
	enabled :true,
	focusable :true,
	fontFamily :'',
	fontSize :'',
	fontStyle :'',
	fontWeight :'',
	height :'',
	keyboardToolbar :[],
	keyboardToolbarColor :'',
	keyboardToolbarHeight :0.0,
	left :'',
	opacity :0.0,
	right :'',
	size :{},
	softKeyboardOnFocus :0,
	suppressReturn :true,
	top :'',
	touchEnabled :true,
	transform :{},
	value :'',
	visible :true,
	width :'',
	zIndex :0,
	events : {'blur' : 'blur','change' : 'change','click' : 'click','dblclick' : 'dblclick','doubletap' : 'doubletap','focus' : 'focus','return' : 'return','selected' : 'selected','singletap' : 'singletap','swipe' : 'swipe','touchcancel' : 'touchcancel','touchend' : 'touchend','touchmove' : 'touchmove','touchstart' : 'touchstart','twofingertap' : 'twofingertap'},
	
	add : function(view)
	{
		///<summary>add a child to the view hierarchy</summary>
		///<param name="view" type="object">the view to add to this views hiearchy</param>
		///<return type="void"/>
		return ;
	}, 	
	addEventListener : function(name, callback)
	{
		///<summary>add an event listener for the instance to receive view triggered events</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function to invoke when the event is fired</param>
		///<return type="void"/>
		return ;
	}, 	
	animate : function(obj, callback)
	{
		///<summary>animate the view</summary>
		///<param name="obj" type="object">either a dictionary of animation properties or an Animation object</param>
		///<param name="callback" type="function">function to be invoked upon completion of the animation</param>
		///<return type="void"/>
		return ;
	}, 	
	blur : function()
	{
		///<summary>force the field to lose focus</summary>
		///<return type="void"/>
		return ;
	}, 	
	fireEvent : function(name, event)
	{
		///<summary>fire a synthesized event to the views listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="event" type="object">event object</param>
		///<return type="void"/>
		return ;
	}, 	
	focus : function()
	{
		///<summary>force the field to gain focus</summary>
		///<return type="void"/>
		return ;
	}, 	
	hasText : function()
	{
		///<summary>return boolean (true) if the field has text</summary>
		///<return type="void"/>
		return ;
	}, 	
	hide : function()
	{
		///<summary>hide the view</summary>
		///<return type="void"/>
		return ;
	}, 	
	remove : function(view)
	{
		///<summary>remove a previously add view from the view hiearchy</summary>
		///<param name="view" type="object">the view to remove from this views hiearchy</param>
		///<return type="void"/>
		return ;
	}, 	
	removeEventListener : function(name, callback)
	{
		///<summary>remove a previously added event listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function passed in addEventListener</param>
		///<return type="void"/>
		return ;
	}, 	
	show : function()
	{
		///<summary>make the view visible</summary>
		///<return type="void"/>
		return ;
	}, 	
	toImage : function(f)
	{
		///<summary>return a Blob image of the rendered view</summary>
		///<param name="f" type="function">function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately</param>
		///<return type="object"/>
		return {};
	}
};

Titanium.UI.TextField = {
	anchorPoint :{},
	animatedCenterPoint :{},
	backgroundColor :'',
	backgroundDisabledColor :'',
	backgroundDisabledImage :'',
	backgroundFocusedColor :'',
	backgroundFocusedImage :'',
	backgroundGradient :{},
	backgroundImage :'',
	backgroundLeftCap :0.0,
	backgroundSelectedColor :'',
	backgroundSelectedImage :'',
	backgroundTopCap :0.0,
	borderColor :'',
	borderRadius :0.0,
	borderStyle :0,
	borderWidth :0.0,
	bottom :'',
	center :{},
	clearButtonMode :0,
	clearOnEdit :true,
	editable :true,
	enabled :true,
	focusable :true,
	fontFamily :'',
	fontSize :'',
	fontStyle :'',
	fontWeight :'',
	height :'',
	hintText :'',
	keyboardToolbar :[],
	keyboardToolbarColor :'',
	keyboardToolbarHeight :0.0,
	left :'',
	leftButton :{},
	leftButtonMode :0,
	leftButtonPadding :0.0,
	minimumFontSize :0,
	opacity :0.0,
	paddingLeft :0.0,
	paddingRight :0.0,
	right :'',
	rightButton :{},
	rightButtonMode :0,
	rightButtonPadding :0.0,
	size :{},
	softKeyboardOnFocus :0,
	suppressReturn :true,
	top :'',
	touchEnabled :true,
	transform :{},
	value :'',
	verticalAlign :'',
	visible :true,
	width :'',
	zIndex :0,
	events : {'blur' : 'blur','change' : 'change','click' : 'click','dblclick' : 'dblclick','doubletap' : 'doubletap','focus' : 'focus','return' : 'return','singletap' : 'singletap','swipe' : 'swipe','touchcancel' : 'touchcancel','touchend' : 'touchend','touchmove' : 'touchmove','touchstart' : 'touchstart','twofingertap' : 'twofingertap'},
	
	add : function(view)
	{
		///<summary>add a child to the view hierarchy</summary>
		///<param name="view" type="object">the view to add to this views hiearchy</param>
		///<return type="void"/>
		return ;
	}, 	
	addEventListener : function(name, callback)
	{
		///<summary>add an event listener for the instance to receive view triggered events</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function to invoke when the event is fired</param>
		///<return type="void"/>
		return ;
	}, 	
	animate : function(obj, callback)
	{
		///<summary>animate the view</summary>
		///<param name="obj" type="object">either a dictionary of animation properties or an Animation object</param>
		///<param name="callback" type="function">function to be invoked upon completion of the animation</param>
		///<return type="void"/>
		return ;
	}, 	
	blur : function()
	{
		///<summary>force the field to lose focus</summary>
		///<return type="void"/>
		return ;
	}, 	
	fireEvent : function(name, event)
	{
		///<summary>fire a synthesized event to the views listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="event" type="object">event object</param>
		///<return type="void"/>
		return ;
	}, 	
	focus : function()
	{
		///<summary>force the field to gain focus</summary>
		///<return type="void"/>
		return ;
	}, 	
	hasText : function()
	{
		///<summary>return boolean (true) if the field has text</summary>
		///<return type="void"/>
		return ;
	}, 	
	hide : function()
	{
		///<summary>hide the view</summary>
		///<return type="void"/>
		return ;
	}, 	
	remove : function(view)
	{
		///<summary>remove a previously add view from the view hiearchy</summary>
		///<param name="view" type="object">the view to remove from this views hiearchy</param>
		///<return type="void"/>
		return ;
	}, 	
	removeEventListener : function(name, callback)
	{
		///<summary>remove a previously added event listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function passed in addEventListener</param>
		///<return type="void"/>
		return ;
	}, 	
	show : function()
	{
		///<summary>make the view visible</summary>
		///<return type="void"/>
		return ;
	}, 	
	toImage : function(f)
	{
		///<summary>return a Blob image of the rendered view</summary>
		///<param name="f" type="function">function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately</param>
		///<return type="object"/>
		return {};
	}
};

Titanium.UI.Toolbar = {
	anchorPoint :{},
	animatedCenterPoint :{},
	backgroundColor :'',
	backgroundDisabledColor :'',
	backgroundDisabledImage :'',
	backgroundFocusedColor :'',
	backgroundFocusedImage :'',
	backgroundGradient :{},
	backgroundImage :'',
	backgroundLeftCap :0.0,
	backgroundSelectedColor :'',
	backgroundSelectedImage :'',
	backgroundTopCap :0.0,
	borderColor :'',
	borderRadius :0.0,
	borderWidth :0.0,
	bottom :'',
	center :{},
	focusable :true,
	fontFamily :'',
	fontSize :'',
	fontStyle :'',
	fontWeight :'',
	height :'',
	left :'',
	opacity :0.0,
	right :'',
	size :{},
	softKeyboardOnFocus :0,
	top :'',
	touchEnabled :true,
	transform :{},
	visible :true,
	width :'',
	zIndex :0,
	events : {'click' : 'click','dblclick' : 'dblclick','doubletap' : 'doubletap','singletap' : 'singletap','swipe' : 'swipe','touchcancel' : 'touchcancel','touchend' : 'touchend','touchmove' : 'touchmove','touchstart' : 'touchstart','twofingertap' : 'twofingertap'},
	
	add : function(view)
	{
		///<summary>add a child to the view hierarchy</summary>
		///<param name="view" type="object">the view to add to this views hiearchy</param>
		///<return type="void"/>
		return ;
	}, 	
	addEventListener : function(name, callback)
	{
		///<summary>add an event listener for the instance to receive view triggered events</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function to invoke when the event is fired</param>
		///<return type="void"/>
		return ;
	}, 	
	animate : function(obj, callback)
	{
		///<summary>animate the view</summary>
		///<param name="obj" type="object">either a dictionary of animation properties or an Animation object</param>
		///<param name="callback" type="function">function to be invoked upon completion of the animation</param>
		///<return type="void"/>
		return ;
	}, 	
	fireEvent : function(name, event)
	{
		///<summary>fire a synthesized event to the views listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="event" type="object">event object</param>
		///<return type="void"/>
		return ;
	}, 	
	hide : function()
	{
		///<summary>hide the view</summary>
		///<return type="void"/>
		return ;
	}, 	
	remove : function(view)
	{
		///<summary>remove a previously add view from the view hiearchy</summary>
		///<param name="view" type="object">the view to remove from this views hiearchy</param>
		///<return type="void"/>
		return ;
	}, 	
	removeEventListener : function(name, callback)
	{
		///<summary>remove a previously added event listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function passed in addEventListener</param>
		///<return type="void"/>
		return ;
	}, 	
	show : function()
	{
		///<summary>make the view visible</summary>
		///<return type="void"/>
		return ;
	}, 	
	toImage : function(f)
	{
		///<summary>return a Blob image of the rendered view</summary>
		///<param name="f" type="function">function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately</param>
		///<return type="object"/>
		return {};
	}
};

Titanium.UI.View = {
	anchorPoint :{},
	animatedCenterPoint :{},
	backgroundColor :'',
	backgroundDisabledColor :'',
	backgroundDisabledImage :'',
	backgroundFocusedColor :'',
	backgroundFocusedImage :'',
	backgroundGradient :{},
	backgroundImage :'',
	backgroundLeftCap :0.0,
	backgroundSelectedColor :'',
	backgroundSelectedImage :'',
	backgroundTopCap :0.0,
	borderColor :'',
	borderRadius :0.0,
	borderWidth :0.0,
	bottom :'',
	center :{},
	focusable :true,
	fontFamily :'',
	fontSize :'',
	fontStyle :'',
	fontWeight :'',
	height :'',
	left :'',
	opacity :0.0,
	right :'',
	size :{},
	softKeyboardOnFocus :0,
	top :'',
	touchEnabled :true,
	transform :{},
	visible :true,
	width :'',
	zIndex :0,
	events : {'click' : 'click','dblclick' : 'dblclick','doubletap' : 'doubletap','singletap' : 'singletap','swipe' : 'swipe','touchcancel' : 'touchcancel','touchend' : 'touchend','touchmove' : 'touchmove','touchstart' : 'touchstart','twofingertap' : 'twofingertap'},
	
	add : function(view)
	{
		///<summary>add a child to the view hierarchy</summary>
		///<param name="view" type="object">the view to add to this views hiearchy</param>
		///<return type="void"/>
		return ;
	}, 	
	addEventListener : function(name, callback)
	{
		///<summary>add an event listener for the instance to receive view triggered events</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function to invoke when the event is fired</param>
		///<return type="void"/>
		return ;
	}, 	
	animate : function(obj, callback)
	{
		///<summary>animate the view</summary>
		///<param name="obj" type="object">either a dictionary of animation properties or an Animation object</param>
		///<param name="callback" type="function">function to be invoked upon completion of the animation</param>
		///<return type="void"/>
		return ;
	}, 	
	fireEvent : function(name, event)
	{
		///<summary>fire a synthesized event to the views listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="event" type="object">event object</param>
		///<return type="void"/>
		return ;
	}, 	
	hide : function()
	{
		///<summary>hide the view</summary>
		///<return type="void"/>
		return ;
	}, 	
	remove : function(view)
	{
		///<summary>remove a previously add view from the view hiearchy</summary>
		///<param name="view" type="object">the view to remove from this views hiearchy</param>
		///<return type="void"/>
		return ;
	}, 	
	removeEventListener : function(name, callback)
	{
		///<summary>remove a previously added event listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function passed in addEventListener</param>
		///<return type="void"/>
		return ;
	}, 	
	show : function()
	{
		///<summary>make the view visible</summary>
		///<return type="void"/>
		return ;
	}, 	
	toImage : function(f)
	{
		///<summary>return a Blob image of the rendered view</summary>
		///<param name="f" type="function">function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately</param>
		///<return type="object"/>
		return {};
	}
};

Titanium.UI.WebView = {
	anchorPoint :{},
	animatedCenterPoint :{},
	backgroundColor :'',
	backgroundDisabledColor :'',
	backgroundDisabledImage :'',
	backgroundFocusedColor :'',
	backgroundFocusedImage :'',
	backgroundGradient :{},
	backgroundImage :'',
	backgroundLeftCap :0.0,
	backgroundSelectedColor :'',
	backgroundSelectedImage :'',
	backgroundTopCap :0.0,
	borderColor :'',
	borderRadius :0.0,
	borderWidth :0.0,
	bottom :'',
	center :{},
	data :{},
	focusable :true,
	fontFamily :'',
	fontSize :'',
	fontStyle :'',
	fontWeight :'',
	height :'',
	html :'',
	left :'',
	loading :true,
	opacity :0.0,
	right :'',
	scalesPageToFit :true,
	size :{},
	softKeyboardOnFocus :0,
	top :'',
	touchEnabled :true,
	transform :{},
	url :'',
	visible :true,
	width :'',
	zIndex :0,
	events : {'beforeload' : 'beforeload','click' : 'click','dblclick' : 'dblclick','doubletap' : 'doubletap','error' : 'error','load' : 'load','singletap' : 'singletap','swipe' : 'swipe','touchcancel' : 'touchcancel','touchend' : 'touchend','touchmove' : 'touchmove','touchstart' : 'touchstart','twofingertap' : 'twofingertap'},
	
	add : function(view)
	{
		///<summary>add a child to the view hierarchy</summary>
		///<param name="view" type="object">the view to add to this views hiearchy</param>
		///<return type="void"/>
		return ;
	}, 	
	addEventListener : function(name, callback)
	{
		///<summary>add an event listener for the instance to receive view triggered events</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function to invoke when the event is fired</param>
		///<return type="void"/>
		return ;
	}, 	
	animate : function(obj, callback)
	{
		///<summary>animate the view</summary>
		///<param name="obj" type="object">either a dictionary of animation properties or an Animation object</param>
		///<param name="callback" type="function">function to be invoked upon completion of the animation</param>
		///<return type="void"/>
		return ;
	}, 	
	canGoBack : function()
	{
		///<summary>returns true if the webview can go back in history</summary>
		///<return type="boolean"/>
		return true;
	}, 	
	canGoForward : function()
	{
		///<summary>returns true if the webview can go forward in history</summary>
		///<return type="boolean"/>
		return true;
	}, 	
	evalJS : function(content)
	{
		///<summary>invoke JavaScript inside the context of the webview and optionally, return a result</summary>
		///<param name="content" type="string">JavaScript code as a string. The code will be evaluated inside the webview context.</param>
		///<return type="string"/>
		return '';
	}, 	
	fireEvent : function(name, event)
	{
		///<summary>fire a synthesized event to the views listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="event" type="object">event object</param>
		///<return type="void"/>
		return ;
	}, 	
	goBack : function()
	{
		///<summary>go back one entry in history to the previous page</summary>
		///<return type="void"/>
		return ;
	}, 	
	goForward : function()
	{
		///<summary>go forward one entry in history to the page before the current page</summary>
		///<return type="void"/>
		return ;
	}, 	
	hide : function()
	{
		///<summary>hide the view</summary>
		///<return type="void"/>
		return ;
	}, 	
	reload : function()
	{
		///<summary>reload the current webpage</summary>
		///<return type="void"/>
		return ;
	}, 	
	remove : function(view)
	{
		///<summary>remove a previously add view from the view hiearchy</summary>
		///<param name="view" type="object">the view to remove from this views hiearchy</param>
		///<return type="void"/>
		return ;
	}, 	
	removeEventListener : function(name, callback)
	{
		///<summary>remove a previously added event listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function passed in addEventListener</param>
		///<return type="void"/>
		return ;
	}, 	
	repaint : function()
	{
		///<summary>force the webview to repaint its contents</summary>
		///<return type="void"/>
		return ;
	}, 	
	setBasicAuthentication : function(username, password)
	{
		///<summary>set the basic authentication for the webview instance to be used on subsequent url requests</summary>
		///<param name="username" type="string">the username</param>
		///<param name="password" type="string">the password</param>
		///<return type="void"/>
		return ;
	}, 	
	show : function()
	{
		///<summary>make the view visible</summary>
		///<return type="void"/>
		return ;
	}, 	
	stopLoading : function()
	{
		///<summary>stop loading a currently loading page</summary>
		///<return type="void"/>
		return ;
	}, 	
	toImage : function(f)
	{
		///<summary>return a Blob image of the rendered view</summary>
		///<param name="f" type="function">function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately</param>
		///<return type="object"/>
		return {};
	}
};

Titanium.UI.Window = {
	anchorPoint :{},
	animatedCenterPoint :{},
	backButtonTitle :'',
	backButtonTitleImage :'',
	backgroundColor :'',
	backgroundDisabledColor :'',
	backgroundDisabledImage :'',
	backgroundFocusedColor :'',
	backgroundFocusedImage :'',
	backgroundGradient :{},
	backgroundImage :'',
	backgroundLeftCap :0.0,
	backgroundSelectedColor :'',
	backgroundSelectedImage :'',
	backgroundTopCap :0.0,
	barColor :'',
	barImage :'',
	borderColor :'',
	borderRadius :0.0,
	borderWidth :0.0,
	bottom :'',
	center :{},
	exitOnClose :true,
	focusable :true,
	fontFamily :'',
	fontSize :'',
	fontStyle :'',
	fontWeight :'',
	fullscreen :true,
	height :'',
	left :'',
	leftNavButton :{},
	modal :true,
	navBarHidden :true,
	opacity :0.0,
	orientationModes :[],
	right :'',
	rightNavButton :{},
	size :{},
	softInputMode :0,
	softKeyboardOnFocus :0,
	tabBarHidden :true,
	title :'',
	titleControl :{},
	titleImage :'',
	titlePrompt :'',
	titleid :'',
	titlepromptid :'',
	toolbar :[],
	top :'',
	touchEnabled :true,
	transform :{},
	translucent :true,
	url :'',
	visible :true,
	width :'',
	zIndex :0,
	events : {'android:back' : 'android:back','android:camera' : 'android:camera','android:focus' : 'android:focus','android:search' : 'android:search','android:voldown' : 'android:voldown','android:volup' : 'android:volup','blur' : 'blur','click' : 'click','close' : 'close','dblclick' : 'dblclick','doubletap' : 'doubletap','focus' : 'focus','open' : 'open','singletap' : 'singletap','swipe' : 'swipe','touchcancel' : 'touchcancel','touchend' : 'touchend','touchmove' : 'touchmove','touchstart' : 'touchstart','twofingertap' : 'twofingertap'},
	
	add : function(view)
	{
		///<summary>add a child to the view hierarchy</summary>
		///<param name="view" type="object">the view to add to this views hiearchy</param>
		///<return type="void"/>
		return ;
	}, 	
	addEventListener : function(name, callback)
	{
		///<summary>add an event listener for the instance to receive view triggered events</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function to invoke when the event is fired</param>
		///<return type="void"/>
		return ;
	}, 	
	animate : function(obj, callback)
	{
		///<summary>animate the view</summary>
		///<param name="obj" type="object">either a dictionary of animation properties or an Animation object</param>
		///<param name="callback" type="function">function to be invoked upon completion of the animation</param>
		///<return type="void"/>
		return ;
	}, 	
	close : function(options)
	{
		///<summary>close the window</summary>
		///<param name="options" type="object">close the window with optional animation or display properties</param>
		///<return type="void"/>
		return ;
	}, 	
	fireEvent : function(name, event)
	{
		///<summary>fire a synthesized event to the views listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="event" type="object">event object</param>
		///<return type="void"/>
		return ;
	}, 	
	hide : function()
	{
		///<summary>hide the view</summary>
		///<return type="void"/>
		return ;
	}, 	
	open : function(options)
	{
		///<summary>open the window</summary>
		///<param name="options" type="object">open the window with optional animation or display properties</param>
		///<return type="void"/>
		return ;
	}, 	
	remove : function(view)
	{
		///<summary>remove a previously add view from the view hiearchy</summary>
		///<param name="view" type="object">the view to remove from this views hiearchy</param>
		///<return type="void"/>
		return ;
	}, 	
	removeEventListener : function(name, callback)
	{
		///<summary>remove a previously added event listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function passed in addEventListener</param>
		///<return type="void"/>
		return ;
	}, 	
	show : function()
	{
		///<summary>make the view visible</summary>
		///<return type="void"/>
		return ;
	}, 	
	toImage : function(f)
	{
		///<summary>return a Blob image of the rendered view</summary>
		///<param name="f" type="function">function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately</param>
		///<return type="object"/>
		return {};
	}
};

Titanium.UI.iOS = {
	
	addEventListener : function(name, callback)
	{
		///<summary>add an event listener for the instance to receive view triggered events</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function to invoke when the event is fired</param>
		///<return type="void"/>
		return ;
	}, 	
	createAdView : function(parameters)
	{
		///<summary>create and return an instance of Titanium.UI.iOS.AdView</summary>
		///<param name="parameters" type="object">(optional) a dictionary object properties defined in Titanium.UI.iOS.AdView</param>
		///<return type="object"/>
		return {};
	}, 	
	fireEvent : function(name, event)
	{
		///<summary>fire a synthesized event to the views listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="event" type="object">event object</param>
		///<return type="void"/>
		return ;
	}, 	
	removeEventListener : function(name, callback)
	{
		///<summary>remove a previously added event listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function passed in addEventListener</param>
		///<return type="void"/>
		return ;
	}
};

Titanium.UI.iOS.AdView = {
	SIZE_320x50 :'',
	SIZE_480x32 :'',
	anchorPoint :{},
	animatedCenterPoint :{},
	backgroundColor :'',
	backgroundDisabledColor :'',
	backgroundDisabledImage :'',
	backgroundFocusedColor :'',
	backgroundFocusedImage :'',
	backgroundGradient :{},
	backgroundImage :'',
	backgroundLeftCap :0.0,
	backgroundSelectedColor :'',
	backgroundSelectedImage :'',
	backgroundTopCap :0.0,
	borderColor :'',
	borderRadius :0.0,
	borderWidth :0.0,
	bottom :'',
	center :{},
	focusable :true,
	fontFamily :'',
	fontSize :'',
	fontStyle :'',
	fontWeight :'',
	height :'',
	left :'',
	opacity :0.0,
	right :'',
	size :{},
	softKeyboardOnFocus :0,
	top :'',
	touchEnabled :true,
	transform :{},
	visible :true,
	width :'',
	zIndex :0,
	events : {'action' : 'action','click' : 'click','dblclick' : 'dblclick','doubletap' : 'doubletap','error' : 'error','load' : 'load','singletap' : 'singletap','swipe' : 'swipe','touchcancel' : 'touchcancel','touchend' : 'touchend','touchmove' : 'touchmove','touchstart' : 'touchstart','twofingertap' : 'twofingertap'},
	
	add : function(view)
	{
		///<summary>add a child to the view hierarchy</summary>
		///<param name="view" type="object">the view to add to this views hiearchy</param>
		///<return type="void"/>
		return ;
	}, 	
	addEventListener : function(name, callback)
	{
		///<summary>add an event listener for the instance to receive view triggered events</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function to invoke when the event is fired</param>
		///<return type="void"/>
		return ;
	}, 	
	animate : function(obj, callback)
	{
		///<summary>animate the view</summary>
		///<param name="obj" type="object">either a dictionary of animation properties or an Animation object</param>
		///<param name="callback" type="function">function to be invoked upon completion of the animation</param>
		///<return type="void"/>
		return ;
	}, 	
	cancelAction : function()
	{
		///<summary>A banner view action can cover your application's user interface. However, your application continues to run, and receives events normally. If your application receives an event that requires the user's attention, it can programmatically cancel the action and uncover its interface by calling cancelAction. Canceling actions frequently can cause a loss of revenue for your application.</summary>
		///<return type="void"/>
		return ;
	}, 	
	fireEvent : function(name, event)
	{
		///<summary>fire a synthesized event to the views listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="event" type="object">event object</param>
		///<return type="void"/>
		return ;
	}, 	
	hide : function()
	{
		///<summary>hide the view</summary>
		///<return type="void"/>
		return ;
	}, 	
	remove : function(view)
	{
		///<summary>remove a previously add view from the view hiearchy</summary>
		///<param name="view" type="object">the view to remove from this views hiearchy</param>
		///<return type="void"/>
		return ;
	}, 	
	removeEventListener : function(name, callback)
	{
		///<summary>remove a previously added event listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function passed in addEventListener</param>
		///<return type="void"/>
		return ;
	}, 	
	show : function()
	{
		///<summary>make the view visible</summary>
		///<return type="void"/>
		return ;
	}, 	
	toImage : function(f)
	{
		///<summary>return a Blob image of the rendered view</summary>
		///<param name="f" type="function">function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately</param>
		///<return type="object"/>
		return {};
	}
};

Titanium.UI.iPad = {
	POPOVER_ARROW_DIRECTION_ANY :0,
	POPOVER_ARROW_DIRECTION_DOWN :0,
	POPOVER_ARROW_DIRECTION_LEFT :0,
	POPOVER_ARROW_DIRECTION_RIGHT :0,
	POPOVER_ARROW_DIRECTION_UNKNOWN :0,
	POPOVER_ARROW_DIRECTION_UP :0,
	
	addEventListener : function(name, callback)
	{
		///<summary>add an event listener for the instance to receive view triggered events</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function to invoke when the event is fired</param>
		///<return type="void"/>
		return ;
	}, 	
	createPopover : function(parameters)
	{
		///<summary>create and return an instance of Titanium.UI.iPad.Popover</summary>
		///<param name="parameters" type="object">(optional) a dictionary object properties defined in Titanium.UI.iPad.Popover</param>
		///<return type="object"/>
		return {};
	}, 	
	createSplitWindow : function(parameters)
	{
		///<summary>create and return an instance of Titanium.UI.iPad.SplitWindow</summary>
		///<param name="parameters" type="object">(optional) a dictionary object properties defined in Titanium.UI.iPad.SplitWindow</param>
		///<return type="object"/>
		return {};
	}, 	
	fireEvent : function(name, event)
	{
		///<summary>fire a synthesized event to the views listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="event" type="object">event object</param>
		///<return type="void"/>
		return ;
	}, 	
	removeEventListener : function(name, callback)
	{
		///<summary>remove a previously added event listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function passed in addEventListener</param>
		///<return type="void"/>
		return ;
	}
};

Titanium.UI.iPad.Popover = {
	anchorPoint :{},
	animatedCenterPoint :{},
	arrowDirection :0,
	backgroundColor :'',
	backgroundDisabledColor :'',
	backgroundDisabledImage :'',
	backgroundFocusedColor :'',
	backgroundFocusedImage :'',
	backgroundGradient :{},
	backgroundImage :'',
	backgroundLeftCap :0.0,
	backgroundSelectedColor :'',
	backgroundSelectedImage :'',
	backgroundTopCap :0.0,
	borderColor :'',
	borderRadius :0.0,
	borderWidth :0.0,
	bottom :'',
	center :{},
	focusable :true,
	fontFamily :'',
	fontSize :'',
	fontStyle :'',
	fontWeight :'',
	height :0.0,
	left :'',
	leftNavButton :{},
	opacity :0.0,
	right :'',
	size :{},
	softKeyboardOnFocus :0,
	title :'',
	top :'',
	touchEnabled :true,
	transform :{},
	visible :true,
	width :0.0,
	zIndex :0,
	events : {'click' : 'click','dblclick' : 'dblclick','doubletap' : 'doubletap','hide' : 'hide','singletap' : 'singletap','swipe' : 'swipe','touchcancel' : 'touchcancel','touchend' : 'touchend','touchmove' : 'touchmove','touchstart' : 'touchstart','twofingertap' : 'twofingertap'},
	
	add : function(view)
	{
		///<summary>add a child to the view hierarchy</summary>
		///<param name="view" type="object">the view to add to this views hiearchy</param>
		///<return type="void"/>
		return ;
	}, 	
	addEventListener : function(name, callback)
	{
		///<summary>add an event listener for the instance to receive view triggered events</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function to invoke when the event is fired</param>
		///<return type="void"/>
		return ;
	}, 	
	animate : function(obj, callback)
	{
		///<summary>animate the view</summary>
		///<param name="obj" type="object">either a dictionary of animation properties or an Animation object</param>
		///<param name="callback" type="function">function to be invoked upon completion of the animation</param>
		///<return type="void"/>
		return ;
	}, 	
	fireEvent : function(name, event)
	{
		///<summary>fire a synthesized event to the views listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="event" type="object">event object</param>
		///<return type="void"/>
		return ;
	}, 	
	hide : function(options)
	{
		///<summary>hide the popover</summary>
		///<param name="options" type="object">dictionary with optional boolean property animated which indicates if the popover should be hidden with animation (defaults to true) or not</param>
		///<return type="void"/>
		return ;
	}, 	
	remove : function(view)
	{
		///<summary>remove a previously add view from the view hiearchy</summary>
		///<param name="view" type="object">the view to remove from this views hiearchy</param>
		///<return type="void"/>
		return ;
	}, 	
	removeEventListener : function(name, callback)
	{
		///<summary>remove a previously added event listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function passed in addEventListener</param>
		///<return type="void"/>
		return ;
	}, 	
	setHeight : function(height)
	{
		///<summary>change the height of the popover</summary>
		///<param name="height" type="int,string">height of the popover</param>
		///<return type="void"/>
		return ;
	}, 	
	setWidth : function(width)
	{
		///<summary>change the width of the popover</summary>
		///<param name="width" type="int,string">width of the popover</param>
		///<return type="void"/>
		return ;
	}, 	
	show : function(options)
	{
		///<summary>show the popover</summary>
		///<param name="options" type="object">dictionary of the following properties: rect, animated and view. The view property should specify the view relative to where the popover should display.  animated is a boolean indicating if the showing of the popover should be animated, defaults to true. The property rect is a dictionary with the following properties: x, y, width and height, where the rectangle in view at which to anchor the popover.</param>
		///<return type="void"/>
		return ;
	}, 	
	toImage : function(f)
	{
		///<summary>return a Blob image of the rendered view</summary>
		///<param name="f" type="function">function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately</param>
		///<return type="object"/>
		return {};
	}
};

Titanium.UI.iPad.SplitWindow = {
	anchorPoint :{},
	animatedCenterPoint :{},
	backgroundColor :'',
	backgroundDisabledColor :'',
	backgroundDisabledImage :'',
	backgroundFocusedColor :'',
	backgroundFocusedImage :'',
	backgroundGradient :{},
	backgroundImage :'',
	backgroundLeftCap :0.0,
	backgroundSelectedColor :'',
	backgroundSelectedImage :'',
	backgroundTopCap :0.0,
	borderColor :'',
	borderRadius :0.0,
	borderWidth :0.0,
	bottom :'',
	center :{},
	detailView :{},
	focusable :true,
	fontFamily :'',
	fontSize :'',
	fontStyle :'',
	fontWeight :'',
	height :'',
	left :'',
	masterView :{},
	opacity :0.0,
	right :'',
	size :{},
	softKeyboardOnFocus :0,
	top :'',
	touchEnabled :true,
	transform :{},
	visible :true,
	width :'',
	zIndex :0,
	events : {'click' : 'click','dblclick' : 'dblclick','doubletap' : 'doubletap','singletap' : 'singletap','swipe' : 'swipe','touchcancel' : 'touchcancel','touchend' : 'touchend','touchmove' : 'touchmove','touchstart' : 'touchstart','twofingertap' : 'twofingertap','visible' : 'visible'},
	
	add : function(view)
	{
		///<summary>add a child to the view hierarchy</summary>
		///<param name="view" type="object">the view to add to this views hiearchy</param>
		///<return type="void"/>
		return ;
	}, 	
	addEventListener : function(name, callback)
	{
		///<summary>add an event listener for the instance to receive view triggered events</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function to invoke when the event is fired</param>
		///<return type="void"/>
		return ;
	}, 	
	animate : function(obj, callback)
	{
		///<summary>animate the view</summary>
		///<param name="obj" type="object">either a dictionary of animation properties or an Animation object</param>
		///<param name="callback" type="function">function to be invoked upon completion of the animation</param>
		///<return type="void"/>
		return ;
	}, 	
	fireEvent : function(name, event)
	{
		///<summary>fire a synthesized event to the views listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="event" type="object">event object</param>
		///<return type="void"/>
		return ;
	}, 	
	hide : function()
	{
		///<summary>hide the view</summary>
		///<return type="void"/>
		return ;
	}, 	
	remove : function(view)
	{
		///<summary>remove a previously add view from the view hiearchy</summary>
		///<param name="view" type="object">the view to remove from this views hiearchy</param>
		///<return type="void"/>
		return ;
	}, 	
	removeEventListener : function(name, callback)
	{
		///<summary>remove a previously added event listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function passed in addEventListener</param>
		///<return type="void"/>
		return ;
	}, 	
	show : function()
	{
		///<summary>make the view visible</summary>
		///<return type="void"/>
		return ;
	}, 	
	toImage : function(f)
	{
		///<summary>return a Blob image of the rendered view</summary>
		///<param name="f" type="function">function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately</param>
		///<return type="object"/>
		return {};
	}
};

Titanium.UI.iPhone = {
	MODAL_PRESENTATION_CURRENT_CONTEXT :0,
	MODAL_PRESENTATION_FORMSHEET :0,
	MODAL_PRESENTATION_FULLSCREEN :0,
	MODAL_PRESENTATION_PAGESHEET :0,
	MODAL_TRANSITION_STYLE_COVER_VERTICAL :0,
	MODAL_TRANSITION_STYLE_CROSS_DISSOLVE :0,
	MODAL_TRANSITION_STYLE_FLIP_HORIZONTAL :0,
	MODAL_TRANSITION_STYLE_PARTIAL_CURL :0,
	appBadge :'',
	appSupportsShakeToEdit :true,
	statusBarHidden :true,
	statusBarStyle :0,
	
	addEventListener : function(name, callback)
	{
		///<summary>add an event listener for the instance to receive view triggered events</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function to invoke when the event is fired</param>
		///<return type="void"/>
		return ;
	}, 	
	createNavigationGroup : function(parameters)
	{
		///<summary>create and return an instance of Titanium.UI.iPhone.NavigationGroup</summary>
		///<param name="parameters" type="object">(optional) a dictionary object properties defined in Titanium.UI.iPhone.NavigationGroup</param>
		///<return type="object"/>
		return {};
	}, 	
	fireEvent : function(name, event)
	{
		///<summary>fire a synthesized event to the views listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="event" type="object">event object</param>
		///<return type="void"/>
		return ;
	}, 	
	hideStatusBar : function(animated, animationStyle)
	{
		///<summary>convenience method to hide the status bar</summary>
		///<param name="animated" type="boolean">boolean to indicate if the action should be animated</param>
		///<param name="animationStyle" type="int">the animation style</param>
		///<return type="void"/>
		return ;
	}, 	
	removeEventListener : function(name, callback)
	{
		///<summary>remove a previously added event listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function passed in addEventListener</param>
		///<return type="void"/>
		return ;
	}, 	
	showStatusBar : function(animated, animationStyle)
	{
		///<summary>convenience method to show the status bar</summary>
		///<param name="animated" type="boolean">boolean to indicate if the action should be animated</param>
		///<param name="animationStyle" type="int">the animation style</param>
		///<return type="void"/>
		return ;
	}
};

Titanium.UI.iPhone.ActivityIndicatorStyle = {
	BIG :0,
	DARK :0,
	PLAIN :0
};

Titanium.UI.iPhone.AnimationStyle = {
	CURL_DOWN :0,
	CURL_UP :0,
	FLIP_FROM_LEFT :0,
	FLIP_FROM_RIGHT :0,
	NONE :0
};

Titanium.UI.iPhone.NavigationGroup = {
	anchorPoint :{},
	animatedCenterPoint :{},
	backgroundColor :'',
	backgroundDisabledColor :'',
	backgroundDisabledImage :'',
	backgroundFocusedColor :'',
	backgroundFocusedImage :'',
	backgroundGradient :{},
	backgroundImage :'',
	backgroundLeftCap :0.0,
	backgroundSelectedColor :'',
	backgroundSelectedImage :'',
	backgroundTopCap :0.0,
	borderColor :'',
	borderRadius :0.0,
	borderWidth :0.0,
	bottom :'',
	center :{},
	focusable :true,
	fontFamily :'',
	fontSize :'',
	fontStyle :'',
	fontWeight :'',
	height :'',
	left :'',
	opacity :0.0,
	right :'',
	size :{},
	softKeyboardOnFocus :0,
	top :'',
	touchEnabled :true,
	transform :{},
	visible :true,
	width :'',
	zIndex :0,
	events : {'click' : 'click','dblclick' : 'dblclick','doubletap' : 'doubletap','singletap' : 'singletap','swipe' : 'swipe','touchcancel' : 'touchcancel','touchend' : 'touchend','touchmove' : 'touchmove','touchstart' : 'touchstart','twofingertap' : 'twofingertap'},
	
	add : function(view)
	{
		///<summary>add a child to the view hierarchy</summary>
		///<param name="view" type="object">the view to add to this views hiearchy</param>
		///<return type="void"/>
		return ;
	}, 	
	addEventListener : function(name, callback)
	{
		///<summary>add an event listener for the instance to receive view triggered events</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function to invoke when the event is fired</param>
		///<return type="void"/>
		return ;
	}, 	
	animate : function(obj, callback)
	{
		///<summary>animate the view</summary>
		///<param name="obj" type="object">either a dictionary of animation properties or an Animation object</param>
		///<param name="callback" type="function">function to be invoked upon completion of the animation</param>
		///<return type="void"/>
		return ;
	}, 	
	close : function(window, properties)
	{
		///<summary>close a window and remove it from the navigation group</summary>
		///<param name="window" type="object">window to close</param>
		///<param name="properties" type="object">optional dictionary. the only current property supported is animated which is a boolean to indicate if the window should be closed animated (default) or not.</param>
		///<return type="void"/>
		return ;
	}, 	
	fireEvent : function(name, event)
	{
		///<summary>fire a synthesized event to the views listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="event" type="object">event object</param>
		///<return type="void"/>
		return ;
	}, 	
	hide : function()
	{
		///<summary>hide the view</summary>
		///<return type="void"/>
		return ;
	}, 	
	open : function(window, properties)
	{
		///<summary>open a window within the navigation group</summary>
		///<param name="window" type="object">window to open within the tab group</param>
		///<param name="properties" type="object">optional dictionary. the only current property supported is animated which is a boolean to indicate if the window should be opened animated (default) or not.</param>
		///<return type="void"/>
		return ;
	}, 	
	remove : function(view)
	{
		///<summary>remove a previously add view from the view hiearchy</summary>
		///<param name="view" type="object">the view to remove from this views hiearchy</param>
		///<return type="void"/>
		return ;
	}, 	
	removeEventListener : function(name, callback)
	{
		///<summary>remove a previously added event listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function passed in addEventListener</param>
		///<return type="void"/>
		return ;
	}, 	
	show : function()
	{
		///<summary>make the view visible</summary>
		///<return type="void"/>
		return ;
	}, 	
	toImage : function(f)
	{
		///<summary>return a Blob image of the rendered view</summary>
		///<param name="f" type="function">function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately</param>
		///<return type="object"/>
		return {};
	}
};

Titanium.UI.iPhone.ProgressBarStyle = {
	BAR :0,
	DEFAULT :0,
	PLAIN :0
};

Titanium.UI.iPhone.RowAnimationStyle = {
	BOTTOM :0,
	FADE :0,
	LEFT :0,
	NONE :0,
	RIGHT :0,
	TOP :0
};

Titanium.UI.iPhone.ScrollIndicatorStyle = {
	BLACK :0,
	DEFAULT :0,
	WHITE :0
};

Titanium.UI.iPhone.StatusBar = {
	DEFAULT :0,
	GRAY :0,
	OPAQUE_BLACK :0,
	TRANSLUCENT_BLACK :0
};

Titanium.UI.iPhone.SystemButton = {
	ACTION :0,
	ACTIVITY :0,
	ADD :0,
	BOOKMARKS :0,
	CAMERA :0,
	CANCEL :0,
	COMPOSE :0,
	CONTACT_ADD :0,
	DISCLOSURE :0,
	DONE :0,
	EDIT :0,
	FAST_FORWARD :0,
	FIXED_SPACE :0,
	FLEXIBLE_SPACE :0,
	INFO_DARK :0,
	INFO_LIGHT :0,
	ORGANIZE :0,
	PAUSE :0,
	PLAY :0,
	REFRESH :0,
	REPLY :0,
	REWIND :0,
	SAVE :0,
	STOP :0,
	TRASH :0
};

Titanium.UI.iPhone.SystemButtonStyle = {
	BORDERED :0,
	DONE :0,
	PLAIN :0
};

Titanium.UI.iPhone.SystemIcon = {
	BOOKMARKS :0,
	CONTACTS :0,
	DOWNLOADS :0,
	FAVORITES :0,
	FEATURED :0,
	HISTORY :0,
	MORE :0,
	MOST_RECENT :0,
	MOST_VIEWED :0,
	RECENTS :0,
	SEARCH :0,
	TOP_RATED :0
};

Titanium.UI.iPhone.TableViewCellSelectionStyle = {
	BLUE :0,
	GRAY :0,
	NONE :0
};

Titanium.UI.iPhone.TableViewScrollPosition = {
	BOTTOM :0,
	MIDDLE :0,
	NONE :0,
	TOP :0
};

Titanium.UI.iPhone.TableViewSeparatorStyle = {
	NONE :0,
	SINGLE_LINE :0
};

Titanium.UI.iPhone.TableViewStyle = {
	GROUPED :0,
	PLAIN :0
};

Titanium.Utils = {
	
	addEventListener : function(name, callback)
	{
		///<summary>add an event listener for the instance to receive view triggered events</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function to invoke when the event is fired</param>
		///<return type="void"/>
		return ;
	}, 	
	base64decode : function(str)
	{
		///<summary>decode a Base64 string</summary>
		///<param name="str" type="string">the string to use for the input</param>
		///<return type="string"/>
		return '';
	}, 	
	base64encode : function(str)
	{
		///<summary>encode a string into Base64</summary>
		///<param name="str" type="string">the string to use for the input</param>
		///<return type="string"/>
		return '';
	}, 	
	fireEvent : function(name, event)
	{
		///<summary>fire a synthesized event to the views listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="event" type="object">event object</param>
		///<return type="void"/>
		return ;
	}, 	
	md5HexDigest : function(str)
	{
		///<summary>compute a MD5 hash algorithm against the input and return a hex-based string</summary>
		///<param name="str" type="string">the string to use for the input</param>
		///<return type="string"/>
		return '';
	}, 	
	removeEventListener : function(name, callback)
	{
		///<summary>remove a previously added event listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function passed in addEventListener</param>
		///<return type="void"/>
		return ;
	}
};

Titanium.XML = {
	
	addEventListener : function(name, callback)
	{
		///<summary>add an event listener for the instance to receive view triggered events</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function to invoke when the event is fired</param>
		///<return type="void"/>
		return ;
	}, 	
	fireEvent : function(name, event)
	{
		///<summary>fire a synthesized event to the views listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="event" type="object">event object</param>
		///<return type="void"/>
		return ;
	}, 	
	parseString : function(xml)
	{
		///<summary>parse an XML string into a DOMDocument</summary>
		///<param name="xml" type="string">the XML content as a string</param>
		///<return type="object"/>
		return {};
	}, 	
	removeEventListener : function(name, callback)
	{
		///<summary>remove a previously added event listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function passed in addEventListener</param>
		///<return type="void"/>
		return ;
	}, 	
	serializeToString : function(node)
	{
		///<summary>serialize a DOMDocument or DOMNode and its descendants into an XML string</summary>
		///<param name="node" type="DOMNode">the XML DOMNode or DOMDocument to serialize</param>
		///<return type="string"/>
		return '';
	}
};

Titanium.XML.DOMDocument = {

};

Titanium.Yahoo = {
	
	addEventListener : function(name, callback)
	{
		///<summary>add an event listener for the instance to receive view triggered events</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function to invoke when the event is fired</param>
		///<return type="void"/>
		return ;
	}, 	
	fireEvent : function(name, event)
	{
		///<summary>fire a synthesized event to the views listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="event" type="object">event object</param>
		///<return type="void"/>
		return ;
	}, 	
	removeEventListener : function(name, callback)
	{
		///<summary>remove a previously added event listener</summary>
		///<param name="name" type="string">name of the event</param>
		///<param name="callback" type="function">callback function passed in addEventListener</param>
		///<return type="void"/>
		return ;
	}, 	
	yql : function(yql, callback)
	{
		///<summary>invoke a Yahoo YQL query</summary>
		///<param name="yql" type="string">the YQL query to execute</param>
		///<param name="callback" type="function">the function to execute when the query completes. The event will contain the boolean property success if successful. If success is false, the message property will contain the error message. If success is true, the data property will contain the data payload received from the YQL.</param>
		///<return type="void"/>
		return ;
	}
};
