const errorHandlerMiddleware = async(err, req, res, next) => {
    return res.status(500).json({msg: `Something went wrong, Please try later`});
}

module.exports = errorHandlerMiddleware;