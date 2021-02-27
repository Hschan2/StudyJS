import React from 'react';
import { BrowserRouter, Route, Link, HashRouter } from 'react-router-dom';
import GuGuDan from './GuGuDan';
import Ball from './Ball';
import Lotto from './Lotto';
import GameMatcher from './GameMatcher';

const webRouter = () => {
    return (
        // 페이지가 실제로는 존재하지 않고 존재하는 척, 페이지가 하나에서 실행
        // 이는 서버에 요청하는 방식이 아닌 화면에 페이지가 있는 척하는 것. 즉, 프론트엔드만 동작
        // <BrowserRouter>

        // HashRouter는 새로고침을 해도 페이지가 보인다. 브라우저가 기억, 서버에서는 모르기 때문에 검색 엔진 등에서 불이익. 잘 사용하지 않음
        // 관리자 페이지에서 사용 가능
        <HashRouter>
            {/* Route path로 실제로 이동하는 화면에 보이는 링크 */}
            {/* 주소창에 /GuGuDan를 적어서 접속할 시 에러, 이 방식은 서버에 요청하는 것이기 때문 */}
            <div>
                {/* 공통인 부분 */}
                {/* 페이지를 이동해도 바뀌지 않는다 */}
                {/* Route를 동적으로 처리했을 경우, /game/GuGuDan... 으로 설정하면 가능 */}
                {/* Route를 일반적으로 설정했을 경우, /GuGuDan 등처럼 설정해야 한다 */}
                <Link to = "/game/GuGuDan">구구단 게임</Link>
                <Link to = "/game/Ball">숫자야구</Link>
                <Link to = "/game/Lotto">로또게임</Link>
                {/* 동적으로 처리하기, index 등 아무 이름으로 설정 가능 */}
                <Link to = "/game/index">로또게임</Link>
            </div>
            <div>
                {/* path => link, component => 실제로 보여질 것 */}
                {/* Router가 자동으로 컴포넌트를 연결지어 준다 */}
                <Route path = "/GuGuDan" component = {GuGuDan}></Route>
                <Route path = "/Ball" component = {Ball}></Route>
                <Route path = "/Lotto" component = {Lotto}></Route>
                {/* 많은 라우터를 사용하는 대신 동적으로 처리하는 방법 (Dynamic Router) */}
                {/* :name => params, 이는 동적으로 처리 */}
                {/* 아래처럼 설정할 경우, 아래 하나의 Route만 있고 Link에서 설정 가능 */}
                <Route path = "/game/:name" component = {GameMatcher}></Route>
            </div>
        </HashRouter>
        {/* </BrowserRouter> */}
    );
}

export default webRouter;