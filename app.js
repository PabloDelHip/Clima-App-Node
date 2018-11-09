//se utiliza options cuando solo se utiliza un comando en la consola
//por ejemplo node app -COMANDO "tarea"
//en lugar de node app Comando listar Comando tarea
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true,
    }
}).argv;

const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

let getInfo = async(direccion) => {

    try {
        let cordenadas = await lugar.getLularLatLng(direccion);
        let temp = await clima.getClima(cordenadas.lat, cordenadas.lng);
        return `El clima en ${cordenadas.direccion} es de ${temp}`;
    } catch (e) {
        return `no se pudo determinar el clima en ${direccion}`;
    }

}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));

// lugar.getLularLatLng(argv.direccion)
//     .then(resp => {
//         console.log(resp)
//     })
//     .catch(e => console.log(e));
// const axios = require('axios');
// // AIzaSyAIl_jbGshP-f5oOkfd6kw2x1Rb-54utsM

// clima.getClima('20.6596988', '-103.3496092')
//     .then(resp => {
//         console.log(resp);
//     })
//     .catch(e => console.log(e));