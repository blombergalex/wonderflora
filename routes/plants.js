import express from "express"
import { plants } from "../data/products.js"

const plantRouter = express.Router();

plantRouter.get('/',(req, res) => 
    res.render(
        "pages/plants",
        {
            pageTitle: "Plants",
            subTitle: "Get your greens",
            className: "plants",
            products: plants,
        }
    )
)

export default plantRouter;
