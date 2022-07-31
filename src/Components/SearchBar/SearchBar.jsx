import styles from './SearchBar.module.scss';
import fetchBooks from '../../Data/FetchBooks';

import { useState } from 'react';

function SearchBar() {
	const [search, setSearch] = useState('');

	const handleSearchInput = (e) => {
		setSearch(e.target.value);
		console.log(search);
	};

	const handleSearch = (e) => {
		e.preventDefault();
		console.log("you've pressed the button");
		console.log(fetchBooks(search));
	};

	return (
		<div className={styles.searchBar}>
			<h3 className={styles.searchBar__description}>Search a Book</h3>
			<input
				type='text'
				className={styles.searchBar__input}
				value={search}
				onChange={handleSearchInput}
				placeholder='Type name of the book...'
			/>
			<button onClick={handleSearch}>Search</button>
		</div>
	);
}

export default SearchBar;
