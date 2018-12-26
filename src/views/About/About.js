import React, { Fragment } from 'react';

const aboutStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
}

class About extends React.Component {

  render(){
    return(
      <Fragment>
        <div style={aboutStyle}>
        <h2>About</h2>
        <p>This is where we will load in the data from the form.</p>
        </div>        
      </Fragment>
    );
  }
}

export default About;
