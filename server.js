const express = require("express");
const fs = require("fs");
const path = require("path");

 

// app initialization and create port
const app = express();
// dynamic port for heroku deployment

const PORT = process.env.PORT || 8080;
// body parsing, static, and middleware for post route
app.use(express.json());
// URL encoding converts characters into a format that can be transmitted over the Internet
app.use(express.urlencoded({ extended: true }));

// serve static files such as images, CSS files, and JavaScript files.
app.use(express.static("public"));


require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);



// require our abstracted route folders

app.listen(PORT, () => console.log(`listening on PORT: ${PORT}`));
// app.listen(PORT, function() {
//     console.log("App listening on PORT: " + PORT);
