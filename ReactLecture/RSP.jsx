// 가위바위보 게임

import React, {Component} from 'react';

const rspCoords = {
    바위: '0',
    가위: '-142px',
    보: '-284px'
};

const scores = {
    바위: 1,
    가위: 0,
    보: -1
};

const computerChoice = (imgCoord) => {
    return Object.entries(rspCoords).find(function(v) {
        return v[1] === imgCoord;
    })[0];
};

// 실행 순서
// Class = Constructor -> render -> ref -> componentDidMount -> (setState/props 바뀔 때 -> shouldComponentUpdate -> render -> componentDidUpdate) -> 부모가 나를 없앴을 때 -> componentWillUnmount -> 소멸
// shouldComponentUpdate = true일 경우 리렌더링 이 후 componentDidUpdate, false일 경우 리렌더링 X
class RSP extends Component {
    state = {
        result: '',
        imgCoord: 0,
        score: 0
    };

    // 컴포넌트가 새로 시작할 때, 이전 Interval이 실행되고 있는 것을 막기 위해 => 메모리 누수 발생
    interval;

    // render가 성공적으로 실행됐을 때, componentDidMount 실행, reRender가 발생했을 때 실행 X, 처음에 render가 성공적으로 실행됐을 때
    // 컴포넌트가 처음 render된 후
    // setState를 쓰고 싶은데 어디다 써야될지 모를 때
    // 비동기 요청 많이 함
    componentDidMount() {
        this.interval = setInterval(this.changeHand, 100); // 0.1초마다 반복 작업
    }

    // reRender된 후에 실행
    // componentDidUpdate() {

    // }

    // 컴포넌트가 제거되기 직전
    // componentDidMount에서 실행된 것을 제거
    // 비동기 요청 정리
    componentWillUnmount() {
        clearInterval();
    }

    changeHand = () => {
        const {imgCoord} = this.state;

        if(imgCoord === rspCoords.바위) {
            this.setState({
                imgCoord: rspCoords.가위
            });
        } else if(imgCoord === rspCoords.가위) {
            this.setState({
                imgCoord: rspCoords.보
            });
        } else if(imgCoord === rspCoords.보) {
            this.setState({
                imgCoord: rspCoords.바위
            });
        }
    };

    onClickBtn = (choose) => {
        const { imgCoord } = this.state;
        clearInterval(this.interval); // Interval 멈춤
        const myScore = scores[choose];
        const cpuScore = scores[computerChoice(imgCoord)];
        const diff = myScore - cpuScore;

        // 점수 차이가 없을 시. 즉, 무승부
        if(diff === 0) {
            this.setState({
                result: '비겼다',
            });
        } else if([-1, 2].includes(diff)) {
            this.setState((prevState) => { // 인자 실행할 때는 함수형으로 (return)
                return {
                    result: '승리',
                    score: prevState + 1,
                };
            });
        } else {
            this.setState((prevState) => { // 인자 실행할 때는 함수형으로 (return)
                return {
                    result: '패배',
                    score: prevState - 1,
                };
            });
        }

        // 게임 후, 2초 뒤 다시 실행
        setTimeout(() => {
            this.interval = setInterval(this.changeHand, 1000);
        }, 2000);
    };

    render() {
        const {imgCoord, result, score} = this.state;
        return (
            <>
                <div id="computer" style={{background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0`}} />
                <div>
                    <button id="scissor" className="btn" onClick={() => this.onClickBtn('바위')}>바위</button>
                    <button id="scissor" className="btn" onClick={() => this.onClickBtn('가위')}>가위</button>
                    <button id="scissor" className="btn" onClick={() => this.onClickBtn('보')}>보</button>
                </div>
                <div>{result}</div>
                <div>점수 : {score}점</div>
            </>
        );
    }
}

export default RSP;