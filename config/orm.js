var connection = require("./connection");

var orm ={
    selectAll: function(table, callback){
        var queryString = "Select * FROM ??";
        connection.query(queryString,[table], function(err, result){
            if(err) throw err;
            callback(result);
        });
    },


    // insertOne: function(table, column, burgerInput, callback){
    //     var queryString = "INSERT INTO " + table + "(" + burger_name + ") VALUES(?)";

    //     connection.query(queryString, [burgerInput], function(err, data){
    //         if(err) throw err,
    //         callback(data);
    //     });
    // },

    updateOne: function(table, column, colValue, devoured, callback){
        var queryString = "UPDATE " + table + "SET " + column + '=?' + " WHERE " + devoured + "=?";
        
        connection.query(queryString, [colValue, devouredVal], function(err, data){
            if(err) throw err;
            callback(data);
        });
     },

     deleteOne: function(table, devoured, devouredVal, callback){
         var queryString = "DELETE FROM " + table + ' WHERE ' + devoured + '=?';

         connection.query(queryString, [devouredVal], function(err, data){
             if(err) throw err;
             callback(data);
         });
     }
};

module.exports = orm;