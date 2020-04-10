import React from 'react';
import './BookList.scss';
import Title from '../Title';
import BookListItem from '../BookListItem';
import Button from '../Button';

const BookList = () => {

    const closeImg = require("../../img/close.png");

    const displayAllMemo = () => {
        document.getElementsByClassName("AllMemoWrapper")[0].style.display = "flex";
        document.getElementsByClassName("BookListWrapper")[0].style.display = "none";
    };

    return (
        <section className="BookListWrapper container">
            <Title title="BOOK LIST" />
            <BookListItem />
            <Button Img={closeImg} alt="close" onClick={displayAllMemo} />
        </section>
    );
}

export default BookList;