/* eslint-disable */

import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import './Detail.css'

let 박스 = styled.div`
    padding: 20px;
`;

let 제목 = styled.h4`
    font-size: 25px;
    color: ${ props => props.색상 }
`;

function Detail(props){

    let [alert, alert변경] = useState(true);
    let { id } = useParams();
    let history = useHistory();
    let 찾은상품 = props.shoes.find(function(상품){
        return 상품.id == id
    })

    useEffect(()=>{
        let 타이머 = setTimeout(()=>{
          alert변경(false)
          return ()=> { clearTimeout(타이머) }
        }, 2000)
    },[/*실행 조건을 넣는 칸. [alert, Data]=> alert,Data0가 변경시에만 실행. 여러개 가능 [](꽁백)시 로드되었을때 한번만 실행함.*/]);

    return(
      <div className="container">
          <박스>
            <제목 색상="black">상세페이지</제목>
          </박스>

      {
        alert === true
        ? (<div className="my-alert2">
          <p>재고가 얼마 남지 않았습니다.</p>
          </div>)
        : null
      }
            <div className="row">
              <div className="col-md-6">
                <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
              </div>
              <div className="col-md-6 mt-4">
                <h4 className="pt-5">{찾은상품.title}</h4>
                <p>{찾은상품.content}</p>
                <p>{찾은상품.price}</p>
                <button className="btn btn-danger">주문하기</button> 
                <button className="btn btn-danger" onClick={()=>{
                    history.goBack();
                }}>뒤로가기</button> 
              </div>
            </div>
      </div> 
    )
  }

export default Detail;