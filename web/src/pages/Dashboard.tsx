import React, { useState } from "react";
import { Container, Table, Button } from "react-bootstrap";
import axios from "axios";
import TableRow from "./TableRow";

type dProps = {};
type dState = {
  data:
    | [
        {
          id: string;
          name: string;
          building: string;
          room: string;
          status: string;
          dateAdded: string;
          users: [];
        }
      ]
    | [];
};
class Dashboard extends React.Component<dProps, dState> {
  constructor(props: dProps) {
    super(props);
  }

  state: dState = {
    data: [],
  };

  componentDidMount() {
    axios.get("http://localhost:5000/light", {}).then((response) => {
      this.setState({
        data: response.data,
      });
    });
  }

  render(): JSX.Element {
    return (
      <div>
        <Container fluid="sm">
          <h1>dashboard</h1>
          <Table bordered hover variant="dark">
            <thead>
              <tr>
                <th>id</th>
                <th>name</th>
                <th>building</th>
                <th>room</th>
                <th>status</th>
                <th>date added</th>
                <th>toggle</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((item, index) => (
                <TableRow
                  id={item.id}
                  name={item.name}
                  building={item.building}
                  room={item.room}
                  status={item.status}
                  dateAdded={item.dateAdded}
                />
              ))}
            </tbody>
          </Table>
        </Container>
      </div>
    );
  }
}

export default Dashboard;
