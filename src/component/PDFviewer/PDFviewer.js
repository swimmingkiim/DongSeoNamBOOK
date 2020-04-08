import React, { useState, useEffect } from 'react';
import { pdfjs, Document, Page } from 'react-pdf';
import './PDFviewer.scss';
import 'react-pdf/dist/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDFviewer = ( { match } ) => {

    const [numOfPages, setNumOfPages] = useState(0);
    const [pageNumber, setPageNumber] = useState(1);
    const [PDFratio, setPDFRatio] = useState(window.innerWidth * 0.5);
    const [memoId, setMemoId] = useState(1);
    const targetFile = require(`../../pdf/Don_Quixote.pdf`);

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

    const fixTextPosition = () => {
        const textLayer = document.getElementsByClassName("react-pdf__Page__textContent")[0];
        textLayer.style.top = 0;
        textLayer.style.left = 0;
        textLayer.style.transform = "";
    };

    useEffect(() => {
        window.addEventListener("resize", (e) => {
            setPDFRatio(window.innerWidth * 0.5);
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
        <section className="PDFviewerWrapper container">
            <menu>
                <button id="goToPrevPage" className="changePageButton" onClick={goToPrevPage}>Prev</button>
                <span>{pageNumber} of {numOfPages}</span>
                <button id="goToNextPage" className="changePageButton" onClick={goToNextPage}>Next</button>
            </menu>
            <Document file={targetFile} onLoadSuccess={onDocumentLoad}>
                <Page className="PDFPage" pageNumber={pageNumber} width={PDFratio} onGetTextSuccess={fixTextPosition}/>
            </Document>
        </section>
    );
}

export default PDFviewer;