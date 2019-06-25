import React from 'react';

function Dashboard(props){

   return (
      <>
         <h1>Dashboard</h1>
         <div>
            <button data-testid="strikeButton" onClick={props.incStrike}>Add Strike</button>
            <button data-testid="ballButton" onClick={props.incBall}>Add Ball</button>
            <button data-testid="foulButton" onClick={props.incFoul}>Add Foul</button>
            <button data-testid="hitButton" onClick={props.incHit}>Add Hit</button>
         </div>
      </>
   )
}

export default Dashboard;