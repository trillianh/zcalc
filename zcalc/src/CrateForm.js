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
        
    }
    render() {
        return (
            <form>
                <p>
                    This calculator assumes you always take the desert buff if you're high enough level.
                </p>
                <select id="location">
                    <option selected value="grana">Grana</option>
                    <option value="oldwisdom">Old Wisdom</option>
                    <option value="trent">Trent</option>
                </select>
                <Gtradelevel  />
                <Rtradelevel onTradelevelChange={this.handleTradelevelChange} />
                <p>BSP Value:
                    <input type="text" id="bspprice" value="2250" size="3"></input>
                </p>


                <submit>Add crate</submit>
            </form>
        );
    }

}
export default CrateForm;