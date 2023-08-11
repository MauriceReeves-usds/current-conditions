import React, { useState, useEffect } from 'react';
import './App.css';
import {DateFooter} from "./components/DateFooter";
import {TimeFooter} from "./components/TimeFooter";

function App() {
    const [dateState, setDateState] = useState(new Date());
    useEffect(() => {
        setInterval(() => setDateState(new Date()), 1000);
    }, []);
  return (
    <div className="App">
      <header className="App-header">
        <p className="current-conditions">Your current conditions!</p>
      </header>
      <footer className="App-footer">
          <DateFooter date={dateState} />
          <TimeFooter date={dateState} />
      </footer>
    </div>
  );
}

export default App;
