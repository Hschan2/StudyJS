import React from 'react';
import Tr from './tr';

// TicTacToc에서 받아온 onClick (onClickTable) 가져오기
const Table = ({ onClick, tableData }) => {
    return (
        <table onClick = {onClick}>
            {Array(tableData.length).fill().map((tr) => (<Tr rowData = {tableData[i]} />))}
        </table>
    )
};

export default Table;