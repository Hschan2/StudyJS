import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import GuGuDan from './GuGuDan';
import Ball from './Ball';
import Lotto from './Lotto';

const Games = () => {
    return (
        <BrowserRouter>
            <div>
                {/* path => link, component => 실제로 보여질 것 */}
                {/* Router가 자동으로 컴포넌트를 연결지어 준다 */}
                <Route path = "/GuGuDan" component = {GuGuDan}></Route>
                <Route path = "/Ball" component = {Ball}></Route>
                <Route path = "/Lotto" component = {Lotto}></Route>
            </div>
        </BrowserRouter>
    );
}

export default Games;