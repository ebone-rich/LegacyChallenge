import React, {Component} from 'react';
import {Input} from 'reactstrap';
 
export default class SearchIndex extends Component {
  constructor(props){
    super(props)
  
   this.state = {
     searchObjects: [], //gets results
     searchTerm:'',
     things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards']
   }
 }

 handleChange = (event) => { // assigned search tearn car to value of search bar 
   this.setState({
     searchTerm: event.target.value
   })
 }

 searchFunction = () => { //filter thorugh and checks for matching search term
  console.log('search');
  //filetr through state variable checks for matches to search term sets matches to value for the searchobj
  let searchObjects = this.state.things.filter(thing => thing.includes(this.state.searchTerm));
  this.setState({ // reset state so it conatins matches
    searchObjects
  });
 }

 render() {
   return ( 
   <div className='main'>
     <div className='main div'>
{/* set search term to value on the input, call handle change */}
    <Input type='text' value={this.state.searchTerm} onChange={this.handleChange} placeholder='search here' />
   {/* call the search fucntion when called */}
    <button onClick={this.searchFunction}>search</button>
    <h3>Results:</h3>
    <ul>
      {this.state.searchObjects.map((things, index)=> {
        return <li key={index}> {things}</li>
      })}
    </ul>
  </div>
  </div>
   )}
    
  }
  