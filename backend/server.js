const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
require('./database');
const { AdminRouter } = require('./routes/auth');

dotenv.config(); 

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(cors());

app.use('/auth', AdminRouter);

app.listen(PORT, () => {
  console.log("Server is Running on PORT 3001");
});
