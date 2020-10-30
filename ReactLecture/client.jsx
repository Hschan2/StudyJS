const React = require('react');
const ReactDom = require('react-dom');

const GuGuDan = require('./GuGuDan');
const WordRelay = require('./WordRelay'); // WordRelay.jsx 불러오기. webpack이 알아서 파악하고 무엇이 무엇을 불러와야 하는지 스스로 동작

ReactDom.render(<GuGuDan />, document.querySelector('#root')); // jsx 문법