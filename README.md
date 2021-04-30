# you-dont-know-js-hands-on


Notas:
### COERÇÃO:
- é a forma que o JS utiliza para transformar o tipo do valor contido em uma variável, eles pordem se apresentar em dois tipos, coerção implícita e coerção explícita
- - **Coerção explícita**
```
var a = "42";

var b = Number( a );

a;              // "42"
b;              // 42 -- o número!
```
 - - **Coerção implícita**
 ```
var a = "42";

var b = a * 1;  // "42" implicitamente coagido para 42 aqui

a;              // "42"
b;              // 42 -- o número!
```
