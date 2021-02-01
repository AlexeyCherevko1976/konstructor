let R1=new Formula();
R1.insertAddress="#formuleExample";
R1.push={name:"pK", value:1600, formula: "", measureUnit: "кг/м3", komment: "плотность пустотелого кирпич"};
R1.push={name:"dSh", value:0.02, formula: "", measureUnit: "м", komment: "толщина известково-песчаной штукатурки"};
R1.push={name:"t1", value:-32, formula: "", measureUnit: "гр.C", komment: "прил.2 стр.272 ср.наиболее холодных суток"};
R1.push={name:"t5", value:-25, formula: "", measureUnit: "гр.С", komment: "прил.2 стр.272 ср.наиболее холодных 5дневки"};
R1.push={name:"tv", value:18, formula: "", measureUnit: "гр.С", komment: "табл.1.1 стр.6 допустимая температура внутреннего воздуха для общежития"};
R1.push={name:"wv", value:50, formula: "", measureUnit: "%", komment: "табл.1.1 стр.6 допустимая вложенность внутреннего воздуха для общежития"};


R1.push={name:"gK", value:0.64, formula: "", measureUnit: "Вт/(м*грС)", komment: "прил.1 стр.271 теплопроводность кирпича, зона Б"};
R1.push={name:"sK", value:8.42, formula: "", measureUnit: "Вт/(м2*грС)", komment: "прил.1 стр.271 к-т теплоусвоения при периоде 24ч кирпича, зона Б"};

R1.push={name:"pSh", value:1600, formula: "", measureUnit: "кг/м3", komment: "плотность известково-песчаная штукатурка"};
R1.push={name:"gSh", value:0.814, formula: "", measureUnit: "Вт/(м*грС)", komment: "прил.1 стр.271 теплопроводность кирпича, зона Б"};
R1.push={name:"sSh", value:9.75, formula: "", measureUnit: "Вт/(м2*грС)", komment: "прил.1 стр.271 к-т теплоусвоения при периоде 24ч кирпича, зона Б"};

R1.push={name:"tn", value:-25, formula: "", measureUnit: "грС", komment: "для ф.1.40 стр.25 принимаем температуру наружнего воздуха=t5"};
R1.push={name:"n", value:1, formula: "", measureUnit: "грС", komment: "для ф.1.40 стр.25 поправочный к-т согласно прил.4 273"};
R1.push={name:"dtn", value:1, formula: "", measureUnit: "грС", komment: "для ф.1.40 стр.25 поправочный к-т согласно прил.4 273"};

R1.push={name:"sSh", value:9.75, formula: "", measureUnit: "Вт/(м2*грС)", komment: "принимаем что стена  (т.1.3 стр.25) "};

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
