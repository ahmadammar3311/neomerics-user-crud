const express = require("express");
//All express routes requiring:
var app = express();

//require('./startup/routes')(app);
//require('./startup/prod')(app);


// var spawn = require('child_process').spawn
// var bears = 0
// bears += 1
// if (process.argv[2] === 'child') {
//   var net = require('net')
//   var pipe = new net.Socket({ fd: 3 })
//   pipe.write('killme')
//   console.log('child', bears)
// } else {
//   var child = spawn(process.execPath, [__filename, 'child'], {
//     stdio: [null, null, null, 'pipe']
//   })
//   child.stdio[3].on('data', function (data) {
//     if (data.toString() === 'killme') {
//       console.log('RIP')
//       child.kill()
//     }
//   })
//   console.log('parent', bears)
//   child.stdout.pipe(process.stdout)
// }

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
// var http = require('http');
// var server = http.createServer(app);
// server.listen(3000);
module.exports = app;