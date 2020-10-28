// 여러 개의 자바스크립트 파일을 하나로 묶어주어 하나로 자바스크립트로 만들어주는 것 = WebPack
const React = require('react');
const {Component} = React;

class WordRelay extends Component {
    state = {
        text: "hello, webpack",
    };

    render() {
    return <div>{this.state.text}</div>;
    }
}

module.exports = WordRelay; // WordRelay을 내보내겠다