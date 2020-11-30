import React, {Component} from 'react';

class ResponseCheck extends Component {
    state = {
        state: 'waiting',
        message: '클릭해서 게임 시작',
        result: [], // 빈 배열일 때, reduce 불가
    }

    timeOut; // setTimeout에 대한 문제 발생 예방
    startTime; // 반응 속도 체크 시작점, state에서 선언하지 않는 이유 => 이벤트가 발생할 때마다 렌더링이 발생하기 때문
    endTime;

    onClickScreen = () => {
        const {state, message, result} = this.state;
        if(state === 'waiting') {
            this.setState({
                state: 'ready',
                message: '초록색이 되면 클릭하기'
            });
            this.timeOut = setTimeout(() => {
                this.setState ({
                    state: 'now',
                    message: '지금 클릭하기'
                });
                this.startTime = new Date();
            }, Math.floor(Math.random() * 1000) + 2000);  // 2초 ~ 3초 랜덤
        } else if(state === 'ready') { // 성급하게 클릭 체크, 이 때 setTimeout이 발생 => 문제 발생
            alert('너무 성급하세요! 초록색일 때 클릭하세요!');
            clearTimeout(this.timeOut); // setTimeout Clear하기
            this.setState({
                state: 'waiting',
                message: '클릭해서 게임 시작',
            });
        } else if(state === 'now') { // 반응 속도 체크하는 곳
            this.endTime = new Date();
            this.setState((prevState) => {
                return {
                    state: 'waiting',
                    message: '클릭해서 게임 시작',
                    result: [...prevState.result, this.endTime - this.startTime], // 이전 result[]를 복사한 것. endTime - startTime은 클릭한 반응 시간
                };
            });
        }
    };

    onReset = () => {
        this.setState({
            result: [], // result가 0이면 result.length이 0이 되어서 null이 반환 => 초기화
        });
    }

    renderAverage = () => {
        const {result} = this.state;
        // if문 대신 사망연산자 사용
        return result.length === 0
            ? null
            : <>
                <div>평균 시간: {result.reduce((a, c) => a + c) / this.state.result.length}ms</div>
    <button onClick={this.onReset}>Reset</button>
            </>
    };

    // React에서 if, for 사용 불가
    // false, undefined, null => jsx에서 태그 없음을 의미
    render() {
        const {state, message} = this.state;
        return(
            <>
                <div id="screen" className={state} onClick={this.onClickScreen}>
                    {message}
                </div>
                {this.renderAverage()}
            </>
        )
    }
}

export default ResponseCheck;