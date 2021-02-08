# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Route로 링크를 다르게 해본 페이지로서, /에는 메인페이지로 초반에 3개의 자료는 useState를 사용하고, 더보기버튼을 누르면 추가되어 map자동화를 통해 표시되는 3개의 자료는 axios를 통하여 기존의 서버에서 받아왔습니다. 간단한 html과 css구성들은 'react-bootstrap'을 통하여 가져왔고, 

index에는 redux연습을 위하여 /Cart의 장바구니에서 +와 -버튼을 누르면 값이 추가되는것을 a.id라는 데이터로 index에게 dispatch하여 값을 증가,감소 시키도록 reducer1과 reducer2는 Cart의 모달창을 닫는것을 관리하기 위하여 만들었습니다.
/detail/:id에는 검색한 id의 상품명, 가격등이 나오도록 만들었으며 /:id 아무id로 들어갔을경우엔 아무거나 적었을때 보여달라는 div창을 만들어두었습니다.

/detail창에는 기본적으로 useEffect(()=>{, 2000}, []); 를 사용하여 창을 첫 로드시에만 2초뒤 꺼지는 창을 출력하도록 만들어두었고, 'react-router-dom'의 useHistory를 사용하여 뒤로가기 버튼을 만들었습니다.
밑의 구분창은 boot-strap을 사용하여 간단하게 만들었으며, 주문하기를 누르면 history.push()와 함께 dispatch를 통하여 클릭한 상품의 id와 name등이 장바구니에 재렌더링없이 들어가게하여, Cart창에서 확인하도록 만들었습니다.
