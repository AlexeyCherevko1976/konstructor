 class Formula{
  constructor(isCalk){
    this._isCalk=isCalk;
    this._data=[];
    this._address=undefined;
    this._textValues="";
    //this._measureUnit=measureUnit;
    //this._komment=komment;
    this._round=3;
    
  }
  
  set insertAddress(address){
    this._address=address;
    //alert("@@@")
  }
  
  set push(value){
    if (value['value']==""){
      //alert(eval("S=5; "+value['formula']+"; "));
      //alert(eval("5*8"));
      //alert(this._textValues+value['formula'])
      //value['value']=eval(this._textValues+value['formula']);
      //alert(`let ${value['name']}=${value['value']};`)
      //alert(this._textValues)
    }
    if (value['formula'] != ""){
      let search=new RegExp('\\[.*?]',"g");
      let clear=value['formula'].replace(search, "");
      value['value']=eval(this._textValues+clear);
      this._round=value['round'] || this._round;
      let round=10**this._round;
      value['value']=Math.round(value['value']*round)/round;
      //alert(round)
    }
    this._data.push(value);
    this._textValues+=`let ${value['name']}=${value['value']}; `;
  }
  /**/
  textFormula(list){
    let app=document.querySelector(this._address);
      

  }
  get exportTable(){
    let exportData=[];
     for (let i=0;i<this._data.length; i++){
       exportData.push([this._data[i]["name"], this._data[i]["value"], this._data[i]["formula"], this._data[i]['measureUnit'], this._data[i]["komment"] ]);
     }
    return exportData
  }
  
}
