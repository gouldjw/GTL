#import "ApplicationMods.h"

@implementation ApplicationMods

+ (NSArray*) compiledMods
{
	NSMutableArray *modules = [NSMutableArray array];
	[modules addObject:[NSDictionary dictionaryWithObjectsAndKeys:@"tismsview",@"name",@"ti.smsview",@"moduleid",@"1.1",@"version",@"8e4fdf7d-b3e7-4ba4-b76a-697113808c33",@"guid",@"",@"licensekey",nil]];
	return modules;
}

@end
