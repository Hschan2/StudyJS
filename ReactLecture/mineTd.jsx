import React, { useContext } from 'react';
import { TableContext, CODE } from './mineSearch';

// TD 스타일 설정
const getTdStyle = (code) => {
    switch (code) {
        // 칸에 -1 혹은 -7의 값이 있다면
        case CODE.NORMAL:
        case CODE.MINE:
            return {
                background: '#444',
            };
        // 칸에 값이 0이라면
        case CODE.OPENED:
            return {
                background: '#fff',
            };
        default:
            return {
                background: '#fff',
            };
    }
};

// TD Value 설정
const getTdText = (code) => {
    switch (code) {
        // 칸에 -1 혹은 -7의 값이 있다면
        case CODE.NORMAL: // 값을 빈 값으로
            return '';
        case CODE.MINE: // 값을 X로 표시
            return 'X';
        default: // 기본적으로 빈 값으로
            return '';
    }
};

const mineTd = ({ rowIndex, cellIndex }) => {
    const { tableData } = useContext(TableContext);

    return (
        <td style = {getTdStyle(tableData[rowIndex][cellIndex])}>
            {getTdText(tableData[rowIndex][cellIndex])}
        </td>
    );
};

export default mineTd;