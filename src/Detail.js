import React, { useEffect } from 'react';
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

    useEffect(()=>{
        setTimeout(()=>{

        }, 2000)

        return function 함수명(){실행할코드}
    });

    let { id } = useParams();
    let 찾은상품 = props.shoes.find(function(상품){
        return 상품.id == id
    })
    let history = 
    useHistory();

    return(
      <div className="container">
          <박스>
            <제목 색상="black">상세페이지</제목>
          </박스>
     <div className="my-alert2">
         <p>재고가 얼마 남지 않았습니다.</p>
     </div>
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