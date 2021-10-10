import { useSubscription, useMqttState } from "mqtt-react-hooks";
import { useState, useEffect } from "react";
import Log from "./Log";
import Light from "./Light";
import axios from "axios";


const port = process.env.REACT_APP_API_PORT
const api = process.env.REACT_APP_API

const Status = () => {
  const { message, connectionStatus } = useSubscription(["219191105/1/#"]);
  const [messages, setMessages] = useState<string[]>([]);
  const [active, setActive] = useState<boolean>(false);
  const { client } = useMqttState();

  const publishMessage = (
    source: string,
    currentStatus: boolean,
    request: string
  ) => {
    let pMessage = {
      source: source,
      status: currentStatus ? "on" : "off",
      request: request,
    };
    if (client) {
      client.publish("219191105/1", JSON.stringify(pMessage));
    }
  };

  useEffect(() => {
    axios.get(`http://${api}:${port}/light/1`, {}).then((response : any) => {
      setActive(response.data.status == "on" ? true : false)
    });
  },[])

  useEffect(() => {
    if (message) {
      setMessages((msgs: string[]) => [...msgs, message?.message as string]);
      let status = JSON.parse(message.message as string);
      let futureStatus = false
      if (status.source != "client") {
        if (status.request == "false") {
          if (status.status == "on") {
            futureStatus = true
            setActive(true);
          }
          else if (status.status == "off") setActive(false);
        } 
        publishMessage("client", futureStatus, "false");
      }
    }
  }, [message]);

  const toggleLight = () => {
    let status = true
    if (!active) {
      setActive(true);
    } else {
      status = false
      setActive(false);
    }
    publishMessage("client", status, "false");
  };

  return (
    <div className="row">
      <div className="column">
        <h1>Connection status: {connectionStatus}</h1>
        <p>{`topic:${message?.topic} - message: ${message?.message}`}</p>
        <Log log={messages} />
      </div>
      <div className="column">
        <Light toggleLight={toggleLight} status={active} />
      </div>
    </div>
  );
};

export default Status;
