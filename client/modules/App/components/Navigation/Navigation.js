import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './Navigation.css';

const Navigation = () => {
    return (
        <div>
            <Link to="/home" className={styles['navi']} activeStyle={{color: 'black'}} onlyActiveOnIndex>Home</Link>
            <Link to="/" className={styles['navi']} activeStyle={{color: 'black'}} onlyActiveOnIndex>Posts</Link>
            <Link to="/about" className={styles['navi']} activeStyle={{color: 'black'}} onlyActiveOnIndex>About</Link>
        </div>
    );
};

export default Navigation;