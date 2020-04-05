import React, { useState, useEffect } from 'react';
import { pdfjs, Document, Page } from 'react-pdf';
import './PDFviewer.scss';
import Title from '../Title';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDFviewer = ( { match } ) => {

    const [numOfPages, setNumOfPages] = useState(0);
    const [currPageNum, setCurrPageNum] = useState(1);
    const targetFile = require("../../pdf/report.pdf");

    const onDocumentLoad = ({ numPages }) => {
        console.log("onLoad completed")
        setNumOfPages(numPages);
    };

    useEffect(() => {
        document.getElementById("goPreviousPage").addEventListener("click", (e) => {
            if (currPageNum > 1) {
                setCurrPageNum(currPageNum - 1);
                console.log("working-")
                console.log(currPageNum, numOfPages)
            }
            console.log(currPageNum, numOfPages)
        });
        document.getElementById("goNextPage").addEventListener("click", (e) => {
            setCurrPageNum(currPageNum + 1);
            console.log("working+")
            console.log(currPageNum, numOfPages)
        });
    }, []);
    return (
        <section className="PDFviewerWrapper container">
            <Document file={targetFile} onLoadSuccess={onDocumentLoad}>
                <Page pageNumber={currPageNum}/>
            </Document>
            <button id="goPreviousPage">이전 페이지</button>
            <button id="goNextPage">다음 페이지</button>
            <p>{currPageNum} of {numOfPages}</p>
        </section>
    );
}

export default PDFviewer;