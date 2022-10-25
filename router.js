const {Router} = require('express');
const router = Router();
const conexion = require('./database/db')

// router.get('/contacto', (req,res) => {
//     res.send("persona");
// })

router.get('/', (req,res) => {
    conexion.query('SELECT * FROM users',(Error,reults)=>{
        
    })
})

module.exports = router;