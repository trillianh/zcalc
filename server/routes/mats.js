const express = require("express");
 
console.log("routed");
// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const matRoutes = express.Router();
 
// This will help us connect to the database
const dbo = require("../db/conn");
 
// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;
const axios = require('axios');
 
 
 
/* This section will help you get a single record by id
recordRoutes.route("/mats/:crateType").get(function (req, res) {
 let db_connect = dbo.getDb("zcalcdb");
 let myquery = { _id: ObjectId( req.params.id )};
 db_connect
     .collection("market")
     .findOne(myquery, function (err, result) {
       if (err) throw err;
       res.json(result);
     });
});
 */

matRoutes.route("/mats/test").post(function(req,res){
  const d = new Date();
  let time = d.getTime();
  let db_connect=dbo.getDb("zcalcdb");
  let connect = db_connect.collection("market");
  let lastupdate = -1;
  let found = connect.findOne({"_id":"lastupdate"},function(err,result){
    lastupdate = result.time;
  if(lastupdate&&time-lastupdate>3600000){
  axios.post('https://na-trade.naeu.playblackdesert.com/Trademarket/GetWorldMarketSearchList', {
    "searchResult": "4001,4003,4004,4005,4008,4009,4011,4013,4051,4057,4060,4063,4081,4085,4088,4066,4067,4082,4086,4089,4609,4601,4607,4606,4602,4619,4621,4608,4680,4651,4660,4666,4663,4654,4676,4721,4710,4681,4652,4661,4667,4664,4655,4722,4677"
  })
  .then(
    function (response) {
     // res.json(response.data);
    let db_connect=dbo.getDb("zcalcdb");
    let myquery = {};
    console.log(response.data);
    let results = response.data.resultMsg.split("|");
    let insert = [];
    for(i in results){
      let obj = results[i].split("-");
      insert.push(
        {
          replaceOne : 
          {
            filter: {"_id":obj[0]},
          replacement : {
            "_id":obj[0],
            "stock":obj[1],
            "price":obj[2],
            "trades":obj[3]
          },
          upsert : true
        }
        }
      );
    }
    const d = new Date();
    let time = d.getTime();
    insert.push({
      replaceOne :
      {
        filter: {"_id":"lastupdate"},
        replacement: {
          "_id":"lastupdate",
          "time":time
        }
      }
    });

    resp = db_connect.collection("market").bulkWrite(insert);
  
    let cd = time-lastupdate;
    res.json({
      "cooldown":cd,
      "db":returndb()
    });
  })
  .catch(function (error) {
    console.log(error);
  });

}
else{
  let cd = time-lastupdate;
  console.log("cooldown:"+time+" "+lastupdate);
  returndb(function(err,res2){
    console.log(res2[0]._id);
    res.json({
      "cooldown":cd,
      "db":res2
    });
  });
  
}
});
});

 
function returndb(callback){
  let a;
  let db_connect=dbo.getDb("zcalcdb");
  let connect = db_connect.collection("market");
  connect.find({}).toArray(callback);
}
/*
matRoutes.route("/mats/test1").post(function(req,res){
  //console.log("route");
  res.json({asdf:"a"});
});*/
module.exports = matRoutes;