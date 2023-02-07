const express = require('express');

const config = require('./config')
const setupViewEngine = require('./config/viewEngine');
const router = require('./router');

const app = express();

setupViewEngine(app);

app.use(express.static('src/public'));
app.use(urlencoded({extended: true}));
app.use(router);


app.listen(config.PORT, () => {
    console.log(`Server is listening on port... ${config.PORT}`)
})

