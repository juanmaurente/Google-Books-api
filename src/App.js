import styles from './App.module.scss';
import Header from './Components/Header';
import SearchBar from './Components/SearchBar';
import { useState, useEffect } from 'react';
import BookGallery from './Containers/BookGallery/BookGallery';
import fetchBooks from './Data/FetchBooks';
import Footer from './Components/Footer';

function App() {
	const [search, setSearch] = useState('');
	const [books, setBooks] = useState([]);

	useEffect(() => {
		const wrapper = async () => {
			if (search === '') {
				const data = await fetchBooks(null);
				return setBooks(data);
			}
			const data = await fetchBooks(search);
			return setBooks(data);
		};
		wrapper(search);
	}, [search]);

	return (
		<div className={styles.App}>
			<Header />
			<SearchBar onSubmit={setSearch} />
			<BookGallery books={books} />
			<Footer />
		</div>
	);
}

export default App;
