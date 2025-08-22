# 함수 오버로딩

## 개요

함수 오버로딩(Function Overloading)은 **동일한 함수명**으로 **서로 다른 매개변수** [시그니처](/study/Typescript/00-words/function_signature.md)를 가진 여러 함수를 정의하는 TypeScript 기능입니다.
JavaScript는 동적 타입 언어로 함수 오버로딩을 직접 지원하지 않지만, TypeScript에서는 **타입 시스템**을 통해 이를 가능하게 합니다. 실제 구현은 하나의 JavaScript 함수로 이루어지며, TypeScript 컴파일러가 타입 체크를 통해 올바른 시그니처 사용을 보장합니다.

> 함수 호출문에 마우스 커서를 올려서 타입이 올바르게 매핑되는지 확인해 보세요.

## 기본 구조

```ts
// 오버로드 시그니처
function 함수명(매개변수1: 타입): 반환타입;
function 함수명(매개변수2: 타입): 반환타입;

// 구현 시그니처 (실제 함수 구현)
function 함수명(매개변수: 유니온타입): 반환타입 {...}
```

## 기본 예제

### 1. 기본적인 타입 오버로딩

```ts
function add(x: string, y: string): string;
function add(x: number, y: number): number;
function add(x: string | number, y: string | number): string | number {
  if (typeof x === 'string' && typeof y === 'string') {
    return x + y;
  }
  if (typeof x === 'number' && typeof y === 'number') {
    return x + y;
  }
  throw new Error('Invalid arguments');
}

// 사용 예시
add('Hello', 'World'); //  function add(x: string, y: string): string
add(12, 34); //  function add(x: number, y: number): number
add('Hello', 34); // No overload matches this call.
add(12, 'World'); // No overload matches this call.
```

### 2. 매개변수 개수가 다른 오버로딩

```ts
function greet(name: string): string;
function greet(firstName: string, lastName: string): string;
function greet(nameOrFirstName: string, lastName?: string): string {
  if (arguments.length === 1) {
    return `Hello, ${nameOrFirstName}!`;
  } else {
    return `Hello, ${nameOrFirstName} ${lastName}!`;
  }
}

greet('John'); // function greet(name: string): string
greet('John', 'Doe'); // function greet(firstName: string, lastName: string): string
```

### 3. 배열과 단일 값 처리

```ts
function func(value: string): string[];
function func(values: string[]): string[];
function func(input: string | string[]): string[] {
  if (typeof input === 'string') {
    return [input.toUpperCase()];
  }
  return input.map((item) => item.toUpperCase());
}

func('hello'); // function func(value: string): string[]
func(['hello', 'world']); // function func(values: string[]): string[]
```

## 주의사항 및 베스트 프랙티스

### 1. 오버로드 순서 중요성

TypeScript가 호출 장소에서 함수 시그니처를 위에서부터 순서대로 검사하므로, 반드시 **구체적인 타입이 위로 가도록** 해야합니다.

```ts
// 잘못된 순서 - 더 구체적인 타입이 먼저 와야 함
function bad(x: any): any;
function bad(x: string): string;
function bad(x: number): number;
function bad(x: any): any {
  return x;
}
// 함수 오버로드를 위에서부터 검사하여 모두 any로 추론되어 버림
bad('Hello'); // function bad(x: any): any
bad(123); // function bad(x: any): any
bad(true); // function bad(x: any): any

// 올바른 순서 - 구체적인 타입부터 일반적인 타입 순서
function good(x: string): string;
function good(x: number): number;
function good(x: any): any;
function good(x: any): any {
  return x;
}

good('Hello'); // function good(x: string): string
good(123); // function good(x: number): number
good(true); // function good(x: any): any
```

### 2. 구현 시그니처의 호환성

```ts
// 모든 오버로드 시그니처는 구현 시그니처와 호환되어야 함
function example(x: string): string;
function example(x: number): number;
function example(x: string | number): string | number {
  // 모든 오버로드와 호환
  return x;
}
```

### 3. 유니온 타입 vs 오버로딩

```ts
// 유니온 타입 사용 (간단한 경우)
function simpleAdd(x: string | number, y: string | number): string | number {
  return x + (y as any);
}

// 오버로딩 사용 (타입 안정성이 중요한 경우)
function typeSafeAdd(x: string, y: string): string;
function typeSafeAdd(x: number, y: number): number;
function typeSafeAdd(x: string | number, y: string | number): string | number {
  if (typeof x === 'string' && typeof y === 'string') {
    return x + y;
  }
  if (typeof x === 'number' && typeof y === 'number') {
    return x + y;
  }
  throw new Error('Type mismatch');
}
```

## 언제 함수 오버로딩을 사용해야 할까?

1. **타입 안정성**이 중요한 경우
2. **다른 입력 타입**에 따라 **다른 반환 타입**을 보장해야 하는 경우
3. **API의 명확성**을 높이고 싶은 경우
4. **IntelliSense 지원**을 개선하고 싶은 경우

함수 오버로딩은 TypeScript의 강력한 기능 중 하나로, 타입 안정성과 개발자 경험을 크게 향상시킬 수 있습니다.
