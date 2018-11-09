const morgan = require('morgan');
const express = require('express')
const app = express();

const PORT = 1212;

//Views
const layout = require('./views/layout');

//Database
const models = require('./models');
const db = models.db;
db.authenticate().
then(() => {
  console.log('connected to the database');
})

async function syncTables() {
  try {
    await models.Page.sync();
    await models.User.sync();
    app.listen(PORT, () => {
      console.log(`App is listening in port ${PORT}`)
    })
  } catch (error) {
    console.error(error);
  }
}
syncTables();

app.use(express.urlencoded({
  extended: false
}));

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.send(layout(''));
})
