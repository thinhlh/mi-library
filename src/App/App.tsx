import React, { useEffect, useState } from 'react';
import './App.scss';
import BooksList from '../pages/BooksList';
import { useAxios } from '../hooks/use-axios';

function App() {

  const { data, err, loading, operation } = useAxios()
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
    operation('/books', 'GET')
  }, [])

  useEffect(() => {
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
