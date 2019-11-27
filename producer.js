var kafka = require("kafka-node"),
  Producer = kafka.Producer,
  client = new kafka.KafkaClient(),
  producer = new Producer(client);

let count = 0;

producer.on("ready", function() {
  console.log("ready");
 // setInterval(function() {
    const payloads = [
      { topic: "testTopic", messages: JSON.stringify({'UserId':'DWP0001','first_name':'sonu','last_name':'verma'}), partition: 0 }
    ];

    producer.send(payloads, function(err, data) {
      console.log(data);
    });
 // }, 5000);
});

producer.on("error", function(err) {
  console.log(err);
});
