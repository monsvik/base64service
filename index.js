var https = require('https');

module.exports = {

    encode: function(data, callback){

        if (typeof data !== "string") return callback('data needs to be a string');

        https.get({
            host: 'base64.no',
            port: 443,
            path: '/json/enc/' + data,
            headers: {
                'Content-Type': 'application/json'
            }
        }, function(res){

            res.setEncoding('utf8');
            res.on('data', function(chunk){
                callback(null, JSON.parse(chunk).base64);
            });

        });
    },

    decode: function(data, callback){

        if (typeof data !== "string") return callback('data needs to be a string');

        https.get({
            host: 'base64.no',
            port: 443,
            path: '/json/dec/' + data,
            headers: {
                'Content-Type': 'application/json'
            }
        }, function(res){

            res.setEncoding('utf8');
            res.on('data', function(chunk){
                callback(null, JSON.parse(chunk).plain);
            });

        });
    }
};
