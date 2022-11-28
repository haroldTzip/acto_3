const router = require('express').Router();
const brawllsRouter = require('./brawlls');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });



router.use('/', brawllsRouter);

module.exports = router;
