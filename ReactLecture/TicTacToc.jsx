import React, {useState, useReducer} from 'react';
import Table from './table';

// 변수 값 초기화
// state 직접 수정 불가
const initialState = {
    winner: '',
    turn: '0',
    tableData: [['', '', ''], ['', '', ''], ['', '', '']],
}

// action의 이름은 대문자로
// export로 해서 모듈로 만들기
// 자식노드에서 사용할 것이기 때문에
export const SET_WINNER = 'SET_WINNER';
export const CLICK_CELL = 'CLICK_CELL';
export const CHANGE_TURN = 'CHANGE_TURN';

// 초기화된 변수 값을 어떻게 바꿀 것인가
// action 처리
const reducer = (state, action) => {
    switch(action.type) {
        case SET_WINNER:
            // state.winner = action.winner처럼 값을 직접 변경하면 안된다.
            return {
                ...state, // state 값 복사 (새로운 state)
                winner: action.winner
            }
        case CLICK_CELL: { // 불변성 만들기
            // 얕은 복사하기 (기존의 변수와 같지 않고 다르게 만들어서 불변성 유지)
            // 아래의 tableData와 맨 위의 기존에 사용한 tableData는 같지 않다. 복사해서 사용한다.
            const tableData = [...state.tableData];
            tableData[action.row] = [...tableData[action.row]]; // immer 라이브러리로 해결 가능
            tableData[action.row][action.cell] = state.turn; // 클릭했을 때, 해당 칸에 o, x 들어간다
            return {
                ...state,
                tableData,
            }
        }
        case CHANGE_TURN: {
            return {
                ...state,
                turn: state.turn === 'O' ? 'X' : 'O',
            }
        }
    }
}

const TicTacToc = () => {
    // const [winner, setWinner] = useState('');
    // const [turn, setTurn] = useState('0');
    // 3 X 3 Table 만들기, 2차원 배열
    // const [tableData, setTableData] = useState([['', '', ''], ['', '', ''], ['', '', '']]);

    // 위의 useState, 총 6개를 Table -> Tr -> Td에 전달하여야 한다. 2번을 거쳐서 Td에 전달해야 하는 번거러운 상황이 발생 => useReducer 사용
    // useReducer => 하나의 State와 setState로 전달 가능

    const [state, dispatch] = useReducer(reducer, initialState)

    const onClickTable = useCallback(() => {
        // dispatch 안에 액션 객체 생성, 값 변경
        // 값을 직접 바꿔주는 역할로 reducer를 이용
        dispatch({ type: SET_WINNER, winner = '0' });
    }, []);

    return (
        // 클릭하면 dispatch 실행
        // tableData = {state.tableData} = 3 X 3 테이블 만들기
        <>
            <Table onClick = {onClickTable} tableData = {state.tableData} dispatch = {dispatch}></Table>
            {state.winner && <div>{state.winner}의 승리</div>}
        </>
    )
}

export default TicTacToc;