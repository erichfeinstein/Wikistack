const morgan = require('morgan');
const express = require('express')
const app = express();

app.use(express.urlencoded({
    extended: false
}));

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.send('Hello World!')
})

const PORT = 1212;

app.listen(PORT, () => {
    console.log(`App is listening in port ${PORT}`)
})