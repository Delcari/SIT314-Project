import { useSubscription, useMqttState } from "mqtt-react-hooks";
import { useState, useEffect } from "react";
import Log from "./Log";
import Light from "./Light";

const Status = () => {
  const { message, connectionStatus } = useSubscription(["219191105/1/#"]);
  const [messages, setMessages] = useState<string[]>([]);
  const [active, setActive] = useState<boolean>(false);
  const { client } = useMqttState();

  const publishMessage = (
    source: string,
    currentStatus: boolean,
    request: boolean
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
    if (message) {
      setMessages((msgs: string[]) => [...msgs, message?.message as string]);
      let status = JSON.parse(message.message as string);
      if (status.source != "client") {
        if (status.request == "true") {
          publishMessage("client", active, false);
        } else {
          if (status.status == "on") setActive(true);
          else if (status.status == "off") setActive(false);
        }
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
    publishMessage("client", status, false);
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
