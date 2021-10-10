import React from "react";
import "./App.css";
import { Connector } from "mqtt-react-hooks";
import Status from "./components/Status";

const broker = process.env.REACT_APP_BROKER
const brokerPort = process.env.REACT_APP_BROKER_PORT

class Main extends React.Component {
  render(): JSX.Element {
    return (
      <div className="container">
        <h1 className="column"> IoT Light</h1>
        <Connector
          brokerUrl={`ws://${broker}:${brokerPort}`}
          options={{ keepalive: 0, path: "/mqtt" }}
        >
          <Status />
        </Connector>
      </div>
    );
  }
}

export default Main;
