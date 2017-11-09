var canvas = document.getElementById("myCanvas");
var finalcolor = document.getElementsByClassName("finalcolor")[0];
var showingcolor = document.getElementsByClassName("showingcolor")[0];
var rangecolor = document.getElementsByClassName("rangecolor");
var checkcolor = document.getElementsByClassName("checkcolor")[0];
var initcolor = document.getElementsByClassName("initcolor");
var setcolor = document.getElementsByClassName("setcolor")[0];
var initialcolor = document.getElementsByClassName("initialcolor")[0];
var container = document.getElementsByClassName("container")[0];
var pen = document.getElementById("pen");
var eraser = document.getElementById("eraser");


var x=y=z = 0;
var penmode;
var color = "#fc4c4f"
var ctx = canvas.getContext("2d")

canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;

checkcolor.style.backgroundColor = rgb(0,0,0);
finalcolor.style.display = "none"
container.style.display = "none"


showingcolor.onclick = visibilityof()

setcolor.onclick = function(){
	var morecolor = document.createElement("span");
	morecolor.classList.add("initcolor");
	morecolor.style.backgroundColor = rgb(x,y,z)
	initialcolor.appendChild(morecolor);


	for (var i = 0; i < initcolor.length; i++) {
	    initcolor[i].addEventListener("click", changingclass);
	}
}

showingcolor.onclick = function(){
	if(finalcolor.style.display == "none"){
		finalcolor.style.display = "block"
	}else{
		finalcolor.style.display = "none"
	}
}


function visibilityof(){
	if (finalcolor.style.visibility === "visible"){
	finalcolor.style.visibility = "none"
}
else{
	finalcolor.style.visibility = "visible"
}
}

function changingclass(){
	if (this.classList.contains("selected") == false) {
		document.getElementsByClassName("selected")[0].classList.remove("selected");
		this.classList.add("selected");
		color = document.getElementsByClassName("selected")[0].style.backgroundColor
	}
	else{//esut
	}
}

for (var i = 0; i < initcolor.length; i++) {
    initcolor[i].addEventListener("click", changingclass);
}

function rgb(r, g, b){
  return "rgb("+r+","+g+","+b+")";
}


rangecolor[0].onmouseup = function(){
	x = Number(this.value)
	checkcolor.style.backgroundColor = rgb(x,y,z);
}
rangecolor[1].onmouseup = function(){
	y = Number(this.value)
	checkcolor.style.backgroundColor = rgb(x,y,z);
}
rangecolor[2].onmouseup = function(){
	z = Number(this.value)
	checkcolor.style.backgroundColor = rgb(x,y,z);
}




pen.onclick = function(){
	penmode = true
	container.style.display = "block"
	canvas.style.cursor = "url('img/cursor.png'), auto"
}

eraser.onclick = function(){
	penmode = false
	container.style.display = "none"
	canvas.style.cursor = "auto"
}


canvas.onmousedown = function(e){
	lastEvent = e;
  	mouseDown = true;
}

canvas.onmouseup = function(){
	mouseDown = false;
}

canvas.onmouseleave = function(){
	canvas.onmouseup();
}


canvas.onmousemove = function(e){
	if(mouseDown){
		if(penmode){
			ctx.globalCompositeOperation='source-over'
			ctx.lineWidth = 1
			ctx.beginPath();
		    ctx.moveTo(lastEvent.offsetX, lastEvent.offsetY);
		    ctx.lineTo(e.offsetX, e.offsetY);
		    ctx.strokeStyle = color;
		    ctx.stroke();
		    lastEvent = e;
		}
		else{
			ctx.globalCompositeOperation='destination-out'
			ctx.lineWidth = 10
			ctx.beginPath();
		    ctx.moveTo(lastEvent.offsetX, lastEvent.offsetY);
		    ctx.lineTo(e.offsetX, e.offsetY);
		    ctx.stroke();
		    lastEvent = e;
		}
	}
}