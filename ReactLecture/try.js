import React, {Component} from 'react';

class Try extends Component { // Component => 재사용성
    render() {
        return (
            // 부모 .jsx에서 넘긴 이름 그대로 가져와야 한다. Baseball.jsx에서 value={v} index={i}로 선언하였으니 value와 index로 가져와야 한다.
            <li key={this.props.value.fruit + this.props.value.taste}><b>{this.props.index} - {this.props.value.fruit}</b> - {this.props.value.taste}</li>
        );
    }
}

export default Try;