let R1=new Formula();
R1.insertAddress="#formuleExample";
R1.push={name:"Mman", value:70, formula: "", measureUnit: "Вт", komment: "Физическая мощность человека"};
R1.push={name:"Sman", value: 40000, formula:"",measureUnit:"руб/мес", komment:"Стоимость рабочей силы"};
//R1.push={name:"S", value: "8", formula:"", measureUnit:"", komment:""};
//R1.push={name:"P", value: "", formula:"S*Math.sqrt(4)**3", measureUnit:"", komment:""};
R1.push={name: "SFman", value: 40, round: -1, measureUnit: "руб/(квт*час)", formula:"Sman/166[час/мес]/(Mman*0.001[(квт*час)/(Вт*час)])", komment: "  Стоимость физической силы человека"}
//R1.textFormula([0], "");

let tR1=new Table();
tR1.version="Formula_1";
tR1.width=2;
tR1.height=2;
tR1.insertAddress="#tR1";
tR1.data=R1.exportTable;


//alert(`${tR1.data} ${R1.exportTable}`);
tR1.innerText("html");

let t1=new Table();
let mTable=[];
t1.insertAddress="#app";
mTable[0]=["Стоимость силы", "человеческой", "ДВС (солярка)", "электрической"];
mTable[1]=["руб/кВт*час", "3442", "25", "4,4"];
mTable[2]=['Ссылки', "[1]", "[2]", "[3]"];
mTable[3]=["Комментарии", "", "", ""];
t1.width=3;
t1.height=4;
t1.data=mTable;
t1.version="v1";
t1.transpose();
//t1.innerText("html");


