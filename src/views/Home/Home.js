import React from 'react';
import './Home.css';
import TestForm from '../../components/TestForm/TestForm';

class Home extends React.Component {
  
  state = {
    desc: []
  };

  addDesc = (disc) => {
    const desc = [ ...this.state.desc ];
    desc.push(disc);
    this.setState({ desc });
    
  }; 

  render(){
    return (
      <div className="home">
      {console.log('STATE =>', this.state.desc)};
        <h1>Putting the Evil back in corporations</h1>
        <p>
        Gathered together from the cosmic reaches of the universe, here in this great Hall of Justice, are the most powerful forces of good ever assembled: Superman! Batman and Robin! Wonder Woman! Aquaman! And The Wonder Twins: Zan and Jayna, with their space monkey, Gleek! Dedicated to prove justice and peace for all mankind!
        </p>
        <p>
        Dance your cares away, worry's for another day. Let the music play, down at Fraggle Rock! Work you cares away, dancing's for another day. Let the Fraggles play, We're Gobo, Mokey, Wembley, Boober, Red! Dance your cares away, worry's for another day. Let the music play, down at Fraggle Rock! Down at Fraggle Rock! Down at Fraggle Rock.
        </p>
        <TestForm addDesc={this.addDesc}/>
        <p>
        Making the world a better place, starts with one more smiling face. And Ronald's smile is just the thing, To make everybody sing! Put a smile on, put a smile on, everybody come on! Put a smile on!
        </p>
        <p>
        What walks down stairs, alone or in pairs, and makes a slinkity sound? A spring, a spring, a marvelous thing, everyone knows it's Slinky. It's Slinky, it's Slinky, for fun it's a wonderful toy. It's Slinky, it's Slinky, it's fun for a girl or a boy. It's fun for a girl or boy!
        </p>
        <p>
        Wonder Woman, Wonder Woman. All the world's waiting for you, and the power you possess. In your satin tights, fighting for your rights, and the old Red, White and Blue! Wonder Woman, Wonder Woman. Now the world is ready for you, and the wonders you can do. Make a hawk a dove, stop a war with love. Make a liar tell the truth. Wonder Woman, get us out from under, Wonder Woman. All our hopes are pinned on you, and the magic that you do. Stop a bullet cold, make the Axis fall. Change their minds, and change the world. Wonder Woman, Wonder Woman. You're a wonder, Wonder Woman.
  
        </p>
      </div>
  
    );
  }
  
};

export default Home;
