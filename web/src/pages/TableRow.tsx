import React, { ChangeEvent, FormEvent } from "react";
import {
  Button,
  ButtonGroup,
  Container,
  Row,
  InputGroup,
  FormControl,
  Alert,
} from "react-bootstrap";
import axios from "axios";

type tState = {
  status: string;
};
type tProps = {
  id: string;
  name: string;
  building: string;
  room: string;
  status: string;
  dateAdded: string;
  button: boolean
};

class TableRow extends React.Component<tProps, tState> {
  constructor(props: tProps) {
    super(props);

    this.toggleLight = this.toggleLight.bind(this);
  }

  state: tState = {
    status: this.props.status,
  };

  toggleLight() {
    axios
      .post(`http://localhost:5001/light/toggle/${this.props.id}`, {
        status: this.state.status == "on" ? "off" : "on",
      })
      .then((response) => {
        console.log(response);
      });
    this.setState((prevState) => ({
      status: prevState.status == "on" ? "off" : "on",
    }));
  }

  render(): JSX.Element {
    return (
      <tr>
        <th>{this.props.id}</th>
        <th>{this.props.name}</th>
        <th>{this.props.building}</th>
        <th>{this.props.room}</th>
        <th>{this.state.status}</th>
        <th>{this.props.dateAdded}</th>
        <th>
        {!(this.props.button) ? "unavailable" : 
          <Button
          type="checkbox"
          variant={
              this.state.status != "on" ? "outline-success" : "outline-danger"
            }
            onClick={this.toggleLight}
            >
            toggle
          </Button>
        }
        </th>
      </tr>
    );
  }
}

export default TableRow;
