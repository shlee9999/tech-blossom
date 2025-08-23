# 타입 어노테이션

## 개요

타입 어노테이션(Type Annotation)은 변수, 함수 매개변수, 반환값 등에 `콜론(:)`을 이용하여 **명시적으로 타입을 지정**하는 것입니다.  
TypeScript에서 컴파일러가 타입을 추론할 수 있지만, 개발자가 직접 타입을 선언하여 코드의 의도를 명확하게 표현할 수 있습니다.

### 기본 구조

```typescript
// 변수 타입 어노테이션
let variableName: Type = value;

// 함수 매개변수 및 반환 타입 어노테이션
function functionName(param: Type): ReturnType {...}
```

### 변수 타입 어노테이션

```typescript
// 기본 타입들
let name: string = '홍길동';
let age: number = 25;
let isActive: boolean = true;

// 배열
let numbers: number[] = [1, 2, 3, 4];
let fruits: Array<string> = ['사과', '바나나', '오렌지'];

// 객체
let person: { name: string; age: number } = {
  name: '김철수',
  age: 30,
};

// 유니언 타입
let id: string | number = 'ABC123';
```

### 함수 타입 어노테이션

```typescript
// 함수 선언식
function greet(name: string): string {
  return `안녕하세요, ${name}님!`;
}

// 함수 표현식
const add = (a: number, b: number): number => {
  return a + b;
};

// 선택적 매개변수
function introduce(name: string, age?: number): string {
  return age ? `${name}, ${age}세` : name;
}

// 기본값이 있는 매개변수
function createUser(name: string, role: string = 'user'): object {
  return { name, role };
}
```

### 객체와 인터페이스

```typescript
// 객체 타입 어노테이션
let product: {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
} = {
  id: 1,
  name: '노트북',
  price: 1500000,
  inStock: true,
};

// 인터페이스를 활용한 타입 어노테이션
interface User {
  id: number;
  name: string;
  email: string;
  isAdmin?: boolean; // 선택적 속성
}

let user: User = {
  id: 1,
  name: '이영희',
  email: 'lee@example.com',
};
```

:::tip
타입 어노테이션을 사용하면 IDE에서 더 정확한 **자동완성**과 **타입 검사**를 받을 수 있습니다. 특히 함수의 매개변수와 반환값에 타입을 명시하면 실수를 줄이고 코드의 의도를 명확하게 전달할 수 있습니다.
:::

### 타입 추론 vs 타입 어노테이션

```typescript
// 타입 추론 - TypeScript가 자동으로 타입을 추론
let message = 'Hello'; // string으로 추론
let count = 42; // number로 추론

// 타입 어노테이션 - 명시적으로 타입 지정
let message: string = 'Hello';
let count: number = 42;

// 복잡한 경우에는 타입 어노테이션이 유용
let data: string | null = null; // 초기값만으로는 의도를 알기 어려움
```

:::danger
타입 어노테이션을 잘못 지정하면 런타임 에러가 발생할 수 있습니다. 예를 들어, `string` 타입으로 선언한 변수에 `number` 값을 할당하려고 하면 컴파일 에러가 발생합니다.
:::

타입 어노테이션은 TypeScript의 **핵심 기능** 중 하나로, 코드의 안정성과 가독성을 크게 향상시킵니다. 적절한 타입 어노테이션을 통해 더 안전하고 유지보수하기 쉬운 코드를 작성할 수 있습니다.
