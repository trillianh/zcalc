import React from "react";
import Gtradelevel from "./Gtradelevel";
import Rtradelevel from "./Rtradelevel";

function toGamelevel(truelevel) {
    let r = { title: "Beginner", sublevel: "1" };
    if (truelevel >= 80) {
        r.title = "Guru";
        r.sublevel = truelevel - 80;
    }
    else if (truelevel >= 50) {
        r.title = "Master";
        truelevel -= 50
        r.sublevel = truelevel - 50;
    }
    else {
        if (truelevel >= 40) {
            r.title = "Artisan";
        }
        if (truelevel >= 30) {
            r.title = "Professional";
        }
        if (truelevel >= 20) {
            r.title = "Apprentice";
        }
        r.sublevel = truelevel % 10;
    }
    return r;
}

class CrateForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { tradelevel: this.props.defaultTradeLevel };
    }
    onChange(e){
        console.log("a");
        this.state.handleSubmit(e.target.value);
    }
    handleGchange(e){
        this.setState({tradelevel:e.target.slvl+e.target.tlvl});
    }
    handleTchange(e){
        this.setState({tradelevel:e.target.slvl+e.target.tlvl});
    }
    render() {
        const sublevel = toGamelevel(this.state.tradelevel).sublevel;
        const title = toGamelevel(this.props.defaultTradeLevel).title;
        const rlvl = this.state.tradelevel;
        return (
            <form onSubmit={this.onChange}>
                <p>
                    This calculator assumes you always take the desert buff if you're high enough level.
                </p>
                
                <Gtradelevel 
                slvl={sublevel} 
                tlvl={title} 
                onSublevelChange={this.handleGchange} 
                onTitleChange={this.handleGchange} 
                />
                <p>Trade Level:
                <Rtradelevel 
                rlvl={rlvl}
                onTradelevelChange={this.handleTchange} 
                /> </p>
                <p>BSP Value:
                    <input type="text" id="bspprice" size="3" defaultValue="2500"></input>
                </p>
                <button type="submit">Add crate</button>
            </form>
        );
    }

}
/*
<select id="location">
                    <option selected value="grana">Grana</option>
                    <option value="oldwisdom">Old Wisdom</option>
                    <option value="trent">Trent</option>
                </select>*/
export default CrateForm;