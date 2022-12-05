const fs= require('fs');
const path = require('path');
const db = require('../database/models');






module.exports = {
    
    getbrawlls: function(req,res) {
       db.personajes.findAll()
        .then(function(personajes){
            res.render(path.resolve(__dirname, '../views/home'), {personajes: personajes} ) 
            
        })
    }

    

};


