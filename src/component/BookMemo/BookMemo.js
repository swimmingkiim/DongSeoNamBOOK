import React from 'react';
import './BookMemo.scss';

const BookMemo = ({ memoInfo }) => {
    return (
        <article className="BookMemoWrapper">
            <section className="innerMemoWrapper">
                <p>{memoInfo.memo}</p>
            </section>
            <section className="labelsAndButtons">
                <label>{memoInfo.bookName}</label>
                <label>{memoInfo.pageNum + "쪽"}</label>
                <label>{memoInfo.rowNum + "번째 줄"}</label>
                <button className="modifyButton">수정</button>
                <button className="deleteButton">삭제</button>
                <button className="saveButton">저장</button>
            </section>
        </article>
    );
}

export default BookMemo;
