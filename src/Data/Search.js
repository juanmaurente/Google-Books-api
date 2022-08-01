import fetchBooks from './FetchBooks';

const handleSearch = (e, string) => {
	e.preventDefault();
	fetchBooks(string);
};

export default handleSearch;
