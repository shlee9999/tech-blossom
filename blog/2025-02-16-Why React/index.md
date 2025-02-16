---
slug: why-react
title: Why React?
authors: [shlee]
tags: [react]
---

## React란

React는 사용자 인터페이스(UI)를 만들기 위한 Javascript 라이브러리다. Facebook에서 개발하였으며, **데이터(state)의 변경**에 반응해서 화면을 수정한다 하여 이름을 React라 지었다. 즉 데이터에 따른 화면을 미리 만들어놓고, 데이터만 적절하게 바꿔주면 리액트가 알아서 반응해서 화면을 바꾸어주는 것이다. React 프로젝트에서는 데이터 중심으로 사고를 해야한다는 걸 명심하자.

<!-- truncate -->

## 리액트를 사용하는 이유

### **컴포넌트 기반 아키텍처**

- UI를 독립적인 컴포넌트로 분리하여 개발
- 코드 재사용성이 높아지고, 유지보수 및 확장이 용이

### **단방향 데이터 흐름**

- 예측 가능한 상태 관리
- 디버깅 용이

### **SPA 지원**

- 전체 페이지를 새로고침하지 않고 **필요한 부분만 업데이트**
- 매끄러운 사용자 경험(UX) 제공
- 앱과 유사한 인터랙티브한 환경

### **Virtual DOM**

- 실제 DOM 대신 가상 DOM을 활용해 상태 변화에 따른 최소한의 UI 업데이트를 수행
- 불필요한 리렌더링을 방지하여 성능 최적화에 도움

### **JSX 활용**

- HTML과 유사한 문법을 통해 컴포넌트를 작성할 수 있어, 코드의 가독성과 개발 생산성 향상

### **활발한 커뮤니티와 풍부한 개발자 도구**

- 방대한 오픈소스 라이브러리와 플러그인 생태계 덕분에 다양한 기능을 쉽게 확장 가능
- React Developer Tools 등 우수한 디버깅 및 성능 분석 도구 지원

---

## 참고

- https://www.youtube.com/watch?v=LclObYwGj90
- https://www.youtube.com/watch?v=V3QsSrldHqI
- https://www.youtube.com/shorts/GE-_9yAiCy4
- https://reactiver.dev/where-did-the-name-react-come-from/
