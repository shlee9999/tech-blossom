---
id: function_signature
title: 함수 시그니처
hoverText: 함수의 입력(매개변수)과 출력(반환값)의 타입을 정의하는 타입 규격
---

# 함수 시그니처

함수 시그니처(Function Signature)는 함수의 입력(매개변수)과 출력(반환값)의 타입을 정의하는 부분입니다. 함수가 어떤 매개변수를 받고 어떤 타입을 반환하는지를 명시하는 **타입 규격**입니다.

### 기본 구조

```typescript
function functionName(parameter1: type, parameter2: type): returnType {
  // 함수 구현
}
```

### 예시

```typescript
// 기본 함수 시그니처
function add(a: number, b: number): number {
  return a + b;
}

// 화살표 함수 시그니처
const multiply = (x: number, y: number): number => x * y;

// 선택적 매개변수
function greet(name: string, age?: number): string {
  return age ? `안녕하세요, ${name}님 (${age}세)` : `안녕하세요, ${name}님`;
}

// 함수 타입 별칭
type Calculator = (a: number, b: number) => number;
const subtract: Calculator = (a, b) => a - b;
```

함수 시그니처를 통해 **매개변수 타입**과 **반환 타입**을 명확하게 지정하여 코드의 안정성과 가독성을 높일 수 있습니다.
