var express = require('express');
var app = express();
var path = require('path');
var request = require('request');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/public', express.static(path.join(__dirname, 'static')));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/static/index.html'));
});

//var uri = 'https://api.fortnitetracker.com/v1/profile/{platform}/{epic-nickname}';
//pc, xbl, psn
// TRN-Api-Key: 46eb9223-0c3c-4274-b197-c3f906ff697b
var uri = 'https://api.fortnitetracker.com/v1/profile/';
app.post('/', function(req,res) {
    console.log(req.body);
    request.get(uri + req.body.platform + '/' + req.body.name, {
        headers: {
            'TRN-Api-Key': '46eb9223-0c3c-4274-b197-c3f906ff697b'
        }},function(error, response, body) {
            console.log(body);
            res.json(body);
        });
});
var port = process.env.PORT || 3000;
app.listen(port);
