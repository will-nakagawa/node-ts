import express = require('express');
//const Controller = require('../controllers');

const router: express.Router = express();

/* GET '/' index page. */
router.get('/', function(req, res, next) {
    return res.json({title: 'Api is running'});
});

export {router};
