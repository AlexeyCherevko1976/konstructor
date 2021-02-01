let insert="";
let f1 = new Square(100, 70);
f1.strokeStyle = 'red';

f3=new Square(); f3.points=f1.points;
f3.strokeStyle="deeppink";
f3.turnZ(3.14);

f4=new Square(); f4.points=f1.points;
f4.strokeStyle="indigo";
f4.turnX(3.14);

f5=new Square(); f5.points=f1.points;
f5.strokeStyle="navy";
f5.turnY(3.14);


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

ft2=new Box();
ft2.points=ft.points;
ft2.strokeStyle="lime";
ft2.turn(ft2.points[0],ft2.points[1], 0.5);


let f6=new Box();
f6.points=f2.points;
f6.strokeStyle="sienna";
insert+=`<br>f6.points[0]=${f6.points[0]} f6.points[1]=${f6.points[1]}`;

let f7=new Box();
f7.points=f2.points;
f7.offset([-f2.points[0][0], -f2.points[0][1], -f2.points[0][2]]);
f7.strokeStyle="aqua";
insert+=`<br><br>f7.points[0]=${f7.points[0]}  f7.points[1]=${f7.points[1]}`
let v7ort=new Vektor(f7.points[1]).ort();
insert+=`<br>v7ort=${v7ort.data}`;

fX=new Box();
fX.points=f7.points;
let a=Math.atan(f7.points[1][1]/f7.points[1][2])
//fX.turnX(-Math.acos(v7ort.x));
fX.turnX(a);
fX.strokeStyle="lyme";
insert+=`a=${a}`
insert+=`<br><br>fX.points[0]=${fX.points[0]}  fX.points[1]=${fX.points[1]} `
let vXort=new Vektor(fX.points[1]).ort();
insert+=`<br>vXort=${vXort.data}`;

fY=new Box();
a=Math.atan(-fX.points[1][0]/fX.points[1][2]);
fY.points=fX.points;
fY.turnY(a);
fY.strokeStyle="black";
insert+=`<br><br>a=${a}`;
insert+=`<br>fY.points[0]=${fY.points[0]}  fY.points[1]=${fY.points[1]}`
let vYort=new Vektor(fY.points[1]).ort();
insert+=`<br>vYort=${vYort.data}`;
/*

f2.turn(f2.points[0], f2.points[1], 0.3);
f2.strokeStyle="aquamarine";
*/
//alert(f1.points);
let d3 = new Coordinates();
d3.axisTop = [
  [0, 0, 0],
  [-300, 0, 50],
  [0, 300, 0],
];
d3.angle = 0.5;
d3.width = 400;
d3.height = 200;
d3.margin = 50;
d3.kZoom = [1, 1, 1];
d3.leftScreen = [0, 0];
d3.rightScreen = [0, 3];
d3.setFocus();
d3.figures = [f1, f2, ft, ft2];
d3.addressCanvas = '#canvas1';
//alert(d3.figures[0].shadowPoints);
d3.draw();
let tr1=document.querySelector('#insert');
tr1.innerHTML=insert;