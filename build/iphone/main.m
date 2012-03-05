//
//  Appcelerator Titanium Mobile
//  WARNING: this is a generated file and should not be modified
//

#import <UIKit/UIKit.h>
#define _QUOTEME(x) #x
#define STRING(x) _QUOTEME(x)

NSString * const TI_APPLICATION_DEPLOYTYPE = @"production";
NSString * const TI_APPLICATION_ID = @"com.avatarsoft.GameTalkLive";
NSString * const TI_APPLICATION_PUBLISHER = @"Avatar Software, LLC";
NSString * const TI_APPLICATION_URL = @"http://www.gametalklive.com";
NSString * const TI_APPLICATION_NAME = @"GameTalkLive";
NSString * const TI_APPLICATION_VERSION = @"1.2.6";
NSString * const TI_APPLICATION_DESCRIPTION = @"Game Talk Live.  Get in the game.";
NSString * const TI_APPLICATION_COPYRIGHT = @"2012 by Game Talk Live, LLC";
NSString * const TI_APPLICATION_GUID = @"cfd85178-0726-4be7-b1d4-db5e7f782ab3";
BOOL const TI_APPLICATION_ANALYTICS = false;

#ifdef TARGET_IPHONE_SIMULATOR
NSString * const TI_APPLICATION_RESOURCE_DIR = @"";
#endif

int main(int argc, char *argv[]) {
    NSAutoreleasePool * pool = [[NSAutoreleasePool alloc] init];

#ifdef __LOG__ID__
	NSArray *paths = NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES);
	NSString *documentsDirectory = [paths objectAtIndex:0];
	NSString *logPath = [documentsDirectory stringByAppendingPathComponent:[NSString stringWithFormat:@"%s.log",STRING(__LOG__ID__)]];
	freopen([logPath cStringUsingEncoding:NSUTF8StringEncoding],"w+",stderr);
	fprintf(stderr,"[INFO] Application started\n");
#endif

	int retVal = UIApplicationMain(argc, argv, nil, @"TiApp");
    [pool release];
    return retVal;
}
