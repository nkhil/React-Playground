import React from 'react';
import { Link } from 'react-router-dom';

const TopicDetail = ({ match, history }) => {
  return (
    <div className="text-center">
      <h3>{match.params.topicId}</h3>
      <ul className="list-unstyled list-inline">
        <li className="list-inline-item">
          <Link to="/Topics">Back to Topics</Link>
        </li>
      </ul>
    </div>
  );
};

export default TopicDetail;
