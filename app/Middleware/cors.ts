// Middleware to CORS
const cors = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'X-Requested-With, Content-Type, X-Access-Token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');
    next();
};

export {cors};
