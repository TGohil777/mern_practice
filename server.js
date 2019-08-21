const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
//database
const models = require('./models');

const app = express();

const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true
  };

app.use(cors(corsOptions))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/auth',require('./routes/Account'))

models.sequelize.sync().then(() => {
    app.listen(9000, () => {
        console.log("Listening to port 9000");
    })
})
