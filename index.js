const express= require('express');
const app=express();
const PORT=3000;

app.use(express.json());

// Adding Routes
const customerRoutes = require('./routes/customerRoutes');
app.use('/customers', customerRoutes);

app.get('/', (req, res) => {
    res.send('Online Booking Management API is running');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
