import React, { useEffect, useState } from 'react'
import BookEntity from './BookEntity'
import BookImage from '../../assets/book.jpg';
import Favorite from '../../assets/favorite.png'
import FavoriteFill from '../../assets/favorite-fill.png'
import './Book.scss'
import { useAxios, HttpMethod } from '../../hooks/use-axios';
import axios from 'axios';
import { BACKEND_URL } from '../../config/constants';
export default function Book(props: { book: BookEntity }) {

    const [isFavorite, setIsFavorite] = useState<boolean>(props.book.isLike === true)
    const { data, err, loading, operation } = useAxios()


    const onFavoriteClicked = async () => {
        operation('/books/' + props.book.id, 'PATCH', { isLike: !isFavorite })
    }

    useEffect(() => {
        if (data) {
            setIsFavorite((data as any).isLike)
        }
    }, [data])

    return (
        <div id='book-container'>
            <img src={BookImage} alt='Book cover' id='book-cover' />
            <div id='book-metadata'>
                <div>
                    <p>{props.book.name}</p>
                    <p>{'By ' + props.book.author}</p>
                </div>

                <img src={isFavorite ? FavoriteFill : Favorite} onClick={onFavoriteClicked} id='book-favorite-icon' alt='favorite icon' />
            </div>
        </div>
    )
}