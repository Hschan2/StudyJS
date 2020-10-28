const path = require('path');

module.exports = {
    name: 'word-relay-setting',
    mode: 'development', // 실 시버스: production
    devtool: 'eval',
    resolve: { // 알아서 해당 js파일과 jsx파일이 있는지 파악
        extensions: [
            '.js', '.jsx'
        ]
    },

    entry: { // 중요. 입력
        app: ['./client.jsx', './WordRelay.jsx'],
    },

module: {
    rules: [{
        test: /\.jsx?/,
        loader: 'babel-loader',
        options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties'],
        },
    }],
},

    output: { // 중요. 출력
        // path: path.join(__dirname, '폴더명'), => 폴더 하나로 합치기
        filename: './app.js' // 출력할 js 파일
    },
}