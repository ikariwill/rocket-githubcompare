import React from 'react';
import PropTypes from 'prop-types';

import { Container, Repository } from './styles';

const CompareList = ({ repositories }) => (
  <Container>
    {repositories.map(repository => (
      <Repository key={repository.id}>
        <header>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <strong>{repository.name}</strong>
          <small>facebook</small>
        </header>

        <ul>
          <li>
            <span>{repository.stargazers_count}</span>
            <small> stars</small>
          </li>
          <li>
            <span>{repository.forks_count}</span>
            <small> forks</small>
          </li>
          <li>
            <span>{repository.open_issues_count}</span>
            <small> issues</small>
          </li>
          <li>
            <span>{repository.lastCommit}</span>
            <small> last commit</small>
          </li>
        </ul>
      </Repository>
    ))}
  </Container>
);

CompareList.propTypes = {
  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      owner: PropTypes.shape({
        login: PropTypes.string,
        avatar: PropTypes.string,
      }),
      stargazers_count: PropTypes.number,
      forks_count: PropTypes.number,
      open_issues_count: PropTypes.number,
      pushed_at: PropTypes.string,
    }),
  ).isRequired,
};

export default CompareList;
