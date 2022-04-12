import React from "react";
import Sublevel from "./Sublevel";
import TradeTitle from "./TradeTitle";
class Gtradelevel extends React.Component{
    constructor(props){
        super(props);
        this.state = {tradelevel: 67};
        this.handleSublevelChange=this.handleSublevelChange.bind(this);
        this.handleTitleChange=this.handleTitleChange.bind(this);
        //this.handleChange = this.handleChange.bind(this);
    }
    handleTitleChange(e){
        //this.setState({tlvl:e.target.value});
        //this.setState({tradelevel:this.tlvl+this.slvl});
    }
    handleSublevelChange(e){
        //this.setState({slvl:e.target.value});
        //this.setState({tradelevel:tlvl+slvl});
    }

    render(){
        return (
            <div>
                <TradeTitle onTitleChange={this.handleTitleChange} />
                <Sublevel onSublevelChange={this.handleSublevelChange} />
            </div>
        );
    }
    /*<select id="tradetitle" onChange={this.handleChange}>
                <option value={0}>Beginner</option>
                <option value={10}>Apprentice</option>
                <option value={20}>Skilled</option>
                <option value={30}>Professional</option>
                <option value={40} selected="selected">Artisan</option>
                <option selected value={50}>Master</option>
                <option value={80}>Guru</option>
            </select>*/
    //<input type="text" id="tradelevelt" value={tradelevel} size="1" onChange={this.handleChange} />

}
export default Gtradelevel;