---
title: ECMAScript 버전별 주요 문법
tags: [javascript, ecmascript]
---

# ECMAScript 버전별 주요 문법

아래는 ES5부터 최근 사양까지, 실제 사용에 영향이 큰 문법/내장 객체 변화만 간결히 추린 목록입니다. 간단 예제와 함께 정리했습니다.

## ES5 (2009)

- 엄격 모드: `'use strict'`
- JSON: `JSON.parse`, `JSON.stringify`
- 배열 메서드: `forEach`, `map`, `filter`, `reduce`, `some`, `every`

```javascript
'use strict';
[1, 2, 3].map((n) => n * 2);
```

## ES6 / ES2015

- 변수: `let`, `const`
- 함수: 화살표 함수, 기본값 매개변수, 나머지 매개변수
- 구조: 클래스, 모듈(`import`/`export`)
- 문법: 템플릿 리터럴, 비구조화 할당, 스프레드
- 컬렉션/반복: `Map`, `Set`, `for...of`, 이터러블/제너레이터
- Promise, 심볼

```javascript
const add = (a = 0, b = 0) => a + b;
const user = { id: 1, name: 'Lee' };
const { name } = user;
// import something from './mod.js'; (모듈 환경에서 사용)
```

## ES2016

- 지수 연산자: `**`
- `Array.prototype.includes`

```javascript
2 ** 10; // 1024
[1, 2, 3].includes(2); // true
```

## ES2017

- `async/await`
- `Object.values`, `Object.entries`
- 문자열 패딩: `padStart`, `padEnd`

```javascript
async function main() {
  const res = await fetch('/api');
  return res.ok;
}
```

## ES2018

- 비동기 반복: `for await...of`
- 객체 Rest/Spread
- `Promise.prototype.finally`

```javascript
const { a, ...rest } = { a: 1, b: 2 };
await Promise.resolve();
Promise.resolve().finally(() => {});
```

## ES2019

- `Array.prototype.flat`, `flatMap`
- `Object.fromEntries`
- `String.prototype.trimStart`, `trimEnd`

```javascript
[['a'], ['b']].flat(); // ['a','b']
Object.fromEntries([['a', 1]]); // { a: 1 }
```

## ES2020

- 옵셔널 체이닝 `?.`, 널 병합 `??`
- `Promise.allSettled`
- `globalThis`
- `BigInt`

```javascript
const title = post?.meta?.title ?? 'untitled';
```

## ES2021

- `String.prototype.replaceAll`
- 논리 할당 연산자: `||=`, `&&=`, `??=`
- 숫자 구분자: `1_000_000`
- `Promise.any`

```javascript
obj.name ||= 'default';
```

## ES2022

- `Array.prototype.at`
- `Object.hasOwn`
- 클래스 필드/정적 초기화 블록
- 최상위 await (모듈)

```javascript
const last = arr.at(-1);
if (Object.hasOwn(obj, 'key')) {
}
```

## ES2023

- 불변 복사 메서드: `toReversed`, `toSorted`, `toSpliced`, `with`
- 검색: `findLast`, `findLastIndex`
- Hashbang `#!/usr/bin/env node`

```javascript
const sorted = nums.toSorted((a, b) => a - b);
```

## ES2024 (최근 사양)

- 그룹핑: `Array.prototype.group`, `groupToMap`
- 정규식 `v` 플래그 (세트 표기 등 향상)
- `Set` 메서드 확장: `isSubsetOf`, `isSupersetOf`, `intersection`, `union`, `difference`, `symmetricDifference`
- `Promise.withResolvers`

```javascript
const groups = ['a', 'ab', 'b'].group((s) => s[0]);
const { promise, resolve, reject } = Promise.withResolvers();
resolve(1);
```

## 출처 및 참고 링크

- [ECMAScript 자바스트립트 버전별 특징](https://velog.io/@zioo/ES6-%EB%AC%B8%EB%B2%95%EC%A0%95%EB%A6%AC)
- [W3Schools JavaScript 버전별 요약](https://www.w3schools.com/js/js_versions.asp)
- [다양한 ES버전별 기능 소개 및 비교](https://dev.to/techelopment/ecmascript-a-collection-of-the-main-new-features-of-each-version-8n5)
