//Requires
var express = require('express');
var mongoose = require('mongoose');

//variables
var app = express();

//Conexion a mongobd
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', (err, res) => {

    if (err) throw err;

    console.log('MongoBD puerto 27017 online: \x1b[32m%s\x1b[0m', 'online');

})

//Rutas
app.get('/', (req, res, next) => {
    res.status(200).json({
        ok: true,
        mensaje: 'Peticion realizada correctamente GET'
    })
})

//escuchar peticiones

app.listen(3000, () => {
    console.log('Express server puerto 3000 online: \x1b[32m%s\x1b[0m', 'online');
});