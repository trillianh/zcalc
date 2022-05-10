import React from "react";
class CrateTable extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const rowArray = this.props.rowArray;
        return (
            <table>
                {rowArray}
            </table>
        );
    }
}
export default CrateTable;