import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import axios from 'axios';

import withAnalytics from '~/hocs/withAnalytics';

const Users = ({ users, org }) => (
  <div>
    <ul>
      {users.map(user => (
        <li key={user.id}>
          <Link href={`/users/${org}/${user.login}`}>
            <a>{user.login}</a>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

Users.propTypes = {
  users: PropTypes.shape(),
  org: PropTypes.string,
};

Users.defaultProps = {
  users: {},
  org: '',
};

Users.getInitialProps = async ({ query }) => {
  const response = await axios.get(`https://api.github.com/orgs/${query.org}/members`);

  return { users: response.data, org: query.org };
};

export default withAnalytics()(Users);
