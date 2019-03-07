import React, { Component } from 'react';
//import {Card, Button } from "react-bootstrap"
import PropTypes from 'prop-types'
import './WaveCard.css'
import { Card, Button, CardImg, CardTitle, CardText, CardGroup,
  CardSubtitle, CardBody } from 'reactstrap';

/*<Card style={{ width: '18rem' }}>
            <Card.Img className = "swellimage" variant="top" src={this.props.swellimg} />
            <Card.Body>
              <Card.Title>TITLE</Card.Title>
              <Card.Text>
              {this.props.minbreaking}
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>*/
class WaveCardComp extends Component {
    render() {
        return (
          <Card className="text-center" body inverse style={{ backgroundColor: '#333', borderColor: '#333', padding: 0}}>
          <CardImg top width="100%" src={this.props.swellimg} alt="Card image cap" />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>              {this.props.minbreaking}
            </CardText>
            <Button >{this.props.count}</Button>
          </CardBody>
        </Card>

        );
    }
}
WaveCardComp.propTypes = {
    minbreaking: PropTypes.number,
    swellimg: PropTypes.string,
    key:PropTypes.number,
    count: PropTypes.number
  }

export default WaveCardComp;