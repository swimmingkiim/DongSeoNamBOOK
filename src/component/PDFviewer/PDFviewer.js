import React, { useState, useEffect } from 'react';
import { pdfjs, Document, Page } from 'react-pdf';
import './PDFviewer.scss';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import Title from '../Title';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDFviewer = ( { match } ) => {

    const [numOfPages, setNumOfPages] = useState(0);
    const [pageNumber, setPageNumber] = useState(1);
    const [PDFratio, setPDFRatio] = useState(window.innerWidth * 0.5);
    const targetFile = require(`../../pdf/Don_Quixote.pdf`);
    console.log(window.innerWidth)

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

    const onDragText = (event) => {
        console.log(event.dataTransfer.getData("text"));
    }

    const fixTextPosition = () => {
        const textLayer = document.getElementsByClassName("react-pdf__Page__textContent")[0];
        textLayer.style.top = 0;
        textLayer.style.left = 0;
        textLayer.style.transform = "";
    };

    useEffect(() => {
        window.addEventListener("resize", (e) => {
            console.log(window.innerHeight * 0.8);
            setPDFRatio(window.innerWidth * 0.5);
        });
        window.addEventListener("mouseup", (event) => {
            if (window.getSelection().type === "Range") {
                console.log("selected");
                const aTag = document.createElement("a");
                aTag.style.backgroundColor = "pink";
                window.getSelection().getRangeAt(0).surroundContents(aTag);
                console.log(window.getSelection().getRangeAt(0));
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