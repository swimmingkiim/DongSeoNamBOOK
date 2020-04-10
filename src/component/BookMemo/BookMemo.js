import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as editMemo from '../../store/module/bookList';
import './BookMemo.scss';

const BookMemo = ({ memoInfo, editMemo }) => {

    // document.getElementsByClassName("modifiyButton")[0].previousElementSibling
    // textArea.setSelectionRange(0, textArea.value.length);

    console.log(memoInfo)

    const [ memoText, setMemotext ] = useState(memoInfo.memo);

    const modifyMemo = (e) => {
        const textArea = e.target.parentNode.previousElementSibling.children[0];
        if (textArea.readOnly === true) textArea.readOnly = false;
        textArea.focus();
        textArea.setSelectionRange(textArea.value.length, textArea.value.length);
        console.log(e.target.nextSibling.nextSibling)
        e.target.style.display = "none";
        e.target.nextSibling.style.display = "none";
        e.target.nextSibling.nextSibling.style.display = "inline-block";
    };

    const saveMemoFunc = (e) => {
        const textArea = e.target.parentNode.previousElementSibling.children[0];
        if (textArea.readOnly === false) textArea.readOnly = true;
        console.log(memoInfo.bookId, memoInfo.memoId)
        editMemo.saveMemo({
            bookId: memoInfo.bookId,
            memoId: memoInfo.memoId,
            memo: textArea.value
        });
        e.target.style.display = "none";
        e.target.previousElementSibling.style.display = "inline-block";
        e.target.previousElementSibling.previousElementSibling.style.display = "inline-block";
    };

    const deleteMemoFunc = (e) => {
        console.log(`book is ${memoInfo.bookId}, memo is ${memoInfo.memoId}`)
        editMemo.deleteMemo({
            bookId: memoInfo.bookId,
            memoId: memoInfo.memoId
        });
    }

    const resizeMemoText = (e) => {
        e.target.style.height = e.target.scrollHeight + "px";
    };

    useEffect(() => {
        console.log(`memo is ${memoInfo.memo}`);
        const targetMemo = document.getElementById(`memoId${memoInfo.memoId}`);
        targetMemo.value = memoInfo.memo;
        targetMemo.style.height = targetMemo.scrollHeight + "px";
    }, [memoInfo.memo]);

    console.log(memoInfo.memo)

    return (
        <article className="BookMemoWrapper">
            <section className="innerMemoWrapper">
            <textarea id={`memoId${memoInfo.memoId}`} className="eachMemoText" onInput={(e) => resizeMemoText(e)} readOnly={false}></textarea>
            </section>
            <section className="labelsAndButtons">
                <label className="memoLabel bookName">{memoInfo.bookName}</label>
                <label className="memoLabel pageNum">{memoInfo.pageNum + "쪽"}</label>
                <label className="memoLabel rowNum">{memoInfo.rowNum + "번째 줄"}</label>
                <button className="modifyButton" onClick={(e) => modifyMemo(e)}>수정</button>
                <button className="deleteButton" onClick={(e) => deleteMemoFunc(e)}>삭제</button>
                <button className="saveButton" onClick={(e) => saveMemoFunc(e)}>저장</button>
            </section>
        </article>
    );
}

const mapStateToProps = state => ({});

const mapDispatchTOProps = dispatch => ({
    editMemo: bindActionCreators(editMemo, dispatch)
})

export default connect(mapStateToProps, mapDispatchTOProps)(BookMemo);
