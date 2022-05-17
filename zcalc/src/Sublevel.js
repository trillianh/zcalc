import React from "react";
class Sublevel extends React.Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        this.props.onSublevelChange(e.target.value);
    }
    render() {
        const sublevel = this.props.sublevel;
        return (
            <input value={sublevel} size="1"></input>
        );
    }

}
export default Sublevel;