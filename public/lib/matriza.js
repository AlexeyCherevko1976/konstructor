class Vektor{
  constructor(data){
    this._x=data[0]; this._y=data[1]; this._z=data[2]; this._data=data;
    this._type="vektor";
  }
  set x(value){this._x=value; this._data[0]=value; }
  get x(){return this._x}

  set y(value){this._y=value;  this._data[1]=value;}
  get y(){return this._y}

  set z(value){this._z=value;  this._data[2]=value;}
  get z(){return this._z;}

  set data(value){this._data=value; this._x=value[0];  this._y=value[1];  this._z=value[2];}
  get data(){return this._data}

  get type(){return this._type}

  add(value){
    let answer=new Vektor([0,0,0]);
    
    if(value.type=="vektor"){
      answer.x=this._x+value.x;
      answer.y=this._y+value.y;
      answer.z=this._z+value.z;
      //answer.data=[x, y, z];
      return answer
    }
    answer.x=this._x+value;
    answer.y=this._y+value;
    answer.z=this._z+value;
   
    return answer
  }

  sub(value){
  let answer=new Vektor([0, 0, 0]);
  if(value.type=="vektor"){
     answer.x=this._x-value.x;
      answer.y=this._y-value.y;
     answer.z=this._z-value.z; 
 return answer}
    answer.x=this._x-value;
    answer.y=this._y-value;
     answer.z=this._z-value;
   return answer
  }

mul(value){
  let answer=new Vektor([0, 0, 0]);
  if(value.type=="vektor"){
     answer.x=this._x*value.x;
      answer.y=this._y*value.y;
     answer.z=this._z*value.z; 
 return answer}
    answer.x=this._x*value;
    answer.y=this._y*value;
     answer.z=this._z*value;
return answer
}

div(value){
  let answer=new Vektor([0, 0, 0]);
  if(value.type=="vektor"){
     answer.x=this._x/value.x;
      answer.y=this._y/value.y;
     answer.z=this._z/value.z; 
 return answer}
    answer.x=this._x/value;
    answer.y=this._y/value;
     answer.z=this._z/value;
return answer
}
vektorMultiply(vektor){
  let answer=new Vektor([0, 0, 0]);
answer.x=this._y*vektor.z-this._z*vektor.y;
answer.y=-(this._x*vektor.z-this._z*vektor.x);
answer.z=this._x*vektor.y-this._y*vektor.x;
return answer
}

ort(value){
  let answer=new Vektor([0, 0, 0]);
let length=Math.sqrt(this._x* this._x+ this._y* this._y+ this._z* this._z);
if (!value){value=1}
answer.x=this._x/length*value;
answer.y=this._y/length*value;
answer.z=this._z/length*value;
return answer
}

cosAngle(vektor){
  let m1=this._x, n1=this._y, p1=this._z;
  let m2=vektor.x, n2=vektor.y, p2=vektor.z;
  let cosAngle=(m1*m2+n1*n2+p1*p2)/Math.sqrt((m1*m1+n1*n1+p1*p1)*(m2*m2+n2*n2+p2*p2))
  return cosAngle
}
get length(){
  let m1=this._x, n1=this._y, p1=this._z;
  return Math.sqrt(m1*m1+n1*n1+p1*p1)
  //return m1
}

}

function  distance(point1, point2){
    return Math.sqrt((point1[0]-point2[0])**2+(point1[1]-point2[1])**2+(point1[2]-point2[2])**2)
  }

class Figure{
  constructor(){
    this._points=undefined;
    this._orderBypass=undefined;
    this._shadowPoints=[];
    this._strokeStyle="red";
  }
  set points(value){this._points=value;}
  get points(){return this._points}
  set strokeStyle(value){this._strokeStyle=value;}
  get strokeStyle(){return this._strokeStyle}

  set orderBypass(value){
    this._orderBypass=value;
  }
  get orderBypass(){return this._orderBypass;}
  set shadowPoints(value){
    this._shadowPoints=value;
  }
  get shadowPoints(){return this._shadowPoints}
}

class Coordinates{
  constructor(){
    this._figures=[];
    this._axisTop=[];  // [ближайшая точка оси фотокамеры, дальняя точка оси, точка плоскости вида]
    this._planePoint=undefined;
    this._vAxisTop=undefined; // вектор главной оси камеры
    this._vPlane=undefined; // вектор плоскости камеры
    this._angle=0.5; // угол, под которым смотрит камера
    this._distance=undefined; //  дистанция от  p1  до  F  фокуса
    this._focus=undefined;
    this._planePoint=undefined;
    this._figures=undefined;
    this._addressCanvas='#canvas1';
    this._vY=undefined;
    this._width=undefined;
    this._height=undefined;
    this._pLeft=undefined;

    this._Yminus=undefined;
    this._Yplus=undefined;
    this._Xminus=undefined;
    this._Xplus=undefined;
    this._kScreen=[0, 0, 1]; // pLeft[y], pLeft[x], kU
    this._kZoom=[1, 1, 1]; // к-т увеличения, вниз, вправо
    this._leftScreen=undefined;
    this._rightScreen=undefined;
    this._margin=20;
    

  }
  set axisTop(pointsAxis){
    this._axisTop=pointsAxis;
    let v1=new Vektor(this._axisTop[0]);
    let v2=new Vektor(this._axisTop[1]);
    let v3=new Vektor(this._axisTop[2]);
    let v21=v2.sub(v1).ort();
    this._vAxisTop=v21;
    let v31=v3.sub(v1);
    let vPlane=v21.vektorMultiply(v31).ort();
    this._vPlane=vPlane;
  }
  get axisTop(){return this._axisTop}
  get vAxisTop(){return this._vAxisTop}
  get vPlane(){return this._vPlane}
  set angle(value){this._angle=value}
  get angle(){return this._angle}
  set addressCanvas(value){this._addressCanvas=value}
  get addressCanvas(){return this._addressCanvas}
  get vY(){return this._vY}
  get dPXminus(){return this._dPXminus}
  get dPXplus(){return this._dPXplus}
  set width(value){this._width=value;}
  get width(){return this._width}
  set height(value){this._height=value}
  get height(){return this._height}
  set kZoom(value){this._kZoom=value}
  get kZoom(){return this._kZoom}
  set leftScreen(value){
    this._leftScreen=value;
  }
  get leftScreen(){return this._leftScreen}
  set rightScreen(value){this._rightScreen=value;}
  get rightScreen(){return this._rightScreen}
  
  get pLeft(){return this._pLeft}


  setFocus(){
    let l13=distance(this._axisTop[0],this._axisTop[2]);
    this._distance=l13/Math.tan(this._angle)^0;
    let v1=new Vektor(this._axisTop[0]);
  
    this._vY=this._vPlane.vektorMultiply(this._vAxisTop) // орт оси x
    //this.vY=vY;
    this._focus=v1.add(this._vAxisTop.mul(-this._distance));
    this._planePoint=v1.add(this._vAxisTop.mul(-this._distance*0.9));
    /*
    this._Yplus=v1.add(this._vPlane.mul(100));
    this._Yminus=v1.add(this._vPlane.mul(-100));
    this._Xplus=v1.add(this._vY.mul(100));
    this._Xminus=v1.add(this._vY.mul(-100));
    */
   // let widthReal=Math.tan(this._angle)*distance(this._axisTop[0],this._planePoint.data)*2;
    //let widthScreen=Math.max(this._width, this._height);
    //this._kScreen=widthScreen/widthReal;
    //alert(this._kScreen)

  }

  get distance(){return this._distance}
  get focus(){return this._focus}
  get planePoint(){return this._planePoint}
  set figures(value){
    this._figures=value;
    if(!this._focus || !this._planePoint || !this._vPlane || !this._vAxisTop){return}
    let v;
    //let i=0;
    let pLeft=this.checkShadow(this._figures[this._leftScreen[0]].points[this._leftScreen[1]]);
    this._pLeft=pLeft;

    let pRight=this.checkShadow(this._figures[this._rightScreen[0]].points[this._rightScreen[1]]);
    /*
    let dx=this._height-this._margin-pLeft[1];
    let dy=this._margin-pLeft[0];

    let k=1.4 // Непонятные отступы вокруг выбранных 
    let yLR=k*Math.abs(pRight[0]-pLeft[0]); 
    yLR=yLR/(this._width+2*this._margin);
    let xLR=k*Math.abs(pRight[1]-pLeft[1]); 
    xLR=xLR/(this._height+2*this._margin);


   //let kU=1.5;
   let kU=1/Math.max(xLR, yLR);
   */
   //this._kScreen=[dy, dx, kU]
   // alert(`pLeft=${pLeft} pRight=${pRight}`)
    // let leftScreen=
    // alert(this._rightScreen[2])

    for(let i=0;i<this._figures.length;i++){
      let figura=this._figures[i];
      for(let j=0;j<figura.points.length;j++){
        figura.shadowPoints[j]=this.checkShadow(figura.points[j]);
      }
      this._figures[i]=figura;
   // alert(v.length)
    }
  }

  checkShadow(point){
    
    let xp=this._planePoint.x, yp=this._planePoint.y, zp=this._planePoint.z, 
    x1=point[0], y1=point[1], z1=point[2],
    x0=this._focus.x, y0=this._focus.y, z0=this._focus.z,
    ky=(y1-y0)/(x1-x0), my=y0-(x0*(y1-y0)/(x1-x0)),
    kz=(z1-z0)/(x1-x0), mz=z0-(x0*(z1-z0)/(x1-x0)),
    A=this._vAxisTop.x, B=this._vAxisTop.y, C=this._vAxisTop.z,
    xP=-(-A*xp+B*(my-yp)+C*(mz-zp))/(A+B*ky+C*kz),
    yP=ky*xP+my,
    zP=kz*xP+mz;

    let vP=new Vektor([xP, yP, zP])
    if (this._pLeft){
       vP=vP.sub(this._pLeft);
    }else{
      return vP
    }
    let axx=this._vAxisTop.x, 
    axy=this._vAxisTop.y,
    axz=this._vAxisTop.z,
    ayx=this._vY.x,
    ayy=this._vY.y,
    ayz=this._vY.z,
    azx=this._vPlane.x,
    azy=this._vPlane.y,
    azz=this._vPlane.z;


    //vP=vP.sub(this._planePoint);
    let kUvel=10;
    let xm=(axx*vP.x+axy*vP.y+axz*vP.z)*kUvel;
    let ym=(ayx*vP.x+ayy*vP.y+ayz*vP.z)*kUvel;
    let zm=(azx*vP.x+azy*vP.y+azz*vP.z)*kUvel;

    let Y=this._height-zm;
    let X=ym;
    return [ym+this._margin,-zm+this._height-this._margin]
    

    let dPXplus=vP.sub(this._Xplus).length;
    let dPXminus=vP.sub(this._Xminus).length;
    let Xplane=vP.length*vP.cosAngle(this._vPlane);
    Xplane=(dPXplus<dPXminus) ? Xplane : -Xplane;

    let dPYplus=vP.sub(this._Yplus).length;
    let dPYminus=vP.sub(this._Yminus).length;
    let Yplane=vP.length*vP.cosAngle(this._vY);
    Yplane=(dPYplus<dPYminus) ? Yplane : -Yplane;   
  
  //let kSize=2;
 // this._kScreen[2]=kSize
    Xplane=this._height/2-Xplane*this._kScreen[2]+this._kScreen[1];
   // let dy=this._leftScreen
    Yplane=(this._width/2+Yplane*this._kScreen[2]+this._kScreen[0]);
    //return `<br>t=${t}; m=${m}; n=${n}; p=${p}`
    //return `<br>x0=${x0}; y0=${y0}; z0=${z0};`
   //return `<br>A=${A}; B=${B}; C=${C}; D=${D};`
  //  return `<br><br>x1=${x1}; y1=${y1}; z1=${z1}; x0=${x0}; y0=${y0}; z0=${z0}; ky=${ky}; my=${my}; kz=${kz}; mz=${mz}; vP=${vP.data};`
//return `<br><br> xP=${xP}; yP=${yP}; zP=${zP};`;     
   // return [xP, yP, zP];
  //return this._pLeft
   return `<br><br>axx=${axx}; axy=${axy}; axz=${axz}; ayx=${ayx}; ayy=${ayy}; ayz=${ayz}; azx=${azx} ; azy=${azy}; azz=${azz} vP=${vP.data} xm=${xm} ym=${ym}; zm=${zm}; `
    //return vY.data
    
    //return [vP.length, vP.cosAngle(this._vY), Xplane]     
    // return `<br> dPXplus=${dPXplus} dPXminus=${dPXminus}; <br>`
    //return [Yplane, Xplane]
    //return ["<", this._Xplus.data, this._Xminus.data, vP.data, ">"]
  }  
draw(){
  //alert("canvas");
  let canvas1=document.querySelector(this._addressCanvas);
  let context=canvas1.getContext("2d");
  canvas1.width=this._width;
  canvas1.height=this._height;

  for(let i=0; i<this._figures.length; i++){
      context.beginPath();
      let figura=this._figures[i];
      //figura.strokeStyle="black";
      //this._figures[0].strokeStyle="black";
      context.strokeStyle=figura.strokeStyle;
      
      for(let j=0; j<figura.orderBypass.length; j++){
        let orderPath=figura.orderBypass[j];
        context.moveTo(figura.shadowPoints[orderPath[0]][0], figura.shadowPoints[orderPath[0]][1])
        //alert(figura.shadowPoints[orderPath[0]])
        for(let m=1; m<orderPath.length; m++){
          context.lineTo(figura.shadowPoints[orderPath[m]][0], figura.shadowPoints[orderPath[m]][1]);
        }
        context.stroke();
      }
      
  context.beginPath();
  context.strokeStyle="red";
  context.moveTo(0.5,0.5);
  context.lineTo(0.5,this._height-1);
  context.lineTo(this._width-1, this._height-1);
   // alert(canvas1.width)
  context.stroke();
  
  }

/*
  context.beginPath();
  context.strokeStyle="red";
  context.moveTo(60,80);
  context.lineTo(200,50);
  context.lineTo(150,20);
  context.stroke();
  */
}

  get figures(){return this._figures}
}


let t1=[];
t1.push([0,0,-0]);
t1.push([100, 0, 0]);
t1.push([300, 200, 0]);
t1.push([123, 456, 789]); //3
t1.push([300, 0, 0]); //4

let d3=new Coordinates();
d3.axisTop=[t1[0], t1[1], t1[2]];
d3.angle=0.5;
d3.width=400;
d3.height=200;
d3.kZoom=[1,1,1];
d3.leftScreen=[0,0];
d3.rightScreen=[2,3];
d3.setFocus();


let x=100, y=50, z=200, dx=100, dy=200, dz=70;

let m2=[]; 
// x=0, y=20, z=50, dx=100, dy=200, dz=70;
 x=100, y=50, z=60, dx=100, dy=200, dz=70;
m2.push([x,y,z]);
m2.push([x+dx, y, z]);
m2.push([x+dx,y+dy,z]);
m2.push([x, y+dy, z]);



let f1=new Figure();
x=100, y=-50, z=50, dx=100, dy=200, dz=70;
f1.points=square1(x, y, z, dx, dy, dz);
f1.orderBypass=[[0,1,2],[2,3,0]];
f1.strokeStyle="black";


let f2=new Figure();
x=100, y=50, z=100, dx=100, dy=200, dz=70;
f2.points=square1(x, y, z, dx, dy, dz);
f2.strokeStyle="teal";
f2.orderBypass=[[0,1,2],[2,3,0]];

let f3=new Figure();
x=100, y=50, z=150, dx=100, dy=200, dz=70;
f3.points=square1(x, y, z, dx, dy, dz);
f3.strokeStyle="magenta";
f3.orderBypass=[[0,1,2],[2,3,0]];


//d3.borderScreen
d3.figures=[f1, f2, f3];

d3.addressCanvas="#canvas1";

d3.draw();


let insert=`d3.axisTop=${d3.axisTop}<br>`;
insert+=` d3.vAxisTop=${d3.vAxisTop.data}<br>`;
insert+=`d3.vPlane=${d3.vPlane.data}<br>`;
insert+=`d3.pLeft=${d3.pLeft}<br>`;
insert+=`d3.vY=${d3.vY.data}<br>`;
insert+=`d3.distance=${d3.distance}<br>`;
insert+=`d3.focus=${d3.focus.data}<br>`;
insert+=`d3.planePoint=${d3.planePoint.data}<br>`;
//insert+=`d3.figures[2].points=${d3.figures[2].points}<br>`;
insert+=`d3.figures[0].points=${d3.figures[0].points}<br>`;
insert+=`d3.figures[0].shadowPoints=${d3.figures[0].shadowPoints}<br>`;
//insert+=`d3.figures[1].shadowPoints=${d3.figures[1].shadowPoints}<br>`;
//insert+=`d3.figures[2].shadowPoints=${d3.figures[2].shadowPoints}<br>`;
//insert+=`d3.figures[1].shadowPoints=${d3.figures[1].shadowPoints}<br>`



let matriza=document.querySelector("#matriza");
matriza.innerHTML=insert;
//matriza.innerHTML=`t1=${t1}<br>v1.data=${v1.data} v1.x=${v1.x} v1.y=${v1.y} v1.z=${v1.z} `

function square1(x, y, z, dx, dy, dz){
   //x=100, y=50, z=60, dx=100, dy=200, dz=70;
   let m2=[];
  m2.push([x,y,z]);
  m2.push([x+dx, y, z]);
  m2.push([x+dx,y+dy,z]);
  m2.push([x, y+dy, z]);
  //alert(m2)
  return m2
}

/** 

let t1=[];
t1.push([0,0,0]);
t1.push([0, 200, 0]);
t1.push([300, 0, 0]);
t1.push([123, 456, 789]); //3
t1.push([20, 30, 40]); //4

v1=new Vektor(t1[1]);
//v1.x=40; v1.y=50; v1.z=60;v1.data=[35, 45, 55]

v2=new Vektor(t1[2]);
v3=v1.add(v2);
v4=v1.add(10);
vSub=v1.sub(v2);
vMul=v1.mul(v2);
vVM=v1.vektorMultiply(v2).ort();


let matriza=document.querySelector("#matriza");
let insert=`<br>v1.data=${v1.data} v1.x=${v1.x} v1.y=${v1.y} v1.z=${v1.z} <br>`;
insert+=`v2=${v2.data} <br>`;
insert+=`v3.data=${v3.data}<br>`;
insert+=`v4.data=${v4.data}<br>`;
insert+=`vSub.data=${vSub.data}<br>`;
insert+=`vMul=${vMul.data}<br>`
insert+=`vVM=${vVM.data}<br>`;
matriza.innerHTML=insert;

    */


