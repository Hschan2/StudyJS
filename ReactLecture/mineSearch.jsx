import React, { useReducer, createContext, useMemo } from 'react';
import Form from './mineForm';
import Table from './mineTable';

// 배열에 들어갈 지뢰 유무 확인
export const CODE = {
    MINE: -7, // 지뢰일 경우, -7
    NORMAL: -1, // 지뢰가 아닐 경우, -1
    QUESTION: -2, // 마우스 오른쪽 클릭 시, 물음표
    FLAG: -3, // 마우스 오른쪽 클릭 시, 깃발
    QUESTION_MINE: -4, // 마우스 오른쪽 클릭 시, 지뢰가 있는 물음표
    FLAG_MINE: -5, // 마우스 오른쪽 클릭 시, 지뢰가 있는 깃발
    CLICKED_MINE: -6, // 마우스 오른쪽 클릭 시, 지뢰가 있는데 클릭
    OPENED: 0, // 정상적으로 열린 칸 (0 이상이면 OPENED)
}

// Context API 사용하기 => 바로 부모의 값을 전달받을 수 있다.
// export 이유. 자식 컴포넌트에서 useContext하여 값을 전달받을 수 있도록
export const TableContext = createContext({
    // 초기값 정의
    tableData: [],
    dispatch: () => {},
});

const initialState = {
    tableData: [],
    timer: 0,
    result: '',
};

// 지뢰 칸과 지뢰 생성
const plantMine = (row, cell, mine) => {
    const candidate = Array(row * cell).fill().map((arr, i) => {
        return i;
    });

    // 지뢰 개수만큼 랜덤으로 뽑기
    const shuffle = [];

    while(candidate.length > row * cell - mine) {
        const chosen = candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0];
        shuffle.push(chosen);
    }

    // 테이블 생성
    const data = [];

    for(let i = 0; i < row; i++) {
        const rowData = [];
        data.push(rowData);
        for(let j = 0; j < cell; j++) {
            rowData.push(CODE.NORMAL); // CODE.NORMAL => 지뢰가 아닌 테이블
        }
    }

    // 테이블에 지뢰 넣기
    for(let k = 0; k < shuffle.length; k++) {
        // 행과 열 가져오기
        const ver = Math.floor(shuffle[k] / cell);
        const hor = shuffle[k] % cell;
        data[ver][hor] = CODE.MINE; // 지뢰 넣기
    }

    return data;
};

export const START_GAME = 'START_GAME';

// Context API 사용하기 전, Reducer 복습
const reducer = (state, action) => {
    switch(action.type) {
        case START_GAME:
            return {
                ...state,
                tableData: plantMine(action.row, action.cell, action.mine),
            };
        default:
            return state;
    }
};

const mineSearch = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    // dispatch는 항상 같은 값이기 때문에
    const value = useMemo(() => ({tableData: state.tableData, dispatch}), [state.tableData]);

    return (
        // Context API의 Provider 사용, 자식 컴포넌트에 전달할 값 정의
        // 그러나 value = {{tableData: state.tableData, dispatch} 이렇게 사용하면 새로운 값이 생길 때마다 Rerendering => useMemo로
        <TableContext.Provider value = {value}>
            <Form /> {/* 행과 열 개수, 지뢰 개수 설정, dispatch 설정 */}
            <div>{state.timer}</div> {/* 게임 시간 */}
            <Table /> {/* 지뢰 게임 판 */}
            <div>{state.result}</div> {/* 결과 */}
        </TableContext.Provider>
    );
};

export default mineSearch;