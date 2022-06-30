//Se declara la ruta
var express = require ('express');
var router = express.Router();


router.get('/', function(req,res){
    //res.send('prueba')
    res.render('index')
})

router.get('/post', function(req,res){
    res.render('posts')
})


//Al final lo exporta al apps.js
module.exports = router;