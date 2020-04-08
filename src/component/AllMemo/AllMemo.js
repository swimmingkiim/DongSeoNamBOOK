import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './AllMemo.scss';
import Title from '../Title';
import ProgressBar from '../ProgressBar';
import BookMemo from '../BookMemo';

const AllMemo = ({ match, bookList }) => {
    const HomeImg = require("../../img/book.png");
    const currBookId = Number(match.params.id);
    let listToDisplay = [];
    let title = "";
    if (currBookId >= 0) {
        listToDisplay = Object.values(bookList[currBookId].memos);
        title = bookList[currBookId].bookName;
    } else {
        for (let key in bookList) {
            listToDisplay.push(Object.values(bookList[key].memos));
        }
        listToDisplay = listToDisplay.flat();
        title = "ALL MEMO";
    }
    console.log(listToDisplay);

    const displayNewInput = () => {
        // const wrapper = document.getElementsByClassName("memoWrapper")[0];
        // const newMemo = () => (<BookMemo memoInfo={emptyMemo} />);
        // wrapper.prepend(newMemo());
        // ----------------------------------------------------
        //|              여기서부터 시작하기!                      |
        // ----------------------------------------------------
    };

    useEffect(() => {
        if (window.location.hash.includes("books")) {
                document.getElementsByClassName("AllMemoWrapper")[0].classList.add("bookMode");
                document.getElementsByClassName("goToHome")[0].getElementsByClassName.display = "block";
        } else {
            document.getElementsByClassName("AllMemoWrapper")[0].classList.remove("bookMode");
            document.getElementsByClassName("goToHome")[0].getElementsByClassName.display = "none";
        } 
        const textArea = document.getElementsByClassName("eachMemoText");
        for (let i = 0; i < textArea.length; i++) {
            console.log("bookmemo reloaded")
            textArea[i].style.height = textArea[i].scrollHeight + "px";
            console.log( textArea[i].value + textArea[i].style.height + "px");
        }
        window.addEventListener("resize", () => {
            const textArea = document.getElementsByClassName("eachMemoText");
            for (let i = 0; i < textArea.length; i++) {
                textArea[i].style.height = textArea[i].scrollHeight + "px";
            }
        });
    }, []);


    return (
        <section className="AllMemoWrapper container">
            <Title title={title} />
            <ProgressBar ratio={80} />
            <div className="memoWrapper">
                {
                    listToDisplay.length !== 0 ? listToDisplay.map((eachMemo) => {
                        return (
                            <BookMemo memoInfo={eachMemo} />
                        );
                    })
                    : <p>there are no memo yet!</p>
                }
                <div className="addMemoWrapper">
                    <button className="addMemo" onClick={displayNewInput}>+</button>
                </div>
            </div>
            <a className="goToHome" href="/DongSeoNamBOOK">
                <img src={HomeImg} alt="HOME" />
            </a>
        </section>
    );
}

const mapStateTOProps = state => ({
    bookList: state
});

export default connect(mapStateTOProps)(AllMemo);
