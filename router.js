const {Router} = require('express');
const router = Router();

router.get('/contacto', (req,res) => {
    res.send("persona");
})

router.get('/pais', (req,res) => {
    res.send("peru");
})

module.exports = router;