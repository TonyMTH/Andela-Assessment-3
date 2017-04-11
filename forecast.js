
var https = require('https');
	//passing two parameters here in function i.e. longitude and latitude

function forecast(long,lat){

	https.get('https://api.darksky.net/forecast/ee594e2bad6a53478c3c4f617a5467a3/'+long+','+lat, function(response){
	
	var info = '';

	response.on('data',function(chuck){
		info += chuck;
	});

	response.on('end',function(){
		if(response.statusCode === 200){
			try{
				//parsing the string in json object
				var data = JSON.parse(info);
				console.log('Current Weather is '+data.currently.summary+' in '+data.timezone+'.');
			}catch(error){
				console.log('Check your figures');
			}
		}else{
			console.log('Hmm, network problem or something else occured');
		}
	});
});
}

//here we have to export this function to use that in our main file  i.e. app.js
module.exports.forecast = forecast;