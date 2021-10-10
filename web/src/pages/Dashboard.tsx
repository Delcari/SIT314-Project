import React, { useState } from "react";
import { Container, Table, Button } from "react-bootstrap";
import axios from "axios";

type dProps = {};
type dState = {
  data:
    | [
        {
          id: string;
          group: string;
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
                <th>group</th>
                <th>building</th>
                <th>room</th>
                <th>status</th>
                <th>date added</th>
                <th>toggle</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((item, index) => (
                <tr>
                  <th>{`${item.id}`}</th>
                  <th>{`${item.group}`}</th>
                  <th>{`${item.building}`}</th>
                  <th>{`${item.room}`}</th>
                  <th>{`${item.status}`}</th>
                  <th>{`${item.dateAdded}`}</th>
                  <th>
                    <Button
                      type="checkbox"
                      variant={
                        item.status != "on" ? "outline-success" : "outline-danger"
                      }
                    >
                      toggle
                    </Button>
                  </th>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </div>
    );
  }
}

export default Dashboard;
