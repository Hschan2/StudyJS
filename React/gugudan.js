const e = React.createElement;

// 컴포넌트 만들기
class GuGuDan extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first: Math.ceil(Math.random() * 9), // 첫 번째 숫자 랜덤(1~9)
            second: Math.ceil(Math.random() * 9), // 두 번째 숫자 랜덤(1~9)
            value: '',
            result: '',
        }
    }

    // 클래스 메서드로 사용하면 더 보기 좋게 쓸 수 있다
    onSubmit = (e) => {
        e.preventDefault();
        if(parseInt(this.state.value) === this.state.first * this.state.second) {
            this.setState({
                result: this.state.first + ' * ' + this.state.second + ' = ' + this.state.first * this.state.second + ', 정답이다!', // result 변경될 값
                first: Math.ceil(Math.random() * 9), // first 변경될 값
                second: Math.ceil(Math.random() * 9), // second 변경될 값
                value: '', // value 변경될 값
            });
        } else {
            this.setState({
                result: this.state.value + ', 틀렸다!', // result 변경될 값
                value: '', // value 변경될 값
            });
        }
    };

    onChange = (e) => {
        this.setState({value : e.target.value});
    };

    render() {
        return (
            <div>
                <div>{this.state.first} 곱하기 {this.state.second}의 값은?</div> {/* 구구단 문제 숫자 */}
                <form onSubmit={this.onSubmit}>
                    <input type="number" value={this.state.value} onChange={this.onChange} /> {/* 입력 칸 */}
                    <button>입력</button>
                </form>
                <div>{this.state.result}</div>  {/* 결과 값 */}
            </div>
        );
    }
}

ReactDOM.render(<div><GuGuDan /></div>, document.querySelector('#root'));