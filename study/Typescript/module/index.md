# 모듈 시스템

## 개요

모듈 시스템은 타입을 재사용 가능한 단위로 분리하고 의존성을 관리하는 방법입니다.

## 모듈 vs 스크립트 파일

### 구분 기준

- **모듈**: top level에 `import`/`export`가 있는 파일
- **스크립트**: top level에 `import`/`export`가 없는 파일

### 특징

- **스크립트 파일**: 전역적으로 접근 가능
- **모듈 파일**: 스코프가 격리되어 있음

```tsx
// 모듈X (스크립트 파일)
declare module "hello" {
  export default class {}
}

// 모듈O
export default class Hello {}
// 또는
import React from "react";
```

## 모듈 시스템 종류

### 1. CommonJS (Node.js 전통 방식)

```tsx
// export
export = A;

// import
import A = require("a"); // module = commonjs
import * as A from "a"; // module = es2015, esModuleInterop = false
import A from "a"; // module = es2015, esModuleInterop = true
```

### 2. UMD (Universal Module Definition)

UMD는 다양한 자바스크립트 모듈 시스템(CommonJS, AMD 등)을 모두 지원하는 범용 모듈 정의 패턴입니다. 자바스크립트는 서버 쪽에서는 CommonJS, 브라우저 쪽에서는 AMD 같은 서로 다른 모듈 시스템이 사용되었습니다. 하지만 라이브러리나 모듈을 개발할 때 여러 환경에서 모두 작동하게 하고 싶을 때가 많아 UMD가 등장하게 된 것입니다.

```tsx
// CommonJS를 위한 export
export = A;

// 스크립트 파일을 위한 export
export as namespace A; // import 없이 namespace로 접근 가능
```

**예시**: React의 경우

```tsx
// @types/react/index.d.ts에서
export as namespace React;

// 사용할 때 (import 없이)
React.Children;
```

### 3. ESM (ES Modules) - 권장 방식

```tsx
// 기본 export/import
export default A;
import A from "a";

// 모든 것 export
export * from "모듈명"; // default 제외, CommonJS 모듈 제외

// namespace로 export
export * as namespace from "모듈명"; // default 포함, CommonJS 모듈 제외

// namespace 사용
import { namespace } from "모듈명";
namespace.default; // default 접근
```

## TypeScript 선언

### declare global

- **모듈 파일**에서만 사용 가능
- top level에 `import`/`export` 필요

```tsx
declare global {
  interface Error {}
}
export {}; // 모듈로 만들기 위한 빈 export
```

### declare module

- **스크립트 파일**: 기존 타입 선언 대체
- **모듈 파일**: 기존 타입 선언과 병합

```tsx
declare module "express-session" {
  interface SessionData {
    sessionData: string;
  }
}
export {}; // 모듈/스크립트 구분의 핵심
```
