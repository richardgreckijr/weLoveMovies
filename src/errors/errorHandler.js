/* 
Error handling function: Returns status code 500.
*/

function errorHandler(err, req, res, next) {
    console.error(err);
    const {
        status = 500,
        message = 'Something went wrong! 😓' 
    } = err;
    res.status(status).json({err: message});
};

module.exports = errorHandler;