
//--- FUNGSI-FUNGSI untuk linkcolection ---
//--- Fungsi dibawah merupakan fungsi untuk mendeteksi mobile phone ---
//--- Jika perangkat merupakan mobile phone maka secara otomatis ubah kolom div menjadi baris ---

	window.onload = function(){
	    //alert("TES PESAN-PESAN .........!");

		if( checkm() ) {
			//document.getElementById("jd").innerHTML = "<b>---Hello SmartPhone---</b>";
			//zoom();
			var d1 = document.getElementById('linkdiv1');
			var d2 = document.getElementById('linkdiv2');
			var d3 = document.getElementById('linkdiv3');
			d1.removeAttribute("class");
			d2.removeAttribute("class");
			d3.removeAttribute("class");
		}
		else
		{
			;

		}
	};

//--- END FUNGSI-FUNGSI untuk linkcolection ---
//--- =================================== ---
//--- FUNGSI-FUNGSI untuk Chek apakah perangkat merupakan Mobile ---

	function checkm(){
		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	    	return true;
		}
	}

//--- END FUNGSI-FUNGSI untuk Chek apakah perangkat merupakan Mobile ---
//--- =================================== ---
//--- FUNGSI-FUNGSI untuk reff.html ---
	function ctrow(){
			//--- Ganti class --columnx-- dengan class --column--
			$(".column").addClass('columnb');
			//--- Hapus class --columnx-- yang terdapat pada semua --div--
			$("div").removeClass("column");
			//--- Ubah class --row-- menjadi --rowb--
			//--- Show Garis Pembatas ------------
			$(".row").addClass('rowb');
			$(".row").removeClass("row");
			//--- Hide Head of Column
			$("#ts").hide();

			//--- Show Sub Judul ------
			$(".hd").addClass('hds');
			$(".hd").removeClass("hd");
	}
	function rowtc(){
			//--- Ganti class --columnx-- dengan class --column--
			$(".columnb").addClass('column');
			//--- Hapus class --columnx-- yang terdapat pada semua --div--
			$("div").removeClass("columnb");
			//--- Ubah class --row-- menjadi --rowb--
			//--- Show Garis Pembatas ------------
			$(".rowb").addClass('row');
			$(".rowb").removeClass("rowb");
			//--- Show Head of column ----
			$("#ts").show();

			//--- Hide sub judul ----
			$(".hds").addClass('hd');
			$(".hds").removeClass("hds");
	}

	$(document).ready(function(){
		//--- untuk hide click-link rows dan column ---
		if (checkm()){
			$("#rw").hide();}
		else{
			$("#cl").hide();}
		$("#rw").click(function(){
			$("#rw").hide();
			$("#cl").show();
		});
		$("#cl").click(function(){
			$("#cl").hide();
			$("#rw").show();
		});
	});
//--- END FUNGSI-FUNGSI untuk reff.html ---
//--- =================================== ---
//--- FUNGSI-FUNGSI untuk ie-url.html ---
	function openInNewTab() {
		var nor = document.getElementById("nomor").value;
		if (nor != "")
		{
			var sdurl = "http://www.sciencedirect.com.sci-hub.cc/science/article/pii/" + nor;
			var url = "http://ieeexplore.ieee.org.sci-hub.io/xpl/articleDetails.jsp?arnumber=" + nor;

			if(isNaN(nor) && nor.length > 7){
		    	//alert("Bukan Nomor dan > 7");
				var win = window.open(sdurl, '_blank');
				win.focus();
		    } else if (isNaN(nor) == false ) {
				var win = window.open(url, '_blank');
				win.focus();
				//alert(url); //untuk tes doang
		    	//alert("Nomor dan <= 7");
			} else{
		    	alert("Kode tidak dikenal ");
			}
		}else
		{
			alert("Paste deretan nomor pada bagian akhir URL !");
		}

	}

//--- END FUNGSI-FUNGSI untuk ie-url.html ---

//--- =================================== ---
//--- FUNGSI-FUNGSI untuk penelitian.md ---

	//--- fungsi ini hanya untuk tes ---
	function msg(a){
		alert(a);
	}

	//--- Funsi checkmobile ini sudah tidak digunakan lagi dalam web ini ---
	function checkmobile(a,b){
		//---Periksa jika perangkat Mobile Device maka tampilkan a dan hide b
		if( checkm() ) {
			document.getElementById(a).style.display = 'block';
			document.getElementById(b).style.display = 'none';
		}
		else
		{
			;
		}
	}

	function openpdf (fpdf){
		window.open(fpdf);
		window.title("Open-File")
	}

	function showx(a) {
		var dtag = ["bab1","i3e","reff","reff-tes"];
		for(var i = 0;i < dtag.length;i++){
			if (a == dtag[i]){
				document.getElementById(a).style.display = 'block';
				if (checkm()){ctrow()}else{rowtc();}
			}else{
				document.getElementById(dtag[i]).style.display = 'none';
			}
		}
	}
//--- FOR FILE SIGNATURE FROM 1 to 18 ---
//--- Fungsi showfsig(a) ini sudah TIDAK LAGI DIGUNAKAN !!! ---
/*
	function showfsig(a) {

		for(var i=1;i<=7;i++){
			//var n = i.toString();
			if (a === i){
				document.getElementById(i).style.display = 'block';
				//alert(i);
			}else{
				//alert("tidak sama");
				document.getElementById(i).style.display = 'none';
			}
		}
	//alert(a);
	}
*/
//--- END fungsi showfsig(a) ---
//--- END FUNGSI-FUNGSI untuk penelitian.md ---
//--- =================================== ---
//--- FUNGSI-FUNGSI untuk index.html ---
//--- Fungsi untuk tanggal masehi di halaman depan/index.html ---

	function harini(){
		var nhari = new Array("Ahad","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu");
		var mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
		//var mS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

		var d = new Date();
		var a = d.getFullYear(),b = d.getMonth(), c = d.getDay(), e = d.getDate();
		var f = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
		return( nhari[c]+' - '+e+'  '+mL[b]+' - '+a+'   -  '+f);
		//return alert(nhari[c]+' : '+e+', '+mL[b]+' : '+a);
	}
//--- END FUNGSI-FUNGSI untuk index.html ---
//--- =================================== ---
//--- Fungsi Ganti src video ---
	function gantisrc(s1,s2){
		var es1=document.getElementById(s1).value;
//		msg(es1);
		document.getElementById(s2).src = es1;


	}

//--- END fungsi ganti video ---
//--- =================================== ---
//---
//--- Exp Use : onclick="sdiv('upp');" # upp is id name exp : <a id="upp">
function sdiv(id) {
   var e = document.getElementById(id);
   if(e.style.display == 'block')
      e.style.display = 'none';
   else
      e.style.display = 'block';
}

//--- Exp Use : onclick="sdiv('upp');" # upp is id name exp : <a id="upp">
function showhide(id) { 
	 var e = document.getElementById(id);
	 e.style.display = (e.style.display == 'block') ? 'none' : 'block';
}

//--- Kedua Fungsi diatas : sdiv(id) dan showhide(id) bekerja OK.
//--- ================================

//--- TAMBAHAN UNTUK BUTTON  GO-TO-TOP ----
//========Ini Fungsi Untuk Show Button go-to-top========

	window.onscroll = function() {scrollFunction()};
	
	function scrollFunction() {
//		if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		if (document.body.scrollTop > 190 || document.documentElement.scrollTop > 190) {
			if (cekos() == false){
			// Cek, jika os adalah SELAIN android atau ios maka tampilkan menu myBtnEx
		    document.getElementById("myBtnEx").style.display = "block";}
		    document.getElementById("myBtn").style.display = "block";
		} else {
		    document.getElementById("myBtnEx").style.display = "none";
		    document.getElementById("myBtn").style.display = "none";
		}
	}

	// When the user clicks on the button, scroll to the top of the document
	function topFunction() {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	}
//======End Fungsi go-to-top===========

//--- Fungsi ini belum digunakan 
//--- Fungsi w3 mengambil dari js/w3.js 
//--- Fungsi w3 dapat melakukan show-hide element berdasar pada ID, CLASS dan TAG name
//--- EXP : ID --> w3.hide('#id_name')
//--- EXP : CLASS --> w3.hide('.CLASS_name')
//--- EXP : TAG --> w3.hide('h3')
//--- EXP USE : <div onclick="w3.hide('.class_name')"></div>

function w3showhide(a){
	var ea = document.getElementById("id_name").
	alert('Hasil : '+a);
	w3.show(a)
	
}


// Fungsi ini hanya untuk test fungsi -cekos 
// Digunakan pada Exp link pada categories.md
function cekosE(){
	if (cekos() == true){
		alert("It's True, You are phone -Android- or -iOS-");}
	if (cekos() == false){
		alert("It's False, You aren't phone -Android- or -iOS-");}
}
