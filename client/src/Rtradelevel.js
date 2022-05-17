import React from "react";
class Rtradelevel extends React.Component{ 
    constructor(props){
        super(props);
        //this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        this.props.onTradelevelChange(e.target.value);
    }
    render(){
        const tradelevel = this.props.tradelevel;
        return (
            <input value={tradelevel} size="1"></input>
        );
    }

}
export default Rtradelevel;