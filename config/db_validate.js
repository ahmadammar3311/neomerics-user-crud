const db = require('./db.config');

exports.executeQuery = function(query, callback) {
    db.getConnection(function(err, connection) {
        if (err) {
            connection.release();
            throw err;
        }
        connection.query(query, function(err, rows) {
            connection.release();
            if (!err) {
                callback(null, { rows: rows });
            }
        });
        connection.on('error', function(err) {
            throw err;
            return;
        });
    });
}