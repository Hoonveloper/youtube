https://hoonveloper.github.io/youtube/

# **YoutubeClone**

유튜브 클론 웹 만들어보기 

메인 페이지 3 component로 나눔

1.Header

2.sidebar

3.recommend videos 

es7 snippets <= 리액트 개발자한테 유용한 도구설치하기

------

## 1.Header



헤더를 만드는데 있어서는 크게 어려운게 없었다

간단하게 html로 구조를 잡아주고 ,  css로 배치만 해주면 된다.

icon은 **material ui** 사이트를 이용해 가져왔다. 사용법은 '**이 프로젝트를 하면서 배운것들**' 에 넣었다.



##### 로고 클릭

유튜브 아이콘을 눌르면 메인화면(home)으로 이동하게 했다.

```
<Link to="/">
	<MenuIcon/>
    <img className="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017	.svg"></img>
</Link>
```

아이콘과 이미지 전체를 Link 컴퍼넌트로 감싸고 to 속성을 추가해 클릭하면 "localhost:3000/" ,즉 home으로 이동하게 했다.

html에서 a태그와 href 속성이랑 비슷하다고 생각하면 될 것 같다. 



##### 검색창

검색창 구현은  react hook 을 처음 배워서 넣었고, '**이 프로젝트를 하면서 배운것들**'  에 자세하게 설명했다. 



##### 구조

```
    <div className="App">
      <Router>
        <Header />
        <Switch>
          
          <Route path="/search/:searchTerm">
            <div className="app__page">
                <Sidebar />
                <SearchPage />
            </div>
          </Route>
          <Route path="/">
              <div className="app__page">
                <Sidebar />
                <RecommendedVideos />
              </div>
          </Route>
        </Switch>
      </Router>
```

Header 부분은 어느 페이지를 가도 항상 있어야 하기 때문에 구조상 switch 바깥에 위치시켜 어느 path를 가더라도 위치하게 했다. 



##### css

```
    .header{
    position:sticky;
    top:0; 
   /*----------------------------*/
    z-index:1;
    }
```

header부분은 스크롤을 내려도 항상 고정되어있길 바랬다. 따라서  이 과정에는 2가지가 필요했다.

1.위치고정 

주석 윗 부분 코드로 position :sticky 부분이 종이에 풀로 붙이듯 header를 붙였고, top:0을통해 맨 위로 위치시켰다



2.Z-index 맨 위로 위치

1과정만 거치면 스크롤을 내리다 보면 header부분과 다른 부분들이 겹치게 되어 보기 좋지 않아지기 때문에

z-index:1 을 통해서 z평면 상에서 맨 위로 끌어올렸기 때문에 다른 부분들이 겹치더라도 header 밑으로 들어가기 때문에

보이지 않는 효과를 낼 수 있다.





------



## 2.Sidebar

사이드바를 구현함에 있어서 어려운 점은 딱히 없었다

Sidebar 한 줄 마다 sidebarRow를 넣어서 퍼즐(?) 맞추듯 하나하나 끼워넣는 형식으로 구현했다.

기본적으로 home이 select 되어 있고 마우스를 hover하면 그 sidebarRow도 select 된다. 

selected, icon, title 을 props로 넘기고 

![icon 넘기기](https://user-images.githubusercontent.com/77804950/107990598-15ab3580-7018-11eb-98e8-ebe67e672113.png)

icon도 props로 위와 같이 넘길 수 있었다.

```
<div className={`sidebarRow ${selected && "selected"}`}>
```

이런식으로 props를 받아서 classname에 selected를 넣고 css 작업을 하면 된다.

```
.sidebarRow:hover .sidebarRow__icon{

  color:red;

}
```

이런식으로 sidebarRow가 hover되면 icon을 빨간색으로 바꾸는 등 작업을 하면 된다.



![sidebar](https://user-images.githubusercontent.com/77804950/107990504-ee546880-7017-11eb-99a5-399e0e3f7de5.png)

------

## 3.Recommended Videos 

sidebar 옆에있는 추천 영상 부분이다.

```
<VideoCard 
                    image="https://i.ytimg.com/vi/HO3wEi8tE9Y/maxresdefault.jpg"
                    title="[아주대학교] 캠퍼스 소개! 아주대 캠퍼스에는 뭐가 있을까?!"
                    channel="학교왕TV"
                    views="조회수 13,734회"
                    timestamp="2020. 4. 16."
                    channel_img="https://yt3.ggpht.com/ytc/AAUvwniF3QxWh6YMs-o4GNFfeaib0ibIvzyaWoOhLnKBeQ=s88-c-k-c0x00ffffff-no-rj"
                />
```

각 비디오 마다 VideoCard를 통해 props를 넘겨주고,  videocard에서 다시 css작업을 해주면 된다. 

------

## 4.SearchPage

이 부분역시 3부분으로 나눴다. 방법은 위에서 언급한 정도면 충분히  할 수 있다.

1. filter
2. channel
3. videos

filter은 material-ui를 이용하고, channel은 channelRow만들어서 props보내주고 디자인, videos도 props보내주고 디자인 하면 끝이다. 





![검색](https://user-images.githubusercontent.com/77804950/107990521-f6aca380-7017-11eb-99cc-5886d0361ff7.png)



------

## 이 프로젝트를 하면서 배운것들

### BEM Rules

**BEM이란?**

  \- Class의 이름을 작성하는 방법에 대해서 정의한 규칙
   (모듈화하지 않고 간단하게 프로젝트를 만드는 것이라면 BEM을 사용하면 조금 더 쉽게 제작이 가능하다.)

  -BEM? : Block, Element, Modifier로 나누어서 이름을 작성하는 것.
   예) block__element--modifier

![img](https://blog.kakaocdn.net/dn/nNTWs/btqGg5TQSr4/5MmDceKKFlq5oujhPlOgek/img.png)

------



### material-ui

다양한 아이콘을 쓸 수 있는 사이트

###### 기본세팅

```
npm install @material-ui/core
```

```sh
npm install @material-ui/icons
```

이렇게 코어/ 아이콘 모두 설치해주어야 한다. 

###### 사용법

![image-20210207030551018](https://user-images.githubusercontent.com/77804950/107990401-c2d17e00-7017-11eb-935d-2b505eac229a.png)

설치가 완료되면 Material icons에서 아이콘을 검색해서

```
import MenuIcon from '@material-ui/icons/Menu';
```

import 해주고

```
<MenuIcon /> 
```

이렇게 react js에서 사용하면 된다. 

### Router

Router 는  어떤 url이 무엇을 가져오는지 결정. 

어떤 component를 보여줘야 하는지 .? 

어떤 경로를 볼지 >?

#### exact

예를들어 path값을 줄 떄 1. '/'  , 2. '/movies' , 3. review 

이 세 route가 있다고 가정하면  "/" 이라는 url에만 들어가도

3개 모두 rendering 되는 현상이 발생함. 

이걸 막기 위해 **exact ** 라는 속성을 사용한다.

그러면 정확한 path와 일치해야 url의  컴포넌트를 rendering한다.



#### switch

switch의 역할은 router들을 묶은다음 

**가장 먼저 path에 매치되는 route에 연결**시키는 것이다.

```
<Router>
	<Route exact path="/" component={Home} />
    <Route path="/movies" component={Movies} />
    <Route path="/reviews" component={Reviews} />
    <Route component={PageNotFound} />
</Router>
```

라우터는 기본적으로 path가 없으면 무조건 rendering 시키기 떄문에 오류가 나지 않아도 PageNotFound는 rendering 된다. 

```
  <Switch>
  	<Route exact path="/" component={Home} />
    <Route path="/movies" component={Movies} />
    <Route path="/reviews" component={Reviews} />
    <Route component={PageNotFound} />
  </Switch>
```

따라서 이런식으로 묶어서 정의되지 않은 path값이 들어오면 switch가 PageNotFound를 첫번째로 매치시키기때문에 

PageNotFound가 rendering된다. 

### hook

react component에서 동적인 값을 state라고 부른다.

class에는 state가 있다. 하지만 function에는 state값이 없는데

react hook중 하나인 useState를 사용하면 함수 컴포넌트 안에서 state처럼 사용할 수 있다.

보통 []형태로 state와 갱신할 수 있는 함수 쌍으로 사용.

https://ko.reactjs.org/docs/hooks-state.html 참고. 

#### 프로젝트 안에서의 hook

**언제 Hook을 사용할까?** 함수 컴포넌트를 사용하던 중 state를 추가하고 싶을 때 클래스 컴포넌트로 바꾸곤 했을 겁니다. 하지만 이제 함수 컴포넌트 안에서 Hook을 이용하여 state를 사용할 수 있습니다.

1.useState를 import 한다.

```
`import React , {useState} from "react";`
```

2.class에서 state처럼 최상단에 아래코드 작성

```
`const [inputSearch,setInputSearch] = useState("");`
```

여기서 inputSearch는 this.state와 같고

SetInutSearch는 inputSearch를 갱신해주는 setter역할이다.

useState를 통해 초기값을 지정해준다. 

```
<input onChange={`

          e=>setInputSearch(e.target.value)}

          value={inputSearch} type="text" placeholder="Search">

`</input>
```

 onchange 이벤트 처리를 받아서 setInputSearch를 통해 변경된 값을 value에 저장시켜 주는 역할을 한다. 

​       

```
<Link to={`/search/${inputSearch}`}>

         <SearchIcon className="header__inputButton"/>

 </Link>
```

그 다음 받은 inputSearch를 Link 컴퍼넌트에 넣어서 value 값을 url에 넣는 방식으로 검색창을 구현했다.

이런식으로 프로젝트에서 검색창을 구현하였다. 



![search url](https://user-images.githubusercontent.com/77804950/107990478-e72d5a80-7017-11eb-8447-a5b44bde0269.png)



### Link

`import {Link} from "react-router-dom";`
