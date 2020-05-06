import React, { useContext, useState } from 'react';
import { BookContext } from '../contexts/BookContext';

const NewBookForm = () => {
	const { addBook } = useContext(BookContext);
	const [title, setTile] = useState('');
	const [author, setAuthor] = useState('');
	const handleSubmit = (e) => {
		e.preventDefault();
		addBook(title, author);
		setTile('');
		setAuthor('');
	};
	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="book title"
				value={title}
				onChange={(e) => setTile(e.target.value)}
				required
			/>
			<input
				type="text"
				placeholder="title"
				value={author}
				onChange={(e) => setAuthor(e.target.value)}
				required
			/>
			<input type="submit" value="add book" />
		</form>
	);
};

export default NewBookForm;
