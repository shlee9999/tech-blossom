# 제어 컴포넌트 vs 비제어 컴포넌트

![Vite + React + TS - Chrome 2024-12-20 12-45-43.gif](./Vite__React__TS_-_Chrome_2024-12-20_12-45-43.gif)

## 개요

제어 컴포넌트와 비제어 컴포넌트는 React에서 폼 데이터를 다루는 두 가지 주요 접근 방식입니다.

## 제어 컴포넌트

React의 state로 폼 요소들을 컨트롤합니다. 모든 상태변경은 `setState` 메서드를 통해 이루어지며, **키 입력마다 유효성 검사**가 가능하고 상태관리가 예측 a
가능하다는 장점이 있습니다. 또한 SSOT를 준수합니다.

> [SSOT](https://chancethecoder.tistory.com/45)(Single Source Of Truth, 단일 진실 공급원) : 하나의 상태는 한 곳에만 존재해야 한다

```tsx
import { useState } from "react";

export default function ControlledForm() {
  const [inputValue, setInputValue] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    console.log({ inputValue: e.target.value }); // 키 입력 시마다 유효성 검사 가능 -> 버튼 disabled에 반영 가능
  };
  const onControlledSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("ControlledForm이 제출되었습니다.", { 데이터: inputValue });
  };

  return (
    <form onSubmit={onControlledSubmit}>
      <h2>ControlledForm</h2>
      <input value={inputValue} onChange={onChange} />
      <button disabled={inputValue.length < 5}>제출</button>
    </form>
  );
}
```

## 비제어 컴포넌트

DOM 자체에서 폼 요소들을 컨트롤합니다. React state가 아닌 ref를 사용하여 DOM에서 직접 폼 값을 가져옵니다. 순수 HTML에서도 따로 상태 관리 없이 폼 데이터 제출이 가능하잖아요? 그것을 생각하시면 쉽게 이해되실 거에요. 구현이 단순하여 코드량이 감소한다는 장점이 있으며, useRef는 리렌더링을 반영하지 않아 키 입력마다의 유효성 검사는 불가능하다는 단점도 존재합니다.

**react-hook-form은 비제어 컴포넌트를 활용하는 대표적인 라이브러리입니다.**

```tsx
import { useRef } from "react";

export default function UncontrolledForm() {
  const formRef = useRef < HTMLFormElement > null;
  const onUncontrolledSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log("UncontrolledForm이 제출되었습니다.", {
      데이터: formData.get("data"),
    });
  };

  return (
    <form ref={formRef} onSubmit={onUncontrolledSubmit}>
      <h2>UncontrolledForm</h2>
      <input name="data" />
      <button>제출</button>
    </form>
  );
}
```

## 표로 정리하기

| **특성**    | **제어 컴포넌트** | **비제어 컴포넌트** |
| ----------- | ----------------- | ------------------- |
| 상태 관리   | React state       | DOM                 |
| 유효성 검사 | 실시간 가능       | 제한적              |
| 구현 복잡도 | 복잡              | 단순                |
| 코드량      | 많음              | 적음                |
| SSOT 준수   | O                 | X                   |
