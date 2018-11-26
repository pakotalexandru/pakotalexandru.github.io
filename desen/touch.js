document.getElementById("id_business_version").innerHTML="Business version: 2018.11.26.6";

var canvas = document.getElementById("id_canvas");
canvas.addEventListener("touchstart", on_touch_start);
canvas.addEventListener("touchmove", on_touch_move);

var canvas_boundig_rect = canvas.getBoundingClientRect();

var last_pos = {x: 0, y: 0};

function on_touch_start(e){
	for(var i = 0; i < e.changedTouches.length; i++){
		var context = canvas.getContext("2d");
		context.beginPath();
		context.lineHeight = 20;
		context.moveTo(last_pos.x - canvas_boundig_rect.left, last_pos.y - canvas_boundig_rect.top);
		context.lineTo(e.changedTouches[i].pageX - canvas_boundig_rect.left, e.changedTouches[i].pageY - canvas_boundig_rect.top);
		
		context.lineHeight = 1;
		context.arc(e.changedTouches[i].pageX - canvas_boundig_rect.left,
					e.changedTouches[i].pageY - canvas_boundig_rect.top, 10, 0, 2 * Math.PI);
		context.stroke();
	}
}

function on_touch_move(e){
	e.preventDefault();
	for(var i = 0; i < e.changedTouches.length; i++){
		var context = canvas.getContext("2d");
		context.beginPath();
		context.arc(e.changedTouches[i].pageX - canvas_boundig_rect.left,
					e.changedTouches[i].pageY - canvas_boundig_rect.top, 10, 0, 2 * Math.PI);
		context.stroke();
		last_pos.x = e.changedTouches[i].pageX
		last_pos.y = e.changedTouches[i].pageY
	}
}