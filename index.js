import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

function Test(props) {
  return <h1>Heelo,{props.name}</h1>;
}

function App() {
  return (
    <div>
      <Test name="sara" />
      <Test name="Tina" />
      <Test name="james" />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
