const model = require("../dal/user"); // Accessing data access layer

async function insertSingleUserData(req, res) {
    let name = req.body.username;
    let email = req.body.email;
    let address = req.body.address;
    // GET data from BODY object
    // INSERT data in user table
    model.insertUserData(name, email, address).then(function(result) {
        console.log(result)
            // Send successfully reponse
        res.jsonp({
            status: true,
            message: "SuccessFullay data saved in DB",
            data: result
        });
    }, function(err) {
        console.log(err);
        // IF some Error Occur Send Failure reponse
        res.jsonp({
            status: false,
            message: "Error while saving the data",
            data: err
        });
    })
}
async function insertMultipleUserData(req, res) {
    let userDetails = req.body;

    // GET data from BODY object
    // INSERT data in user table
    model.insertmultipleUserDetails(userDetails, function(error, result) {
        if (error) {
            let errorResult = {
                success: false,
                message: error
            }
            return res.send(errorResult);
        } else {
            // Send successfully reponse
            res.jsonp({
                status: true,
                message: "SuccessFullay data saved in DB",
                data: result
            });
        }

    });
}
async function getSingleUserData(req, res) {
    let userId = req.params.userId;
    const userInfo = await model.getSingleUserDetails(userId);
    if (userInfo.length <= 0) {
        return res.jsonp({
            status: false,
            message: "User detail not found!",
            data: []
        });
    } else {
        return res.jsonp({
            status: false,
            message: "User detail!",
            data: userInfo
        });
    }
}
async function getMultipleUserData(req, res) {
    let userId = req.params.userId;
    const userInfo = await model.getMultipleUserData(userId);
    if (userInfo.length <= 0) {
        return res.jsonp({
            status: false,
            message: "User detail not found!",
            data: []
        });
    } else {
        let userInfo = [];
        for (let i = 0; i < userInfo.length; i++) {
            setInterval(function() {
                let singleUser = {
                    name: userInfo[i].name,
                    email: userInfo[i].email,
                    address: userInfo[i].address,
                    identity: Math.random()
                }
                userInfo.push(singleUser);
            }, 3000);
        }
        return res.jsonp({
            status: false,
            message: "User detail!",
            data: userInfo
        });
    }
}

module.exports = {
    insertSingleUserData,
    getSingleUserData,
    insertMultipleUserData,
    getMultipleUserData
}