draw();

function draw(){
  //alert("canvas");
  let canvas1=document.getElementById('canvas1');
  let context=canvas1.getContext("2d");
  canvas1.width=200;
  canvas1.height=300;
 // context.strokeStyle="olive"
 context.strokeRect(50,50,150,200);
  //context.fillRect(50,50, 150, 200);
  context.beginPath();
  context.arc(80,100,56,3/4,1/4,true);
  context.fill();
  context.moveTo(0.5, 0.5);
  context.lineTo(40,40);
  context.stroke();
}