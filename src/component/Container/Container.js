import React from 'react';
import './Container.scss';
import BookList from '../BookList';

const Container = ( { name } ) => {
    const str = `bigContainer ${name}`;
    return (
        <div className={str}>
            {
                name === "BookList" ?
                <BookList /> : <noscript></noscript>
            }
            {/* {
                name === "PDF" ?
                <PDFviewer /> : <noscript></noscript>
            }
            {
                name === "BookMemo" ?
                <BookMemo /> : <noscript></noscript>
            }
            {
                name === "AllMemo" ?
                <AllMemo /> : <noscript></noscript>
            } */}
        </div>
    );
}

export default Container;