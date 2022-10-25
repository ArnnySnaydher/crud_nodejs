const express = require('express')
//invocando a express
const app = express();

// //Ruta definida para la raiz
// app.get('/', (req, res) => {
//     res.send('hola');
// })

//motor de plantilla
app.set('view engine', 'ejs');
app.use('/',require('./router'));

app.listen(5000, () => {
    console.log('SERVER corriendo en http://localhost:5000');
})