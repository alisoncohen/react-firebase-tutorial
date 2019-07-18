import React from 'react';
import { Link } from 'react-router-dom';
import SignOutButton from '../SignOut';
import styles from './navigation.module.scss';

import * as ROUTES from '../../constants/routes';
import { AuthUserContext } from '../Session';

const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser => (authUser ? <NavigationAuth /> : <NavigationNonAuth />)}
    </AuthUserContext.Consumer>
  </div>
);

const NavigationAuth = () => (
  <div className={styles.nav}>
    <ul className={styles.list}>
      <li>
        <Link className={styles.nav_item} to={ROUTES.LANDING}>
          Landing
        </Link>
      </li>
      <li>
        <Link className={styles.nav_item} to={ROUTES.HOME}>
          Home
        </Link>
      </li>
      <li>
        <Link className={styles.nav_item} to={ROUTES.ACCOUNT}>
          Account
        </Link>
      </li>
      <li className={styles.sign_out_button} />
    </ul>
    <div>
      <SignOutButton />
    </div>
  </div>
);

const NavigationNonAuth = () => (
  <ul className={styles.list}>
    <li>
      <Link className={styles.nav_item} to={ROUTES.LANDING}>
        Landing
      </Link>
    </li>
    <li>
      <Link className={styles.nav_item} to={ROUTES.SIGN_IN}>
        Sign In
      </Link>
    </li>
  </ul>
);

export default Navigation;
