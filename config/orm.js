var connection = require("./connection.js");


var orm = {
  selectAll: function() {
    var queryString = "SELECT * FROM burgers";
    connection.query(queryString, function(err, result) {
      console.log(result);
    });
  },
  insertOne: function(name, devoured) {
    var queryString = "INSERT INTO burgers SET";
    console.log(queryString);
    connection.query(queryString, [name, devoured], function(err, result) {
      console.log(result);
    });
  },
  updateOne: function(name, devoured) {
    var queryString = "UPDATE burgers SET ? WHERE ?";

    connection.query(queryString, [name, devoured], function(err, result) {
      console.log(result);
    });
  }
};

module.exports = orm;