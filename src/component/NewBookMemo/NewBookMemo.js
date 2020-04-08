import React, { useEffect } from 'react';
import './NewBookMemo.scss';

const NewBookMemo = ({ memoInfo }) => {

    const saveMemo = (e) => {
        const textArea = e.target.parentNode.previousElementSibling.children[0];
        if (textArea.readOnly === false) textArea.readOnly = true;
        e.target.style.display = "none";
        e.target.previousElementSibling.style.display = "inline-block";
        e.target.previousElementSibling.previousElementSibling.style.display = "inline-block";
    };

    const deleteMemo = (e) => {
        console.log(e.target.parentNode.parentNode.remove());
    }

    useEffect(() => {
        window.addEventListener("load", () => {
            const textArea = document.getElementsByClassName("eachMemoText");
            for (let i = 0; i < textArea.length; i++) {
                textArea[i].style.height = textArea[i].scrollHeight + "px";
            }
        })
        window.addEventListener("resize", () => {
            const textArea = document.getElementsByClassName("eachMemoText");
            for (let i = 0; i < textArea.length; i++) {
                textArea[i].style.height = textArea[i].scrollHeight + "px";
            }
        })
    }, []);

    const resizeMemoText = (e) => {
        e.target.style.height = e.target.scrollHeight + "px";
    };

    return (
        <article className="NewBookMemoWrapper">
            <section className="innerMemoWrapper">
                <textarea className="eachMemoText" onInput={(e) => resizeMemoText(e)} readOnly={true}>{memoInfo.memo}</textarea>
            </section>
            <section className="labelsAndButtons">
                <label>{memoInfo.bookName}</label>
                <label>{memoInfo.pageNum + "쪽"}</label>
                <label>{memoInfo.rowNum + "번째 줄"}</label>
                <button className="saveButton" onClick={(e) => saveMemo(e)}>저장</button>
                <button className="deleteButton" onClick={(e) => deleteMemo(e)}>취소</button>
            </section>
        </article>
    );
}

export default NewBookMemo;
