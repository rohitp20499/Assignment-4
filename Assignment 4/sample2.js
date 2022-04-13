var val = 0 ,ref;

function myfunstart(){
	
	ref = setInterval(()=>{
		val++;
		document.getElementById("txt").innerHTML = val;
	},1000);
	
	document.getElementById("start").disabled = true;
	document.getElementById("stop").disabled = false;
}

function myfunstop(){
	clearInterval(ref);
	
	document.getElementById("start").disabled = false;
	document.getElementById("stop").disabled = true;
}
