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
    halted: true,
});

const initialState = {
    tableData: [],
    timer: 0,
    result: '',
    halted: true, // 게임 중단
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
export const OPEN_CELL = 'OPEN_CELL';
export const CLICK_MINE = 'CLICK_MINE';
export const FLAG_CELL = 'FLAG_CELL';
export const QUESTION_CELL = 'QUESTION_CELL';
export const NORMALIZE_CELL = 'NORMALIZE_CELL';

// Context API 사용하기 전, Reducer 복습
const reducer = (state, action) => {
    switch(action.type) {
        case START_GAME:
            return {
                ...state,
                tableData: plantMine(action.row, action.cell, action.mine),
                halted: true,
            };
        case OPEN_CELL: { // 불변성 유지
            const tableData = [...state.tableData];
            tableData[action.row] = [...state.tableData[action.row]];
            tableData[action.row][action.cell] = CODE.OPENED; // 클릭한 셀 열기

            return {
                ...state,
                tableData,
            }
        }
        case CLICK_MINE: {
            const tableData = [...state.tableData];
            tableData[action.row] = [...state.tableData[action.row]];
            tableData[action.row][action.cell] = CODE.CLICKED_MINE;

            return {
                ...state,
                tableData,
                halted: true // 게임 잠시 중단
            }
        }
        case FLAG_CELL: {
            const tableData = [...state.tableData];
            tableData[action.row] = [...state.tableData[action.row]];
            
            if(tableData[action.row][action.cell] === CODE.MINE) {
                tableData[action.row][action.cell] = CODE.FLAG_MINE;
            } else {
                tableData[action.row][action.cell] = CODE.FLAG;
            }
            
            return {
                ...state,
                tableData,
            }
        }
        case QUESTION_CELL: {
            const tableData = [...state.tableData];
            tableData[action.row] = [...state.tableData[action.row]];
            
            if(tableData[action.row][action.cell] === CODE.FLAG_MINE) {
                tableData[action.row][action.cell] = CODE.QUESTION_MINE;
            } else {
                tableData[action.row][action.cell] = CODE.QUESTION;
            }
            
            return {
                ...state,
                tableData,
            }
        }
        case NORMALIZE_CELL: {
            const tableData = [...state.tableData];
            tableData[action.row] = [...state.tableData[action.row]];
            
            if(tableData[action.row][action.cell] === CODE.QUESTION_MINE) {
                tableData[action.row][action.cell] = CODE.MINE;
            } else {
                tableData[action.row][action.cell] = CODE.NORMAL;
            }
            
            return {
                ...state,
                tableData,
            }
        }
        default:
            return state;
    }
};

const mineSearch = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const { tableData, halted, timer, result } = state;

    // dispatch는 항상 같은 값이기 때문에
    const value = useMemo(() => ({ tableData: tableData, dispatch, halted: halted }), [tableData, halted]);

    return (
        // Context API의 Provider 사용, 자식 컴포넌트에 전달할 값 정의
        // 그러나 value = {{tableData: state.tableData, dispatch} 이렇게 사용하면 새로운 값이 생길 때마다 Rerendering => useMemo로
        <TableContext.Provider value = {value}>
            <Form /> {/* 행과 열 개수, 지뢰 개수 설정, dispatch 설정 */}
            <div>{timer}</div> {/* 게임 시간 */}
            <Table /> {/* 지뢰 게임 판 */}
            <div>{result}</div> {/* 결과 */}
        </TableContext.Provider>
    );
};

export default mineSearch;