const express=require('express');
const app = express();
const bodyParser = require('body-parser');

app.use('/', express.static('public'));

const listener = app.listen(3000, () => {
    console.log('server has started at ', listener.address().port)
});