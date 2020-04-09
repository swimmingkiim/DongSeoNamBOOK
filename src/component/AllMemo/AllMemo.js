import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './AllMemo.scss';
import Title from '../Title';
import ProgressBar from '../ProgressBar';
import BookMemo from '../BookMemo';
import NewBookMemo from '../NewBookMemo';

const AllMemo = ({ match, bookList }) => {
    console.log(bookList);
    const HomeImg = require("../../img/shelf.png");
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

    const displayNewInput = (e) => {
        const isDisabled = Object.values(document.getElementsByClassName("NewBookMemoWrapper")[0].classList).includes("disabled");
        if (isDisabled === true) document.getElementsByClassName("NewBookMemoWrapper")[0].classList.remove("disabled");
        else document.getElementsByClassName("NewBookMemoWrapper")[0].classList.add("disabled");
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
            console.log(listToDisplay);
            textArea[i].style.height = textArea[i].scrollHeight + "px";
            console.log( textArea[i].value + textArea[i].style.height + "px");
        }
        window.addEventListener("resize", () => {
            const textArea = document.getElementsByClassName("eachMemoText");
            for (let i = 0; i < textArea.length; i++) {
                textArea[i].style.height = textArea[i].scrollHeight + "px";
            }
        });
        document.getElementsByClassName("NewBookMemoWrapper")[0].classList.add("disabled");
    }, []);


    return (
        <section className="AllMemoWrapper container">
            <Title title={title} />
            <ProgressBar ratio={80} />
            <div className="memoWrapper">
                <NewBookMemo />
                {
                    listToDisplay.length !== 0 ? listToDisplay.map((eachMemo) => {
                        return (
                            <BookMemo memoInfo={eachMemo} />
                        );
                    })
                    : <p>there are no memo yet!</p>
                }
            </div>
            <nav>
                <a className="goToHome" href="/DongSeoNamBOOK">
                    <img src={HomeImg} alt="HOME" />
                </a>
                <button className="addMemo" onClick={displayNewInput}>+</button>
            </nav>
        </section>
    );
}

const mapStateTOProps = state => ({
    bookList: state
});

export default connect(mapStateTOProps)(AllMemo);
