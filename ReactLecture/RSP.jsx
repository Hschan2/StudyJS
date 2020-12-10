// 가위바위보 게임

import React, {Component} from 'react';

// 실행 순서
// Class = Constructor -> render -> ref -> componentDidMount -> (setState/props 바뀔 때 -> shouldComponentUpdate -> render -> componentDidUpdate) -> 부모가 나를 없앴을 때 -> componentWillUnmount -> 소멸
// shouldComponentUpdate = true일 경우 리렌더링 이 후 componentDidUpdate, false일 경우 리렌더링 X
class RSP extends Component {
    state = {
        result: '',
        imgCoord: 0,
        score: 0
    };

    // render가 성공적으로 실행됐을 때, componentDidMount 실행, reRender가 발생했을 때 실행 X, 처음에 render가 성공적으로 실행됐을 때
    // 컴포넌트가 처음 render된 후
    // setState를 쓰고 싶은데 어디다 써야될지 모를 때
    componentDidMount() {

    }

    // 컴포넌트가 제거되기 직전
    // componentDidMount에서 실행된 것을 제거
    componentWillUnmount() {

    }

    // reRender된 후에 실행
    componentDidUpdate() {

    }

    render() {
        const {imgCoord, result, score} = this.state;
        return (
            <>
                <div id="computer" style={{background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0`}} />
                <div>
                    <button id="scissor" className="btn" onClick={() => onClickBtn('바위')}>바위</button>
                    <button id="scissor" className="btn" onClick={() => onClickBtn('가위')}>가위</button>
                    <button id="scissor" className="btn" onClick={() => onClickBtn('보')}>보</button>
                </div>
                <div>{result}</div>
                <div>점수 : {score}점</div>
            </>
        );
    }
}

export default RSP;