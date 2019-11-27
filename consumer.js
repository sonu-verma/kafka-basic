var kafka = require("kafka-node"),
  Consumer = kafka.Consumer,
  client = new kafka.KafkaClient(),
  consumer = new Consumer(client, [{ topic: "testTopic", partition: 0 }], {
    autoCommit: false
  });

var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "user",
    password: "root",
    database: "node_test"
});
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    //Insert a record in the "customers" table:
    var sql = "INSERT INTO customers (first_name,last_name) VALUES ('Highway','test')";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });
});


consumer.on("message", function(message) {
  //  message1 = JSON.stringify(message.value);
    obj = JSON.parse(message.value);




});


