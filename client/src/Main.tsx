import React from "react";
import "./App.css";
import { Connector } from "mqtt-react-hooks";
import Status from "./components/Status";

class Main extends React.Component {
  render(): JSX.Element {
    return (
      <div className="container">
        <h1 className="column"> IoT Light</h1>
        <Connector
          brokerUrl="ws://broker.emqx.io:8083"
          options={{ keepalive: 0, path: "/mqtt" }}
        >
          <Status />
        </Connector>
      </div>
    );
  }
}

export default Main;
