const router = require('express').Router();
const BrawllController = require('../controllers/BrawllController');


router.get('/', BrawllController.getbrawlls);


module.exports= router;