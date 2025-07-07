/*
  4425 - Greater Than
  -------
  by ch3cknull (@ch3cknull) #medium #array

  ### Question

  In This Challenge, You should implement a type `GreaterThan<T, U>` like `T > U`

  Negative numbers do not need to be considered.

  For example

  ```ts
  GreaterThan<2, 1> //should be true
  GreaterThan<1, 1> //should be false
  GreaterThan<10, 100> //should be false
  GreaterThan<111, 11> //should be true
  ```

  Good Luck!

  > View on GitHub: https://tsch.js.org/4425
*/

/* _____________ Your Code Here _____________ */

// GreaterMap[a][b]=1 when a>b
type GreaterMap={
	'0':{'0':0,'1':-1,'2':-1,'3':-1,'4':-1,'5':-1,'6':-1,'7':-1,'8':-1,'9':-1},
	'1':{'0':1,'1':0,'2':-1,'3':-1,'4':-1,'5':-1,'6':-1,'7':-1,'8':-1,'9':-1},
	'2':{'0':1,'1':1,'2':0,'3':-1,'4':-1,'5':-1,'6':-1,'7':-1,'8':-1,'9':-1},
	'3':{'0':1,'1':1,'2':1,'3':0,'4':-1,'5':-1,'6':-1,'7':-1,'8':-1,'9':-1},
	'4':{'0':1,'1':1,'2':1,'3':1,'4':0,'5':-1,'6':-1,'7':-1,'8':-1,'9':-1},
	'5':{'0':1,'1':1,'2':1,'3':1,'4':1,'5':0,'6':-1,'7':-1,'8':-1,'9':-1},
	'6':{'0':1,'1':1,'2':1,'3':1,'4':1,'5':1,'6':0,'7':-1,'8':-1,'9':-1},
	'7':{'0':1,'1':1,'2':1,'3':1,'4':1,'5':1,'6':1,'7':0,'8':-1,'9':-1},
	'8':{'0':1,'1':1,'2':1,'3':1,'4':1,'5':1,'6':1,'7':1,'8':0,'9':-1},
	'9':{'0':1,'1':1,'2':1,'3':1,'4':1,'5':1,'6':1,'7':1,'8':1,'9':0}
}
// Extend the length of S to T and fill with 0, if S is shorter than T.
type Align<S extends string,T extends string,S0 extends string=S,T0 extends string=T>=T0 extends `${infer A}${infer Arest}`
	?S0 extends `${infer B}${infer Brest}`
		?Align<S,T,Brest,Arest>
		:Align<`0${S}`,T,S0,Arest>
	:S
// Directly compare two numbers as strings
type GreaterString<N extends string,M extends string>=N extends `${infer A}${infer Arest}`
	?M extends `${infer B}${infer Brest}`
		?A extends keyof GreaterMap
			?B extends keyof GreaterMap
				?GreaterMap[A][B] extends 0
					?GreaterString<Arest,Brest>
					:GreaterMap[A][B] extends 1
						?true
						:false
				:never
			:never
		:false
	:false
// Align N to M and M to N, then they have the same length.
type GreaterThan<N extends number, M extends number> = GreaterString<
	Align<`${N}`,`${M}`>,
	Align<`${M}`,`${N}`>
>

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<GreaterThan<1, 0>, true>>,
  Expect<Equal<GreaterThan<5, 4>, true>>,
  Expect<Equal<GreaterThan<4, 5>, false>>,
  Expect<Equal<GreaterThan<0, 0>, false>>,
  Expect<Equal<GreaterThan<10, 9>, true>>,
  Expect<Equal<GreaterThan<20, 20>, false>>,
  Expect<Equal<GreaterThan<10, 100>, false>>,
  Expect<Equal<GreaterThan<111, 11>, true>>,
  Expect<Equal<GreaterThan<1234567891011, 1234567891010>, true>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/4425/answer
  > View solutions: https://tsch.js.org/4425/solutions
  > More Challenges: https://tsch.js.org
*/
