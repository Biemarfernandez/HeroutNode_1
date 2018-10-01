const http = require('http');
const bodyParser = require('body-parser');
const express = require('express');
const Router = require('./config/routes');
const path = require('path');

const app = express();
const server = http.createServer(app);
//require('./connect/connect-DB');


app.set('port', process.env.PORT || 3000);

//enviando archivos estaticos
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '../public')));

app.use('/users', Router);

// iniciando el servidor
server.listen(app.get('port'), () => {
	console.log('Servidor corriendo en el port', app.get('port'));
});