var orm = require("../config/orm.js");

var burger = {
    all: function(cb){
        orm.all("burgers", function(result){
            cb(result);
        });
    },
    insertOne: function(cols,vals,cb){
        orm.insertOne("burgers", cols, vals, function(result){
            cb(result);
        });
    },
    updateOne: function(objColVals, condition, cb){
        orm.updateOne("burgers", objColVals, condition, function(result){
            cb(result);
        });
    }
};


module.exports = burger;