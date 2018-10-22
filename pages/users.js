import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import axios from 'axios';

import withAnalytics from '../src/hocs/withAnalytics';

const Users = ({ users }) => (
  <div>
    <ul>
      {users.map(user => (
        <li key={user.id}>
          <Link href={`/users/${user.login}`}>
            <a>{user.login}</a>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

Users.propTypes = {
  users: PropTypes.shape(),
};

Users.defaultProps = {
  users: {},
};

Users.getInitialProps = async () => {
  const response = await axios.get('https://api.github.com/orgs/zeit/members');

  return { users: response.data };
};

export default withAnalytics()(Users);
