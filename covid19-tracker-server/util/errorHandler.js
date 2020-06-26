const process = function (res, errCode, errMessage, errObj)
{
    return res.status(errCode).json({msg:errMessage, data: errObj});
}

const ErrorCodes = {
    BadRequest: 400,
    Unauthorized: 401,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    PreconditionFailed: 412,
    UnsupportedMediaType: 415,
    InternalServerError: 500
}
module.exports = {status:ErrorCodes, process:process};