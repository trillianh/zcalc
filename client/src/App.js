import logo from './logo.svg';
import './App.css';
import './Crate.js';
import CrateForm from './CrateForm.js';
import CrateTable from './CrateTable';
import Crate from './Crate.js';
import { render } from '@testing-library/react';
import React from "react";
import Gtradelevel from "./Gtradelevel";
import Rtradelevel from "./Rtradelevel";


function toGamelevel(truelevel) {
  let r = { title: "Beginner", sublevel: "1" };
  if (truelevel >= 80) {
      r.title = "Guru";
      r.sublevel = truelevel - 80;
  }
  else if (truelevel >= 50) {
      r.title = "Master";
      truelevel -= 50
      r.sublevel = truelevel - 50;
  }
  else {
      if (truelevel >= 40) {
          r.title = "Artisan";
      }
      if (truelevel >= 30) {
          r.title = "Professional";
      }
      if (truelevel >= 20) {
          r.title = "Apprentice";
      }
      r.sublevel = truelevel % 10;
  }
  return r;
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {rows: [], tradelevel: this.props.defaultTradeLevel};
    this.handleGchange = this.handleGchange.bind(this);
    this.handleTchange = this.handleTchange.bind(this);
    
    this.addCrateRow = this.addCrateRow.bind(this);
  }
  addCrateRow(crateInfo) {
    const newRow = (<Crate info={crateInfo} />);
    let r = this.state.rows;
    r.push(newRow);
    this.setState({rows: r});
    
  }
  handleGchange(e) {
      this.setState({ tradelevel: e.target.slvl + e.target.tlvl });
  }
  handleTchange(e) {
      this.setState({ tradelevel: e.target.slvl + e.target.tlvl });
  }
  render() {
    const sublevel = toGamelevel(this.state.tradelevel).sublevel;
    const title = toGamelevel(this.props.defaultTradeLevel).title;
    const rlvl = this.state.tradelevel;
    const rows = this.state.rows;
    return (
    <div className="App">
        <br></br>
        <p>
                    This calculator assumes you always take the desert buff if you're high enough level.
                </p>

                <Gtradelevel
                    slvl={sublevel}
                    tlvl={title}
                    onSublevelChange={this.handleGchange}
                    onTitleChange={this.handleGchange}
                />
                <p>Trade Level:
                    <Rtradelevel
                        rlvl={rlvl}
                        onTradelevelChange={this.handleTchange}
                    /> </p>
                <p>BSP Value:
                    <input value={this.state.bspPrice} type="text" size="3" defaultValue="2500"></input>
                </p>
        <CrateForm handleSubmit={this.addCrateRow} crateType="" defaultTradeLevel="67" />
        <CrateTable rowArray={rows} />
    </div>
    );
  }
}


export default App;
