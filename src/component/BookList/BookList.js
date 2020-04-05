import React from 'react';
import './BookList.scss';
import Title from '../Title';
import BookListItem from '../BookListItem';

const BookList = () => {

    return (
        <section className="BookListWrapper container">
            <Title title="BOOK LIST" />
            <BookListItem />
        </section>
    );
}

export default BookList;