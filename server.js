/**
 * Created by Tomás on 17-12-2017.
 */
'use strict';

/*const app = require('./app');
const port = process.env.PORT || 8000;

console.log('La conexion a la base de datos se a realizado Correctamente');
app.listen(port, () => {
    console.log('El servidor esta corriendo en el puerto: 8000')
});*/

const express         = require('express');
const bodyParser      = require('body-parser');
const methodOverride  = require('method-override');
const path            = require('path');

const app     = express();

const port = 3000;
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(methodOverride());

app.set('view engine', 'server.view.html');
app.set('views', './app/views');
app.use(express.static(path.resolve('./public')));

app.route('/');

require('./server/controller/arduino')(app);


app.listen(port, function() {
    console.log('Arduino listen in port: ' + port);
});
