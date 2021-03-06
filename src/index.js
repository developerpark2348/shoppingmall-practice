import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

let 기본state = [{id : 0, name : '샘플1', quan : 2}, {id : 1, name : '샘플2', quan : 1}];

function reducer(state = 기본state, 액션){
  if(액션.type === '수량증가') {
    let copy = [...state];
    copy[액션.데이터].quan++;
    return copy
  } else if(액션.type === '수량감소') {
    let copy = [...state];
    copy[액션.데이터].quan--;
    return copy
  } else if(액션.type === '항목추가') {
    let copy = [...state];
    copy.push(액션.payload);
    return copy;
  } else {
    return state
  }
}

let alert초기값 = true;

function reducer2(state = alert초기값, 액션) {
  if(액션.type === '닫기') {
    let copy = state;
    copy = false;
    return copy
  } else {
    return state
  }
}

let store = createStore( combineReducers({reducer, reducer2}));

ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
