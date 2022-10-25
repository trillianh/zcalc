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
const matid = {
  "calpheon":[["4604","4606","4607"],["4660","4663","4666"],["592","594","596"]],
  "balenos":[["4652","4655"]],
  "mediah":[["4677","4681"]],
  "serendia":[["4655","4658"]],
  "steel":[[],[],[]],
  "bronze":[[],[],[]],
  "vanadium":[[],[],[]],
  "titanium":[[],[],[]],
  "mythril":[[],[],[]],
  "copperore":[],
  "ironore":[],
  "tinore":[],
  "zincore":[],
  "jewelry":[[],[],[]],
  "snowfieldtimber":[["4722","4702"]],
  "thorntimber":[["4722","4711"]],
  "snowfieldjade":[["4493","4086"]],
  "snowfieldobsidian":[["4089","4272"]],
}
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

class Crate extends React.Component {
  constructor(props) {
    super(props);
    if(props.quantity){
      this.state = { quantity: props.quantity , info:props.info  };
    }
    else{
      this.state = { quantity: 1 , info:props.info  };
    }
    this.handleAddStack = this.handleAddStack.bind(this);
    this.handleCrateQuantityChange = this.handleCrateQuantityChange.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleMaxStack = this.handleMaxStack.bind(this);
  }
  handleAddStack(e) {
    this.setState({ quantity: this.state.quantity + 7157 });
    this.props.saveCookie();
  }
  handleCrateQuantityChange(e) {
    this.setState({ quantity: e.target.value });
    this.props.saveCookie();
  }
  handleMaxStack(){
    this.setState({ quantity: 7157 });
    this.props.saveCookie();
  }
  handleRemove(e){
    this.props.remove(this.props.id);
  }

  render() {
    console.log("a"+this.state.info.level);
    var zeroes = "";
    var tfprices = [];
    for(var i in this.state.info.prices){
      var pr = this.state.info.prices[i].price
      zeroes = zeroes.concat(pr, " ");
      tfprices[i] = <input size = "5" type = "text" id="buy" defaultValue={pr} />;
    }
    return (
      <tbody><tr>
        <td><button id="addstack" onClick={this.handleAddStack}>+stack</button></td>
        <td><input type="text" id="q" value={this.state.quantity} onChange={this.handleCrateQuantityChange} size="1" />x</td>
        <td>{this.state.info.crateType}</td>
        <td>{(multimat.includes(this.state.info.crateType)) ? "" : getMetalZero(this.state.info.crateType)}</td>
        <td>{tfprices}</td>
        <td>ratio</td>
        <td>{Number(getCrateValue(prices[this.state.info.crateType], this.state.info.level) * this.state.quantity).toLocaleString()}</td>
        <td><button id="remove" onClick={this.handleRemove}>x</button></td>
      </tr></tbody>
    );
  }
}

export default Crate;