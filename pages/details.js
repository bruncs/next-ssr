import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import withAnalytics from '../src/hocs/withAnalytics';

const Details = ({ user }) => (
  <div>
    <h1>{user.login}</h1>
    <img alt="" src={user.avatar_url} width="200" />
  </div>
);

Details.getInitialProps = async ({ query }) => {
  const response = await axios.get(`https://api.github.com/users/${query.user}`);

  return { user: response.data };
};

Details.propTypes = {
  user: PropTypes.shape(),
};

Details.defaultProps = {
  user: {},
};

export default withAnalytics()(Details);
