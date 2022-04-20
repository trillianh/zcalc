import logo from './logo.svg';
import './App.css';
import './crate.js';
import CrateForm from './CrateForm.js';
import CrateTable from './CrateTable';
import crate from './crate.js';
import { render } from '@testing-library/react';
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {rows: []};
    
    this.addCrateRow = this.addCrateRow.bind(this);
  }
  addCrateRow(e) {
    const newRow = (
      <tr>
        <td><input type="Button" /></td>
        <td><input type="text" id="steelq" value="1" size="1" />x </td>
        <td value=""></td>
        <td value="1"></td>
        <td><input type="text" id="steelprice" value="7700" size="1" /></td>
        <td id="steelratio"></td>
        <td id="steelt">151,108</td>
      </tr>
    );
    this.state.rows.push(newRow);
  }
  render() {
    const rows = this.state.rowArray;
    return (
    <div className="App">
      <header className="App-header">
        <br></br>
        <CrateForm handleSubmit={this.addCrateRow} defaultTradeLevel="67" />
        <CrateTable rowArray={rows} />
      </header>
    </div>
    );
  }
}


export default App;
