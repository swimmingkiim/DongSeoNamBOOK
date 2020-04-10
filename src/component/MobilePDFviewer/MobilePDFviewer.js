import React, { useState, useEffect } from 'react';
import { pdfjs, Document, Page } from 'react-pdf';
import { Link } from 'react-router-dom';
import './MobilePDFviewer.scss';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import Button from '../Button';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const MobilePDFviewer = () => {

    const [numOfPages, setNumOfPages] = useState(0);
    const [pageNumber, setPageNumber] = useState(1);
    const [PDFratio, setPDFRatio] = useState(window.innerWidth * 0.9);
    const [memoId, setMemoId] = useState(1);
    const urlParse = window.location.hash.split("/");
    const currBookId = urlParse.includes("books") ? urlParse[urlParse.length - 1] : "report";
    const targetFile = require(`../../pdf/${currBookId}.pdf`);
    const backImg = require(`../../img/back.png`);
    const nextImg = require(`../../img/next.png`);
    const pdfImg = require(`../../img/pdf.png`);
    const menuImg = require(`../../img/menu.png`);
    const plusImg = require(`../../img/plus.png`);
    const memoImg = require(`../../img/memo.png`);
    

    const onDocumentLoad = ({ numPages }) => {
        console.log("onLoad completed")
        setNumOfPages(numPages);
    };

    const goToPrevPage = () =>{
        console.log(pageNumber)
        setPageNumber(pageNumber - 1);
    };

    const goToNextPage = () =>{
        console.log(pageNumber)
        setPageNumber(pageNumber + 1);
    };

    const goToBookMemo = (e) => {
        e.target.parentElement.parentElement.parentElement.classList.add("disabled");
        document.getElementsByClassName("AllMemoWrapper")[0].style.display = "flex";
    }

    const goToAllMemo = (e) => {
        e.target.parentElement.parentElement.parentElement.classList.add("disabled");
    }

    const goToNewMemo = (e) => {
        e.target.parentElement.parentElement.parentElement.classList.add("disabled");
        document.getElementsByClassName("AllMemoWrapper")[0].style.display = "flex";
        document.getElementsByClassName("NewBookMemoWrapper")[0].style.display = "block";
    }

    const fixTextPosition = () => {
        const textLayer = document.getElementsByClassName("react-pdf__Page__textContent")[0];
        textLayer.style.top = 0;
        textLayer.style.left = 0;
        textLayer.style.transform = "";
    };

    useEffect(() => {
        window.addEventListener("resize", (e) => {
            setPDFRatio(window.innerWidth * 0.9);
        });
        window.addEventListener("mouseup", (event) => {
            if (window.getSelection().type === "Range") {
                const targetRange = window.getSelection().getRangeAt(0);
                const newSpan = document.createElement("span");
                newSpan.classList.add(`memoId${memoId}`);
                setMemoId(memoId + 1);
                newSpan.style.backgroundColor = "pink";
                newSpan.style.color = "black";
                if (targetRange.startContainer === targetRange.endContainer) {
                    targetRange.surroundContents(newSpan);
                } else {
                    const expandedRange = document.createRange();
                    expandedRange.setStart(targetRange.endContainer, 0);
                    expandedRange.setEnd(targetRange.endContainer, targetRange.endOffset);
                    expandedRange.surroundContents(newSpan);
                    targetRange.startContainer.parentElement.appendChild(newSpan);
                    newSpan.replaceWith(newSpan.innerText);
                    targetRange.startContainer.parentElement.normalize();
                }
            }
        })
    }, []);

    return (
        <section className="MobilePDFviewerWrapper">
            <Document file={targetFile} onLoadSuccess={onDocumentLoad}>
                <Page className="PDFPage" pageNumber={pageNumber} width={window.innerWidth} height={window.innerHeight * 0.9} onGetTextSuccess={fixTextPosition}/>
            </Document>
            <p>{pageNumber} of {numOfPages}</p>
            <menu>
                <Link to="/">
                    <Button Img={menuImg} alt={"goTo AllMemo"} onClick={goToAllMemo} />
                </Link>
                <Button Img={backImg} alt={"goTo PrevPage"} onClick={goToPrevPage} />
                <Button Img={memoImg} alt={"goTo BookMemo"} onClick={goToBookMemo} />
                <Button Img={nextImg} alt={"goTo NextPage"} onClick={goToNextPage} />
                <Button Img={plusImg} alt={"goTo NewMemo"} onClick={goToNewMemo} />
            </menu>
        </section>
    );
}

export default MobilePDFviewer;