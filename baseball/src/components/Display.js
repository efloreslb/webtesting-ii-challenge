import React from 'react';
import Dashboard from './Dashboard';

class Display extends React.Component {
   state = {
      ball: 0,
      strike: 0
   }

   incStrike = () => {
      if (this.state.strike < 2) {
         this.setState({
            ...this.state,
            strike: this.state.strike + 1
         })
      } else {
         this.setState({
            ...this.state,
            ball: 0,
            strike: 0
         })
      }
   }

   incBall = () => {
      if (this.state.ball < 3) {
         this.setState({
            ...this.state,
            ball: this.state.ball + 1
         })
      } else {
         this.setState({
            ...this.state,
            ball: 0,
            strike: 0
         })
      }
   }

   incFoul = () => {
      if (this.state.strike < 2) {
         this.setState({
            ...this.state,
            strike: this.state.strike + 1
         })
      } else {
         this.setState({
            ...this.state
         })
      }
   }

   incHit = () => {
      this.setState({
         ...this.state,
         ball: 0,
         strike: 0
      })
   }

   render() {
      return (
         <>
            <h1>Display</h1>
            <h3>Balls Total: <div data-testid="ballTotal">{this.state.ball}</div></h3>
            <h3>Strikes Total: <div data-testid="strikeTotal">{this.state.strike}</div></h3>

            <Dashboard incStrike={this.incStrike} incBall={this.incBall} incFoul={this.incFoul} incHit={this.incHit}/>
         </>
      )
   }
}

export default Display;