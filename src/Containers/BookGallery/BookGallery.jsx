import styles from './BookGallery.module.scss';
import Book from '../../Components/Book';
import image from '../../Images/matt-seymour-DbZLN1BT_sU-unsplash.jpg';

function BookGallery({ books }) {
	return (
		<div className={styles.BookGallery}>
			{books.map((book, index) => {
				let thumbnail =
					book.volumeInfo.imageLinks &&
					book.volumeInfo.imageLinks.smallThumbnail;

				if (thumbnail !== undefined) {
					return (
						<Book
							key={index}
							title={book.volumeInfo.title}
							img={thumbnail}
							author={book.volumeInfo.authors}
							description={book.volumeInfo.description}
						/>
					);
				} else {
					return (
						<Book
							key={index}
							title={book.volumeInfo.title}
							img={image}
							author={book.volumeInfo.authors}
							description={book.volumeInfo.description}
						/>
					);
				}
			})}
		</div>
	);
}

export default BookGallery;
