import React from 'react';
import Tr from './tr';

// TicTacToc에서 받아온 onClick (onClickTable) 가져오기
const Table = ({ onClick, tableData, dispatch }) => {
    return (
        <table>
            {Array(tableData.length).fill().map((tr, i) => (<Tr dispatch = {dispatch} rowIndex = {i} rowData = {tableData[i]} />))}
        </table>
    )
};

export default Table;