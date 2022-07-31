import React from 'react';
import styles from './Header.module.scss';

function Header() {
	return (
		<div className={styles.headerTitle}>
			<h1>Google Books API</h1>;
		</div>
	);
}

export default Header;
