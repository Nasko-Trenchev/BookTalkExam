const router = require('express').Router();

const homeController = require('./controllers/homeController');
const authController = require('./controllers/authController')
const bookController = require('./controllers/bookControler');

router.get('/', homeController.getHomePage);
router.get('/404', homeController.getErrorPage);

router.get('/login', authController.getLoginPage);
router.post('/login', authController.postLoginPage);
router.get('/register', authController.getRegisterPage);
router.post('/register', authController.postRegisterPage);
router.get('/logout', authController.getLogout);

router.get('/create', bookController.getCreatePage)

module.exports = router;