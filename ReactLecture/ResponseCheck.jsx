import React, {Component} from 'react';

class ResponseCheck extends Component {
    state = {
        state: 'waiting',
        message: '클릭해서 게임 시작',
        result: [], // 빈 배열일 때, reduce 불가
    }

    onClickScreen = () => {

    };

    renderAverage = () => {
        const {result} = this.state;
        // if문 대신 사망연산자 사용
        return result.length === 0 ? null : <div>평균 시간: {result.reduce((a, c) => a + c) / this.state.result.length}ms</div>;
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