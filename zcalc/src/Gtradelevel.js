import React from "react";
import Sublevel from "./Sublevel";
import TradeTitle from "./TradeTitle";
class Gtradelevel extends React.Component{
    constructor(props){
        super(props);
        this.state = {sublevel:this.props.slvl,title:this.props.tlvl};
        //this.state = {tradelevel: 67};
        //this.handleSublevelChange=this.handleSublevelChange.bind(this);
        //this.handleTitleChange=this.handleTitleChange.bind(this);
        //this.handleChange = this.handleChange.bind(this);
    }
    handleTitleChange(e){
        this.setState({title:e.target.value});
        this.props.handleTradelevelChange(e.target.value);
    }
    handleSublevelChange(e){
        this.setState({sublevel:e.target.value});
        this.props.handleTradelevelChange(e.target.value);
    }

    render(){
        const title = this.state.title;
        const sublevel = this.props.sublevel;
        return (
            <div>
                <TradeTitle onTitleChange={this.handleTitleChange} tradetitle={title} />
                <Sublevel onSublevelChange={this.handleSublevelChange} sublevel={sublevel} />
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