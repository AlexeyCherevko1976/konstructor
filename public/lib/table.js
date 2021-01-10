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
    this._typeInsert='//'
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
    //let nameValues=nameValues || [];
    
    for (let i=0; i<this._data.length; i++){
      if(true){
        let search=new RegExp('\/'+this._data[i][0]+'\/',"g");

        let replaceValue=this._data[i][0]+'='+this._data[i][1]+' '+this._data[i][3];
        app.innerHTML=app.innerHTML.replace(search, replaceValue);        
      }
//alert(replaceValue);
    }
    //let search=new RegExp('\/'+this._data[nameValue][0]+'\/',"g");

    //let replaceValue=this._data[nameValue][0]+'='+this._data[nameValue][1]+' '+this._data[nameValue][3];
//alert(replaceValue)
    //app.innerHTML=app.innerHTML.replace(search, replaceValue);
    //replace=replace.replace(/(\[])/g, "")
      //value['value']=
    //alert(search)
     //app.innerHTML=`${this._data[numberValue][0]}=${this._data[numberValue][1]} ${this._data[numberValue][3]} `;

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
