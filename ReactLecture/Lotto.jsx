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

    render() {
        const {winBalls, bonus, redo} = this.state;
        return (
            <>
                <div>로또</div>
                <div id = "결과창">
                    {winBalls.map((v) => <Ball key={v} number={v} />)}
                </div>
                <div>보너스 숫자</div>
                <button onClick = {redo ? this.onClickRedo : () => {}}>번호 추출</button>
            </>
        );
    }
}

export default Lotto;