import React, {Component} from 'react';


let getId;

class SubmitData extends Component{
  constructor(props){
    super(props)
    this.state ={
      name : " ",
      alldata : []
    }
    this.changeHandler = this.changeHandler.bind(this)
    this.addHandler = this.addHandler.bind(this)
    this.delete = this.delete.bind(this)
    this.edit = this.edit.bind(this)
    this.update = this.update.bind(this)

  }

changeHandler(event){
  let name = event.target.value;
  this.setState({
    name:name
  })
}

addHandler(){
  let x = this.state.alldata;
  x.push(this.state.name)
  this.setState({
    alldata:x,
    name:''
  })
}
delete(event){
  var i = event.target.id;
  console.log(event);
  var localArray = this.state.alldata;
  localArray.splice(i,1);
  this.setState({
    alldata:localArray
  })
}

edit(event){
   getId = event.target.id;
   event.target.style.display="none";
   event.target.parentNode.style.borderBottom ="2px solid red";
   // document.getElementById("enterData").value = this.state.alldata[event.target.id];
    this.setState({
    name : this.state.alldata[event.target.id]
  })
   document.getElementById("addItem").style.display = "none";
   document.getElementById("update").style.display = "block";
}

update(){

  document.getElementById("addItem").style.display = "block";
  document.getElementById("update").style.display = "none";
 let classArray = document.getElementsByClassName("edit");

 for(let i=0; i< classArray.length; i++){
    classArray[i].style.display="block";
    classArray[i].parentNode.style.borderBottom ="none";
 }


  var arrIns = this.state.alldata;
  arrIns[getId] = this.state.name;


  this.setState({
    alldata:arrIns,
    name :''
  })


  }

  render(){
    var todoitem = this.state.alldata.map((e,i)=>{
      return(
        <li key={i}>{e} 
        <span id={i} onClick={this.delete}  className="btn btn-danger">x</span>
        <span className="edit btn btn-success" onClick={this.edit}  id={i}>Edit</span> 
       </li>
      )
    });
    return(
      <div>
        <div className="todoItem">
          <ul>
            {todoitem}
          </ul>
        </div>
        <div className="footer">
          <input type="text" id="enterData" value={this.state.name} onChange={this.changeHandler} placeholder="Add Item" />
          <button type="button" id="addItem" onClick={this.addHandler}>+</button>
          <button type="button" id="update" onClick={this.update}>update</button>
        </div>
      </div>
    )
  }
}

export default SubmitData;
