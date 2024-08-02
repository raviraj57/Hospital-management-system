const express = require('express');
const dotenv = require("dotenv");
const colors = require("colors");
const cors = require('cors');
const bodyParser = require('body-parser');
const patientsRouter = require('./routes/patients');
const doctorsRouter = require('./routes/doctors');
const appointmentsRouter = require('./routes/appointments');
const authRouter = require('./routes/authRouter');
const connectDB = require("./config/db");
const doctorCardRoutes = require('./routes/doctorCard');
const bloodDonations =require('./routes/bloodDonations')
//dot config
dotenv.config();

//mongodb connection
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());



app.use('/patients', patientsRouter);
// app.use('/doctors', doctorsRouter);
app.use('/appointments', appointmentsRouter);
app.use('/', authRouter); 
app.use('/doctorCard', doctorCardRoutes); 
app.use('/bloodDonations',bloodDonations);



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
