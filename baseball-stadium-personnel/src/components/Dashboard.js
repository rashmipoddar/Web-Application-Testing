import React from 'react';
import styled from 'styled-components';

import Display from './Display';
import { render } from '@testing-library/react';

const Button = styled.button`
  font-size: 1.6rem;
  padding: 10px 20px;
  border-radius: 20px;
  background-color: #8ad2f2;
  margin: 10px;
`;

export const add = current => {
  return current + 1;
};

class Dashboard extends React.Component {

  state = {
    balls: 0,
    strikes: 0
  }

  addStrike = (event) => {
    event.preventDefault();
    this.setState({
      strikes: this.state.strikes + 1
    })  
  }


  addBall = (event) => {
    event.preventDefault();  
    // this.setState({
    //   balls: this.state.balls + 1
    // })  
    this.setState({
      balls: add(this.state.balls)
    })
  }


  handleFoul = (event) => {
    event.preventDefault();
    if (this.state.strikes === 0) {
      this.setState({
        strikes: 1
      })
    } else if (this.state.strikes === 1) {
      this.setState({
        strikes: 2
      })
    }
  }


  handleHit = (event) => {
    event.preventDefault();
    this.setState({
      balls: 0,
      strikes: 0
    })
  }

  componentDidUpdate() {
    if (this.state.strikes === 3 || this.state.balls === 4) {
      this.setState({
        balls: 0,
        strikes: 0
      })
    }
  }

  render() {
    return (
      <>
        <Display balls={this.state.balls} strikes={this.state.strikes}/>
        <form>
          <Button onClick={this.addStrike}>Strike</Button>
          <Button onClick={this.addBall}>Ball</Button>
          <Button onClick={this.handleFoul}>Foul</Button>
          <Button onClick={this.handleHit}>Hit</Button>
        </form>
      </>
    )
  }
  
  
}

export default Dashboard;