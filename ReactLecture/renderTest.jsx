import React, {Component} from 'react';

class Test extends Component {
    state = {
        counter: 0,
    };

    // render처럼 react에서 지원
    // 직접 어떤 경우에 rendering을 다시 해주어야 하는지 적어주는 것
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if(this.state.counter !== nextState.counter) { // 현재 counter 값과 미래 바뀌는 counter값이 다르면 렌더링하라
            return true;
        }
        return false;
    }

    onClick = () => {
        this.setState({}); // 값이 변화하지 않고 오로직 setState만 호출하였지만 rendering이 된다. => 문제. 큰 문제. => shouldComponentUpdate 사용
    };

    render() {
        console.log('Rendering...', this.state);
        return (
            <>
                <button onClick={this.onClick}></button>
            </>
        );
    }
}

export default Test;