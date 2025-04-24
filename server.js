const express = require("express");

//Routers
const userRoutes = require('./routers/userRoute');
const examRouter = require("./routers/examRoute")
const studenRoutes = require('./routers/studentRoutes');
const questionRoute = require('./routers/quetionRoute');
const resultRoute = require('./routers/resultsRoute');

const cors = require("cors");

//import DB
const connectDB = require("./config/db");

//body parser
const bodyParser = require("body-parser");

//env config
require("dotenv").config();

connectDB();

const app = express();
app.use(cors());

//parsing incoming JSON request
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.use('/api/auth', userRoutes);

//exams
app.use('/api/exam', examRouter);

//questions
app.use('/api/questions', questionRoute)

//students
app.use('/api/students', studenRoutes);

//result
app.use('/api/result', resultRoute)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on the port ${PORT}`);
})