import React from 'react';
import { Link } from 'react-router-dom';

const TopicList = ({ match, history }) => {
  return (
    <div>
      <h3 className="mt-2 text-center">Topic List View</h3>
      <div>
        <ul className="list-unstyled list-inline text-center">
          <li className="list-inline-item">
            <Link to={`${match.url}/Topic1`}>Topic 1</Link>
          </li>
          <li className="list-inline-item">
            <Link to={`${match.url}/Topic2`}>Topic 2</Link>
          </li>
          <li className="list-inline-item">
            <Link to={`${match.url}/Topic3`}>Topic 3</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopicList;
