### Feito apenas para centralizar os exercícios do livro **You Dont Know JS**
- O enunciado de cada exercício deve estar na mesma pasta do respectivo

Notas:
### COERÇÃO:
- é a forma que o JS utiliza para transformar o tipo do valor contido em uma variável, eles podem se apresentar em dois tipos, coerção implícita e coerção explícita
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
### Hoisting
- Onde quer que var apareça dentro de um escopo, sua declaração é tomada como parte de todo o escopo e acessada em qualquer área dentro dele.
- Quando uma declaração var é conceitualmente "movida" para o topo do **escopo**

### Polyfilling
- A palavras "polyfill" é um termo inventado (por Remy Sharp) usado para referenciar a definição de uma nova funcionalidade e reproduzir um pedaço de código que é equivalente ao comportamento, mas que pode rodar em ambientes com o JS antigo.

```
if (!Number.isNaN) {
    Number.isNaN = function isNaN(x) {
        return x !== x;
    };
}
```

### Transpiling

- Não existe nenhuma forma de polyfillar uma nova sintaxe, que ainda não foi incluída na linguagem. A nova sintaxe iria retornar um erro no mecanismo do JS como não reconhecida/inválida.

- Sendo assim a melhor opção é usar uma ferramenta que converte seu código novo em um código antigo equivalente. Esse processo é comumente chamado "transpiling".

- Essencialmente, seu código fonte é feito com o formato da nova sintaxe, mas quando você faz o deploy para o navegador ele aparece como um código transpilado com o formato da sintaxe velha. Tipicamente você insere o transpilador no seu processo de build, similar ao seu linter ou minifier.

