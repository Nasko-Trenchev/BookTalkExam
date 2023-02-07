const router = require('express').Router();

const homeController = require('./controllers/homeController');
const authController = require('./controllers/authController')


router.get('/', homeController.getHomePage);
router.get('/404', homeController.getErrorPage);

router.get('/login', authController.getLoginPage);
router.get('/register', authController.getRegisterPage);
router.post('/register', authController.postRegisterPage);

module.exports = router;