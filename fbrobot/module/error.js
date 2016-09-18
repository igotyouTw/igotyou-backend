// Universal error code for this project
//
// Code format
//
//  type:code:serial number
//
// Firts two digits are type code, start from 10 to 99.
// Last digits are just serial number.
//
var _ = require('underscore')


var _errorCodes = [
  // instagram related error
  {code: 2000, msg: 'Search for tags by name failed'}
]

var ErrorModule = {
  errorMsg: function (code) {
    return _.findWhere(_errorCodes, {code: code})
  }
}

module.exports = ErrorModule
