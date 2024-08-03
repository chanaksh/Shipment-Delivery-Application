const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/shipment-delivery', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/shipments', require('./routes/shipmentRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
