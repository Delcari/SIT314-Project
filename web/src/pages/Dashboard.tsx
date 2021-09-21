import React, { useState } from "react";
import { Container, Table } from "react-bootstrap";

function Dashboard() {
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
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>0</td>
              <td>hallway</td>
              <td>apt 43</td>
              <td>kitchen</td>
              <td>active</td>
              <td>21:09:21</td>
            </tr>
            <tr>
              <td>1</td>
              <td>room</td>
              <td>apt 43</td>
              <td>dining room</td>
              <td>inactive</td>
              <td>21:08:21</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default Dashboard;
