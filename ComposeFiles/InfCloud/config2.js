var globalAccountSettings=[
	{
		href: 'https://server1.com:8443/caldav.php/USERNAME1/',
		userAuth:
		{
			userName: 'USERNAME1',
			userPassword: 'PASSWORD1'
		},
		timeOut: 90000,
		lockTimeOut: 10000,
		checkContentType: true,
		settingsAccount: true,
		delegation: true,
		hrefLabel: null,
		forceReadOnly: null,
		ignoreAlarms: false,
		backgroundCalendars: []
	},
	{
		href: 'https://server2.com:8443/caldav.php/USERNAME2/',
		...
		...
	}
];

var globalBackgroundSync=true;

var globalSyncResourcesInterval=120000;

var globalEnableRefresh=false;

var globalEnableKbNavigation=true;

var globalInterfaceLanguage='en_US';

var globalInterfaceCustomLanguages=[];

var globalSortAlphabet=' 0123456789'+
	'AÀÁÂÄÆÃÅĀBCÇĆČDĎEÈÉÊËĒĖĘĚFGĞHIÌÍÎİÏĪĮJKLŁĹĽMNŃÑŇOÒÓÔÖŐŒØÕŌ'+
	'PQRŔŘSŚŠȘșŞşẞTŤȚțŢţUÙÚÛÜŰŮŪVWXYÝŸZŹŻŽ'+
	'aàáâäæãåābcçćčdďeèéêëēėęěfgğhiìíîïīįıjklłĺľmnńñňoòóôöőœøõō'+
	'pqrŕřsśšßtťuùúûüűůūvwxyýÿzźżžАБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЮЯ'+
	'Ьабвгґдеєжзиіїйклмнопрстуфхцчшщюяь';

var globalSearchTransformAlphabet={
	'[ÀàÁáÂâÄäÆæÃãÅåĀā]': 'a', '[ÇçĆćČč]': 'c', '[Ďď]': 'd',
	'[ÈèÉéÊêËëĒēĖėĘęĚě]': 'e', '[Ğğ]': 'g', '[ÌìÍíÎîİıÏïĪīĮį]': 'i',
	'[ŁłĹĺĽľ]': 'l', '[ŃńÑñŇň]': 'n', '[ÒòÓóÔôÖöŐőŒœØøÕõŌō]': 'o',
	'[ŔŕŘř]': 'r', '[ŚśŠšȘșŞşẞß]': 's', '[ŤťȚțŢţ]': 't',
	'[ÙùÚúÛûÜüŰűŮůŪū]': 'u', '[ÝýŸÿ]': 'y', '[ŹźŻżŽž]': 'z'
};

var globalResourceAlphabetSorting=true;

var globalNewVersionNotifyUsers=[];

var globalDatepickerFirstDayOfWeek=1;

var globalHideInfoMessageAfter=1800;

var globalEditorFadeAnimation=666;

var globalEventStartPastLimit=3;
var globalEventStartFutureLimit=3;
var globalTodoPastLimit=1;

var globalLoadedCalendarCollections=[];

var globalLoadedTodoCollections=[];

var globalActiveCalendarCollections=[];

var globalActiveTodoCollections=[];

var globalActiveView='month';

var globalOpenFormMode='double';

var globalTodoListFilterSelected=['filterAction', 'filterProgress'];

var globalCalendarStartOfBusiness=8;
var globalCalendarEndOfBusiness=17;

var globalDefaultEventDuration=120;

var globalDisplayHiddenEvents=false;

var globalTimeZoneSupport=true;

var globalTimeZone='America/Los_Angeles';

var globalTimeZonesEnabled=['America/Los_Angeles'];

var globalRewriteTimezoneComponent=true;

var globalRemoveUnknownTimezone=false;

var globalShowHiddenAlarms=false;

var globalIgnoreCompletedOrCancelledAlarms=true;

var globalMozillaSupport=false;

var globalWeekendDays=[0, 6];

var globalAppleRemindersMode=true;

var globalLoadedAddressbookCollections=[];

var globalActiveAddressbookCollections=[];

var globalCompatibility={anniversaryOutputFormat: ['apple']};

var globalUriHandlerTel='tel:';
var globalUriHandlerEmail='mailto:';
var globalUriHandlerProfile={
};

var globalDefaultAddressCountry='us';

var globalAddressCountryEquivalence=[
	{country: 'de', regex: '^\\W*Deutschland\\W*$'},
	{country: 'sk', regex: '^\\W*Slovensko\\W*$'}
];

var globalAddressCountryFavorites=[];

var globalContactStoreFN=['prefix',' last',' middle',' first',' suffix'];

var globalGroupContactsByCompanies=false;

var globalContactDataMinVisiblePercentage=0.95;
