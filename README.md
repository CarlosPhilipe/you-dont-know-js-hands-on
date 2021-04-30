### Feito apenas para centralizar os exercícios do livro **You Dont Know JS**
- O enunciado de cada exercício deve estar na mesma pasta do respectivo

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

### Truthy & Falsy:
- "truthy" e "falsy" é quando um valor não-booleano é **coagido** para um valor boolean, ele se torna de fato true ou false?
- - A lista de valores "falsy" em JavaScript é a seguinte:
```
"" (string vazia)
0, -0, NaN (number inválido)
null, undefined
false

```
- - Qualquer valor que não esteja nessa lista de "falsy", é considerado "truthy". Aqui estão alguns exemplos deles:

```
"hello"
42
true
[ ], [ 1, "2", 3 ] (arrays)
{ }, { a: 42 } (objects)
function foo() { .. } (functions)
```
