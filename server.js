const express = require("express");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

// app initialization and create port
const app = express();
const PORT = process.env.PORT || 8080;


// body parsing, static, and middleware
app.use(express.json());
// URL encoding converts characters into a format that can be transmitted over the Internet
app.use(express.urlencoded({ extended: true }));
// serve static files such as images, CSS files, and JavaScript files.
app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use("/api", htmlRoutes);



app.listen(PORT, () => console.log('listening on PORT: ${PORT}'));
// app.listen(PORT, function() {
//     console.log("App listening on PORT: " + PORT);
