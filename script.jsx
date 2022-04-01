
var bsp = 3810;
const prices = {
	steel:33648,
	bronze:50439,
	brass:56862,
	calpheon:98640,
	balenos:55170,
	mediah:77850,
	serendia:62730,
	jewelry:340254,
	vanadium:95097,
	titanium:96198,
	mythril:384865,
	copperore:1932,
	ironore:2157,
	leadore:2271,
	tinore:2157,
	zincore:3249
}

class Toggle extends React.Component {
	constructor(props) {
		super(props);
		this.state = {isToggleOn: true};

		// This binding is necessary to make `this` work in the callback
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState(prevState => ({
		isToggleOn: !prevState.isToggleOn
		}));
	}

	render() {
		return (
		<button onClick={this.handleClick}>
			{this.state.isToggleOn ? 'ON' : 'OFF'}
		</button>
		);
		
	}
}
  
ReactDOM.render(
<Toggle />,
document.getElementById('root')
);

var distance = 2.1385;

//function createRow(crateKey,){
	

//}

var getCrateValue = function(price,tradelevel){
	var bargain = 1.05+tradelevel*0.005;
	var bonus = bargain * distance;
	var crateprice = price*bonus;
	if(tradelevel>41){
		crateprice *= 1.5;
	}
	return parseInt(crateprice);
}
var getMetalZero = function(price,tradelevel){
	var bargain = 1.05+tradelevel*0.005;
	var bonus = bargain * distance;
	var crateprice = price*bonus;
	if(tradelevel>41){
		crateprice *= 1.5;
	}
	return parseInt((crateprice-bsp)/10);
}
/*var getCalphZero = function(price,tradelevel){
	var bargain = 1.05+tradelevel*0.005;
	var bonus = bargain * distance;
	var crateprice = price*bonus;
	if(tradelevel>41){
		crateprice *= 1.5;
	}
	return parseInt((crateprice-(bsp+11500*5+12500*5))/5);
}
var getBalZero = function(price,tradelevel){
	var bargain = 1.05+tradelevel*0.005;
	var bonus = bargain * distance;
	var crateprice = price*bonus;
	if(tradelevel>41){
		crateprice *= 1.5;
	}
	return parseInt((crateprice-(bsp+9000*5))/5);
}*/
function firstload(){
var url_string = window.location.href;
var url = new URL(url_string);
if(url.searchParams.get("tl")){
var tl = parseInt(url.searchParams.get("tl"));
var tt = 4;
if(tl>80){
tl -= 80;
tt = 6; 
}
else if(tl>50){
	tl -= 50;
	tt = 5;
}
else{
	tt = Math.floor(tl / 10);
	tl = tl % 10;
}
document.getElementById("tradetitle").selectedIndex	= tt;
document.getElementById("tradelevelt").value = tl;
}
if(url.searchParams.get("sp")){
document.getElementById("steelprice").value = sp;
}
else{
	document.getElementById("steelprice").value = steeld;
}
if(url.searchParams.get("op")){
document.getElementById("bronzeprice").value = op;
}
else{
	document.getElementById("bronzeprice").value = bronzed;
}
if(url.searchParams.get("ap")){
document.getElementById("brassprice").value = ap;
}
else{
	document.getElementById("brassprice").value = brassd;
}

refresh();
}
function maxstack(){
	document.getElementById("steelq").value=7158;
	document.getElementById("bronzeq").value=7158;
	document.getElementById("brassq").value=7158;
	document.getElementById("calphq").value=7158;
	document.getElementById("balq").value=7158;
	document.getElementById("medq").value=7158;

	refresh();
}
function plusstack(){
	document.getElementById("steelq").value=parseInt(document.getElementById("steelq").value)+7158;
	document.getElementById("bronzeq").value=parseInt(document.getElementById("bronzeq").value)+7158;
	document.getElementById("brassq").value=parseInt(document.getElementById("brassq").value)+7158;
	document.getElementById("calphq").value=parseInt(document.getElementById("calphq").value)+7158;
	document.getElementById("balq").value=parseInt(document.getElementById("balq").value)+7158;
	document.getElementById("medq").value=parseInt(document.getElementById("medq").value)+7158;

	refresh();

}
function addstack(row){
	switch(row){
		case 1:
	document.getElementById("steelq").value=parseInt(document.getElementById("steelq").value)+7158;
	break;
	case 2:
	document.getElementById("bronzeq").value=parseInt(document.getElementById("bronzeq").value)+7158;
	break;
	case 3:
	document.getElementById("brassq").value=parseInt(document.getElementById("brassq").value)+7158;
	break;
	case 4:
	document.getElementById("calphq").value=parseInt(document.getElementById("calphq").value)+7158;
	break;
	case 5:
	document.getElementById("balq").value=parseInt(document.getElementById("balq").value)+7158;
	break;
	case 6:
	document.getElementById("medq").value=parseInt(document.getElementById("medq").value)+7158;
	break;
	}
}
function refresh(){
	var tl = 1;
	var selectedtrade = document.getElementById("tradetitle").selectedIndex;
	var selectedlocation = document.getElementById("location").selectedIndex;
	if(selectedlocation==0){
		distance = 2.1385;
	}
	else if(selectedlocation==1){
		distance = 2.0407;
	}
	else if(selectedlocation==2){
		distance = 1.9984;
	}
	if(selectedtrade==6){
		selectedtrade += 2
	}
	tl = selectedtrade*10 + parseInt(getv("tradelevelt"));
	bsp = parseInt(getv("bspprice"));
	document.getElementById("finaltradelevel").value = tl;
	document.getElementById("steelvalue").innerHTML = getMetalZero(steel,tl);//getZero(steel,) + "";
	document.getElementById("bronzevalue").innerHTML = getMetalZero(bronze,tl);
	document.getElementById("brassvalue").innerHTML = getMetalZero(brass,tl);
	document.getElementById("calphvalue").innerHTML =  " ";
	document.getElementById("balvalue").innerHTML = " ";
	document.getElementById("medvalue").innerHTML = " ";

	document.getElementById("steelratio").innerHTML = Math.round((getCrateValue(steel,tl)/parseInt(getv("steelprice")*10+bsp))*10000)/10000;
	document.getElementById("bronzeratio").innerHTML = Math.round((getCrateValue(bronze,tl)/parseInt(getv("bronzeprice")*10+bsp))*10000)/10000;
	document.getElementById("brassratio").innerHTML = Math.round((getCrateValue(brass,tl)/parseInt(getv("brassprice")*10+bsp))*10000)/10000;
	document.getElementById("calphratio").innerHTML = Math.round(((getCrateValue(calph,tl))/parseInt(getv("firprice")*5+getv("cedarprice")*5+getv("birchprice")*5+bsp))*10000)/10000;
	document.getElementById("balratio").innerHTML = Math.round(((getCrateValue(bal,tl))/parseInt(getv("mapleprice")*5+getv("ashprice")*5+bsp))*10000)/10000;
	document.getElementById("medratio").innerHTML = Math.round(((getCrateValue(bal,tl))/parseInt(getv("acaciaprice")*5+getv("whitecedarprice")*5+bsp))*10000)/10000;
	document.getElementById("steelt").innerHTML = Number(getCrateValue(steel,tl)*getv("steelq")).toLocaleString();
	document.getElementById("bronzet").innerHTML = Number(getCrateValue(bronze,tl)*getv("bronzeq")).toLocaleString();
	document.getElementById("brasst").innerHTML = Number(getCrateValue(brass,tl)*getv("brassq")).toLocaleString();
	document.getElementById("calpht").innerHTML = Number(getCrateValue(calph,tl)*getv("calphq")).toLocaleString();
	document.getElementById("balt").innerHTML = Number(getCrateValue(bal,tl)*getv("balq")).toLocaleString();
	document.getElementById("medt").innerHTML = Number(getCrateValue(med,tl)*getv("medq")).toLocaleString();
	document.getElementById("sum").innerHTML = Number(gethv("steelt")+gethv("bronzet")+gethv("brasst")+gethv("calpht")+gethv("balt")).toLocaleString();
	console.log(Number(gethv("steelt")+gethv("bronzet")+gethv("brasst")+gethv("calpht")+gethv("balt")+gethv("medt")).toLocaleString());
	/*if(getv("steelprice")!=steeld){
		updateURLsave("&sp=",getv("steelprice"));
	}
	if(getv("bronzeprice")!=bronzed){
		updateURLsave("&op=",getv("bronzeprice"));
	}
	if(getv("brassprice")!=brassd){
		updateURLsave("&ap=",getv("brassprice"));
	}*/
	var url = new URL(window.location.href);
	url.searchParams.set("tl",tl);
	
	document.getElementById("urlsave").value = url;
	//document.getElementById("calphvalue").innerHTML = getZero(calph,tl);
	//document.getElementById("balvalue").innerHTML = getZero(bal,tl);

}
function gethv(stringname){
	return parseInt(document.getElementById(stringname).innerHTML.replace(/,/g,""));
}
function getv(stringname){
	return parseInt(document.getElementById(stringname).value);
}
function updateURLsave(stringname, value){
	var url_string = window.location.href;
	var params = url_string.substring(url_string.indexOf("?"));

	if(url_string.includes(stringname)){



		/*
	console.log("test2");
		param_start_index = url_string.indexOf(stringname);
		param_end_index = (url_string.substring(url_string.indexOf(stringname)+4).indexOf("&")>-1)?url_string.substring(url_string.indexOf(stringname)+4).indexOf("&"):url_string.length;

		console.log(param_start_index+", "+param_end_index);
		end_string = url_string.substring();
		url_string = url_string.substring(0,url_string.indexOf(stringname)+4)+value+end_string;*/
	}
	else{
		url_string+=stringname+value;
	}
	document.getElementById("urlsave").value = url_string;
}
