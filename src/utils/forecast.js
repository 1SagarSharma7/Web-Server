const request = require("request")
const forecast = (lat, long, callback) => {
                    
    const url = "http://api.weatherstack.com/current?access_key=5e85f90e115bdece1f53ecab8ebcc9e1&query=" + lat + "," + long 
    // + "&units=f" // for getting the temperature in farhenit

request({url: url, json: true}, (error, {body}) => {
        
        if(error){
                callback("Unable to connect to weather service!", undefined)
            }
            else if(body.error){
                    callback(body.error.info, undefined)
                }
                else{
                        callback(undefined, body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature  + " degrees out. It feels like " + body.current.feelslike + "  degrees out. (" + body.current.observation_time + ")") 
                    }
                } )
}

module.exports = forecast