import React from 'react';
import { Link } from 'react-router-dom';
import './BookListItem.scss';
import { connect } from 'react-redux';

const BookListItem = ({ bookList }) => {

    const list = [];
    for(let key in bookList) {
        list.push({
            bookId: key, 
            bookName: bookList[key].bookName
        });
    }

    return (
        <section className="BookListItemWrapper">
            <ul>
                {
                    list.map((item) => {
                        const url = `/DongSeoNamBOOK#/books/${item.bookId}`;
                        return (
                            <a href={url}>
                                <li>{item.bookName}</li>
                            </a>
                        );
                    })
                }
            </ul>
        </section>
    );
}

const mapStateToProps = state => ({
    bookList: state
});

// const mapDispatchToProps = dispatch => ({
//     none yet
// });

export default connect(mapStateToProps)(BookListItem);