/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';

import { Octicon, Octicons } from 'octicons-react';
import { Container, Repository } from './styles';

const CompareList = ({ repositories, removeRepository }) => (
  <Container>
    {repositories.map(repository => (
      <Repository key={repository.id}>
        <i
          tabIndex={0}
          role="button"
          onClick={() => removeRepository(repository.id)}
          className="fa fa-close remove"
        />
        <header>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <strong>{repository.name}</strong>
          <small>{repository.owner.login}</small>
        </header>

        <ul>
          <li>
            <span>{repository.stargazers_count}</span>
            <small>
              {' '}
              stars
              {' '}
              <Octicon icon={Octicons.star} />
            </small>
          </li>
          <li>
            <span>{repository.forks_count}</span>
            <small>
              {' '}
              forks
              {' '}
              <Octicon icon={Octicons.repoForked} />
            </small>
          </li>
          <li>
            <span>{repository.open_issues_count}</span>
            <small>
              {' '}
              issues
              {' '}
              <Octicon icon={Octicons.issueOpened} />
            </small>
          </li>
          <li>
            <span>{repository.last_commit}</span>
            <small>
              {' '}
              last commit
              {' '}
              <Octicon icon={Octicons.gitCommit} />
            </small>
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
  removeRepository: PropTypes.func.isRequired,
};

export default CompareList;
