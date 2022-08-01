import Book from '../../Components/Book/Book';
import { useState, useEffect, useRef } from 'react';
import fetchBooks from '../../Data/FetchBooks';
import styles from './BookGallery.module.scss';

import image1 from '../../Images/image1.jpg';
import image2 from '../../Images/image2.jpg';
import image3 from '../../Images/image3.jpg';
import image4 from '../../Images/image4.jpg';

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
			{books.map((book) => (
				<Book key={book.id} data={book} />
			))}
		</div>
	);
}

export default BookGallery;
