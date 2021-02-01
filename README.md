# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Route로 링크를 다르게 해본 페이지로서, /에는 메인페이지로 초반에 3개의 자료는 useState를 사용하고, 더보기버튼을 누르면 추가되어 map자동화를 통해 표시되는 3개의 자료는 axios를 통하여 기존의 서버에서 받아왔습니다. 간단한 html과 css구성들은 'react-bootstrap'을 통하여 가져왔고, 

index에는 redux연습을 위하여 /Cart의 장바구니에서 +와 -버튼을 누르면 값이 추가되는것을 a.id라는 데이터로 index에게 dispatch하여 값을 증가,감소 시키도록 reducer1과 reducer2는 Cart의 모달창을 닫는것을 관리하기 위하여 만들었습니다.
/detail/:id에는 검색한 id의 상품명, 가격등이 나오도록 만들었으며 /:id 아무id로 들어갔을경우엔 아무거나 적었을때 보여달라는 div창을 만들어두었습니다.

/detail창에는 기본적으로 useEffect(()=>{, 2000}, []); 를 사용하여 창을 첫 로드시에만 2초뒤 꺼지는 창을 출력하도록 만들어두었고, 'react-router-dom'의 useHistory를 사용하여 뒤로가기 버튼을 만들었습니다.
밑의 구분창은 boot-strap을 사용하여 간단하게 만들었으며, 주문하기를 누르면 history.push()와 함께 dispatch를 통하여 클릭한 상품의 id와 name등이 장바구니에 재렌더링없이 들어가게하여, Cart창에서 확인하도록 만들었습니다.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
