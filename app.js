var restify = require('restify');
var builder = require('botbuilder');

// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
   console.log('%s listening to %s', server.name, server.url); 
});

// Create chat connector for communicating with the Bot Framework Service
var connector = new builder.ChatConnector({
    appId: '9a4b00d6-fcc7-48da-94cf-649b05b855ea',
    appPassword: 'ksUW806@|)!yfknbETZZZ23'
});

// Listen for messages from users 
var bot = new builder.UniversalBot(connector) ;
server.post('/api/messages', connector.listen());


//---------------
//Bot Dialog
//--------------

bot.dialog('/', [
    function(session){
        builder.Prompts.text(sessions, "what is your name?");
    },

    function(session,args,next){
        sessions.send('hello,' +args.response 'welcome to NowBot!:)');
    }

]
);