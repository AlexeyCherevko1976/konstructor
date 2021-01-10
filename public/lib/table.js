// Add your code here
class Table {
  constructor(name) {
    this.name = name || 'Friz';
    this._width = undefined;
    this._height = undefined;
    this._data = undefined;
    this._version = 'v1';
    this._border = '';
    this._style = '';
    this._address = undefined;
    this._typeInsert='//';
    // // - p=1600 кг/м3
    // //k - m=4800 кг; вес кирпича  /../
    // //f
    // 
  }
  set typeInsert(value){
    this._typeInsert=value;
  }
  set insertAddress(address) {
    this._address = address;
  }
  set width(value) {
    this._width = value;
  }
  set data(value) {
    this._data = value;
    }
  get data(){
    return this._data
  }
  set version(value) {
    let styleV1='style="background: aquamarine; color: black; text-align: center;"'

    this._version=value;
   // alert(this._version)
    this._border =
      (this._version == 'v1' || this._version == 'Formula_1') ? '  border="1" bordercolor="olive"' : 'border="1"';
    this._style =
      (this._version == 'v1' || this._version == 'Formula_1')
       ? styleV1 : '';
    this._version = value;
  }
  printValues(){
    let app=document.querySelector(this._address);


    for (let i=0; i<this._data.length; i++){
      if(this._typeInsert=='//k'){
        let search=new RegExp('\/'+this._data[i][0]+'\/k',"g");
        let replaceValue=this._data[i][0]+'='+this._data[i][1]+' '+this._data[i][3]+"; "+this._data[i][4];
        app.innerHTML=app.innerHTML.replace(search, replaceValue);        
      }else if(this._typeInsert=='//f'){
        let search=new RegExp('\/'+this._data[i][0]+'\/f',"g");
        let replaceValue=this._data[i][0]+'='+this._data[i][2]+"; ";
        app.innerHTML=app.innerHTML.replace(search, replaceValue);        

      }else if(this._typeInsert=='//F' && (this._data[i][2] !="")){
        let search=new RegExp('\/'+this._data[i][0]+'\/F',"g");
        let formula=this._data[i][2];
        for(let j=0; j<i; j++){
          let searchFormula=new RegExp("(?<=^|[\*\/\+-])"+this._data[j][0]+"(?=$|[\*\/\+-])","g");
          let replaceFormula=this._data[j][1]+" ["+this._data[j][3]+"]";
          formula=formula.replace(searchFormula, replaceFormula);
        }
        let replaceValue=this._data[i][0]+'='+formula+"; ";
        app.innerHTML=app.innerHTML.replace(search, replaceValue);        

      }else if(this._typeInsert=='//p'){
        let search=new RegExp('\/'+this._data[i][0]+'\/(?=[^kfF])',"g");
        let replaceValue=this._data[i][0]+'='+this._data[i][1]+' '+this._data[i][3];
        app.innerHTML=app.innerHTML.replace(search, replaceValue);        

      }else if(this._typeInsert=='//'){
        let search=new RegExp('\/'+this._data[i][0]+'\/(?=[^kfF])',"g");
        let replaceValue=this._data[i][0]+'='+this._data[i][1]+' '+this._data[i][3];
        app.innerHTML=app.innerHTML.replace(search, replaceValue);        

      }
//alert(replaceValue);
    }

  }
  transpose() {
    if (this._data) {
      let trT = '';
      let trans = Array(this._data[0].length);
      for (let i = 0; i < trans.length; i++) {
        //trans[i]=transTr(this._data, i);
        let tr = [];
        for (let j = 0; j < this._data.length; j++) {
          tr.push('' + this._data[j][i] + '');
        }
        //trans[i]=[this._data[0][0], this._data[1][0]];
        trans[i] = tr;
      }
      this._data = trans;
      function transTr(dataArr, nC) {}
    }
  }
  innerText(format) {
    //alert(this._data[0][3])
    let app = document.querySelector(this._address);
    if (this._version == "Formula_1"){
      this._data.unshift(["Номер", "Переменная", "Значение", "Формула", "Мера", "Комментарий"]);
      for (let i=1; i<this._data.length; i++){
        this._data[i].unshift(i-1)
      }
    }
    if (format != 'html') {
      app.innerText = getTextTable(this._data, this._border, this._style);
    } else {
      app.innerHTML = getTextTable(this._data, this._border, this._style);
    } //document.body.innerText='<div>ggggg</div>';
    function getTextTable(data, border, style) {
      let trT = '';
      for (let i = 0; i < data.length; i++) {
        trT += '<tr>' + getTextTr(data[i]) + '</tr>\n';
      }
      return `<table ${border} ${style}>\n${trT}</table>`;
    }
    function getTextTr(trArray) {//alert(trArray)
      let txtTr = '';
      for (let i = 0; i < trArray.length; i++) {
        txtTr += '<td>' + trArray[i] + '</td>'

        ;
      }
      return txtTr;
    }
  }

  sayHy() {
    alert(this.name);
  }
}

//export Table
