let config = {
	address: "localhost",
	port: 8080,
	basePath: "/",
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],

	useHttps: false,
	httpsPrivateKey: "",
	httpsCertificate: "",

	language: "en",
	locale: "en-US",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"],
	timeFormat: 24,
	units: "metric",

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar",
		},
		{
			module: "clock",
			position: "top_center",
		},
		{
			module: "MMM-Dad-Jokes",
			position: "middle_center",
			config: {
				updateInterval: 10000,
				fadeSpeed: 2500
				}
		},
		{
			module: "calendar",
			position: "top_left",
			config: {
				coloredText: false,
				coloredBorder: false,
				coloredSymbol: false,
				coloredBackground: false,
				calendars: [
					{
						url: 'ICAL API',
						symbol: 'calendar', lkjhgfds
						auth: {
							user: 'GMAIL USER',
							pass: 'GMAIL PW',
							method: 'basic'
						}
					},
				],
			}
		,
		{
			module: "weather",
			position:"top_right",
			header: "Weather Forecast",
			config: {
				weatherProvider: "openweathermap",
				type: "forecast",
				location: "Timisoara",
				locationID: "665087",
				apiKey: "OPEN WEATHER MAP API KEY"
			}
		},
		{
		module: "MMM-OpenmapWeather",
		position: "top_left",
		header: "Current Weather",
		config: {
			location: "Timisoara, Romania",
			locationID: "665087",
			appid: "OPEN WEATHER MAP API KEY",
      		colorIcon: true,
			units: "metric"
		}
	    },
		{
			module: 'MMM-KeyBindings',
    		config: {
				evdev: { enabled: false },
        		enableKeyboard: true
			}
			
		},
		{
			module: "MMM-WeeklySchedule",
			position: "top_right",
			header: "Paul's classes",
			config: {
				schedule:{
					timeslots: ["8:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00"],
					lessons: {
						mon: ["", "PLS", " ", " ", " ", " ", "LINUX"],
						tue: ["", "ES", "DP", "DT", "EMC", " ", " "],
						wed: ["DT", "ES", "PE", " ", " ", " ", " "],
						thu: ["AVS", "PLS", " ", " ", " ", "AVS", " "],
						fri: ["PE", "", " ", "EEC", " ", " ", " "],
					}
				},
			showNextDayAfter: "20:00"	
			}
			
		},
		{
			module: "MMM-Breathwork",
			position: "bottom_right",
		  },
	   {
		module: "MMM-WeatherDependentClothes",
		position: "bottom_center",
		config: {
			location: "Timisoara, Romania",
			locationID: "665087",
			appid: "OPEN WEATHER MAP API KEY",
		}
	  },
	  {
	  	module: 'MMM-GmailFeed',
 		position: 'middle_center',
 		config: {
  		username: 'GMAIL USER',
  		password: 'GMAIL APP PASSWORD',
  		updateInterval: 60000,
  		maxEmails: 10,
  		maxSubjectLength: 60,
  		maxFromLength: 20,
  		playSound: true,
  		autoHide: true,
  		displayMode: "table"
 		}
	},
	{
	module: "MMM-Traffic",
	position: "top_left",
	config: {
		accessToken: "ACCES TOKEN",
		originCoords: "21.233707623804474, 45.736874558360995",
		destinationCoords: "21.228976681634673, 45.76881442761125",
		firstLine: "{duration} mins",
		secondLine: "Work to Mall",
	}
},
{
	module: "MMM-Traffic",
	position: "top_left",
	config: {
		accessToken: "ACCES TOKEN",
		originCoords: "21.233707623804474, 45.736874558360995",
		destinationCoords: "21.228976681634673, 45.76881442761125",
		firstLine: "{duration} mins",
		secondLine: "Work to Mall",
		mode: 'walking'
	}
},		
		{
			module: 'MMM-Carousel',
			position: 'bottom_bar',
			config: {
				transitionInterval: 100000,
				mode: 'slides',
				showPageIndicators: true,
				showPageControls: true,
				slides: {
					main: ['clock', 'weather','MMM-Dad-Jokes', 'MMM-OpenmapWeather', 'MMM-WeatherDependentClothes'],
					"Slide 2": ['MMM-Dad-Jokes', 'MMM-Breathwork', 'MMM-Traffic'],
					"Slide 3": ['MMM-GmailFeed', 'calendar', 'MMM-WeeklySchedule']
	
				},
				keyBindings: { 
					enabled: true,
					mode: "DEFAULT",
					map: {
						Slide0: "ArrowDown",
						Slide1: "ArrowLeft",
						Slide2: "ArrowRight",
						Slide3: "ArrowUp"
					}
				}},
			},
		
	]

};
/* smt else to add here */
/*************** DO NOT EDIT THE LINE BELOW ***************/
/* aaaaaaaaaaaaaaaaaaaaaaaa */


if (typeof module !== "undefined") {module.exports = config;}