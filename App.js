// import logo from './logo.svg';
import React from 'react';
import './App.css';
import './Person.css';
import Person from './Person';
import { Component } from 'react';

class App extends Component {

  state = {
    persons: [{name: 'Hizy', age: '23'},
    {name: 'Anu', age: '24'},
    {name: 'Ye', age: '25'}],
    otherState: false
  }
  otherPerson=()=>{
    const doesShow = this.state.otherState
    this.setState({
      otherState: !doesShow
    })
  }
  switchName = (newName) => {
    this.setState({
      persons: [{name: 'HizyS', age: '23'},
      {name: 'AnuS', age: '24'},
      {name: newName, age: '25'}]
    })
  }

  switchName1 = (newName) => {
    this.setState({
      persons: [{name: 'HizyS', age: '23'},
      {name: newName, age: '24'},
      {name: "YeS", age: '25'}]
    })
  }

  changeTextHandler = (newText) => {
    this.setState({
      persons: [{name: 'HizyS', age: '23'},
      {name: "AnuS", age: '24'},
      {name: newText.target.value, age: '25'}]
    })
  }
  // autoshow =() => {
  //   const arr = Array.from(this.state.persons)
  //     arr.map(name, age)
  //   }

  lick=(a)=>{
  a.findindex(this.delete)
}

  delete =(fi)=>{
    const newArr = this.state.persons.splice(fi, 1)
    this.setState({
      persons: [newArr]
    })
  }
  
  render() 
  {
  return (
    <div className="App">
      <h1>Hi, I am a React Developer</h1>
      {/* <button onClick={this.switchName.bind(this, 'YeS')}>Switch Name</button> */}
      <button onClick={this.otherPerson}>Switch Name</button>
      {this.state.otherState?
      <div>
        {this.state.persons.map((e, index)=>{
          return <Person 
          name={e.name} 
          age={e.age} 
          onlick = {this.lick(e)
          //   lick=(index)=>{
          //     this.setState(
          //       {persons: [{name: 'Salewa', age: 22}]}
          //     )
          // }
        } />
           
        })}
      {/* <Person name = 'Hizy'/>
      <Person name = 'Anu'/>
      <Person name = 'Ye'/>
      <Person name = {this.state.persons[0].name} age = {this.state.persons[0].age}/>
      <Person onlick = {this.switchName1.bind(this, 'AnuS$')} name = {this.state.persons[1].name} age = {this.state.persons[1].age}/>
      <Person changed = {this.changeTextHandler} name = {this.state.persons[2].name} age = {this.state.persons[2].age}/> */}
      </div> : null}
      
    </div>
  );
 };
}
export default App;
