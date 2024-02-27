import express from 'express'
import {seeds} from '../data/products.js'

const seedRouter = express.Router();

seedRouter.get('/', (req, res) => 
    res.render(
        'pages/seeds',
        {
            pageTitle: 'Seeds',
            subTitle: 'All the seeds you need',
            className: 'seeds',
            products: seeds,
        }
    )
)

export default seedRouter;