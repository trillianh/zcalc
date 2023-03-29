
var bsp = 3810;
const steel = 33648;
const bronze = 50439;
const brass = 56862;
const calph = 98640;
const bal = 55170;
const med = 77850;
var steeld = 7700;
var bronzed = 10730;
var brassd = 11000;
var distanceVal = 2.1385;
var distanceAre = 2.1385;
var getCrateValue = function(price,tradelevel){
	var bargain = 1.05+tradelevel*0.005;
	var bonus = bargain * distanceVal;
	var crateprice = 2 * price * bonus;
	if(tradelevel>41){
		//crateprice *= 1.5;
	}
	return parseInt(crateprice);
}
var getMetalZero = function(price,tradelevel){
	var bargain = 1.05+tradelevel*0.005;
	var bonus = bargain * distanceVal;
	var crateprice = price*bonus;
	if(tradelevel>41){
		crateprice *= 1.5;
	}
	return parseInt((crateprice-bsp)/10);
}
/*var getCalphZero = function(price,tradelevel){
	var bargain = 1.05+tradelevel*0.005;
	var bonus = bargain * distanceVal;
	var crateprice = price*bonus;
	if(tradelevel>41){
		crateprice *= 1.5;
	}
	return parseInt((crateprice-(bsp+11500*5+12500*5))/5);
}
var getBalZero = function(price,tradelevel){
	var bargain = 1.05+tradelevel*0.005;
	var bonus = bargain * distanceVal;
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
		distanceVal = 2.1385;
	}
	else if(selectedlocation==1){
		distanceVal = 2.0407;
	}
	else if(selectedlocation==2){
		distanceVal = 1.9984;
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
