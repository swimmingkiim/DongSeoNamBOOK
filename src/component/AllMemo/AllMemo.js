import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './AllMemo.scss';
import Title from '../Title';
import ProgressBar from '../ProgressBar';
import BookMemo from '../BookMemo';
import NewBookMemo from '../NewBookMemo';
import Button from '../Button';

const AllMemo = ({ bookList }) => {
    console.log(bookList);
    const HomeImg = require("../../img/shelf.png");
    const menuImg = require("../../img/menu.png");
    const plusImg = require("../../img/plus.png");
    const closeImg = require("../../img/close.png");
    const urlParse = window.location.hash.split("/");
    const currBookId = urlParse.includes("books") ? Number(urlParse[urlParse.length - 1]) : undefined;
    let listToDisplay = [];
    let title = "";
    if (currBookId !== undefined) {
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
        let newMemoInput = document.getElementsByClassName("NewBookMemoWrapper");
        if (currBookId) newMemoInput = newMemoInput[1];
        else newMemoInput = newMemoInput[0];
        console.log(newMemoInput)
        if (newMemoInput.style.display !== "flex") newMemoInput.style.display = "flex"
        else newMemoInput.style.display = "none";
    };
    
    const displayBookList = () => {
        document.getElementsByClassName("AllMemoWrapper")[0].style.display = "none";
        document.getElementsByClassName("BookListWrapper")[0].style.display = "block";
    };

    const displayMobilePDFviewer = () => {
        document.getElementsByClassName("AllMemoWrapper")[0].style.display = "none";
        document.getElementsByClassName("MobilePDFviewerWrapper")[0].style.display = "flex";
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
        if (window.innerWidth <= 414 && currBookId !== undefined) {
            document.getElementsByClassName("AllMemoWrapper")[0].classList.add("disabled");
        }
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
                <Link to="/">
                    <img  className="goToHome" src={HomeImg} alt="HOME" />
                </Link>
                <button className="addMemo" onClick={displayNewInput}>+</button>
            </nav>
            {
                currBookId ?
                <Button Img={closeImg} alt="goBackToPDF" onClick={displayMobilePDFviewer} />
                : <Button Img={menuImg} alt="bookList" onClick={displayBookList} />
            }
            <Button Img={plusImg} alt="New_Memo" onClick={displayNewInput} />
        </section>
    );
}

const mapStateTOProps = state => ({
    bookList: state
});

export default connect(mapStateTOProps)(AllMemo);
