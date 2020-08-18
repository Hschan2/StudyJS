const e = React.createElement;

// 컴포넌트 만들기
class LikeButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return e('button', null, 'Like'); // <button>Like</button>를 만들겠다는 의미. 만든다 X
    }
}

ReactDOM.render(e(LikeButton), document.querySelector('#root'));
// ReactDOM => 실제로 화면에 띄우겠다. LikeButton을 root라는 id를 가진 곳에 실행하겠다
// 실제 HTML에서 <div id="root"><button>Like</button></div> 로 실행