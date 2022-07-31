import fetchBooks from './FetchBooks';

const handleSearch = (e, string) => {
	e.preventDefault();
	console.log("you've pressed the button");
	console.log(fetchBooks(string));
};

export default handleSearch;
