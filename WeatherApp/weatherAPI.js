const urlStart = 'https://api.openweathermap.org/data/2.5/weather?appid=9230a0786b5f22380403dde376a51152'

export const getWeather = (lat,lon) => {
    const urlEnd = urlStart+'&lat='+lat+'&lon='+lon+"&units=metric"
    console.log(urlEnd)

    //fetch is a built in function used to make requests to the internet
    //fetch returns a promise ----- go off and do something, when complete or failed come back and tell us what happened
    //here we have the promise to print the response to the console
    return fetch(urlEnd)
        .then(response => response.json())
        .then(json => ({
          weather: json.weather[0].main,
          temperature: json.main.temp
        }))
        .catch((error)=>{console.log(("Api call error"))
      })
                  //alert(error.message);
                //
}
