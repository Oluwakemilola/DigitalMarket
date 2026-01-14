export class CustomResponse {
    constructor(res) { this.res=res}

    success (statusCode, message, data=null) {
        return this.res.status(statusCode).json({
            success: true,
            message,
            data
        })
        }
error (statusCode, message, data=null) {
    return this.res.status(statusCode).json({
        success: false,
        message,
        data
    })
}

}


