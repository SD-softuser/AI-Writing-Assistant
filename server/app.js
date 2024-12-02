require("dotenv").config();
const express = require("express");
const cors = require("cors");
const analyzeRoute = require("./routes/analyze");
const grammarCheckRoute = require("./routes/grammercheck");
const spellCheckRoute = require("./routes/spellCheck");
const app = express();
const PORT = process.env.PORT || 8000;

//Middlewares 
app.use(cors()); //prevent cors errors
app.use(express.json());  //for parsing application/json

// routes
app.use("/api/analyze", analyzeRoute);
app.use("/api/grammarcheck", grammarCheckRoute);
app.use("/api/spellcheck", spellCheckRoute);

//start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
});
