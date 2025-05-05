//this is helper function

//init dweeter func
var playing = true;
var c = document.getElementById('background');
var x = c.getContext("2d");
//c.width = 1920;
//c.height = 1080;
var S = Math.sin;
var C = Math.cos;
var T = Math.tan;

var time = 0;
var frame = 0;

var R = function(r,g,b,a) {
    a = a === undefined ? 1 : a;
    return "rgba("+(r|0)+","+(g|0)+","+(b|0)+","+a+")";
}

var loop = function(){
    if (playing){
	requestAnimationFrame(loop);
    }

    time=frame/60;

    if(time * 60 | 0 == frame - 1){
	time += 0.000001;
    }

    frame++;

    try{
	u(time);
	//displayerror("");
    } catch (e) {
        //displayError(e);
        throw e;
    }
}

function resizeCanvasToDisplaySize(canvas) {
	  // Lookup the size the browser is displaying the canvas in CSS pixels.
		  const displayWidth  = canvas.clientWidth;
	  const displayHeight = canvas.clientHeight;
	 
	  // Check if the canvas is not the same size.
		  const needResize = canvas.width  !== displayWidth ||
		                     canvas.height !== displayHeight;
	 
	  if (needResize) {
			    // Make the canvas the same size
			    canvas.width  = displayWidth;
			    canvas.height = displayHeight;
			  } 
	return needResize;
}
