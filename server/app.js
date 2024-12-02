const express = require("express"); 
const cors = require("cors"); 
require("dotenv").config();
const app = express(); 
const PORT = process.env.PORT || 8000; 

//Middlewares 
app.use(cors()); //prevent cors errors
app.use(express.json());  //for parsing application/json


//start server

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});
