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
        bookName: "인생",
        status: "yet",
        bookCover: null,
        memos: {
            0: {
                bookId: 0,
                bookName: "인생",
                pageNum: 0,
                rowNum: 0,
                quote: "",
                memoId: 0,
                memo: "인생은 마라톤이다."

            }
        }
    },
    1: {
        bookId: 1,
        bookName: "'양안서비스무역협정'의 쟁점과 대만 사회 갈등구조 변화",
        status: "yet",
        bookCover: null,
        memos: {
            1: {
                bookId: 1,
                bookName: "'양안서비스무역협정'의 쟁점과 대만 사회 갈등구조 변화",
                pageNum: 0,
                rowNum: 0,
                quote: "",
                memoId: 1,
                memo: "이 논문은 ‘해바라기학생운동’ 등 최근 대만에서 양안서비스무역협정 체결을 둘러싸고 진행 중인 논란을 대만 사회 갈등구조의 변화라는 측면에서 분석하는 것을 목적으로 한다. 대만 사회의 갈등구조를 분석하는 기존의 연구들은 주로 족군갈등이나 족군갈등에 기반한 통일-독립 갈등을 변수로 삼은반면, 이 논문에서는 양안서비스무역협정 체결을 둘러싼 사회적 갈등이 계급및 세대 변수에 의해 보다 복잡하게 전개되고 있다고 주장한다. 특히 민진당을 지지하던 본성인 기업가들이 민진당의 입장과는 반대로 양안서비스무역협정 체결을 지지하는 점에 주목하며, 계급이익에 따른 민진당의 분화 가능성을 검토했다."

            }
        }
    },
    2: {
        bookId: 2,
        bookName: "대만의 국가정체성과 양안 관계",
        status: "yet",
        bookCover: null,
        memos: {
            2: {
                bookId: 2,
                bookName: "대만의 국가정체성과 양안 관계",
                pageNum: 0,
                rowNum: 0,
                quote: "",
                memoId: 2,
                memo: "중국-대만 양안 관계는 대만의 양안 정책, 중국의 양안 정책, 미국의 양안 정책에 의해 영향을 받으며 변화해왔다."

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