
var database = function() 
{
    var mongoose = require('mongoose');
    var connectUrl = process.env.mongoconnect || 
                        'mongodb://mongo_db::27017/epl-device';

    mongoose.connect(connectUrl);

    var _device = mongoose.model('Device', require('./device.js')(), 'devices');
    

    function deviceModel() {
        return _device;
    }
}

module.exports = database;

