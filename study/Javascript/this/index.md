# this 표 하나로 끝내기

## 개요

JavaScript에서 `this`는 함수 호출 방식에 따라 동적으로 바인딩되는 특별한 키워드입니다. 함수가 어떤 방식으로 호출되느냐에 따라 `this`가 가리키는 대상이 달라지므로, 각 호출 패턴별로 정확히 이해하는 것이 중요합니다.

## this 바인딩 요약표

다음 표만 완벽히 이해한다면, this 바인딩을 충분히 이해할 수 있습니다. **호출**과 **정의** 두 단어에 집중해주세요.

| 구분              | this 바인딩                                                          | 호출문의 왼쪽      |
| ----------------- | -------------------------------------------------------------------- | ------------------ |
| **일반 함수**     | 일반 함수로 **호출**된 모든 함수 내부의 this에는 전역 객체가 바인딩  | 비어있음           |
| **객체의 메서드** | 메서드 내부의 this는 메서드를 **호출**한 객체가 바인딩               | 호출한 객체가 존재 |
| **생성자 함수**   | `new` 연산자로 **호출** 시 생성할 인스턴스가 this에 바인딩           | new가 존재         |
| **화살표 함수**   | 함수가 **정의**된 위치에서의 this가 그대로 바인딩 **(lexical this)** | -                  |
| **이벤트 핸들러** | 이벤트를 바인딩한 DOM 요소(`currentTarget`)가 바인딩                 | -                  |

:::tip
호출문의 **왼쪽**을 보는게 정말 중요합니다.
:::

## this란?

**`this`는 자신이 속한 객체 또는 자신이 생성할 인스턴스를 가리키는 자기 참조 변수입니다.** `this`를 통해 자신이 속한 객체 또는 자신이 생성할 인스턴스의 프로퍼티나 메서드를 참조할 수 있습니다.

## this 바인딩 vs 렉시컬 스코프

**this 바인딩**은 함수 **호출** 시점에 결정되고, **렉시컬 스코프**는 함수 정의가 평가되어 **함수 객체가 생성되는 시점**에 상위 스코프를 결정합니다.

### 객체의 메서드

객체의 메서드는 객체에 포함된 것이 아니라 **독립적**으로 존재하는 별도의 객체입니다.

**메서드를 정의할 때는 ES6 메서드 축약 표현으로 정의한 ES6 메서드를 사용하는 것이 좋습니다.**

```javascript
const obj = {
  greet() {
    console.log(`Hello, ${this.name}!`);
  },
};

const hi = obj.greet;
hi(); // 호출문의 왼쪽이 비었다 = 일반 함수로 호출되었다 = this에 전역 객체 바인딩
```

:::danger
객체의 메서드를 **화살표 함수로 정의하는 것은 피해야 합니다**. 화살표 함수는 자신만의 `this`를 갖지 않기 때문입니다.
:::

## 생성자 함수

생성자 함수는 `new` 연산자와 함께 호출되어 객체(인스턴스)를 생성하는 함수입니다. 생성자 함수 내부의 `this`는 생성자 함수가 **생성할 인스턴스**에 바인딩됩니다.

```javascript
const func = function () {
  console.log(this); // 호출 방법에 따라 다름
  setTimeout(function () {
    // setTimeout 내부 동작을 모르므로 콜백의 this 바인딩을 예측하기 어려움
    // 실제로는 일반 함수로 호출되어 전역 객체가 바인딩됨
    // 화살표 함수라면 정의된 위치에서의 this와 일치
    console.log('callback this : ', this);
  }, 100);
};

func(); // 일반함수로 호출 -> 전역객체(window) 바인딩

const obj = { func };
obj.func(); // 객체 메서드 -> 객체 바인딩 {func: ƒ}

new func(); // 생성자 함수 -> 생성될 인스턴스 가리킴 func {}
```

### 화살표 함수

화살표 함수는 자신만의 `this`를 갖지 않으며, 함수가 정의된 위치에서의 `this`를 그대로 상속받습니다. 이를 **lexical this**라고 합니다.

:::tip
클래스 필드에 할당한 화살표 함수는 **프로토타입 메서드가 아니라 인스턴스 메서드**가 됩니다. 따라서 ES6 메서드를 사용하는 것이 좋습니다.
:::

## bind, call, apply를 사용한 this 바인딩

JavaScript에서는 `bind`, `call`, `apply` 메서드를 사용하여 함수 호출 시 `this`를 명시적으로 바인딩할 수 있습니다.

### 문제 상황

콜백 함수에서 `this`가 의도한 객체를 가리키지 않는 경우가 있습니다.

```javascript
const person = {
  name: 'Lee',
  foo(callback) {
    setTimeout(callback, 100);
  },
};

person.foo(function () {
  console.log(`Hi! my name is ${this.name}`); // undefined (this가 전역 객체)
});
```

### 해결 방법들

**1. bind 메서드 사용**

```javascript
const person = {
  name: 'Lee',
  foo(callback) {
    setTimeout(callback.bind(this), 100);
  },
};

person.foo(function () {
  console.log(`Hi! my name is ${this.name}`); // "Hi! my name is Lee"
});
```

**2. 화살표 함수 + call 메서드 사용**

```javascript
const person = {
  name: 'Lee',
  foo(callback) {
    setTimeout(() => callback.call(this), 100);
  },
};

person.foo(function () {
  console.log(`Hi! my name is ${this.name}`); // "Hi! my name is Lee"
});
```

### 주의사항: 화살표 함수의 잘못된 사용

```javascript
const person = {
  name: 'Lee',
  foo(callback) {
    setTimeout(callback, 100);
  },
};

person.foo(() => {
  console.log(`Hi! my name is ${this.name}`); // undefined
  // 화살표 함수는 정의된 위치(전역)의 this(전역 객체)를 참조하므로 person 객체에 접근 불가
});
```

:::danger
위 예시는 **올바른 해결 방법이 아닙니다**. 화살표 함수는 정의된 위치(전역 스코프)의 `this`를 참조하기 때문에 `person` 객체의 `name` 프로퍼티에 접근할 수 없습니다.
:::
