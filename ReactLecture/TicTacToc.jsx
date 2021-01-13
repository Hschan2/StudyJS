import React, {useState, useReducer} from 'react';
import Table from './table';

// 변수 값 초기화
const initialState = {
    winner: '',
    turn: '0',
    tableData: [['', '', ''], ['', '', ''], ['', '', '']],
}

// 초기화된 변수 값을 어떻게 바꿀 것인가
const reducer = (state, action) => {

}

const TicTacToc = () => {
    // const [winner, setWinner] = useState('');
    // const [turn, setTurn] = useState('0');
    // 3 X 3 Table 만들기, 2차원 배열
    // const [tableData, setTableData] = useState([['', '', ''], ['', '', ''], ['', '', '']]);

    // 위의 useState, 총 6개를 Table -> Tr -> Td에 전달하여야 한다. 2번을 거쳐서 Td에 전달해야 하는 번거러운 상황이 발생 => useReducer 사용
    // useReducer => 하나의 State와 setState로 전달 가능

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <>
            <Table></Table>
            {winner && <div>{winner}의 승리</div>}
        </>
    )
}

export default TicTacToc;