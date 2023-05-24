function traerDatos(){

    let iconoAnimado = document.getElementById('icono-animado')
    let temperatura = document.getElementById('termperatura')
    let tempMax = document.getElementById('tempMax')
    let tempMin = document.getElementById('tempMin')
    let humedad = document.getElementById('humedad')
    let termica = document.getElementById('termica')

    fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=2a703df5ba46fc6da5658fa493486235')
        .then( response => {return response.json()})
        .then( data =>{
            console.log(data)
            let temperatura = calcularKelvinaCelcius(data.main.temp)
            let termica = calcularKelvinaCelcius(data.main.feels_like)
            let tempMax = calcularKelvinaCelcius(data.main.temp_max)
            let tempMin = calcularKelvinaCelcius(data.main.temp_min)
            let humedad = data.main.humidity

            console.log(data.weather[0].main)
    switch (data.weather[0].main) {
        case 'Thunderstorm':
          iconoAnimado.src='animated/thunder.svg'
          break;
        case 'Drizzle':
          iconoAnimado.src='animated/rainy-2.svg'
          break;
        case 'Rain':
          iconoAnimado.src='animated/rainy-7.svg'
          break;
        case 'Snow':
          iconoAnimado.src='animated/snowy-6.svg'
          break;                        
        case 'Clear':
            iconoAnimado.src='animated/day.svg'
          break;
        case 'Atmosphere':
          iconoAnimado.src='animated/weather.svg'
            break;  
        case 'Clouds':
            iconoAnimado.src='animated/cloudy-day-1.svg'
            break;  
        default:
          iconoAnimado.src='animated/cloudy-day-1.svg'
          console.log('por defecto');
      }
        })
}

function calcularKelvinaCelcius(a){
    return parseInt(a - 273.15);
    

}