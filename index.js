require('dotenv').config();
const express = require('express') //esto es lo mismo que hacer un import from tal en Angular
const {dbConnection} = require('./database/config');

//Crear el servidor express

const app = express();
//Configurar CORS

app.use(cors());


//Base de datos
dbConnection();

//Rutas

app.get('/', (req,res)=> {

    res.json({
        ok:true,
        msg: 'Hola mundo'
    })

});

app.listen(process.env.PORT, () => {
    console.log('servidor corriendo en el puerto  ' +process.env.PORT);
});