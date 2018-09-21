import React, { Component } from 'react';
import { Col, Row, Grid } from 'react-flexbox-grid';
import './Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <Grid fluid>
          <Row between="xs">
            <Col>
              Col 1
            </Col>
            <Col>
              Col 2
            </Col>
            <Col>
              Col 3
            </Col>
          </Row>
        </Grid>
      </footer>
    );
  }
}