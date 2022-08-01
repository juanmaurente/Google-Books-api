import styles from './Book.module.scss';

function Book({ img, title, author, description }) {
	return (
		<div className={styles.Book}>
			<img src={img} className={styles.Book__Image} alt='' />
		</div>
	);
}

export default Book;
