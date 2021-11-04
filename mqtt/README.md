# MQTT API
REST API to interact with MQTT Broker.  
## Install
```
npm install
```
## Run
```
npm start
```
## Example Environment File:
```
API_PORT="api port" 
API="api address" 
PORT="port" 
BROKER="mqtt broker"
BROKER_PORT="mqtt broker port"
```

## Get MQTT API
### Request
```
curl -i -H 'Accept: application/json' http://localhost:5001/
```
### Response 
```
HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: *
Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept
Content-Type: text/html; charset=utf-8
Content-Length: 13
ETag: W/"d-6LGAgYD/cKfn5niLJMOjpqQUuKU"
Date: Thu, 04 Nov 2021 10:16:16 GMT
Connection: keep-alive
Keep-Alive: timeout=5

MQTT API Live
```