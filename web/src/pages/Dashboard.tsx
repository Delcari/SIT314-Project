import React, { useState } from "react";
import { Container, Table, Button, Col } from "react-bootstrap";
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
    this.getData = this.getData.bind(this)
  }

  state: dState = {
    data: [],
  };
  
  getData = () => {
    console.log("getting data")
    let id = sessionStorage.getItem('id')
    if (id)
    axios.get(`http://localhost:5000/light/user/${id}`, {}).then((response) => {
      this.setState({
        data: []
      })
    this.setState({
      data: response.data,
    });
  });
  else
  axios.get(`http://localhost:5000/light`, {}).then((response) => {
    this.setState({
      data: []
    })
  this.setState({
    data: response.data,
  });
});

}
  componentDidMount() {
    this.getData()
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
                  button={sessionStorage.getItem('id') ? true : false}
                  />
              ))}
            </tbody>
          </Table>
          <Button variant="outline-dark" onClick={this.getData}>reload</Button>
        </Container>
      </div>
    );
  }
}

export default Dashboard;
