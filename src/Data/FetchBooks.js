const fetchBooks = async () => {
	const baseURL = 'https://www.googleapis.com/books/v1/volumes';
	let query = `?q=flowers+inauthor:keyes`;
	const res = await fetch(`${baseURL}${query}`);
	const data = await res.json();
	return data.items;
};

export default fetchBooks;
