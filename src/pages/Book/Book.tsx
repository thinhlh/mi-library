import React from 'react'
import BookEntity from './BookEntity'
import BookImage from '../../assets/book.jpg';
import Favorite from '../../assets/favorite.png'
import './Book.scss'
export default function Book(props: { book: BookEntity }) {
    return (
        <div id='book-container'>
            <img src={BookImage} alt='Book cover' id='book-cover' />
            <div id='book-metadata'>
                <div>
                    <p>{props.book.name}</p>
                    <p>{'By ' + props.book.author}</p>
                </div>

                <img src={Favorite} id='book-favorite-icon' alt='favorite icon' />
            </div>
        </div>
    )
}