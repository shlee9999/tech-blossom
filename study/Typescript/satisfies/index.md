---
title: Satisfies 연산자
date: 2025-08-17
tags: [typescript, satisfies, type-checking]
---

# Satisfies 연산자

## 왜 나왔을까?

**객체 정의 시 TS의 불편한 점**

### 객체 리터럴

```tsx
const palette1 = {
  red: [255, 0, 0],
  green: "#00ff00",
  bleu: [0, 0, 255], // 오타를 못잡는다.
};
```

### <TermTooltip termId="annotation">타입 어노테이션</TermTooltip> ":"

```tsx
const palette2: Record<string, [number, number, number] | string> = {
  red: [255, 0, 0],
  green: "#00ff00",
  bleu: [0, 0, 255], // 오타
};
// 타입추론: const palette2: Record<string, string | [number, number, number]>

palette2.green.toUpperCase(); //! Error
```

- key가 항상 string으로 추론되어, 타입 자동완성 X

      ex) `palette2[”abcd”]`도 string이기 때문에 오류가 안남.

  :::tip
  그래도 'red' | 'green' | 'blue'처럼 key를 유니언으로 정의하면 오타는 예방할 수 있다.
  :::

- value가 항상 `[number, number, number] | string` 으로 추론되어, **toUpperCase** 호출 시 에러발생

### satisfies 연산자

```tsx
const palette3 = {
  red: [255, 0, 0],
  green: "#00ff00",
  blue: [0, 0, 255],
} satisfies Record<string, [number, number, number] | string>;
/*
타입추론
const palette3: {
    red: [number, number, number];
    green: string;
    blue: [number, number, number];
}
*/
palette3.green.toUpperCase();
type Palette3Key = keyof typeof palette3; // type Palette3Key = "red" | "green" | "blue"
```

- key에 대한 구체적 타입 추론 가능
- value에 대한 구체적인 검증도 해준다.

## 참고

- [타입스크립트 satisfies 연산자(operator) 이해하기](https://mycodings.fly.dev/blog/2023-07-14-understanding-typescript-satisfies-operator)
- [Typescript satisfies Operator는 무엇일까?](https://velog.io/@keumky1/Typescript-satisfiesOperator%EB%8A%94-%EB%AC%B4%EC%97%87%EC%9D%BC%EA%B9%8C)
- [satisfies 연산자](https://www.zerocho.com/category/TypeScript/post/638c327844d418915ee64b0b)
