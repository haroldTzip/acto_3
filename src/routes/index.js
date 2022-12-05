const router = require('express').Router();
const brawllsRouter = require('./brawlls');



router.use('/', brawllsRouter);

module.exports = router;
