// const a: string = `5`;
// const b: number = 4;
// const c: boolean = true;
// const d: undefined = undefined;
// const e: null = null;
// const f: any = '123';

//const는 값을 변경할수 없기에 타입추론을 적극적으로 사용해야한다.

// const a = `5`;
// const b = 4;
// const c = true;
// const d = undefined;
// const e = null;
// const f = '123';

// function add(x: number, y: number): number {
//   return x + y;
// }

// const add2 = (x: number, y: number) => x + y; // 타입추론 x + y = number

// const obj = { Lat: 37.5, Lon: 127.5 }; //타입추록 {Lat:number, Lon:number}
// const arr = ['123', '234']; // 타입추론 string[]
// const arr2: Array<number> = [213, 2412]; // string[]
// const arr3 = [1231, 124512, 'sdasd']; //Tuple 타입 선언해줘야함 (string | number)[]

// function add(x: number, y: number): number;
// function add(x: number, y: number) {
//   return x + y;
// }

// let aa = 123;
// aa = 'hello' as unknown as number;

// try {
//   const array: string[] = []; //빈 배열 타입설정 제대로 해주기
//   array.push('hello');
// } catch (err) {
//   err;
// }

// const head: Element | null = document.querySelector('#head');
// if (head) {
//   head.innerHTML = 'hello world';
//   console.log(head);
// }

// type World = 'world' | 'hell';
// type Greeting = `hello ${World}`; //템플릿 리터럴

// const y: Greeting = 'hello hell';

// function rest(a: number, ...args: string[]) {
//   console.log(a, args); //1, ['2','3']
// }
// rest(1, '2', '3');

// const tuple: [string, number] = ['1', 1]; //tuple

// const enum EDirection {
//   Up = 3,
//   Down,
//   Left,
//   Right,
// }

// const ODirection = {
//   Up: 0,
//   Down: 1,
//   Left: 2,
//   Right: 3,
// } as const;

// const up = ODirection.Up;
// const down = ODirection.Down;
// const letft = EDirection.Left;
// const Righr = EDirection.Right;
// // Enum type

// function walk(dir: EDirection) {}

// const obj2 = { a: '123', b: 'hello', c: 'world' } as const;

// type Key = (typeof obj2)[keyof typeof obj2];

// type Direction = (typeof ODirection)[keyof typeof ODirection];
// function run(dir: Direction) {}

// walk(EDirection.Down);
// run(ODirection.Left);

// type Animal = { breath: true };
// type Mammalia = Animal & { breed: true };
// type Human = Mammalia & { think: true };

// const me: Human = { breath: true, breed: true, think: true };

// interface A {
//   talk: () => void;
// }

// interface A {
//   eat: () => void;
// }

// interface A {
//   shit: () => void;
// }

// const a: A = { talk() {}, eat() {}, shit() {} };
