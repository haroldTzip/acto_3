const router = require('express').Router();
const BrawllController = require('../controllers/BrawllController');


router.get('/', BrawllController.getbrawlls);
router.get('/brawll-detail/:slug', BrawllController.getbrawllsByid);

module.exports= router;