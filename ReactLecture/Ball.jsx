import React, {PureComponent, memo} from 'react';

// 함수 컴포넌트 (Hook x)
// Hook => useEffect, useState를 사용할 때
const Ball = memo(({number}) => {
    let background;

    if(number <= 10) background = 'red';
    if(number <= 20) background = 'orange';
    if(number <= 30) background = 'yellow';
    if(number <= 40) background = 'blue';
    else background = 'green';

    return (
        <div className = "ball" style = {{background}}>{number}</div>
    );
});

// class Ball extends PureComponent {
//     render() {
//         const {number} = this.prop;
//         let background;

//         if(number <= 10) background = 'red';
//         if(number <= 20) background = 'orange';
//         if(number <= 30) background = 'yellow';
//         if(number <= 40) background = 'blue';
//         else background = 'green';

//         return (
//             <div className = "ball" style = {{background}}>{number}</div>
//         );
//     }
// }

export default Ball;