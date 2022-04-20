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
        this.state = { tradelevel: 67 };
    }
    onChange(e){
        this.props.onSubmit(e.target.value);
    }
    handleTradelevelChange(e){

    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <p>
                    This calculator assumes you always take the desert buff if you're high enough level.
                </p>
                
                <Gtradelevel slvl={toGamelevel(this.props.defaultTradeLevel).sublevel} 
                tlvl={toGamelevel(this.props.defaultTradeLevel).title} onSublevelChange={this.handleTradelevelChange} onTitleChange={this.handleTradelevelChange} />
                <p>Trade Level: <Rtradelevel onTradelevelChange={this.handleTradelevelChange} /> </p>
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