import express from "express";
import taskRoutes from "./routes/task.route.js";
import logger from "./middlewares/logger.middleware.js";

const app = express();
const port = 4000;

app.use(express.urlencoded({ extended: true }));
app.use(logger);
app.use("/", taskRoutes);

app.get("/", (req, res) => {
    res.json({
        name: "Task manager app",
        date: new Date().toLocaleDateString()
    });
});

app.listen(port, () => {
    console.log(`server running on ${port}`);
});
