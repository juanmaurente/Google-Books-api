import React from 'react';
import styles from './Footer.module.scss';

function Footer() {
	return (
		<footer class={styles.footer}>
			<div class={styles.footer_logo}>
				<h2 class={styles.footer_logo_thick}>Juan</h2>
				<h2 class={styles.footer_logo_thin}>Maurente</h2>
			</div>
			<p>Copyright &copy; Juan Maurente All Rights Reserved</p>
			<p class={styles.footer_date}>{new Date().getFullYear()}</p>
		</footer>
	);
}

export default Footer;
