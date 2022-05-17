import logo from './logo.svg';
import './App.css';
import './Crate.js';
import CrateForm from './CrateForm.js';
import CrateTable from './CrateTable';
import Crate from './Crate.js';
import { render } from '@testing-library/react';
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {rows: []};
    
    this.addCrateRow = this.addCrateRow.bind(this);
  }
  addCrateRow(e) {
    const newRow = (<Crate />);
    let r = this.state.rows;
    r.push(newRow);
    this.setState({rows: r});
    
  }
  render() {
    const rows = this.state.rows;
    return (
    <div className="App">
        <br></br>
        <CrateForm handleSubmit={this.addCrateRow} defaultTradeLevel="67" />
        <CrateTable rowArray={rows} />
    </div>
    );
  }
}


export default App;
