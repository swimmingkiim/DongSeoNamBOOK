import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

const ADD_BOOK = "STORE/MODULE/ADD_BOOK";
const DELETE_BOOK = "STORE/MODULE/DELETE_BOOK";
const ADD_MEMO = "STORE/MODULE/ADD_MEMO";
const SAVE_MEMO = "STORE/MODULE/SAVE_MEMO";
const DELETE_MEMO = "STORE/MODULE/DELETE_MEMO";

export const addBook = createAction(ADD_BOOK, bookInfo => bookInfo);
export const deleteBook = createAction(DELETE_BOOK, bookId => bookId);
export const addMemo = createAction(ADD_MEMO, memoInfo => memoInfo);
export const saveMemo = createAction(SAVE_MEMO, memoInfo => memoInfo);
export const deleteMemo = createAction(DELETE_MEMO, ids => ids);

const bookListInitialState = {
    0: {
        bookId: 0,
        bookName: "돈키호테",
        status: "yet",
        bookCover: null,
        memos: {
            0: {
                bookId: 0,
                bookName: "돈키호테",
                pageNum: 0,
                rowNum: 0,
                quote: "",
                memoId: 0,
                memo: "이룩 할 수 없는 꿈을 꾸고, 이루어 질 수 없는 사랑을 하고, 이길 수 없는 적과 싸움을 하고, 견딜 수 없는 고통을 견디며, 잡힐 수 없는 저 하늘의 별을 잡자."

            }
        }
    },
    1: {
        bookId: 1,
        bookName: "정부역할에 대한 시민의 기대: 한국, 일본 및 대만 비교",
        status: "yet",
        bookCover: null,
        memos: {
            1: {
                bookId: 1,
                bookName: "정부역할에 대한 시민의 기대: 한국, 일본 및 대만 비교",
                pageNum: 0,
                rowNum: 0,
                quote: "",
                memoId: 1,
                memo: "정부역할에 대한 시민의 기대: 한국, 일본 및 대만 비교"

            }
        }
    },
    2: {
        bookId: 2,
        bookName: "중국의 4차 산업혁명 담론과 전략, 제도",
        status: "yet",
        bookCover: null,
        memos: {
            2: {
                bookId: 2,
                bookName: "중국의 4차 산업혁명 담론과 전략, 제도",
                pageNum: 0,
                rowNum: 0,
                quote: "",
                memoId: 2,
                memo: "중국의 4차 산업혁명 담론과 전략, 제도"

            }
        }
    }
};
var nextBookId = bookListInitialState.length;
var nextMemoId = 3;

const bookList = handleActions({
    [ADD_BOOK]: (state, action) => 
        produce(state, draft => {
            draft[nextBookId] = {
                bookId: nextBookId,
                ...action.payload
            }
            nextBookId++;
        }),
    [DELETE_BOOK]: (state, action) => 
        produce(state, draft => {
            delete draft[action.payload];
        }),
    [ADD_MEMO]: (state, action) => 
    produce(state, draft => {
        draft[action.payload.bookId].memos[nextMemoId] = {
            memoId: nextMemoId,
            ...action.payload
        }
        nextMemoId++;
    }),
    [SAVE_MEMO]: (state, action) => 
    produce(state, draft => {
        draft[action.payload.bookId].memos[action.payload.memoId].memo = action.payload.memo;

    }),
    [DELETE_MEMO]: (state, action) => 
    produce(state, draft => {
        delete draft[action.payload.bookId].memos[action.payload.memoId];
    })
}, bookListInitialState);

export default bookList;