var UserMeta = require('User.js'),
    connection = require('index.js')

var User = connection.define('users', UserMeta.attributes, UserMeta.options)

module.exports.User = User
