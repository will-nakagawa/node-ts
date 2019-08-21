// catch 404 and forward to error handler
const notFound = () => (req, res, next) => {
    const error = {obj: new Error('Not Found'), status: 404};
    next(error);
};

// error handler
const errorHandler = () => (err, status, req, res, next) => {

    // set locals, only providing error in development
    res.locals.message = err.obj.message;
    // res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.json({err: err.obj.message});
};

export {notFound, errorHandler}
