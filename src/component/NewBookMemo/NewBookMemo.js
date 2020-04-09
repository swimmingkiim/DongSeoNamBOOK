import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as editMemo from '../../store/module/bookList';
import './NewBookMemo.scss';

const NewBookMemo = ({ bookList, editMemo }) => {

    const urlParse = window.location.hash.split("/");
    let bookId = -1;
    let bookName = "";
    if (urlParse.includes("books")) {
        bookId = urlParse[urlParse.length - 1];
        bookName = bookList[bookId].bookName;
    } else {
        bookId = null;
    }

    const getNewMemoInfo = (e) => {
        const newInfos = e.target.parentNode.previousElementSibling;
        console.log(e.target.parentNode.previousElementSibling.getElementsByClassName("newBookName")[0]);
        return {
            bookId: bookId || newInfos.getElementsByClassName("newBookName")[0].value,
            bookName: bookName || bookList[newInfos.getElementsByClassName("newBookName")[0].value].bookName,
            pageNum: newInfos.getElementsByClassName("newPageNum")[0].value,
            rowNum: newInfos.getElementsByClassName("newRowNum")[0].value,
            memo: newInfos.getElementsByClassName("newText")[0].value
        }
    };

    const clearInput = (e) => {
        const newInfos = e.target.parentNode.previousElementSibling.children;
        for (let i = 0; i < newInfos.length; i++) {
            if (newInfos[i].tagName !== "span") newInfos[i].value = "";
        }
        e.target.parentNode.previousElementSibling.getElementsByClassName("newPageNum")[0].value = "";
        e.target.parentNode.previousElementSibling.getElementsByClassName("newRowNum")[0].value = "";
        document.getElementsByClassName("NewBookMemoWrapper")[0].classList.add("disabled");
    }

    const addNewMemo = (e) => {
        const newMemoInfo = getNewMemoInfo(e);
        editMemo.addMemo(newMemoInfo);
        clearInput(e);
    };

    // const deleteMemo = (e) => {
    //     const newMemoInfo = document.getElementsByClassName("newMemo");
    //     for (let i = 0; i < newMemoInfo.length; i++) {
    //         newMemoInfo[i].value = "";
    //     }
    //     document.getElementsByClassName("NewBookMemoWrapper")[0].classList.add("disabled");
    // }

    // useEffect(() => {
        
    // }, []);

    const resizeMemoText = (e) => {
        e.target.style.height = e.target.scrollHeight + "px";
    };

    return (
        <article className="NewBookMemoWrapper">
            <section className="innerMemoWrapper">
                {
                    bookId === null ?
                    <select className="newMemo newBookName">
                        <option>책이름을 선택하세요</option>
                        {
                            Object.values(bookList).map((bookObj) => {
                                return (
                                    <option label={bookObj.bookName} value={bookObj.bookId}>{bookObj.bookName}</option>
                                );
                            })
                        }
                    </select>
                    : <input className="newMemo newBookName" type="text" name="bookName" value={bookName} readOnly={true} />
                }
                <div className="newMemo">
                    <input className="newMemo newPageNum" type="number" name="pageNum" placeholder="?"/>
                    <span>쪽</span>
                </div>
                <div className="newMemo">
                    <input className="newMemo newRowNum" type="number" name="rowNum"  placeholder="?"/>
                    <span>번째 줄</span>
                </div>
                <textarea className="newMemo newText" onInput={(e) => resizeMemoText(e)} placeholder="이 부분에 대한 당신의 생각을 입력하세요:)"></textarea>
            </section>
            <section className="labelsAndButtons">
                <button className="saveButton" onClick={(e) => addNewMemo(e)}>저장</button>
                <button className="deleteButton" onClick={(e) => clearInput(e)}>취소</button>
            </section>
        </article>
    );
}

const mapStateToProps = state => ({
    bookList: state
});

const mapDispatchTOProps = dispatch => ({
    editMemo: bindActionCreators(editMemo, dispatch)
})

export default connect(mapStateToProps, mapDispatchTOProps)(NewBookMemo);
