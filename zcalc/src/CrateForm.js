
function CrateForm() {
    function addCrate(){
        
    }

    return (
        <form onSubmit={addCrate}>
            <p>
                This calculator assumes you always take the desert buff if you're high enough level.
            </p>
            <select id="location" onclick="refresh()">
                <option value="grana">Grana</option>
                <option value="oldwisdom">Old Wisdom</option>
                <option value="trent">Trent</option>
            </select>
            <select id="tradetitle" onkeyup="refresh()" onkeydown="refresh()" onclick="refresh()">
                <option value="beg">Beginner</option>
                <option value="app">Apprentice</option>
                <option value="ski">Skilled</option>
                <option value="pro">Professional</option>
                <option value="art" selected="selected">Artisan</option>
                <option value="mas">Master</option>
                <option value="gur">Guru</option>
            </select>
            <input type="text" id="tradelevelt" value="2" size="1"></input>
            <p>Trade Level:
                <input type="text" id="finaltradelevel" value="" size="1"></input>

            </p>
            <p>BSP Value:
                <input type="text" id="bspprice" value="2250" size="3"></input>
            </p>

            <button name="add" >Add crate</button>
        </form>
    );
}
export default CrateForm;