import React from 'react';
// import { Link } from 'react-router-dom';

const formStyle = {
  background: '#fff',
  maxWidth: '500px',
  margin: '50px auto',
  padding: '2rem',
  border: '2px solid #000'
}

const formFieldStyle = {
  textAlign: 'center',
  fontSize: '1.2rem',
  display: 'block',
  backgroundColor: 'black',
  color: 'white',
  padding: '10px 20px',
  borderRadius: '5px',

}

class TestForm extends React.Component {
  
  descRef = React.createRef();
  
  handleSubmit = (e) => {
    // 1. Stop the form from submitting
    e.preventDefault();      
    // 2. Get the text from the input
    // console.log(this.descRef.current.value);
    const descValue = this.descRef.current.value;
    // 3. send it to state / Home.js
    this.props.addDesc(descValue);
    //4. Reset the form
    e.target.reset();
  }
  render(){
    return(
      <form style={formStyle} onSubmit={this.handleSubmit}>
        <h2>Enter some text below</h2>
        <textarea name="desc" ref={this.descRef} placeholder="This is some placeholder text" style={{height: '10em', width: '30em'}}/>
        <button type="submit" style={formFieldStyle}> Submit! </button>
      </form>
    );
  }
}

export default TestForm;
