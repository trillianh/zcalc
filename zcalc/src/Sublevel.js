import React from "react";
class Sublevel extends React.Component {
    constructor(props){
        super(props);
    }
    onSubLevelChange(){
        
    }
    render() {
        const sublevel = this.props.sublevel;
        return (
            <input value={sublevel}></input>
        );
    }

}
export default Sublevel;