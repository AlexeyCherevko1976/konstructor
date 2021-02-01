let r=100
let f2=new Box(r, 1.5*r, -2*r);
let angle=0.3;
f2.strokeStyle="black";
f2.turnY(angle);
f2.turnX(angle);
f2.offset([150,70,0]);

//  turn
ft=new Box();
ft.points=f2.points;
ft.strokeStyle="orange";
ft.turn(ft.points[0],ft.points[1], 0.5);

let d3 = new Coordinates();
d3.axisTop = [
  [0, 0, 0],
  [-700, 0, 50],
  [0, 300, 0],
];
d3.angle = 0.5;
d3.width = 700;
d3.height = 500;
d3.margin = 100;
d3.kZoom = [1, 1, 1];
d3.leftScreen = [0, 0];
d3.rightScreen = [0, 3];
d3.setFocus();
d3.figures = [ f2, ft];
d3.addressCanvas = '#canvas1';
//alert(d3.figures[0].shadowPoints);
d3.draw();
let tr1=document.querySelector('#insert');
tr1.innerHTML=insert;