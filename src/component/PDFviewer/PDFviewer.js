import React, { useState, useEffect } from 'react';
import { pdfjs,Document, Page } from 'react-pdf';
import './PDFviewer.scss';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import Title from '../Title';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDFviewer = ( { match } ) => {

    const [numOfPages, setNumOfPages] = useState(0);
    const [pageNumber, setPageNumber] = useState(1);
    const [PDFratio, setPDFRatio] = useState(window.innerWidth * 0.5);
    const targetFile = require("../../pdf/Don_Quixote.pdf");
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

    useEffect(() => {
        window.addEventListener("resize", (e) => {
            console.log(window.innerHeight * 0.8);
            setPDFRatio(window.innerWidth * 0.5);
        });
    }, []);

    return (
        <section className="PDFviewerWrapper container">
            <menu>
                <button id="goToPrevPage" className="changePageButton" onClick={goToPrevPage}>Prev</button>
                <span>{pageNumber} of {numOfPages}</span>
                <button id="goToNextPage" className="changePageButton" onClick={goToNextPage}>Next</button>
            </menu>
            <Document file={targetFile} onLoadSuccess={onDocumentLoad}>
                <Page className="PDFPage" pageNumber={pageNumber} width={PDFratio} />
            </Document>
        </section>
    );
}

export default PDFviewer;