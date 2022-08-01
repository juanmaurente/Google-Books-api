import styles from './SearchBar.module.scss';
import { useState } from 'react';

function SearchBar({ onSubmit }) {
	const [search, setSearch] = useState('');

	const handleChange = (e) => setSearch(e.target.value);
	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit(search);
	};
	return (
		<div className={styles.searchBar}>
			<h3 className={styles.searchBar__description}>Search a Book</h3>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					className={styles.searchBar__input}
					value={search}
					onChange={handleChange}
					placeholder='Type name of the book...'
				/>
				<button>Submit</button>
			</form>
		</div>
	);
}

export default SearchBar;
