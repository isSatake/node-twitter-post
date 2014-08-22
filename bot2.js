var twitter = require('twitter'),
    oauth = require('./oauth-settings2');

var bot = new twitter({
	consumer_key: oauth.consumer_key,
	consumer_secret: oauth.consumer_secret,
	access_token_key: oauth.access_token_key,
	access_token_secret: oauth.access_token_secret
});

exports.update = function(text){
	bot.updateStatus(text, function(data){
		if(data){
			console.log(data);
		};
	});
}
