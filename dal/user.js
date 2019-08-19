const db = require('../config/db.config'); // Database pool instance

// Insert Activity Field in tables
function insertUserData(name, email, address) {
    let query = `INSERT INTO neomerics.user (name, email, address)
       VALUES (?, ?, ?, ?, ?, ?)`;
    console.log('Query ', query);
    return new Promise(function(resolve, reject) {
        db.query(query, [name, email, address],
            function(err, data) {
                return (err ? reject(err) : resolve(data));
            });
    })
}

function insertmultipleUserDetails(userDetails, callback) {
    console.log(patterndetails);
    let query = `INSERT INTO neomerics.user 
                (name, email, address)
                VALUES`
    for (let i = 0; i < userDetails.length; i++) {
        query += ` ('${userDetails[i].name}',${userDetails[i].email},${userDetails[i].address})`
        if (i < userDetails.length - 1) {
            query += ',';
        }
    }
    db.query(query, callback);
}

function getSingleUserDetails(userId) {
    console.log("get work order detail ", WorkOrderId);
    let query = `SELECT * FROM  neomerics.user  WHERE Id = ?`;
    return new Promise(function(resolve, reject) {
        db.query(query, [userId], function(err, data) {
            return err ? reject(err) : resolve(data);
        });
    });
}

function getMultipleUserData(userId) {
    console.log("get work order detail ", WorkOrderId);
    let query = `SELECT * FROM  neomerics.user`;
    return new Promise(function(resolve, reject) {
        db.query(query, function(err, data) {
            return err ? reject(err) : resolve(data);
        });
    });
}
module.exports = {
    insertUserData,
    insertmultipleUserDetails,
    getSingleUserDetails,
    getMultipleUserData
}