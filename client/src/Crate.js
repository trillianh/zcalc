import React from "react";
/* 
    distance = 2.1385; //grana
    distance = 2.0407; //owt
    distance = 1.9984; //trent
*/
function getCrateValue(price, tradelevel) {
  var bargain = 1.05 + tradelevel * 0.005;
  var bonus = bargain * 2.1385; //distance grana
  var crateprice = price * bonus;
  if (tradelevel > 41) {
    crateprice *= 1.5;
  }
  return parseInt(crateprice);
}
var getMetalZero = function (price, tradelevel) {
  var bargain = 1.05 + tradelevel * 0.005;
  var bonus = bargain * 2.1385; //distance grana
  var crateprice = price * bonus;
  if (tradelevel > 41) {
    crateprice *= 1.5;
  }
  return parseInt((crateprice - 3180) / 10); //bsp 3180
}
class Crate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { quantity: 1 };
    this.handleAddStack = this.handleAddStack.bind(this);
    this.handleCrateQuantityChange = this.handleCrateQuantityChange.bind(this);
  }
  handleAddStack(e) {
    this.setState({ quantity: this.state.quantity + 7157 });
  }
  handleCrateQuantityChange(e) {
    this.setState({ quantity: e.target.value });
  }
  render() {
    const prices = {
      calpheon: 98640,
      balenos: 55170,
      mediah: 77850,
      serendia: 62730,
      steel: 33648,
      bronze: 50439,
      brass: 56862,
      vanadium: 95097,
      titanium: 96198,
      mythril: 384865,
      copperore: 1932,
      ironore: 2157,
      leadore: 2271,
      tinore: 2157,
      zincore: 3249,
      jewelry: 340254,
      snowfieldtimber: 100575,
      thorntimber: 100575,
      snowfieldobsidian: 107500,
      snowfieldjade: 100000
    }
    const multimat = ["calpheon", "balenos", "mediah", "serendia", "jewelry", "snowfieldjade", "snowfieldobsidian", "snowfieldtimber", "thorntimber"];
    return (
      <tbody><tr>
        <td><button id="addstack" onClick={this.handleAddStack}>+stack</button></td>
        <td><input type="text" id="q" value={this.state.quantity} onChange={this.handleCrateQuantityChange} size="1" />x</td>
        <td>{this.props.info.crateType}</td>
        <td>{(multimat.includes(this.props.info.crateType)) ? "" : getMetalZero(this.props.info.crateType)}</td>
        <td><input type="text" id="buy" /></td>
        <td>ratio</td>
        <td>{Number(getCrateValue(prices[this.props.info.crateType], this.props.info.level) * this.state.quantity).toLocaleString()}</td>
        <td><button id="remove" onClick={this.handleRemove}>x</button></td>
      </tr></tbody>

    );
  }
}

export default Crate;