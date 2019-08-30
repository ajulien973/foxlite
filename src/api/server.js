const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const totalRevenueClient = require('./client/totalRevenue.client');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  totalRevenueClient.getTotalRevenueByMerchant()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.listen(3001, () => {
  console.log('listening to http://localhost:3001');
});
