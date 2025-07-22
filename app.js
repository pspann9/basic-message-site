const express = require('express');
const path = require('node:path');
const app = express();
const PORT = 3000;

const indexRouter = require('./routes/indexRouter')

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT} at http://localhost:3000`);
})