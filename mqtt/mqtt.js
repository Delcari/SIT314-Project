const mqtt = require('mqtt');
const express = require('express');
const axios = require('axios')

const app = express();

//Cross-Origin Request Headers
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const port = process.env.PORT || 5001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const client = mqtt.connect("mqtt://broker.emqx.io:1883");

client.on('connect', () => {
    client.subscribe(`219191105/#`, err =>{
        if (!err) {
            console.log('connected');
        }
    });
});

const updateLight = (id, status) => {
    axios.post(`http://localhost:5000/light/update/${id}`, {
        status: status
      })
      .then((response) => {
        console.log(response.data);
      });
}

client.on('message', (topic, message) => {
    console.log(topic)
    const data = JSON.parse(message)
    console.log(data)
    const id = topic.split('/')[1]
    if (data.source == "client")
    {
        updateLight(id, data.status)
    }
});

app.post('/light/toggle/:id', (req, res) => {
    const { status } = req.body;
    const { id } = req.params;
    const topic = `219191105/${id}`;
    const command = `{"source":"web","status":"${status}","request":"false"}`
    
    client.publish(topic, command, () => {
        res.send("published new message");
    });
});

app.get('/', (req, res) => {
    res.send("MQTT API Live");
})

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
