import styles from './Book.module.scss';

function Book({ img, title, author, description }) {
	return (
		<div className={styles.book}>
			<img src={img} className={styles.book_img} alt='' />
			<div className={styles.book_info}>
				<h4 className={styles.book_info_title}>{title}</h4>
				<h5 className={styles.book_info_author}>{author}</h5>
			</div>
		</div>
	);
}

export default Book;
