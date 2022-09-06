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
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';


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
let matid = {"calpheon":[4661,4667,4664],"balenos":[4652,4655]};
class App extends React.Component {
    static propTypes = {
      cookies: instanceOf(Cookies).isRequired
    };
    
  constructor(props) {
    super(props);
    const { cookies } = props;
    let cookieRows = [];
    if(cookies.get('state')){
      for(var i in cookies.get('state')){
        const newRow = (<Crate info={cookies.get('state')[i]} saveCookie={this.saveStateToCookie} />);
        cookieRows.push(newRow);
      }
    }
    this.state = {dbcd: -1, rows: cookieRows||[], tradelevel: this.props.defaultTradeLevel};
    this.handleGchange = this.handleGchange.bind(this);
    this.handleTchange = this.handleTchange.bind(this);
    this.handleTest = this.handleTest.bind(this);
    this.addCrateRow = this.addCrateRow.bind(this);
    this.saveStateToCookie = this.saveStateToCookie.bind(this);
  }
  async handleTest(e){
    const response = await fetch("http://localhost:5000/mats/test",{method:"POST",headers:{ "Content-Type": "application/json",},body:JSON.stringify({})}).catch(error => {
        window.alert(error);
        return;
      });
      const a = await response.json();
      this.setState({dbcd:Math.round(a.cooldown/60000)});
      this.saveStateToCookie();
  }
  async addCrateRow(crateInfo) {
    const response = await fetch("http://localhost:5000/mats/test",{method:"POST",headers:{ "Content-Type": "application/json",},body:JSON.stringify({})}).catch(error => {
        window.alert(error);
        return;
      });
      const a = await response.json();
      this.setState({dbcd:Math.round(a.cooldown/60000)});
    const newRow = (<Crate info={crateInfo} saveCookie={this.saveStateToCookie} />);
    let r = this.state.rows;
    r.push(newRow);
    this.setState({rows: r});
    this.saveStateToCookie();
  }
  handleGchange(e) {
      this.setState({ tradelevel: e.target.slvl + e.target.tlvl });
      this.saveStateToCookie();
  }
  handleTchange(e) {
      this.setState({ tradelevel: e.target.slvl + e.target.tlvl });
      this.saveStateToCookie();
  }
  saveStateToCookie(){
    const { cookies } = this.props;
    let rowCookie = [];
    for(var i in this.state.rows){
      rowCookie[i]=this.state.rows[i].props.info;
    }
    cookies.set('state', rowCookie, { path: '/' });
  }
  render() {
    const sublevel = toGamelevel(this.state.tradelevel).sublevel;
    const title = toGamelevel(this.props.defaultTradeLevel).title;
    const rlvl = this.state.tradelevel;
    const rows = this.state.rows;
    const dbcd = this.state.dbcd;
    return (
    <div className="App">
        <br></br>
        <p>
                    This calculator assumes you always take the desert buff if you're high enough level. 
                </p>
                last price update: {(dbcd==-1)?"":dbcd+" minutes ago"} 
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
        <CrateTable rowArray={rows} level={rlvl} />
    </div>
    );
  }
}


export default withCookies(App);
