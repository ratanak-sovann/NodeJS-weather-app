const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=68430a156d6d1ec86becb16d3b974147&type=LatLon&query=' + latitude + ',' + longitude
    request({ url, json: true}, (error, {body} = {}) => {
        if (error) {
            callback('Unable to connect to weather services.', undefined)
        }
        else if (body.error) {
            callback('Unable to find location.', undefined)
        }
        else {
            callback(undefined, 'It is currently ' + body.current.temperature + ' degrees and feels like ' + body.current.feelslike + ' degrees.')
        }
    })
}

module.exports = forecast