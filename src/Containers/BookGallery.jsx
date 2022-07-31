import Book from '../Components/Book/Book';
import { useState, useEffect, useRef } from 'react';
import fetchBooks from '../Data/FetchBooks';
import styles from './BookGallery.module.scss';

import image1 from '../Images/image1.jpg';
import image2 from '../Images/image2.jpg';
import image3 from '../Images/image3.jpg';
import image4 from '../Images/image4.jpg';

function BookGallery({ booksData }) {
	const [books, setBooks] = useState([]);
	const firstMount = useRef(true);

	useEffect(() => {
		if (firstMount.current) {
			firstMount.current = false;
			return;
		}

		const wrapper = async () => {
			const data = await fetchBooks();
			setBooks(data);
		};

		wrapper();
	}, []);

	return (
		<div className={styles.BookGallery}>
			<Book img={image1} alt='aaron-burden-AXqMy8MSSdk-unsplash' />
			<Book img={image2} alt='baher-khairy-yjrRkqaa_h4-unsplash' />
			<Book img={image3} alt='cody-board-UMlXDGxY6Kc-unsplash' />
			<Book img={image4} alt='thought-catalog-DxAzOKSiPoE-unsplash' />

			{/* {console.log(books.length)}
			<p>a</p>
			{books.length === 0 && <p>No results found</p>}
			{books.length > 0 &&
				books.map((book, index) => {
					console.log(book);
					return (
						<>
							<Book
								key={index}
								title={book.volumeInfo.title}
								img={book.volumeInfo.imageLinks.thumbnail}
							/>
							;
						</>
					);
				})} */}
		</div>
	);
}

export default BookGallery;
