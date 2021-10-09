# IoT Light Simulator
+ Toggle the light locally by actuating the button.
+ View the MQTT messages sent to the corrosponding lights topic
+ watch the light change state upon receiving MQTT messages.  
## Commands
### Receive the status of the light:
+ topic: 219191105/1 
+ message '{"source":"web","request":"true"}'
### Change the state of the light:
+ topic: 219191105/1 
+ message '{"source":"web","request":"true", "status": "on}'
## Responses
### Status update
+ topic: 219191105/1
+ message: {"source":"client","status":"off","request":false}