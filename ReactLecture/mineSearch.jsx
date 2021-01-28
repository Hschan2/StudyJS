import React, { useReducer } from 'react';
import Form from './mineForm';
import Table from './mineTable';

// Context API 사용하기 => 바로 부모의 값을 전달받을 수 있다.

const initialState = {
    tableData: [],
    timer: 0,
    result: '',
};

// Context API 사용하기 전, Reducer 복습
const reducer = (state, action) => {
    switch(action.type) {
        default:
            return state;
    }
};

const mineSearch = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <Form dispatch = {dispatch} /> {/* 행과 열 개수, 지뢰 개수 설정, dispatch 설정 */}
            <div>{state.timer}</div> {/* 게임 시간 */}
            <Table /> {/* 지뢰 게임 판 */}
            <div>{state.result}</div> {/* 결과 */}
        </>
    );
};

export default mineSearch;