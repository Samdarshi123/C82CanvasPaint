var mouse_event="empty";
var last_position_of_x,last_position_of_y;

canvas=document.getElementById("myCanvas");

ctx=canvas.getContext("2d");

color="red";
width_line=2.3;
canvas.addEventListener("mouseDown",my_mousedown);

function my_mousedown(e){
  mouse_event="mouseDown";
  color=document.getElementById("color").value;
  width_line=document.getElementById("width_line").value;
}

canvas.addEventListener("mouseUP",my_mouseup);

function my_mouseup(e){
  mouse_event="mouseUP";
}

canvas.addEventListener("mouseleave",my_mouseleave);


function my_mouseleave(e){
  mouse_event="mouseleave";
}

canvas.addEventListener("mousemove",my_mousemove);

function my_mousemove(e){
  var current_position_of_mouse_x= e.clientX-canvas.offsetLeft;
  var current_position_of_mouse_y= e.clientY-canvas.offsetTop;
  if (mouse_event=="mouseDown") {
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width_line;
    console.log("last_position_of_x and y =");
    console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
    ctx.moveTo(last_position_of_x,last_position_of_y);
    console.log("current_position_of_x = " + current_position_of_mouse_x + "current_position_of_y = " + current_position_of_mouse_y);
    ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
    ctx.Stroke();
  }
  last_position_of_x=current_position_of_mouse_x;
  last_position_of_y=current_position_of_mouse_y;
}
