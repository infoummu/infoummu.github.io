function showx(a) {
	var dtag = ["bab1","i3e","reff","reff-tes"];
	for(var i = 0;i < dtag.length;i++){
		if (a == dtag[i]){
			document.getElementById(a).style.display = 'block';
			//if (checkm()){ctrow()}else{rowtc();}
		}else{
			document.getElementById(dtag[i]).style.display = 'none';
		}
	}
}

//--- fungsi ini hanya untuk tes ---
function msg(a){
	alert(a);
}
function myJsFunc() {
	var answer = confirm ("Please click on OK to continue.");
	if (answer)
		window.location="#";
}
