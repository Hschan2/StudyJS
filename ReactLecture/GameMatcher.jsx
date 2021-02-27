import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

// Router에서 동적으로 처리하지 않았을 경우, 그래도 동적 처리 방식으로 사용하고 싶을 때, withRouter 사용
// 즉, history, match, location이 없을 경우
class GameMatcher extends Component {
    render() {
        return (
            <div>GameMatcher</div>
        );
    }
}

// withRouter 사용
// export default withRouter(GameMatcher);
export default GameMatcher;