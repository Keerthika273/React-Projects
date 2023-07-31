

import ReactDOM  from "react-dom";
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
  export default Reactstyle;

  