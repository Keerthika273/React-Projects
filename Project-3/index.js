/*import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();*/
/*import  React from "react";
import  ReactDOM  from "react-dom";
import "./index.css";
import App from "./App";
ReactDOM.render(<App />,document.getElementById("root"));
//import Fruit from "./Fruit";*/

/*import ReactDOM  from "react-dom";
import React from "react";
import k from './k.jpg';
import th from './th.jpg';
import ke from './ke.jpeg';
import an from './an.jpeg';
import './App.css';
import styles from './demo.module.css';

class Reactstyle extends React.Component{
  render()
  {
    const mystyle={
      fontFamily:"Arial",
      textAlign:"center"
    };
    const imgstyle1={
      marginleft:"30px"
     

      
    };

    const imgstyle2={
      float:"right",
      marginleft:"40px"
    };
    const imgstyle3={
      marginleft:"50px",
      float:"right"

    }
    return(
      <div>
        <h1 style={{color:'blue',textAlign:'left'}}><center>Prevent Drug Abuse</center></h1>
        <h2 style={mystyle}>c'mon</h2>
        <h3 className={styles.heading}>Youths you can only do it.!</h3>
       <img src={k} alt="karnataka" width="250" height="250" ></img>
      
       <img src={ke} alt="kerala" width="250" height="250" style={imgstyle2}></img>
       

      <center><video width="200" height="200" controls>
          <source src="https://tse4.mm.bing.net/th?id=OVP.cu02bIX_ditOfkl9ofoiZQHgFo&pid=Api&h=360&w=480&c=7&rs=1" type="IMG_1597.MP4" width="300px" height="300px" padding="60px"/>
      </video></center>
      <img src={th} alt="Tamilnadu" width="250" height="250" style={imgstyle1}></img>
      <img src={an} alt="andhra" width="250" height="250" style={imgstyle3}></img>

      </div>
    )

    }
  }
  ReactDOM.render(<Reactstyle/>,document.getElementById('root'));
  export default Reactstyle;*/

  /*import React from 'react';
  import  ReactDOM  from 'react-dom';
  var n=()=>
  {
    var a=5200000;
    if(a==5200000)
    {
      let a=10;
    }
    document.getElementById('root').innerHTML=a;
  }
  n();
   */

  /*import React from 'react';
  import  ReactDOM  from 'react-dom';
  var a=(X)=>
  {
    var a=500;
    var b=100;
    var c=a+b+X;
    document.getElementById('root').innerHTML=c;
  }  
  a(300);*/

 /* class Demo{
    methodone()
    {
      var a=5;
      var b=10;
      var c=a+b;
      document.getElementById('root').innerHTML=c;
    }
    
  }
  var mydemo=new Demo();
  mydemo.methodone();
*/



/*import React from "react";
import ReactDOM from 'react-dom';
var a=(x) =>
{
  var a=21;
  var b=11;
  if((a%b)==0){
    a="divisible by 11";
  }
  else{
    a="not divisible by 11";
  }
  document.getElementById('root').innerHTML=a;
}
a(30);*/
  
/*function getSum(n)
{
  var sum = 0;
  while (n != 0) {
    sum = sum + n % 10;
    n = parseInt(n / 10);
  }
  return sum;
}
var n = 77;
document.getElementById('root').innerHTML=getSum(n);*/

/*import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import Form from './Form';


import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Form/>
  </React.StrictMode>
);
*/




/*import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes, Link, NavLink, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Join from './Joinus';

const routing = (
    <Router>
        <div>
            
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/a" element={<About/>} />
                <Route path="/j" element={<Join/>} />
            </Routes>
        </div>
    </Router>
)

ReactDOM.render(routing,document.getElementById('root'));*/


/*import ReactDOM from 'react-dom';
import React,{Component} from 'react';

class Cartoon extends React.Component{
  constructor(props){
    super(props);
    this.state={Ilike:"TOM"};
  }
  static getDerivedStateFromProps(props,state){
    return {Ilike:props.A}
  }
  render(){
    return(
      <div>
        <h1>This {this.state.Ilike} cartoon is cool.</h1>
      </div>
    );
  }
}
ReactDOM.render(<Cartoon A="jerry"/>,document.getElementById('root'));*/
  
/*import ReactDOM from 'react-dom';
import React,{Component} from 'react';
class Header extends React.Component{
  constructor(props){
    super(props);
    this.state={I:"state"};
  }
  componentDidMount(){
    setTimeout(()=>{
      this.setState({I:"DidMount"})},2000)
  }
  render(){
    return(
      <h1>{this.state.I}</h1>
    );
  }
}
ReactDOM.render(<Header/>,document.getElementById('root'));*/


/*//import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import React, {Component} from 'react';
//import { BrowserRouter as Router, Route, Routes, Link, NavLink, Switch } from 'react-router-dom';
//import Home from './Home';
//import About from './About';
//import Join from './Joinus';
class Header extends React.Component{
  constructor(props){
    super(props);
    this.state={favcolor:"black"};
  }
  //static getDerivedStateFromProps(props,state){
    //return {favcolor:props.favcol};
  //}
  changeColor=()=>{
    this.setState({favcolor:"purple"});
  }
  render(){
    return(
      <div>
         <h1>My favourite color is {this.state.favcolor}</h1>
         <button type="button" onClick={this.changeColor}>CHANGE COLOR</button>
      </div>
    );
  }
}
ReactDOM.render(<Header favcol="yellow"/>,document.getElementById('root'));*/

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import Buddy from './Buddy';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <Buddy/>
  </React.StrictMode>
);

reportWebVitals();