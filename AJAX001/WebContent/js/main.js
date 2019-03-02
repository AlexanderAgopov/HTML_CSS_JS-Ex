/**
 * 
 */
function loadDoc(url) {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById('a1').innerHTML = this.status;
			document.getElementById('a2').innerHTML = this.statusText;
			var x, i, txt;
			txt = "</br>";
			x = this.responseXML.getElementsByTagName("text");
			for (i = 0; i < x.length; i++) {
				txt += (i+1) + ". " + x[i].childNodes[0].nodeValue + "<br>";
			}
			document.getElementById("a3").innerHTML = txt;
		}
	}
	xhttp.open("GET", url, true);
	xhttp.send();
}
