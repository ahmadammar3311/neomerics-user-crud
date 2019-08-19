const app = require('../app')
const bodyParser = require("body-parser")

module.exports = function(app) {
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))
        //User Routes
    userRoute.use('/api/v2', require('../routes/user'));
    app.use(function(req, res, next) {
        var err = new Error("Not Found")
        err.status = 404
        next(err)
    })
}