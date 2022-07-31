const fetchBooks = async (keyword) => {
	const baseURL = 'https://www.googleapis.com/books/v1/volumes';
	let query = `?q=${keyword}`;
	const res = await fetch(`${baseURL}${query}`);
	const data = await res.json();
	return data.items;
};

export default fetchBooks;
