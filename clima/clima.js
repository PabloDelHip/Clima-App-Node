const axios = require('axios');
const getClima = async(lat, lng) => {
    //axios
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=imperial&appid=14f8733bbde59ff6b4ff3bdc129e9279`);

    return resp.data.main.temp;
}


module.exports = {
    getClima
}