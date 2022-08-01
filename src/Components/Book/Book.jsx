import styles from './Book.module.scss';

function Book({ data }) {
	return (
		<div className={styles.Book}>
			<img
				src={data.volumeInfo.imageLinks.smallThumbnail}
				className={styles.Book__Image}
				alt={data.volumeInfo.title}
			/>
			{/* <img src={img} alt='book front' /> */}
			{/* <p key={index}>{title}</p> */}
		</div>
	);
}

export default Book;
