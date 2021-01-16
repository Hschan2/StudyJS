import React from 'react';
import { CLICK_CELL, CHANGE_TURN } from './TicTacToc';

const Td = ({ rowIndex, cellIndex, dispatch, cellData }) => {
    const onClickTd = useCallback(() => {
        // type명은 아무렇게나 지어도 된다.
        dispatch({ type: CLICK_CELL, row: rowIndex, cell: cellIndex });
        dispatch({ type: CHANGE_TURN }); // 칸을 클릭 후 턴 변경
    }, [])

    return (
        <td onClick = {onClickTd}>{cellData}</td>
    )
};

export default Td;