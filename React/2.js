const e = React.createElement;

// 컴포넌트 만들기
// class Hook extends React.Component {
//     constructor(props) {
//         super(props);
//     } => Hook 사용하기 전

// Hook => 함수 컴포넌트에 state와 ref를 추가한 것
const Hook = () => { // 함수 컴포넌트라고 부름
    // this.state = {} => 불가

    // Hook 컴포넌트 안에 꼭 들어가 있어야 한다
    const [first, setFirst] = React.useState(Math.ceil(Math.random() * 9)); // () 안에 초기값. state를 0~9의 무작위 숫자로 넣는 것으로 선언하겠다
    const [second, setSecond] = React.useState(Math.ceil(Math.random() * 9));
    const [value, setValue] = React.useState(''); // state를 비어는 것으로 선언하겠다
    const [result, setResult] = React.useState('');
    const inputRef = React.useRef(null); // ref 쓰는 방법. (초기값)

    const onChangeInput = (e) => {
        setValue(e.target.value);
    }

    const onSubmitForm = (e) => {
        e.preventDefault();
        if(parseInt(value) === first * second) {
            setResult(first + ' X ' + second + ' = ' + value + ', 정답!');
            setFirst(Math.ceil(Math.random() * 9));
            setSecond(Math.ceil(Math.random() * 9));
            setValue('');
            inputRef.current.focus();
        } else {
            setResult(value + ', 오답!');
            setValue('');
            inputRef.current.focus();
        }
    }

    return <React.Fragment>
        <div>{first} X {second}의 값은?</div>
        <form onSubmit={onSubmitForm} className="forms">
            <input ref={inputRef} onChange={onChangeInput} value={value} className="box"/>
            <button className="btn">입력</button>
        </form>
        <div id="result">{result}</div>
    </React.Fragment>;
}

ReactDOM.render(<div><Hook /></div>, document.querySelector('#root'));