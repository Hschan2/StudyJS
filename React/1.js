const e = React.createElement;

// 컴포넌트 만들기
class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { // 바뀔 여지가 있는 부분 (state -> 데이터라고 생각하면 쉽다. React가 알아서 화면을 일치 시켜준다)
            liked: false,
        };
    }

    render() {
        return e('button', { onClick: () => {this.setState({liked:true})}, type: 'submit' }, this.state.liked === true ? 'Liked' : 'Like',);
        // <button onClick="() => {this.setState({liked:true})} type="submit"">Like</button>를 만들겠다는 의미. 만든다 X
        // setState => 값을 변경할 때 (상태를 설정하다)
        // $('button').text('Liked');
    }
}

ReactDOM.render(e(LikeButton), document.querySelector('#root'));
// ReactDOM => 실제로 화면에 띄우겠다. LikeButton을 root라는 id를 가진 곳에 실행하겠다
// 실제 HTML에서 <div id="root"><button>Like</button></div> 로 실행