# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

React-bootstarp으로 기본적인 navbar와 대문을 만들고, react-router-dom에서 Route, Link, Usehistory를 사용하여
뒤로가기, 디테일, 카트등의 페이지를 제작하였음.

시작페이지에서 오른쪽위의 navbar버튼을 누른후 Home페이지에 오면 메인 페이지로 이동함.

메인 페이지의 3가지 신발을 axios로 서버에서 요청한 정보와 이미지들로 구성하였으며, 더보기를 누를시 axios서버에서 다음 3가지 품목을
가져오도록 코드를 작성하였음.
메인페이지에서 신발을 누르게되면 UseEffect를 사용하여 2초간 '재고가 얼마 남지 않았습니다!'라는 박스를 
디테일/(해당신발의 아이디)사이트에 출력하게 하였음.

/Cart
디테일칸의 밑의 옵션의 주문하기를 누르면 카트로 이동하여 주문하기 누른 품목이 카트에 담기도록 제작함.
해당 페이지에서 증가와 감소를 누르면 해당 품목의 수량을 증가시키거나 감소시키도록 제작함.
