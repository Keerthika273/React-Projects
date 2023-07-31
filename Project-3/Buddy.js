import React, {Component} from "react";

class Buddy extends React.Component{

  constructor(){

    super();

    this.state={

      data:

      [

        {

          "name":"Afsar:Albiee"

        },

        {

          "name":"Avanthiga:Avanthi"

        },

        {

          "name":"Keertana:Keerts"

        },

        {

            "name":"Mahila:Mahhi"

        },
        {
          "name":"Hari dharshini:Hari"
        }

      ]

    }

  }

  render(){

    return(

      <div>

        <Names/>

        <ul>

          {this.state.data.map((item) => <List data = {item}/>)}

        </ul>

      </div>

    );

  }

}

class Names extends React.Component{

  render(){

    return(

      <div>

        <h1> Buddy Club</h1>

        <h1>My clg buddies</h1>

      </div>

    );

  }

}

class List extends React.Component{

  render(){

    return(

      <ul>

        <li> {this.props.data.name}</li>

      </ul>

    );

  }

}

export default Buddy;