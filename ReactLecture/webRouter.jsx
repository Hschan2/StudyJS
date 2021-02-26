import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import GuGuDan from './GuGuDan';
import Ball from './Ball';
import Lotto from './Lotto';

const webRouter = () => {
    return (
        // 페이지가 실제로는 존재하지 않고 존재하는 척, 페이지가 하나에서 실행
        // 이는 서버에 요청하는 방식이 아닌 화면에 페이지가 있는 척하는 것. 즉, 프론트엔드만 동작
        <BrowserRouter>
            {/* Route path로 실제로 이동하는 화면에 보이는 링크 */}
            {/* 주소창에 /GuGuDan를 적어서 접속할 시 에러, 이 방식은 서버에 요청하는 것이기 때문 */}
            <div>
                {/* 공통인 부분 */}
                {/* 페이지를 이동해도 바뀌지 않는다 */}
                <Link to = "/GuGuDan">구구단 게임</Link>
                <Link to = "/Ball">숫자야구</Link>
                <Link to = "/Lotto">로또게임</Link>
            </div>
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

export default webRouter;