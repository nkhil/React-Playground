import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Home } from './views/Home';
import { About } from './views/About';
import { TopicList } from './views/TopicList';
import { NoMatch } from './views/NoMatch';
import { TopicDetail } from './components/TopicDetail';
import { NavBar } from './components/NavBar';
import { Contact } from './views/Contact';
import { Logo } from './components/Logo';
import { Footer } from './components/Footer'


class Routes extends React.Component {
  
 
  
  render(){
    return (
      <div>
        <Logo />
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Home">
            <Redirect to="/" />
          </Route>
          <Route exact path="/About" component={About} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/Topics" component={TopicList} />
          <Route path="/Topics/:topicId" component={TopicDetail} />
          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </div>
    );
  }  
};

export default Routes;
