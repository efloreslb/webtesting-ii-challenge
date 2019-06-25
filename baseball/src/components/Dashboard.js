import React from 'react';

function Dashboard(props){

   return (
      <>
         <h1>Dashboard</h1>
         <button onClick={props.incStrike}>Strike</button>
         <button onClick={props.incBall}>Ball</button>
         <button onClick={props.incFoul}>Foul</button>
         <button onClick={props.incHit}>Hit</button>
      </>
   )
}

export default Dashboard;