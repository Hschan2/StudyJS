// 여러 개의 자바스크립트 파일을 하나로 묶어주어 하나로 자바스크립트로 만들어주는 것 = WebPack
const React = require('react');
const {Component} = React;

class WordRelay extends Component {
    state = {
        word: "강아지",
        value: '',
        result: '',
    };

    onSubmitForm = (e) => {
        e.preventDefault();
        if(this.state.word[this.state.word.length - 1] === this.state.value[0]) {
            this.setState({
                result: "좋아요",
                word: this.state.value,
                value: '',
            })
            this.input.focus();
        } else {
            this.setState({
                result: "다시!",
                word: '',
                value: '',
            })
            this.input.focus();
        }
    }

    input;

    onRefInput = (c) => {
        this.input = c;
    }

    onChangeInput = (e) => {
        this.setState({
            value: e.target.value,

        });
    }

    render() {
        return (
            <>
                <div>{this.state.word}</div>
                <form onSubmit={this.onSubmitForm}>
                    <input ref={this.onRefInput} value={this.state.value} onChange={this.onChangeInput} />
                    <button>입력</button>
                </form>
                <div>{this.state.result}</div>
            </>
        );
    }
}

module.exports = WordRelay; // WordRelay을 내보내겠다