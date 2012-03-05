

// gtl is app's namespace
var gtl = {};

//will be including all the files for our namespace in the root app context


Ti.include('ui.js') // UI components
Ti.include('views.js')  // composite views, if needed
Ti.include('chat') // chat interface or information...not sure
Ti.include('logic.js') //  for logic, behavior - non-UI-related methods, etc.
//Ti.include('nav.js') - Possbily use instead of logic?  Or in addition to?
Ti.include('conn.js') // all connection info/strings
Ti.include('da.js') // all data access info - for usernames, passwords, league, team and game schedule/info
//Ti.include('GPS') // GPS info?  Should connections go in conn.js, data access in da.js and logic in logic.js?
// Or should all GPS stuff be kept together?



//use custom UI constructors to build app's UI
var winSignIn = mo.ui.createMainSignInWindow();
winSignIn.open();









