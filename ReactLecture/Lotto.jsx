import React, {Component} from 'react';
import Ball from './Ball';

// 로또 번호 랜덤 뽑기
function getWinNumbers() {
    // 45까지 랜덤 숫자 뽑기
    const candidate = Array(45).fill().map((v, i) => i + 1);
    const shuffle = [];

    // 숫자 shuffle에 넣기
    while(candidate.length > 0) {
        shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
    }
    // 보너스 숫자 뽑기
    const bonusNumber = shuffle[shuffle.length - 1];
    // 6개 번호 뽑기, 뽑은 숫자 정렬
    const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);

    return [...winNumbers, bonusNumber];
}

class Lotto extends Component {
    state = {
        winNumbers: getWinNumbers(), // 로또 번호
        winBalls: [], // 로또 번호 6개
        bonus: null, // 보너스 숫자
        redo: false,
    };

    // 클리어 작업을 위해, Hook에서 useRef 대신
    timeouts = [];

    // 실제로 로또 번호 값 넣어주기 (setTimeout 사용)
    componentDidMount() {
        const {winNumbers} = this.state;
        for(let i = 0; i < winNumbers.length - 1; i++) {
            this.timeouts[i] = setTimeout(() => {
                this.setState((prevState) => {
                    return {
                        winBalls: [...prevState.winBalls, winNumbers[i]],
                    };
                });
            }, (i + 1) * 1000); // 첫 번째 공은 1초, 두 번째 공은 2초... (setTimeout 반복)
        }
        this.timeouts[6] = setTimeout(() => { // 보너스 공 가져오기. 보너스 공은 일곱 번째 공이기 때문에 7초 후
            this.setState({
                bonus: winNumbers[6],
                redo: true, // 한 번 더 버튼 보이기
            });
        }, 7000);
    }

    // 공 넣어주기 끝나면 setTimeout 종료
    // setTimeout 클리어 작업, 메모리 누수되는 것을 막음
    // setInterval 같은 메모리 상에 누적되는 것을 위해 사용
    componentWillUnmount() {
        this.timeouts.forEach((v) => {
            clearTimeout(v);
        });
    }

    // 다시 뽑기
    onClickRedo = () => {
        this.setState({
            winNumbers: getWinNumbers(),
            winBalls: [],
            bonus: null,
            redo: false,
        });
        this.timeouts = [];
    };

    render() {
        const {winBalls, bonus, redo} = this.state;
        return (
            <>
                <div>로또</div>
                <div id = "결과창">
                    {/* 반복문 */}
                    {winBalls.map((v) => <Ball key={v} number={v} />)}
                </div>
                <div>보너스 숫자</div>
                {/* 조건문 */}
                {bonus && <Ball number = {bonus} />}
                {redo && <button onClick = {this.onClickRedo}>번호 추출</button>}
            </>
        );
    }
}

export default Lotto;