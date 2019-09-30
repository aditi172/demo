var squares=6;
var color=generateColors(squares);
var box=document.querySelectorAll(".square");
var pickedcolor=color[colorpick()];
var displaycolor=document.getElementById("colordisplay");
var messagedis=document.querySelector("#message");
var head=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var easy=document.querySelector("#easy");
var hard=document.querySelector("#hard")

easy.addEventListener("click", function() {
  easy.classList.add("selected");
  hard.classList.remove("selected");
  squares=3;
  color=generateColors(squares);
  pickedcolor=color[colorpick()];
  displaycolor.textContent=pickedcolor;
  head.style.backgroundColor="steelblue";
  for(var i=0;i<box.length;i++)
  {
  	if(color[i]) {
  		box[i].style.backgroundColor=color[i];
  	}
  	else {
  		box[i].style.display="none";
  	}
  }
});
hard.addEventListener("click", function() {
  easy.classList.remove("selected");
  hard.classList.add("selected");
  squares=6;
  color=generateColors(squares);
  pickedcolor=color[colorpick()];
  displaycolor.textContent=pickedcolor;
  head.style.backgroundColor="steelblue";
  for(var i=0;i<box.length;i++)
  {
  	box[i].style.backgroundColor=color[i];
  	box[i].style.display="block";
  }
});

resetButton.addEventListener("click", function() {
	color=generateColors(squares);
	pickedcolor=color[colorpick()];
	displaycolor.textContent=pickedcolor;
    messagedis.textContent="";
    this.textContent="New colors";
	for(var i=0;i<box.length;i++)
	{
		box[i].style.backgroundColor=color[i];
	}
	head.style.backgroundColor="steelblue";
});
displaycolor.textContent=pickedcolor;
for(var i=0;i<box.length;i++)
{  //add color to squares
	box[i].style.backgroundColor=color[i];
	//click event on sqaures
	box[i].addEventListener("click", function() {
      var clickedcolor=this.style.backgroundColor;
      if(clickedcolor===pickedcolor)
      	{//alert("Correct!");
          messagedis.textContent="Correct!";
          resetButton.textContent="Play  Again?";
          changetowin(clickedcolor);
          head.style.backgroundColor=clickedcolor;
      }
      else
      	{//alert("Wrong!");
        messagedis.textContent="Try Again!";
        this.style.backgroundColor="#232323";
    }
	});
}
function changetowin(color) {
	for(var i=0;i<box.length;i++)
	{
		box[i].style.backgroundColor=color;
	}
}
function colorpick() {
  var choice=Math.floor(Math.random()*color.length);
  return(choice);
}
function generateColors(num) {
	var arr=[];
	for(var i=0;i<num;i++)
	{
		arr[i]=randomColor();
	}
	return(arr);
}
function randomColor() {
	var r, g, b;
	r=Math.floor(Math.random()*256);
	g=Math.floor(Math.random()*256);
	b=Math.floor(Math.random()*256);
	return("rgb("+r+", "+g+", "+b+")");
}