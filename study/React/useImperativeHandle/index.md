# useImperativeHandle

## 개요

useImperativeHandle은 React 훅 중 하나로, **부모 컴포넌트가 자식 컴포넌트의 인스턴스에 직접 접근**할 수 있도록 도와주는 훅입니다. 일반적으로 React에서는 단방향 데이터 흐름을 권장하지만, 특정 상황에서는 부모가 자식의 메서드나 프로퍼티에 직접 접근해야 할 필요가 있습니다.

:::danger 주의사항
useImperativeHandle은 **마지막 수단**으로만 사용해야 합니다. React의 선언적 패러다임에 위배되므로 최대한 지양하고, props와 state를 통한 데이터 흐름을 우선적으로 고려해야 합니다.
:::

## 문법

```tsx
useImperativeHandle(ref, createHandle, deps?)
```

- **ref**: 부모로부터 전달받은 ref 객체
- **createHandle**: 노출할 메서드나 프로퍼티를 반환하는 함수
- **deps**: 의존성 배열 (선택적)

## 사용 사례

### 1. 자식 컴포넌트의 포커스 제어

```tsx
import { forwardRef, useImperativeHandle, useRef } from "react";

interface InputHandle {
  focus: () => void;
  clear: () => void;
}

const CustomInput = forwardRef<InputHandle>((props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current?.focus();
    },
    clear: () => {
      if (inputRef.current) {
        inputRef.current.value = "";
      }
    },
  }));

  return <input ref={inputRef} type="text" />;
});

// 부모 컴포넌트에서 사용
function Parent() {
  const inputRef = useRef<InputHandle>(null);

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  const handleClear = () => {
    inputRef.current?.clear();
  };

  return (
    <div>
      <CustomInput ref={inputRef} />
      <button onClick={handleFocus}>포커스</button>
      <button onClick={handleClear}>클리어</button>
    </div>
  );
}
```

### 2. 모달 컴포넌트 제어

```tsx
import { forwardRef, useImperativeHandle, useState } from "react";

interface ModalHandle {
  open: () => void;
  close: () => void;
}

const Modal = forwardRef<ModalHandle, { children: React.ReactNode }>(
  (props, ref) => {
    const [isOpen, setIsOpen] = useState(false);

    useImperativeHandle(ref, () => ({
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
    }));

    if (!isOpen) return null;

    return (
      <div className="modal-backdrop">
        <div className="modal-content">
          {props.children}
          <button onClick={() => setIsOpen(false)}>닫기</button>
        </div>
      </div>
    );
  }
);

// 사용 예시
function App() {
  const modalRef = useRef<ModalHandle>(null);

  return (
    <div>
      <button onClick={() => modalRef.current?.open()}>모달 열기</button>
      <Modal ref={modalRef}>
        <h2>모달 내용</h2>
        <p>이것은 모달입니다.</p>
      </Modal>
    </div>
  );
}
```

## forwardRef와의 함께 사용

useImperativeHandle은 주로 **forwardRef**와 함께 사용됩니다. forwardRef를 사용하지 않으면 함수형 컴포넌트는 ref를 직접 받을 수 없기 때문입니다.

```tsx
// ❌ 잘못된 사용법
function MyComponent(props) {
  // ref를 직접 받을 수 없음
  return <div>내용</div>;
}

// ✅ 올바른 사용법
const MyComponent = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    someMethod: () => console.log("호출됨"),
  }));

  return <div>내용</div>;
});
```

## 성능 최적화

의존성 배열을 통해 **불필요한 재생성을 방지**할 수 있습니다.

```tsx
const ExpensiveComponent = forwardRef((props, ref) => {
  const [count, setCount] = useState(0);

  useImperativeHandle(
    ref,
    () => ({
      getCount: () => count,
      reset: () => setCount(0),
    }),
    [count]
  ); // count가 변경될 때만 새로운 객체 생성

  return <div>Count: {count}</div>;
});
```

:::tip 언제 사용해야 할까요?

- 포커스, 스크롤, 애니메이션 등 DOM을 직접 조작해야 하는 경우
- 서드파티 라이브러리와 React 컴포넌트를 연결해야 하는 경우
- 특정 메서드를 외부에서 호출해야 하는 라이브러리 컴포넌트를 만드는 경우
  :::

## 대안 고려하기

useImperativeHandle을 사용하기 전에 다음 대안들을 먼저 고려해보세요:

1. **Props와 콜백**: 상태를 부모에서 관리하고 콜백 함수로 전달
2. **State 끌어올리기**: 공통 상태를 상위 컴포넌트로 이동
3. **Context API**: 깊은 컴포넌트 트리에서의 상태 공유
4. **Custom Hooks**: 로직을 재사용 가능한 Hook으로 분리

## 트러블 슈팅

### 문제 상황

부모 컴포넌트에서 매번 `useState`로 상태를 선언하고 props로 전달하는 것이 번거로워, useImperativeHandle로 State 끌어올리기를 시도했습니다.

### 시도한 해결책

```tsx
const Child = forwardRef((props, ref) => {
  const [state, setState] = useState("initial");

  useImperativeHandle(ref, () => ({
    getState: () => state,
    updateState: (newState) => setState(newState),
  }));

  return <div>{state}</div>;
});

function Parent() {
  const childRef = useRef();

  const handleUpdate = () => {
    // 자식이 먼저 렌더링되어야 ref가 설정되므로
    // 부모의 초기 렌더링에서는 접근할 수 없음
    childRef.current?.updateState("updated");
  };

  return (
    <>
      <Child ref={childRef} />
      <button onClick={handleUpdate}>업데이트</button>
    </>
  );
}
```

### 발생한 문제

- **상태 최신값 보장 불가**: 부모 컴포넌트가 렌더링되지 않으면 자식 컴포넌트의 최신 상태값에 접근할 수 없었습니다. 이를 해결하기 위해 부모 컴포넌트를 강제로 렌더링하는 로직을 추가하는 것은 기존의 `useState`를 통한 상태 끌어올리기보다 훨씬 복잡하여 본래 목적에서 벗어나게 됩니다.
- **렌더링 순서 문제**: 부모 컴포넌트의 초기 렌더링 시점에는 자식 컴포넌트의 ref가 아직 설정되지 않아 접근할 수 없었습니다.
- **데이터 흐름 역전**: React의 **단방향 데이터 흐름**에 위배되어 예측하기 어려운 동작이 발생했습니다.
- **상태 동기화 문제**: 여러 자식 컴포넌트 간의 상태 동기화가 복잡해졌습니다.

### 올바른 해결 방법

```tsx
// State 끌어올리기로 해결
function Parent() {
  const [sharedState, setSharedState] = useState("initial");

  return (
    <>
      <Child1 state={sharedState} onStateChange={setSharedState} />
      <Child2 state={sharedState} onStateChange={setSharedState} />
      <button onClick={() => setSharedState("updated")}>업데이트</button>
    </>
  );
}
```

:::danger 결론
**useImperativeHandle은 State 끌어올리기의 대안이 될 수 없습니다.** React의 선언적 패러다임을 따라 상태는 항상 위에서 아래로 흘러가야 하며, 공통 상태는 적절한 상위 컴포넌트에서 관리해야 합니다.
:::

## 참고

- [React 공식 문서 - useImperativeHandle](https://react.dev/reference/react/useImperativeHandle)
- [React 공식 문서 - forwardRef](https://react.dev/reference/react/forwardRef)
- [벨로그 - useImperativeHandle 완전 정복](https://velog.io/@velopert/react-hooks-useimperativehandle)
