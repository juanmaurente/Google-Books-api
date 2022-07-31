import styles from './SearchBar.module.scss';
import handleSearch from '../../Data/Search';
import { useState } from 'react';

function SearchBar() {
	const [search, setSearch] = useState('');

	return (
		<div className={styles.searchBar}>
			<h3 className={styles.searchBar__description}>Search a Book</h3>
			<input
				type='text'
				className={styles.searchBar__input}
				value={search}
				onChange={(e) => {
					console.log(search);
					setSearch(e.target.value);
				}}
				placeholder='Type name of the book...'
			/>
			<button onClick={handleSearch}>Search</button>
		</div>
	);
}

export default SearchBar;
