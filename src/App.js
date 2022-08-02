import styles from './App.module.scss';
import Header from './Components/Header';
import SearchBar from './Components/SearchBar';
import { useState, useEffect } from 'react';
import BookGallery from './Containers/BookGallery/BookGallery';
import fetchBooks from './Data/FetchBooks';
import Footer from './Components/Footer';

function App() {
  const [search, setSearch] = useState('');
  cosnt[(error, setError)] = useState('');
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const wrapper = async () => {
      try {
        const data = await fetchBooks(search);
        return setBooks(data);
      } catch (e) {
        setError(e.message);
      }
    };
    wrapper(search);
  }, [search]);

  return (
    <div className={styles.App}>
      <Header />
      <SearchBar onSubmit={setSearch} />
      {books && <BookGallery books={books} />}
      {error && <p>error</p>}
      <Footer />
    </div>
  );
}

export default App;
