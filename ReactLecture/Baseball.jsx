// require vs import
// import React from 'react'; // import 사용 방법
const React = require('react'); // 다른 파일을 요청 받아서 불러오고 변수에 넣어준다.

const BaseBall = () => {

}

// export default BaseBall; // import로 라이브러리 혹은 파일을 불러왔을 때. import Baseball, {}로 감싸지 않았을 때. ES2015 방법
// export const hello = 'hello'; // import {hello}, 변수명을 겹치지 않게 많이 사용 가능
// 노드 모듈 시스템에서 module.exports = {hello : 'a' } == exports.hello = 'a'
// babel이 import를 require로 바꿔주는 역할도 하기 때문에 호환이 된다.
module.exports = BaseBall;