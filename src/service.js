import React from 'react';
import { Home } from './views/Home';
import { About } from './views/About';
import { TopicList } from './views/TopicList';
import { TopicDetail } from './components/TopicDetail';
import { NavBar } from './components/NavBar';
import { NoMatch } from './components/NoMatch';
import { Route, Switch } from 'react-router-dom';

export const Service = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Topics" component={TopicList} />
        <Route exact path="/Topics/:topicId" component={TopicDetail} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  );
};
