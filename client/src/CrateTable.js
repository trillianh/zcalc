import React from "react";
class CrateTable extends React.Component {
    constructor(props) {
        super(props);
    }
    /*handleMaxStack(e){
        for(i in this.props.rowArray){
            this.props.rowArray[i] = 
        }
    }*/
    render() {
        const rowArray = this.props.rowArray;
        return (
            <table><tr>
            <td></td><th><input type="Button" id="max" value="max" onclick="maxstack()" /></th><td></td><th>Zero</th><th>Buy</th><th>Margin</th><th>Value
        </th></tr>
                {rowArray}
            </table>
        );
    }
}
export default CrateTable;