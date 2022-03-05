let config = {
address: "localhost", // Address to listen on, can be:
// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
// - another specific IPv4/6 to listen on a specific interface
// - "0.0.0.0", "::" to listen on any interface
// Default, when address config is left out or empty, is "localhost"
port: 8080,
basePath: "/", // The URL path where MagicMirror is hosted. If you are using a Reverse proxy
// you must set the sub path here. basePath must end with a /
ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
// or add a specific IPv4 of 192.168.1.5 :
// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

useHttps: false, // Support HTTPS or not, default "false" will use HTTP
httpsPrivateKey: "", // HTTPS private key path, only require when useHttps is true
httpsCertificate: "", // HTTPS Certificate path, only require when useHttps is true

language: "en",
locale: "en-US",
logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
timeFormat: 12,
units: "metric",
// serverOnly:  true/false/"local" ,
// local for armv6l processors, default
//   starts serveronly and then starts chrome browser
// false, default for all NON-armv6l devices
// true, force serveronly mode, because you want to.. no UI on this device

modules: [
{
module: "MMM-cryptocurrency",
position: "top_center",
config: {
apikey: 'f5172654-3011-4bcd-b8c4-29cee772e462',
currency: ['ethereum', 'bitcoin'],
conversion: 'NPR',
headers: ['change24h', 'change1h', 'change7d'],
displayType: 'logoWithChanges',
showGraphs: true
}
},


{
  //disabled:true,
  module: "MMM-AVStock",
  position: "top_left",
  config: {
    apiKey : "812NTZXGZY590HYZ",
    symbols : ["AAPL", "GOOGL", "TSLA"],
    alias: ["APPLE", "GOOGLE", "TESLA"],
  }
},
 
{
module: "alert",
},
{
module: "updatenotification",
position: "top_bar"

},
{
module: "clock",
position: "lower_third",
config: {

timezone: "Asia/Kathmandu",

}
},





{
  module: "MMM-OpenWeatherMapForecast",
  header: "Weather",
  position: "top_right",
  classes: "default everyone",
  disabled: false,
  config: {
    apikey: "b2182b5862c5ba76ee255328a2e742b9",
    latitude: "27.717245",
    longitude: "85.323959",      
    iconset: "4c",
    concise: false,
    forecastLayout: "table"
  }
},
   
{
  module: "MMM-CyberSecurityNews",
  position: "bottom_bar",
  config: {
    numberOfArticles: 1,
   
  }
}
]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
