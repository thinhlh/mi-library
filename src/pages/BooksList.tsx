import Book from "./Book/Book";
import BookEntity from "./Book/BookEntity";
import './BooksList.scss'

export default function BooksList(props: { books: BookEntity[] }) {

    return (
        <div id="book-list-container">
            {props.books.map((book)=>{
                return <Book book={book}/>
            })}
        </div>
    )
}