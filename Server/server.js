const express = require('express');
const app = express();
const connectDB = require('./config/db');


connectDB();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/food', require('./routes/foodRoutes'));
app.use('/api/order', require('./routes/orderRoutes'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port${PORT}`);
});