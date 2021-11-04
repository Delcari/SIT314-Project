# API
REST API to interact with MongoDB database.  
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
DB_HOST="db hostname"  
DB_USER="db username"  
DB_PASS="db password"   
PORT="port"
```
## Get API
### Request 
```
curl -i -H 'Accept: application/json' http://localhost:5000/
```
### Response
```
HTTP/1.1 200 OK
Vary: Origin
Content-Type: text/plain; charset=utf-8
Content-Length: 16
Date: Thu, 04 Nov 2021 09:51:46 GMT
Connection: keep-alive
Keep-Alive: timeout=5

The API is Live!
```