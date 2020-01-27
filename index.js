const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// User Routes
app.use("/api/users", require("./routes/user-routes"));

// Post Routes
app.use("/api/posts", require("./routes/post-routes"));

// Static Views
app.use(express.static("./views/"));
app.use("/", require("./routes/clientRoutes"));

// listening to server and checking db connection
const db = require("./models");
db.sequelize.sync().then(() => {
    app.listen(PORT, () =>
        console.log(`Listening on http://localhost:${PORT}`)
    );
});
