const { urlencoded } = require('express');
const express = require('express');

const config = require('./config')
const setupViewEngine = require('./config/viewEngine');

const app = express();

setupViewEngine(app);

app.use(express.static('src/public'));
app.use(urlencoded({extended: true}));

app.listen(config.PORT, () => {
    console.log(`Server is listening on port... ${config.PORT}`)
})

