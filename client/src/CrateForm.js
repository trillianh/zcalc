import React from "react";

class CrateForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {crateType:"calpheon",level:this.props.defaultTradeLevel};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCrateTypeChange = this.handleCrateTypeChange.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        let crateInfo = {crateType:this.state.crateType,level:this.state.level};
        this.props.handleSubmit(crateInfo);

    }
    handleCrateTypeChange(e){
        this.setState({crateType:e.target.value});
    }
    render() {
        const crateType = this.state.crateType;
        return (
            <form onSubmit={this.handleSubmit}>
                <select onChange={this.handleCrateTypeChange}>                    
                    <option value="calpheon">Calpheon Timber</option>
                    <option value="balenos">Balenos Timber</option>
                    <option value="mediah">Mediah Timber</option>
                    <option value="serendia">Serendia Timber</option>
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
                </select>
                <button type="submit">Add crate</button>
            </form>
        );
    }

/*
<select id="location">
                    <option selected value="grana">Grana</option>
                    <option value="oldwisdom">Old Wisdom</option>
                    <option value="trent">Trent</option>
                </select>*/
}
export default CrateForm;