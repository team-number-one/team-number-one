const mysql = require('mysql');
const mysqlConfig = require('./config.js');

var connection;
if (process.env.JAWSDB_URL) {
  //Heroku deployment
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  //local host
  connection = mysql.createConnection(mysqlConfig);
}

let searchUsers = function(searchQuery, cb) {
  connection.query(`SELECT * FROM users WHERE username LIKE '%${searchQuery}%' OR display_name LIKE '%${searchQuery}%'`, (err, results) => {
    err ? cb(err, null) : cb(null, results);
  });
};

let writePost = function(squeak, cb) {
  connection.query(`INSERT INTO squeaks (user_id, text) VALUES (${squeak.userId}, '${squeak.text}')`, (err, results) => {
    err ? cb(err, null) : cb(null, results);
  });
};

let userInfo = function(id, cb) {
  connection.query(`SELECT * FROM users WHERE id = ${id}`, (err, results) => {
    err ? cb(err) : cb(null, results);
  });
};

// should eventually grab all squeaks of current user and those being 'followed'
// until follow functionality is built all squeaks will be returned
let allSqueaks = function(id, cb) {
  connection.query(`SELECT squeaks.id, squeaks.text, squeaks.created_at, users.username, users.display_name, users.profile_img_url 
                    FROM squeaks INNER JOIN users 
                    WHERE squeaks.user_id = users.id
                    ORDER BY squeaks.created_at DESC`, (err, results) => {
      err ? cb(err) : cb(null, results);
    });
};

let createUser = function(username, pw, cb) {
  
};

let logIn = function(username, pw, cb) {
  
};

module.exports.userInfo = userInfo;
module.exports.searchUsers = searchUsers;
module.exports.writePost = writePost;
module.exports.allSqueaks = allSqueaks;
module.exports.createUser = createUser;
module.exports.logIn = logIn;
