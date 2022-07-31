import styles from './App.module.scss';
import Header from './Components/Header';
import SearchBar from './Components/SearchBar';
import { useState, useRef, useEffect } from 'react';
import BookGallery from './Containers';

function App() {
	return (
		<div className={styles.App}>
			<Header />
			<SearchBar />
			<BookGallery />
		</div>
	);
}

export default App;
