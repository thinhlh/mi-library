import React, { useEffect, useState } from 'react';
import './App.scss';
import BooksList from '../pages/BooksList';
import axios from 'axios';
import useAxios from '../hooks/use-axios';

function App() {

  const { data, err, loading } = useAxios('/books', 'GET')
  const [books, setBooks] = useState<any[]>([])

  const mapFromResponseToBooks = (data: any) => {
    const booksGroupByAuthor: { [key: string]: any[] } = data
    const books = []

    for (const [author, booksByAuthor] of Object.entries(booksGroupByAuthor)) {
      books.push(...booksByAuthor)
    }

    return books
  }

  useEffect(() => {
    console.log('Inside the use effect with data: ' + data)
    if (data) {
      const books = mapFromResponseToBooks(data)
      setBooks(books)
    }

  }, [data])


  if (loading) {
    return <p>Show Loading</p>
  }

  return err ? <p>{err}</p> : (
    <div className="app-container">
      <h2>Most popular</h2>
      <hr />
      <BooksList books={books} />
    </div>
  );
}

export default App;
