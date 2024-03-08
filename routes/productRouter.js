import express from 'express';
import { products } from '../data/products'

const productRouter = express.Router();

productRouter.get('/productName', (req, res) => {
    const productName = req.params.productName;

    const product = products.filter(item => item.name === productName)
    console.log(product + productName)

    res.render(
        'pages/product',
        {
            pageTitle: "Wonderflora",
            subTitle: "Get your favourites",
            // className: "plants",
            // products: plants,
            product: product[0]
        }
    )
})

export default productRouter;