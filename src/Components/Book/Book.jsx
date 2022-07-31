import styles from './Book.module.scss';
import axios from 'axios';

function Book({ index, title, img, alt }) {
	return (
		<div className={styles.Book}>
			<img src={img} alt={alt} className={styles.Book__Image} />
			{/* <img src={img} alt='book front' /> */}
			{/* <p key={index}>{title}</p> */}
		</div>
	);
}

export default Book;
