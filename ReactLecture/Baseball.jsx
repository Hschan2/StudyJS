import React, {Component, useState} from 'react';
import Try from './try.js';

// 외부에서 작성한 함수는 Hook 영향 X
function getNumbers() { // this를 사용하지 않을 때. class 안에다 사용해도 된다(이때는 this.getNumbers()로)
    const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const array = [];
    for(let i = 0; i < 4; i++) {
        const chosen = candidate.splice(Math.floor(Math.random * (9 - i)), 1)[0];
        array.push(chosen);
    }
    return array;
}

// Hook ver.
const Baseball = () => {
    const [result, setResult] = useState('');
    const [value, setValue] = useState('');
    const [answer, setAnswer] = useState(getNumbers());
    const [tries, setTries] = useState([]);

    const onSubmitForm = (e) => {
        e.preventDefault();
        if(value === answer.join('')) {
            setResult('홈런');
            setTries((prevTries) => { // 옛날 걸로 현재 걸 만든다 => 함수형
                return [...prevTries, {try: value, result: '홈런'}];
            });
            alert('게임을 다시 시작합니다.');
            setValue('');
            setAnswer(getNumbers());
            setTries([]);
        } else { // 틀렸을 때
            if(tries.length >= 9) {
                setResult(`10번 이상 시도로 게임 종료, 답은 ${answer.join(',')}`);
                alert('게임을 다시 시작합니다.');
                setValue('');
                setAnswer(getNumbers());
                setTries([]);
            } else {
                for(let i = 0; i < 4; i++) {
                    if(answerArray[i] === answer[i]) {
                        strike++;
                    } else if(answer.includes(answerArray[i])) {
                        ball++;
                    }
                }
                setTries((prevTries) => {
                    return [...prevTries, {try: value, result: '${strike} 스트라이크, ${ball} 볼 입니다.'}];
                });
                setValue('');
            }
        }
    };

    const onChangeInput = (e) => {
        setValue(e.target.value);
    };

    return (
        <>
            <h1>{result}</h1>
            <form onSubmit={onSubmitForm}>
            <input maxLength={4} value={value} onChange={onChangeInput} />
            <button>입력</button>
            </form>
            <div>시도: {tries.length}</div>
            <ul>
                {tries.map((v, i) => { // v는 value, i는 index
                    return (
                        // index를 key쓰지 말자. (이 경우에는 학습이기 때문에 예외)
                        <Try key={`${i+1}차 시도 : `} tryInfo={v}></Try>
                    );
                })}
            </ul>
        </>
    );
};

// class Baseball extends Component {
//     state = {
//         result: '',
//         value: '',
//         answer: getNumbers(), // 랜덤 숫자가 추출
//         tries: [], // React에서 배열에 값을 넣을 때, push 사용 비추천
//     };

//     onSubmitForm = (e) => {
//         const {value, tries, answer} = this.state;
//         e.preventDefault();
//         if(value === answer.join('')) { // 맞추었을 때
//             this.setState((prevState) => { // 옛 state를 사용해 현재 state로 만들 때 함수형으로
//                 return {
//                     result: '홈런',
//                     tries: [...prevState.tries, {try: value, result: '홈런'}], // ... => 기존 배열 복사 (기존 배열 안에 값도 복사), {} => 넣을 값
//                 }
//             });
//             alert('게임을 다시 시작합니다.');
//             this.setState({
//                 value: '',
//                 answer: getNumbers(),
//                 tries: [],
//             });
//         } else { // 틀렸을 때
//             if(tries.length >= 9) {
//                 this.setState({
//                     result: `10번 이상 시도로 게임 종료, 답은 ${answer.join(',')}`,
//                 });
//                 alert('게임을 다시 시작합니다.');
//                 this.setState({
//                     value: '',
//                     answer: getNumbers(),
//                     tries: [],
//                 });
//             } else {
//                 for(let i = 0; i < 4; i++) {
//                     if(answerArray[i] === answer[i]) {
//                         strike++;
//                     } else if(answer.includes(answerArray[i])) {
//                         ball++;
//                     }
//                 }
//                 this.setState((prevState) => {
//                     return {
//                         tries: [...prevState.tries, {try: value, result: '${strike} 스트라이크, ${ball} 볼 입니다.'}],
//                         value: '',
//                     }
//                 });
//             }
//         }
//     };

//     onChangeInput = (e) => {
//         this.setState({
//             value: e.target.value,
//         });
//     }

//     render() {
//         return (
//             <>
//                 <h1>{this.state.result}</h1>
//                 <form onSubmit={this.onSubmitForm}>
//                 <input maxLength={4} value={this.state.value} onChange={this.onChangeInput} />
//                 <button>입력</button>
//                 </form>
//                 <div>시도: {this.state.tries.length}</div>
//                 <ul>
//                     {this.state.tries.map( (v, i) => { // v는 value, i는 index
//                         return (
//                             // index를 key쓰지 말자. (이 경우에는 학습이기 때문에 예외)
//                             <Try key={`${i+1}차 시도 : `} tryInfo={v}></Try>
//                         );
//                     })}
//                 </ul>
//             </>
//         );
//     }
// }

module.exports = Baseball;