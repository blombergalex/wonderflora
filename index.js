import express from "express";
import flowRouter from "./routes/flowers.js";
import plantRouter from "./routes/plants.js";
import seedRouter from "./routes/seeds.js";
import * as path from 'path';

const app = express();
const port = process.env.PORT || 3003;
const __dirname = path.resolve();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get('/', (req, res) => {
    res.render(
        "pages/home",
        {
            pageTitle: "Wonderflora",
            subTitle: "Welcome to this wonderful floral shop",
        }
    )
})

app.use('/flowers', flowRouter)

app.use('/plants', plantRouter)

app.use('/seeds', seedRouter)

app.use(express.static("public"));

app.listen(port, () => console.log(`Listening on port: ${port}`));
