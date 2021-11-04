# Client
Mockup IoT Light
+ Toggle the light locally by actuating the button.
+ View the MQTT messages sent to the corresponding lights topic
+ Watch the light change state upon receiving MQTT messages.  
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
REACT_APP_ID="light ID"
REACT_APP_API="api address" 
REACT_APP_API_PORT="api port"
REACT_APP_BROKER="mqtt broker" 
REACT_APP_BROKER_PORT="mqtt broker port"
```
## Commands
### Request the status of the light:
```
topic: 219191105/1 
message '{"source":"web", "request":"true"}'
```
### Change the state of the light:
```
topic: 219191105/1 
message '{"source":"web", "request":"true", "status": "on"}'
```
## Responses
### Status update
```
topic: 219191105/1
message: {"source":"client", "request":"false", "status":"off"}
```