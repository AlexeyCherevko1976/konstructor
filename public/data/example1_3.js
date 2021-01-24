let R1=new Formula();
R1.insertAddress="#formuleExample";
R1.push={name:"p", value:1600, formula: "", measureUnit: "кг/м3", komment: "плотность пустотелого кирпич"};
R1.push={name:"d", value:0.02, formula: "", measureUnit: "м", komment: "толщина известково-песчаной штукатурки"};

R1.push={name:"Sman", value: 40000, formula:"",measureUnit:"руб/мес", komment:"Стоимость рабочей силы"};


let tR1=new Table();
tR1.version="Formula_1";

tR1.insertAddress="#tR1";
tR1.data=R1.exportTable;

tR1.insertAddress=".content";
tR1.printValues();

tR1.typeInsert='//k';
tR1.printValues();

tR1.typeInsert='//f';
tR1.printValues();

tR1.typeInsert='//F';
tR1.printValues();

tR1.insertAddress="#tR1";
tR1.innerText("html");
