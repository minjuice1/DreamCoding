
// Render Tree
// DOM + CSSOM = Render Tree
// 사용자에게 궁극적으로 보여지는 요소들만 선별이 되어서,
// DOM 과 CSS의 스타일이 합해져서 최종적으로 Render Tree 에 보여지게 된다

// Critical rendering path
// 브라우저에서 url을 입력하게되면 나타나는 순서
// requests/response -> loading -> scripting -> rendering -> layout -> painting
// DOM ======> CSSOM =====> RenderTree ====>   layout ==> paint ==> composition
// ----------------Construction-------------   ------------Operation------------

// Construction time : time to first render
// Operation time : performant user interactions avoid jack ensure reflows & repaints at 60 f/s

// Construction : HTML 페이지에서 브라우저가 이해할 수 있도록 브라우저만의 언어로 바꾸는 Construction
// Operation : 만들어진 브라우저를 이해할 수 있는 Rendering Tree를 이용해서 구조를 작성하고
// 어디에 배치할 것인지, 계산을 한 다음 실제로 브라우저 window에 Redering 하게 되는 Operation

// layout : 만든 Render Tree (최종적으로 포함된 CSS 스타일을) 기반으로 해서 window 위에서
// 레이아웃을 구상하게 됨. (x, y와 같은 크기들을 어떻게 그려야할지 계산)

// paint : paint는 바로 브라우저에 그림을 그리는 것이 아니라, 요소들을 어떻게 배치했냐에 따라서
// paint 부분에서는 각각의 부분을 조금씩 잘게 잘게 나눈 (비트맵) 이미지를 준비해 놓음.
// 이렇게 레이어 단위로 하게되면, 부분적으로 해당 레이어만 수정이 가능함. (성능개선을 위해)

// composition : 준비한 레이어들을 차곡차곡 브라우저 위에 표기. (z-inex가 높은 요소들을 나중에)

// 자바스크립트나 CSS로 DOM 요소를 조작할 때, composition만 다시 일어난다면 베스트!
// paint까지 일어난다면 not bad. 그러나, layout이 다시 일어난다면 worst