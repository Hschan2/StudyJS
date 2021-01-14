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
const SET_WINNER = 'SET_WINNER';

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
            <Table onClick = {onClickTable} tableData = {state.tableData}></Table>
            {state.winner && <div>{state.winner}의 승리</div>}
        </>
    )
}

export default TicTacToc;