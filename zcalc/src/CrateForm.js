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
        //this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleGchange = this.handleGchange.bind(this);
        this.handleTchange = this.handleTchange.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.handleSubmit(e.target.value);

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
            <form onSubmit={this.handleSubmit}>
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
                <select>
                    <option value="calph">Calpheon Timber</option>
                    <option value="bal">Balenos Timber</option>
                    <option value="med">Mediah Timber</option>
                    <option value="ser">Serendia Timber</option>
                    <option value="steel">Steel Ingot</option>
                    <option value="bronze">Bronze Ingot</option>
                    <option value="brass">Brass Ingot</option>
                    <option value="vanadium">Vanadium Ingot</option>
                    <option value="titanium">Titanium Ingot</option>
                    <option value="mythril">Mythril Ingot</option>
                    <option value="copperore">Copper Ore</option>
                    <option value="ironore">Iron Ore</option>
                    <option value="leadore">Lead Ore</option>
                    <option value="zincore">Zinc Ore</option>
                    <option value="tinore">Tin Ore</option>
                    <option value="jewelry">Jewelry</option>
                    </select><button type="submit">Add crate</button>
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