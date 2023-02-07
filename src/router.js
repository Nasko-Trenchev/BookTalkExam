const router = require('express').Router();

const homeController = require('./controllers/homeController');


router.get('/', homeController.getHomePage);
router.get('/404', homeController.getErrorPage);

module.exports = router;