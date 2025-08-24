---
id: index_signature
title: 인덱스 시그니처
hoverText: 객체가 동적으로 여러 키를 가질 때, 키와 값의 타입을 미리 선언하는 타입 정의
---

# 인덱스 시그니처

인덱스 시그니처(Index Signature)는 객체가 동적으로 여러 키를 가질 때, 그 키의 타입과 값의 타입을 미리 선언하는 특별한 타입 정의입니다.

### 기본 구조

```typescript
interface ObjectType {
  [key: KeyType]: ValueType;
}
```

### 예시

```typescript
// 문자열 키, 문자열 값
interface StringDictionary {
  [key: string]: string;
}

const translations: StringDictionary = {
  hello: '안녕하세요',
  goodbye: '안녕히 가세요',
  thanks: '감사합니다',
};

// 숫자 키, 불린 값
interface NumberFlags {
  [index: number]: boolean;
}

const flags: NumberFlags = {
  0: true,
  1: false,
  2: true,
};

// 혼합 사용 - 특정 키와 인덱스 시그니처
interface MixedObject {
  name: string; // 고정 속성
  age: number; // 고정 속성
  [key: string]: any; // 추가 동적 속성
}

const person: MixedObject = {
  name: '김철수',
  age: 30,
  city: '서울',
  hobby: '독서',
};
```

### 주의사항

```typescript
interface Example {
  [key: string]: string;
  // length: number; // Property 'length' of type 'number' is not assignable to 'string' index type 'string'
  length: string; // OK
}
```

인덱스 시그니처가 있을 때, **인덱스 시그니처의 위치와 관계없이** 모든 다른 속성들도 인덱스 시그니처의 값 타입과 호환되어야 합니다.
