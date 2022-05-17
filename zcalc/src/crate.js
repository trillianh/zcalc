import React from "react";
class Crate extends React.Component {
  constructor(props){
    super(props);
  }
  
   render(){
    const prices = {
      calpheon:98640,
      balenos:55170,
      mediah:77850,
      serendia:62730,
      steel:33648,
      bronze:50439,
      brass:56862,
      vanadium:95097,
      titanium:96198,
      mythril:384865,
      copperore:1932,
      ironore:2157,
      leadore:2271,
      tinore:2157,
      zincore:3249,
      jewelry:340254
    }
    return (
      <div className="crate">
        <table>
            <td>a</td>
            <td>b</td>
            <td>c</td>
        </table>
      </div>
    );
  }
}
  
  export default Crate;