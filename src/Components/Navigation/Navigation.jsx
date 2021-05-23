import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { authSelectors } from '../../redux/auth';
// import styles from './Navigation.module.scss'

const styles = {
  navList: {
    display: 'flex',
  },
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
  },
  activeLink: {
    color: '#E84A5F',
  },
};

const Navigation = ({ isAuthenticated }) => (
  <nav>
    <ul style={styles.navList}>
      <li>
        <NavLink to="/" exact style={styles.link} activeStyle={styles.activeLink}>
          Главная
        </NavLink>
      </li>
      {isAuthenticated && (
        <li>
          <NavLink to="/phonebook" style={styles.link} activeStyle={styles.activeLink}>
            Телефонная книга
          </NavLink>
        </li>
      )}
    </ul>
  </nav>
);

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
