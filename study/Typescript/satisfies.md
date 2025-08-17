# Satisfies 연산자

## 왜 나왔을까?

**객체 정의 시 TS의 불편한 점**

### 객체 리터럴

```tsx
const palette1 = {
  red: [255, 0, 0],
  green: '#00ff00',
  ~~bleu~~: [0, 0, 255], // 오타를 못잡는다.
};
```

### ":"

```tsx
const palette2: Record<string, [number, number, number] | string> = {
  red: [255, 0, 0],
  green: '#00ff00',
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
  green: '#00ff00',
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
