import React from "react";
class TradeTitle extends React.Component{ 
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        this.props.onTitleChange(e.target.value)
    }
    render(){
        const ttitle=this.props.tradetitle;
        return (
            <select value={ttitle}>
                <option value={0}>Beginner</option>
                <option value={10}>Apprentice</option>
                <option value={20}>Skilled</option>
                <option value={30}>Professional</option>
                <option value={40}>Artisan</option>
                <option value={50}>Master</option>
                <option value={80}>Guru</option>
            </select>
        );
    }

}
export default TradeTitle;