const express = require("express");
// const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require('dotenv');

dotenv.config();


// mongoose.connect(`mongodb+srv://Books_DB:${process.env.DB_PASSWORD}@clusterbooks.ffvfr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
    
mongoose.connect(`mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASSWORD}@crudpi.ufz1r.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connect to MongoDB.");
})
    .catch(err => {
        console.error("Connection error", err);
        process.exit();
    });
const app = express();
const PORT = 8000;
app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.send("It works!");
});
require('./routes')(app);

app.listen(process.env.PORT ||PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

