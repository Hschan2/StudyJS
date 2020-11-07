// require vs import
// import React from 'react'; // import 사용 방법
// 다른 파일을 요청 받아서 불러오고 변수에 넣어준다.
// const React = require('react');
import React, {Component} from 'react';

function getNumbers() { // 겹치지 않는 숫자 랜덤으로 뽑기

}

class BaseBall extends Component {
    state = { // 변하는 값이 있을 때 사용
        result: '',
        value: '',
        answer: getNumbers(),
        tries: [],
    };
    
    onSubmitForm = () => {

    };

    onChangeInput = () => {

    }

    render() {
        return (
            <>
                <h1>{this.state.result}</h1>
                <form onSubmit={this.onSubmitForm}>
                <input maxLength={4} value={this.state.value} onChange={this.onChangeInput} />
                <button>입력</button>
                </form>
                <div>시도: {this.state.tries.length}</div>
                <ul>
                    {[].map( (v) => {
                        return (
                            <li></li>
                        );
                    })}
                </ul>
            </>
        );
    }
}


// export default BaseBall; // import로 라이브러리 혹은 파일을 불러왔을 때. import Baseball, {}로 감싸지 않았을 때. ES2015 방법
// export const hello = 'hello'; // import {hello}, 변수명을 겹치지 않게 많이 사용 가능
// 노드 모듈 시스템에서 module.exports = {hello : 'a' } == exports.hello = 'a'
// babel이 import를 require로 바꿔주는 역할도 하기 때문에 호환이 된다.
module.exports = BaseBall;