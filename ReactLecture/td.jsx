import React from 'react';
import { CLICK_CELL } from './TicTacToc';

const Td = ({ rowIndex, cellIndex, dispatch, cellData }) => {
    const onClickTd = useCallback(() => {
        if(cellData) return;

        // type명은 아무렇게나 지어도 된다.
        dispatch({ type: CLICK_CELL, row: rowIndex, cell: cellIndex });
    }, [cellData])

    return (
        <td onClick = {onClickTd}>{cellData}</td>
    )
};

export default Td;