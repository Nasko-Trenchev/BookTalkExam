const express = require('express');

const config = require('./config')
const setupViewEngine = require('./config/viewEngine');
const routs = require('./router');
const initDatabase = require('./config/databaseInit');
const authMiddleware = require('./middlewares/authMiddleware')

const app = express();

setupViewEngine(app);

app.use(express.static('src/public'));
app.use(express.urlencoded({extended: true}));
app.use(authMiddleware.authentication);
app.use(routs);

initDatabase()
.then(app.listen(config.PORT, () => {
    console.log(`Server is listening on port... ${config.PORT}`)
}))
.catch(err => console.log(err))