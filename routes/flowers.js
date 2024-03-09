import express from "express"
import { flowers } from "../data/products.js"
import productRouter from "./productRouter.js";

const flowRouter = express.Router();

flowRouter.get('/',(req, res) => 
    res.render(
        "pages/flowers",
        {
            pageTitle: "Flowers",
            subTitle: "Can't get enough of them",
            className: "flowers",
            products: flowers
        }
    )
)

flowRouter.use('/', productRouter);


export default flowRouter;