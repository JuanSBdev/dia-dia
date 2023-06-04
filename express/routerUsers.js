 const express = require('express')
 const router = express.Router()

 router.get('/', (req, res)=>{
    res.send('soy la ruta get de users')
 })
router.get('/detalle',(req, res)=>{
    res.send('soy la ruta users + /detalle modulada')
})
 module.exports = router;