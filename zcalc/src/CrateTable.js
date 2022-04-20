import React from "react";
class CrateTable extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <table>
                {this.props.rowArray}
            </table>
        );
    }
}
export default CrateTable;