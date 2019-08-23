import express = require('express');
import ProductController from '../Controllers/ProductController';


const router: express.Router = express();

/* GET '/' index page. */
router.get('/', function(req, res, next) {
    return res.json({title: 'Api is running'});
});

/* GET Products Routes */
router.get('/products', (...args) => (new ProductController(args)).getAll());
router.get('/products/:id', (...args) => (new ProductController(args)).getById());

export {router};
