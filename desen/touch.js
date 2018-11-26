document.getElementById("id_business_version").innerHTML="Business version: 2018.11.26.1";

var canvas = doc.getElementById("id_canvas");
canvas.addEventListener("touchstart", on_touch_start);

function on_touch_start (e)
{
	for (var i = 0; i < e.changedTouches.Length; i++){
		var contex = canvas.getContext("2d");
		context.beginPath();
		context.arc(e.changedTouches[i].pageX,
				    e.changedTouches[i].pageY,
				   10,
				   0,
				   2 * Math.PI);
		contex.stroke();		   
		
	}
}