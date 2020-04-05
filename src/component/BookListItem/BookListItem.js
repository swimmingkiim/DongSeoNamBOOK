import React from 'react';
import './BookListItem.scss';

const BookListItem = () => {

    const list = [
        "해리포터와 마법사의 돌",
        "해리포터와 비밀의 방",
        "해리포터와 아즈카반의 죄수",
        "해리포터와 불의 잔",
        "해리포터와 불사조 기사단",
        "해리포터와 죽음의 성물"
    ];

    return (
        <section className="BookListItemWrapper">
            <ul>
                {
                    list.map((item) => {
                        const url = `/DongSeoNamBOOK/books/book-name=${item}`;
                        return (
                            <a href={url}>
                                <li>{item}</li>
                            </a>
                        );
                    })
                }
            </ul>
        </section>
    );
}

export default BookListItem;