import styles from './App.module.scss';
import Header from './Components/Header';
import SearchBar from './Components/SearchBar';
import { useState, useRef, useEffect } from 'react';
import BookGallery from './Containers/BookGallery/BookGallery';
import fetchBooks from './Data/FetchBooks';

function App() {
	const [search, setSearch] = useState('');
	const firstMount = useRef(true);
	const [books, setBooks] = useState([]);

	useEffect(() => {
		if (firstMount.current === true) {
			firstMount.current = false;
			return;
		}

		const wrapper = async (search = '') => {
			const data = await fetchBooks(search);
			return data;
		};
		wrapper(search);
	}, [search]);

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
		<div className={styles.App}>
			<Header />
			<SearchBar onSubmit={setSearch} />
			<BookGallery books={books} />
		</div>
	);
}

export default App;
