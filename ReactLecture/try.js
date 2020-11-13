import React, {Component} from 'react';

// Hook
const Try = ({tryInfo}) => { // 구조분해한 {tryInfo}를 props로 한다면 props.tryInfo.try
    return (
        <li style={{listStyle:"none"}}>
            <div>{tryInfo.try}</div>
            <div>{tryInfo.result}</div>
        </li>
    )
};

// class Try extends Component { // Component => 재사용성
//     render() {
//         return (
//             // 부모 .jsx에서 넘긴 이름 그대로 가져와야 한다. Baseball.jsx에서 value={v} index={i}로 선언하였으니 value와 index로 가져와야 한다.
//             // <li key={this.props.value.fruit + this.props.value.taste}><b>{this.props.index} - {this.props.value.fruit}</b> - {this.props.value.taste}</li>
//             <li style={{listStyle:"none"}}>
//                 {/* tryInfo 안에는 try와 result가 있기 때문에 */}
//                 <div>{this.props.tryInfo.try}</div>
//                 <div>{this.props.tryInfo.result}</div>
//             </li>
//         );
//     }
// }

export default Try;