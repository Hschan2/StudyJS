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
                    {[{fruit:'사과 ', taste:'맛있다'}, {fruit:'바나나', taste:'길다'}, {fruit:'포도', taste:'달다'}].map( (v, i) => { // i는 인덱스, 대신 i를 key값으로 넣으면 안된다. 성능 최적화에 문제 발생 차라리 문자 뒤에 i를 붙이는 게 낫다(그래도 비추천)
                        // return 생략 가능
                        return (
                            // 배열 안에 고유한 것을 key에 적어야 한다. React가 최적화할 때 사용. Id와 같은 것을 사용 -> 필수, key의 값이 중복되면 에러
                            <li key={v.fruit + v.taste}><b>{i} - {v.fruit}</b> - {v.taste}</li>
                        );
                    })}
                    {/* <li><b>사과</b> - 맛있다</li>
                    <li><b>바나나</b> - 길다</li>
                    <li><b>포도</b> - 달다</li> */}
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