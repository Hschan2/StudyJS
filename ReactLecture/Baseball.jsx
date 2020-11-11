import React, {Component} from 'react';
import Try from './try.js';

function getNumbers() {
    const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const array = [];
    for(let i = 0; i < 4; i++) {
        const chosen = candidate.splice(Math.floor(Math.random * (9 - i)), 1)[0];
        array.push(chosen);
    }
}

class Baseball extends Component {
    state = {
        result: '',
        value: '',
        answer: getNumbers(), // 랜덤 숫자가 추출
        tries: [], // React에서 배열에 값을 넣을 때, push 사용 비추천
    };

    onSubmitForm = (e) => {
        e.preventDefault();
        if(this.state.value === this.state.answer.join('')) { // 맞추었을 때
            this.setState({
                result: '홈런',
                tries: [...this.state.tries, {try: this.state.value, result: '홈런'}], // ... => 기존 배열 복사 (기존 배열 안에 값도 복사), {} => 넣을 값
            });
            alert('게임을 다시 시작합니다.');
            this.setState({
                value: '',
                answer: getNumbers(),
                tries: [],
            });
        } else { // 틀렸을 때
            if(this.state.tries.length >= 9) {
                this.setState({
                    result: `10번 이상 시도로 게임 종료, 답은 ${this.state.answer.join(',')}`,
                });
                alert('게임을 다시 시작합니다.');
                this.setState({
                    value: '',
                    answer: getNumbers(),
                    tries: [],
                });
            } else {
                for(let i = 0; i < 4; i++) {
                    if(answerArray[i] === this.state.answer[i]) {
                        strike++;
                    } else if(this.state.answer.includes(answerArray[i])) {
                        ball++;
                    }
                }
                this.setState({
                    tries: [...this.state.tries, {try: this.state.value, result: '${strike} 스트라이크, ${ball} 볼 입니다.'}],
                    value: '',
                });
            }
        }
    };

    onChangeInput = (e) => {
        this.setState({
            value: e.target.value,
        });
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
                    {this.state.tries.map( (v, i) => { // v는 value, i는 index
                        return (
                            // index를 key쓰지 말자. (이 경우에는 학습이기 때문에 예외)
                            <Try key={`${i+1}차 시도 : `} tryInfo={v}></Try>
                        );
                    })}
                </ul>
            </>
        );
    }
}

module.exports = Baseball;