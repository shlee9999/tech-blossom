# 매개변수 vs 인수

## 개요

**매개변수**(Parameter)와 **인수**(Argument)는 함수와 관련해서 자주 혼동되는 개념입니다. 두 용어의 차이점을 명확히 이해하는 것은 프로그래밍에서 매우 중요합니다.

## 정의

### 매개변수 (Parameter)

- **영어**: Parameter
- **의미**: 함수나 메서드를 **정의할 때** 사용되는 변수
- **위치**: **함수 선언부**에서 괄호 안에 작성
- **역할**: 함수가 받을 수 있는 값의 형태를 정의

### 인수 (Argument)

- **영어**: Argument
- **의미**: 함수나 메서드를 **호출할 때** 실제로 전달되는 값
- **위치**: 함수 호출부에서 괄호 안에 작성
- **역할**: 함수에 **실제로 전달**되는 구체적인 데이터

## 예제

### JavaScript 예제

```javascript
// 함수 정의
function greetUser(name, age) {
  // 'name'과 'age'는 매개변수(Parameter)
  console.log(`안녕하세요, ${name}님! 당신은 ${age}살입니다.`);
}

// 함수 호출
greetUser('김철수', 25); // "김철수"와 25는 인수(Argument)
greetUser('이영희', 30); // "이영희"와 30은 인수(Argument)
```

### TypeScript 예제

```typescript
// 함수 정의 - 매개변수에 타입 지정
function calculateArea(width: number, height: number): number {
  // 'width'와 'height'는 매개변수(Parameter)
  return width * height;
}

// 함수 호출
const area1 = calculateArea(5, 10); // 5와 10은 인수(Argument)
const area2 = calculateArea(3.5, 7.2); // 3.5와 7.2는 인수(Argument)
```

## 정리

| 구분     | 매개변수 (Parameter)   | 인수 (Argument)      |
| -------- | ---------------------- | -------------------- |
| **시점** | 함수 **정의** 시       | 함수 **호출** 시     |
| **성격** | **변수** (placeholder) | **값** (actual data) |
| **예시** | `function add(a, b)`   | `add(5, 3)`          |

## 실무에서의 혼용

실제 개발 현장에서는 두 용어가 혼용되어 사용되는 경우가 많습니다. 하지만 정확한 의미를 알고 사용하는 것이 좋습니다.

- **매개변수**: "이 함수는 두 개의 매개변수를 받습니다"
- **인수**: "함수에 잘못된 인수를 전달했습니다"

## 관련 개념

### Rest Parameters (나머지 매개변수)

```javascript
function sum(...numbers) {
  // 'numbers'는 나머지 매개변수
  return numbers.reduce((total, num) => total + num, 0);
}

sum(1, 2, 3, 4, 5); // 1, 2, 3, 4, 5는 모두 인수
```

### Default Parameters (기본 매개변수)

```javascript
function greet(name = '익명') {
  // 'name'은 기본값을 가진 매개변수
  console.log(`안녕하세요, ${name}님!`);
}

greet(); // 인수를 전달하지 않음
greet('홍길동'); // "홍길동"은 인수
```
